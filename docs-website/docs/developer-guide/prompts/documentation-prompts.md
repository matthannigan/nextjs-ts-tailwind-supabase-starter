---
sidebar_position: 2
sidebar_label: Documentation
---

# Documentation Prompts

## Components

```
# Documentation Creation Task for `[Component Name]`

## Background
I need to create comprehensive documentation for the `[ComponentName]` component that follows our project's standardized format. This component was integrated from shadcn/ui into our Next.js TypeScript TailwindCSS Supabase starter project.

## Component Research
1. First, use the fetch MCP server to the fetch the official Shadcn UI [Component Name] documentation from `https://ui.shadcn.com/docs/components/[component-name]` and then conduct a targeted web search to understand:
   - The component's purpose and core functionality
   - Available props and their default values
   - Variants and styling options
   - Accessibility considerations
   - Known limitations

2. Then, examine our project's implementation:
   - Use the filesystem MCP server to look at our source code at `/Users/matth/Github/MGH/nextjs-ts-tailwind-supabase-starter/src/components/[path]/[component-name].tsx`
   - Note any customizations we've made to the original shadcn component
   - Identify any project-specific usage patterns
   - Check existing imports in other components to see real usage examples

## Documentation Creation
1. Use the filesystem MCP server to copy our template at `/Users/matth/Github/MGH/nextjs-ts-tailwind-supabase-starter/docs-website/docs/developer-guide/templates/component-template.md` as your base structure.

2. Complete each section of the template with specific information:
   - Write a clear, concise component description (1-2 sentences)
   - Include correct import statements using our project's path conventions
   - Show basic usage examples with minimal props
   - Demonstrate all major variants and prop combinations
   - Create a complete props table with accurate types, defaults, and descriptions
   - Include TypeScript type definitions that match our implementation
   - Show realistic customization examples using TailwindCSS classes
   - Provide integration examples with other components in our library
   - Document responsive behavior across device sizes
   - Detail any accessibility features or considerations

3. Add react-hook-form integration examples where applicable, as our project uses this library.

4. Include any shadcn/ui installation commands if the component requires additional dependencies.

## Special Considerations
- Focus on our project's specific implementation, not just generic shadcn/ui usage
- Include common pitfalls specific to our tech stack (Next.js + TypeScript + TailwindCSS)
- Reference related components from our library when appropriate
- Add testing examples using our project's testing setup (React Testing Library)
- Use consistent code formatting matching our project style

## Deliverable
A comprehensive markdown document that follows our template structure and provides detailed, accurate guidance for developers in our specific project context.
```

## Compound Components

```
# Documentation Creation Task for `Search Input`

## Background
I need to create comprehensive documentation for the `SearchInput` component that follows our project's standardized format. This compound component was created from the shadcn/ui `Input` and `Button` components for our Next.js TypeScript TailwindCSS Supabase starter project.

## Component Research
1. First, examine our project's implementation:
   - Use the filesystem MCP server to look at our source code at `/Users/matth/Github/MGH/nextjs-ts-tailwind-supabase-starter/src/components/[path]/search-input.tsx`
   - Note any customizations we've made to the original shadcn component
   - Identify any project-specific usage patterns
   - Check existing imports in other components to see real usage examples

2. Then, then conduct a targeted web search to understand:
   - The component's purpose and core functionality
   - Available props and their default values
   - Variants and styling options
   - Accessibility considerations
   - Known limitations

## Documentation Creation
1. Use the filesystem MCP server to copy our template at `/Users/matth/Github/MGH/nextjs-ts-tailwind-supabase-starter/docs-website/docs/developer-guide/templates/component-template.md` as your base structure.

2. Complete each section of the template with specific information:
   - Write a clear, concise component description (1-2 sentences)
   - Include correct import statements using our project's path conventions
   - Show basic usage examples with minimal props
   - Demonstrate all major variants and prop combinations
   - Create a complete props table with accurate types, defaults, and descriptions
   - Include TypeScript type definitions that match our implementation
   - Show realistic customization examples using TailwindCSS classes
   - Provide integration examples with other components in our library
   - Document responsive behavior across device sizes
   - Detail any accessibility features or considerations

3. Add react-hook-form integration examples where applicable, as our project uses this library.

4. Include any shadcn/ui installation commands if the component requires additional dependencies.

## Special Considerations
- Focus on our project's specific implementation, not just generic shadcn/ui usage
- Include common pitfalls specific to our tech stack (Next.js + TypeScript + TailwindCSS)
- Reference related components from our library when appropriate
- Add testing examples using our project's testing setup (React Testing Library)
- Use consistent code formatting matching our project style

## Deliverable
A comprehensive markdown document that follows our template structure and provides detailed, accurate guidance for developers in our specific project context.
```

## Tools

```
# Documentation Creation Task for [Tool Name]

## Background
I need to create comprehensive documentation for [Tool Name] that follows our project's standardized format.

## Steps
1. First, review the official documentation at [URL to README.md or official docs] to understand the tool's purpose, features, configuration options, and best practices.

2. Examine our existing template at `/Users/matth/Github/MGH/nextjs-ts-tailwind-supabase-starter/docs-website/docs/developer-guide/templates/tool-template.md` to understand the required structure.

3. Create a new markdown file called `[tool-name].md` in the `/Users/matth/Github/MGH/nextjs-ts-tailwind-supabase-starter/docs-website/docs/developer-guide/tools` directory that follows our template format.

4. When filling in the template:
   - Replace all placeholders in [brackets] with accurate, tool-specific information
   - Include the current version we're using in our project (check package.json)
   - Document all npm scripts related to this tool that exist in our package.json
   - Provide clear, working code examples specifically tailored to our project structure
   - Remove any sections that aren't relevant to this particular tool
   - Add any tool-specific sections that aren't covered by the template but are important

5. Pay special attention to:
   - Integration with our existing tools and workflow
   - Common issues our team might encounter and their solutions
   - Best practices specific to our project's use of the tool

## Deliverable
A clear, comprehensive markdown file that would help a new developer understand how to use [Tool Name] effectively within our project.
```