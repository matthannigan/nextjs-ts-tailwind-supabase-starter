#!/usr/bin/env python3
import os
import re
import sys
from pathlib import Path

def kebab_to_title_case(text):
    # Split by dash, capitalize each part, then join with spaces
    return ' '.join(word.capitalize() for word in text.split('-'))

def kebab_to_pascal_case(text):
    # Split by dash, capitalize each part, then join without spaces
    return ''.join(word.capitalize() for word in text.split('-'))

def extract_prompt_template(prompts_file_path):
    """Extract the Components prompt template from the prompts.md file."""
    with open(prompts_file_path, 'r') as file:
        content = file.read()
    
    # Extract the template between the Components section and the next section
    ui_section_match = re.search(r'## Components\s+```\s+(.*?)```', content, re.DOTALL)
    if ui_section_match:
        return ui_section_match.group(1)
    else:
        print("Error: Could not find Components template in prompts.md")
        sys.exit(1)

def find_react_components(components_dir):
    """Find all .tsx files that are likely React components."""
    components = []
    for root, dirs, files in os.walk(components_dir):
        for file in files:
            if file.endswith('.tsx') and not file.startswith('index.'):
                component_path = os.path.join(root, file)
                component_name = os.path.splitext(file)[0]
                # Get the relative path from components_dir
                rel_path = os.path.relpath(root, components_dir)
                if rel_path == '.':
                    rel_path = ''
                components.append({
                    'name': component_name,
                    'path': component_path,
                    'dir': rel_path
                })
    return components

def create_documentation(component, template, docs_dir):
    """Create documentation file for a component if it doesn't exist."""
    # Determine the documentation file path
    rel_dir = component['dir']
    doc_dir = os.path.join(docs_dir, rel_dir)
    doc_file = os.path.join(doc_dir, f"{component['name']}.md")
    
    # Check if documentation already exists
    if os.path.exists(doc_file):
        print(f"Documentation already exists for {component['name']}")
        return False
    
    # Create directory if it doesn't exist
    os.makedirs(doc_dir, exist_ok=True)
    
    # Replace [component-name], [Component Name], [ComponentName] in template with actual component names
    doc_content = template.replace('[component-name]', component['name'])
    doc_content = doc_content.replace('[Component Name]', kebab_to_title_case(component['name']))
    doc_content = doc_content.replace('[ComponentName]',  kebab_to_pascal_case(component['name']))
    
    # Update file paths to use correct relative paths
    component_path = os.path.join('/src/components', rel_dir, f"{component['name']}.tsx")
    doc_content = doc_content.replace('/src/components/[path]/[component-name].tsx', component_path)
    
    doc_path = os.path.join('/docs/components', rel_dir, f"{component['name']}.md")
    doc_content = doc_content.replace('/src/components/[path]/[component-name].md', doc_path)
    
    # Write the documentation file
    with open(doc_file, 'w') as file:
        file.write(doc_content)
    
    print(f"Created documentation for {component['name']} at {doc_file}")
    return True

def main():
    # Define paths
    base_dir = Path("/Users/matth/Github/MGH/nextjs-ts-tailwind-supabase-starter")
    components_dir = base_dir / "src" / "components"
    docs_dir = base_dir / "docs" / "components"
    prompts_file = base_dir / "docs" / "prompts.md"
    
    # Extract template
    template = extract_prompt_template(prompts_file)
    
    # Find React components
    components = find_react_components(components_dir)
    
    # Create documentation for each component
    created_count = 0
    for component in components:
        if create_documentation(component, template, docs_dir):
            created_count += 1
    
    print(f"\nDocumentation generation complete.")
    print(f"Found {len(components)} components")
    print(f"Created {created_count} new documentation files")

if __name__ == "__main__":
    main()