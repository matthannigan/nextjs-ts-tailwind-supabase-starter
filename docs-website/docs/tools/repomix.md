---
sidebar_position: 6
---

# Repomix Configuration and Usage

Repomix is a powerful tool that packs your entire codebase into a single, AI-friendly file. This document covers how Repomix is configured and used in this project.

## Overview

- **Version**: Latest (typically used via `npx repomix`)
- **Purpose**: Package the entire repository into an AI-friendly format for use with LLMs like Claude, ChatGPT, and others
- **Key Features**: 
  - Converts entire codebase into a single structured document
  - Preserves directory structure
  - Provides token counting for LLM context limits
  - Supports multiple output formats
  - Security check to prevent sharing sensitive information
- **Dependencies/Extensions**: None required (can be run via npx)

## Installation

Repomix is not directly installed in the project dependencies. Instead, it's typically run using npx:

```bash
# Run Repomix with default settings
npx repomix

# Run with specific options
npx repomix --style markdown
```

If you want to install it globally for repeated use:

```bash
# Install globally
npm install -g repomix

# Then run from anywhere
repomix
```

## Configuration

The tool is configured using a `repomix.config.json` file at the project root. 

Here's our project's configuration:

```json
{
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "copyToClipboard": false,
    "git": {
      "sortByChanges": true,
      "sortByChangesMaxCommits": 100
    }
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
```

Key configuration options:
- **output.filePath**: Sets the output file name to `repomix-output.md`
- **output.style**: Configures output in Markdown format (alternatives are XML and plain text)
- **output.fileSummary**: Includes a summary section with metadata and token counts
- **output.directoryStructure**: Includes a section showing folder structure
- **output.compress**: When set to true, performs code compression to reduce tokens (disabled in our config)
- **tokenCount.encoding**: Uses `o200k_base` encoding for token counting (optimized for Claude models)

Additionally, we have a `.repomixignore` file that excludes the `docs/` directory from the generated output.

## Default Commands

No custom npm scripts are defined for Repomix in the package.json. Use the following commands directly:

- **Generate output file**:
  ```bash
  npx repomix
  ```

- **Generate with specific options**:
  ```bash
  npx repomix --style markdown --output custom-output.md
  ```

## Directory Structure

After running Repomix, you'll have one or more output files in your project root:

```
project/
├── repomix-output.md       # Main output file (defined in config)
├── repomix.config.json     # Configuration file
└── .repomixignore          # Custom ignore patterns
```

## Usage Examples

### Example 1: Basic Usage

Run Repomix to generate a Markdown file containing the entire codebase:

```bash
npx repomix
```

This will create a `repomix-output.md` file in the project root, formatted according to our configuration.

### Example 2: Generating for AI Analysis

When you need to analyze your code with an AI assistant:

```bash
# Generate the output file
npx repomix

# You can then upload the file to Claude, ChatGPT, etc., with a prompt like:
# "This file contains my entire codebase. Please review the code and suggest improvements."
```

### Example 3: Custom Output Format

If you need a different output format temporarily:

```bash
# Generate XML output instead of Markdown
npx repomix --style xml --output repomix-output.xml
```

## Integration with Other Tools

### Integration with AI Tools

The main purpose of Repomix is to prepare your codebase for AI analysis. Upload the generated file to AI tools like:

- **Claude**: Works well with XML format for structured analysis
- **ChatGPT**: Works with any format, but plain text or Markdown may be preferable
- **GitHub Copilot**: Use the file content as context for generating code

Example prompt to use with the generated file:

```
This file contains my entire codebase in an organized format. 
I'd like you to [describe specific task, such as]:
1. Review the code structure and suggest improvements
2. Identify potential security issues
3. Suggest performance optimizations
4. Help implement a new feature
```

## Editor Integration

### VS Code

The Repomix VSCode extension (community-maintained) provides a convenient way to run Repomix:

1. Install the "Repomix Runner" extension from the marketplace
2. Right-click on a folder in the explorer and select "Run Repomix"
3. The extension will use your project's repomix.config.json

```
Extension Name: Repomix Runner
Author: Dorian Massoulier
Marketplace: https://marketplace.visualstudio.com/items?itemName=DorianMassoulier.repomix-runner
```

## Troubleshooting

### Common Issue 1: Large Repositories Exceed Token Limits

If your repository is large, the generated file might exceed AI model token limits.

Solution:
- Add more patterns to `.repomixignore` to exclude non-essential code
- Use the `--compress` option to reduce token count
- Target specific subdirectories with `npx repomix path/to/directory`

### Common Issue 2: Security Warnings

Repomix may warn about potentially sensitive files.

Solution:
- Review the files listed in the warning
- Add them to `.repomixignore` if they contain sensitive information
- Never share output files containing credentials or secrets

## Best Practices

1. **Be Selective**: When working with large codebases, focus on relevant directories rather than the entire repository
2. **Use the Security Check**: Always keep `security.enableSecurityCheck` enabled to prevent leaking sensitive information
3. **Version Control Exclusion**: Add Repomix output files to `.gitignore` to avoid committing large generated files
4. **Customize Ignore Patterns**: Maintain a thorough `.repomixignore` file to exclude non-essential files like logs, temp files, and build artifacts
5. **Choose the Right Format**: Use XML format for Claude (leverages its ability to parse structured data), Markdown for readability, or plain text for simplicity

## Additional Resources

- [Official Documentation](https://github.com/yamadashy/repomix#readme)
- [Repomix Website](https://repomix.com/)
- [GitHub Repository](https://github.com/yamadashy/repomix)
- [Discord Community](https://discord.gg/wNYzTwZFku)
