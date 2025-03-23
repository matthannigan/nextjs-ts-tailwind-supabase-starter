# Documentation Index

This document provides an overview of the available documentation for the Next.js TypeScript Tailwind Supabase Starter project.

## Architecture

This section contains documentation about the overall architecture, version requirements, and implementation plans.

### [Blueprint](architecture/blueprint.md)

Describes the overall plan for the project, including the high-level goals, decomposition into manageable chunks, and detailed implementation steps for each chunk.

### [Prompt Plan](architecture/prompt-plan.md)

A collection of prompts designed for building the project step-by-step, covering project initialization, testing infrastructure, Supabase integration, database schema implementation, authentication, and more.

### [To Do](architecture/to-do.md)

A detailed checklist tracking the status of all tasks needed for implementation, organized by chunks and sub-tasks with checkbox indicators for completion status.

## [Version Reference](architecture/version-reference.md)

A comprehensive list of recommended versions for all tools and libraries used in the starter template, including Next.js, React, TypeScript, TailwindCSS, and various development tools and utilities.

## Components

Documentation for the reusable UI components included in the project.

### Layout Components

These components provide the foundation for page layouts:

#### [Header](components/layout/header.md)

The application header component that provides a consistent navigation bar at the top of your application with links to key pages.

#### [Footer](components/layout/footer.md)

The application footer component that provides a consistent footer section at the bottom of your application with copyright information.

### UI Components

These are the core UI components for building interfaces:

#### [Card](components/ui/Card.md)

A versatile container component for displaying content in a contained, styled box with various appearance options including different variants, padding, and rounded corner options.

#### [Container](components/ui/Container.md)

A responsive wrapper component with consistent padding and width constraints for content, supporting different size and padding options.

#### [Input](components/ui/Input.md)

A flexible and customizable form control component for capturing user input with various states and styles, including label support, error states, and different size options.

## Testing

Documentation for the testing and linting tools used in the project.

#### [ESLint](testing/eslint.md)

A guide to the ESLint configuration and usage in the project, including an overview of plugins, configuration options, default commands, Git hooks integration, and best practices.

#### [Prettier](testing/prettier.md)

Documentation on Prettier formatting configuration and usage, including available commands, editor integration, and customization options to maintain consistent code style.

#### [Jest](testing/jest.md)

Comprehensive guide to Jest testing configuration, including setup instructions, writing tests for components and utilities, mocking, testing asynchronous code, and best practices.

#### [Playwright](testing/playwright.md)

Detailed documentation on Playwright end-to-end testing, including configuration, test writing with page object models, running tests, visual testing, and authentication helpers.

#### [Husky & lint-staged](testing/husky-lint-staged.md)

Guide to the Husky and lint-staged setup for Git hooks, including configuration, workflow, custom hooks, troubleshooting, and best practices to enforce code quality.
