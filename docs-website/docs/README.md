# Documentation Index

This document provides an overview of the available documentation for the Next.js TypeScript Tailwind Supabase Starter project.

## Developer Guide

This section contains documentation about the overall architecture, version requirements, and implementation plans.

### [Project Structure](./developer-guide/structure.md)

asdf

### Database Features

#### [Integration](./developer-guide/database-features/integration.md)

asdf

#### [Authentication](./developer-guide/database-features/authentication.md)

asdf

### Development

#### [Blueprint](./developer-guide/blueprint.md)

Describes the overall plan for the project, including the high-level goals, decomposition into manageable chunks, and detailed implementation steps for each chunk.

#### [To Do](./developer-guide/to-do.md)

A detailed checklist tracking the status of all tasks needed for implementation, organized by chunks and sub-tasks with checkbox indicators for completion status.

#### LLM Prompts

##### [Setup Prompts](./developer-guide/prompts/setup.md)

A collection of prompts designed for building the project step-by-step, covering project initialization, testing infrastructure, Supabase integration, database schema implementation, authentication, and more.

##### [Documentation Prompts](./developer-guide/prompts/documentation.md)

asdf

#### Templates

##### [Component Documentation](./developer-guide/templates/component-template.md)

asdf

##### [Tool Documentation](./developer-guide/templates/tool-template.md)

asdf

### [Testing](./developer-guide/testing.md)

asdf

### [Deployment](./developer-guide/deployment.md)

asdf

### Tools

Documentation for the testing and linting tools used in the project.

#### [ESLint](./developer-guide/tools/eslint.md)

A guide to the ESLint configuration and usage in the project, including an overview of plugins, configuration options, default commands, Git hooks integration, and best practices.

#### [Prettier](./developer-guide/tools/prettier.md)

Documentation on Prettier formatting configuration and usage, including available commands, editor integration, and customization options to maintain consistent code style.

#### [Jest](./developer-guide/tools/jest.md)

Comprehensive guide to Jest testing configuration, including setup instructions, writing tests for components and utilities, mocking, testing asynchronous code, and best practices.

#### [Husky & lint-staged](./developer-guide/tools/husky-lint-staged.md)

Guide to the Husky and lint-staged setup for Git hooks, including configuration, workflow, custom hooks, troubleshooting, and best practices to enforce code quality.

#### [Playwright](./developer-guide/tools/playwright.md)

Detailed documentation on Playwright end-to-end testing, including configuration, test writing with page object models, running tests, visual testing, and authentication helpers.

#### [Repomix](./developer-guide/tools/repomix.md)

Documentation for the Repomix tool, which helps with code analysis and metrics gathering for the project repository.

### [Contributing](./developer-guide/contributing.md)

A comprehensive list of recommended versions for all tools and libraries used in the starter template, including Next.js, React, TypeScript, TailwindCSS, and various development tools and utilities.

### [Version Reference](./developer-guide/version-reference.md)

A comprehensive list of recommended versions for all tools and libraries used in the starter template, including Next.js, React, TypeScript, TailwindCSS, and various development tools and utilities.

## Components

Documentation for the reusable UI components included in the project.

### Layout Components

These components provide the foundation for page layouts:

#### [Layout System](./components/layout/layout.md)

A component for structuring page content with consistent spacing and alignment.

#### [Header](./components/layout/header.md)

The application header component that provides a consistent navigation bar at the top of your application with links to key pages.

#### [Footer](./components/layout/footer.md)

The application footer component that provides a consistent footer section at the bottom of your application with copyright information.

### Navigation Components

Components that facilitate user navigation through the application:

#### [Navbar Mobile](./components/navigation/navbar-mobile.md)

A responsive navigation bar optimized for mobile devices that collapses into a hamburger menu on smaller screens.

#### [Navigation Menu](./components/navigation/navigation-menu.md)

A component for creating accessible navigation menus with dropdown capabilities.

### Basic UI Components

These are the core UI components for building interfaces:

#### [Alert](./components/ui/alert.md)

A component for displaying important messages, notifications, or feedback to users with various severity levels.

#### [Avatar](./components/ui/avatar.md)

A component for displaying user profile images with fallback options and various sizing options.

#### [Button](./components/ui/button.md)

A versatile button component with support for different variants, sizes, and states.

#### [Calendar](./components/ui/calendar.md)

A date picker component for selecting dates with various display options and configurations.

#### [Card](./components/ui/card.md)

A versatile container component for displaying content in a contained, styled box with various appearance options including different variants, padding, and rounded corner options.

#### [Container](./components/ui/container.md)

A responsive wrapper component with consistent padding and width constraints for content, supporting different size and padding options.

#### [Content Card](./components/ui/content-card.md)

An extended card component specifically designed for displaying content with title, description, and actions.

#### [Dialog](./components/ui/dialog.md)

A modal dialog component for displaying content that requires user attention or interaction.

#### [Dropdown Menu](./components/ui/dropdown-menu.md)

A component for displaying a list of actions or options that appear when triggered by a button.

#### [Popover](./components/ui/popover.md)

A floating component that displays additional content when triggered.

#### [Search Input](./components/ui/search-input.md)

A specialized input component designed for search functionality with integrated icons and clear button.

#### [Table](./components/ui/table.md)

A component for displaying tabular data with sorting, pagination, and filtering capabilities.

#### [Tabs](./components/ui/tabs.md)

A component for organizing content into selectable tabs.

#### [Theme Switch](./components/ui/theme-switch.md)

A component for toggling between light and dark theme modes.

#### [Toast](./components/ui/toast.md)

A component for displaying brief, non-disruptive notifications.

#### [Toaster](./components/ui/toaster.md)

A manager component for displaying multiple toast notifications.

### Forms Components

These are the UI components for building forms:

#### [Form](./components/forms/form.md)

A comprehensive form component with validation, error handling, and various input types.

#### [Checkbox](./components/forms/checkbox.md)

An interactive checkbox component for boolean input with customizable styles and states.

#### [Input](./components/forms/input.md)

A flexible and customizable form control component for capturing user input with various states and styles, including label support, error states, and different size options.

#### [Label](./components/forms/label.md)

A component for labeling form elements with proper accessibility attributes.

#### [Radio Group](./components/forms/radio-group.md)

A component for selecting a single option from a group of choices.

#### [Select](./components/forms/select.md)

A dropdown selection component for choosing from a list of options.

#### [Switch](./components/forms/switch.md)

A toggle switch component for boolean input with customizable styles.

#### [Textarea](./components/forms/textarea.md)

A multi-line text input component for larger text content.

### [Typography](./components/ui/typography.md)

Components for consistent text styling across the application.

