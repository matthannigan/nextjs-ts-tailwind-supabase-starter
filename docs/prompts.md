# Prompts for AI Documentation Assistance

## Testing

```
# Documentation Creation Task for [Tool Name]

## Background
I need to create comprehensive documentation for [Tool Name] that follows our project's standardized format.

## Steps
1. First, review the official documentation at [URL to README.md or official docs] to understand the tool's purpose, features, configuration options, and best practices.

2. Examine our existing template at `tool-documentation-template.md` to understand the required structure.

3. Create a new markdown file called `[tool-name].md` in the /docs/testing/ directory that follows our template format.

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