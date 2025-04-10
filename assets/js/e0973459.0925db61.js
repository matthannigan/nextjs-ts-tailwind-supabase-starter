"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4851],{7843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"developer-guide/prompts/setup-prompts","title":"Setup Prompts","description":"Prompt 1: Project Initialization","source":"@site/docs/developer-guide/prompts/setup-prompts.md","sourceDirName":"developer-guide/prompts","slug":"/developer-guide/prompts/setup-prompts","permalink":"/nextjs-ts-tailwind-supabase-starter/developer-guide/prompts/setup-prompts","draft":false,"unlisted":false,"editUrl":"https://github.com/matthannigan/nextjs-ts-tailwind-supabase-starter/tree/main/docs-website/docs/developer-guide/prompts/setup-prompts.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Setup"},"sidebar":"start","previous":{"title":"To Do Checklist","permalink":"/nextjs-ts-tailwind-supabase-starter/developer-guide/to-do"},"next":{"title":"Documentation","permalink":"/nextjs-ts-tailwind-supabase-starter/developer-guide/prompts/documentation-prompts"}}');var a=n(4848),i=n(8453);const s={sidebar_position:1,sidebar_label:"Setup"},r="Setup Prompts",p={},u=[{value:"Prompt 1: Project Initialization",id:"prompt-1-project-initialization",level:2},{value:"Prompt 2: Set Up Testing Infrastructure",id:"prompt-2-set-up-testing-infrastructure",level:2},{value:"Prompt 3: Supabase Setup and Configuration",id:"prompt-3-supabase-setup-and-configuration",level:2},{value:"Prompt 4: Database Schema Implementation",id:"prompt-4-database-schema-implementation",level:2},{value:"Prompt 5: Authentication Context Implementation",id:"prompt-5-authentication-context-implementation",level:2},{value:"Prompt 6: Authentication Forms Implementation",id:"prompt-6-authentication-forms-implementation",level:2},{value:"Prompt 7: Protected Routes Implementation",id:"prompt-7-protected-routes-implementation",level:2},{value:"Prompt 8: Integration and Final Testing",id:"prompt-8-integration-and-final-testing",level:2},{value:"Prompt 9: Documentation and Developer Onboarding",id:"prompt-9-documentation-and-developer-onboarding",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"setup-prompts",children:"Setup Prompts"})}),"\n",(0,a.jsx)(t.h2,{id:"prompt-1-project-initialization",children:"Prompt 1: Project Initialization"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"You are an expert software developer tasked with building the foundation of a starter template for a contemporary web-based application. \n\nFor this first step, you need to initialize the project with Next.js 14, TypeScript 5.2+, and TailwindCSS 3.3+.\n\nRequirements:\n1. Create a Next.js 14 project with TypeScript 5.2+ using the App Router\n2. Configure TailwindCSS 3.3+ with a basic configuration\n3. Set up ESLint 8.x and Prettier 3.x with appropriate rules for a Next.js TypeScript project\n4. Create a basic folder structure following Next.js 14 App Router conventions\n5. Implement a simple Layout component with header and footer using React 18 components\n6. Add a basic page that uses the Layout component\n\nPlease provide:\n1. Commands to initialize the project\n2. Configuration files for Next.js 14, TypeScript 5.2+, TailwindCSS 3.3+, ESLint 8.x, and Prettier 3.x\n3. Folder structure description\n4. Implementation of the Layout component with basic Header and Footer\n5. A simple page using the Layout\n\nEnsure the implementation follows best practices for Next.js 14 applications and TypeScript 5.2+, taking advantage of React 18 features where appropriate.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"prompt-2-set-up-testing-infrastructure",children:"Prompt 2: Set Up Testing Infrastructure"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"You've successfully initialized the starter template with Next.js 14, TypeScript 5.2+, and TailwindCSS 3.3+. Now, you need to set up a robust testing infrastructure.\n\nYour task is to implement a testing setup using Jest 29.x and React Testing Library 14.x.\n\nRequirements:\n1. Install and configure Jest 29.x with TypeScript 5.2+ support\n2. Set up React Testing Library 14.x\n3. Configure test file patterns and test environment\n4. Create test utilities for common testing scenarios\n5. Write example tests for the existing Layout component\n6. Ensure tests can be run with npm commands\n\nPlease provide:\n1. Commands to install testing dependencies\n2. Configuration files for Jest 29.x\n3. Test utility files (if needed)\n4. Example test for the Layout component\n5. Updates to package.json for test scripts\n\nMake sure the testing setup follows best practices for Next.js 14 applications and enables effective testing of both UI components and utility functions.\n\nAlso refer to the tasks listed in 1.5 Configure Testing Infrastructure in ./to-do.md. As tasks are completed mark them with [x].\n"})}),"\n",(0,a.jsx)(t.h2,{id:"prompt-3-supabase-setup-and-configuration",children:"Prompt 3: Supabase Setup and Configuration"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Now that you have the starter template application set up with Next.js 14, TypeScript 5.2+, TailwindCSS 3.3+, and testing infrastructure, it's time to integrate Supabase 2.x for authentication and database functionality.\n\nYour task is to set up Supabase integration for the application.\n\nRequirements:\n1. Install Supabase client library (@supabase/supabase-js v2.x)\n2. Create a Supabase client utility\n3. Set up environment variables for Supabase connection\n4. Create a basic authentication provider using React 18's Context API\n5. Implement a useSupabase hook for easy access to Supabase client\n6. Ensure the configuration works in both development and production\n7. Add appropriate TypeScript 5.2+ types for Supabase\n\nPlease provide:\n1. Commands to install Supabase dependencies\n2. Supabase client utility implementation\n3. Environment variable setup (.env.example file)\n4. Basic authentication context implementation\n5. useSupabase hook implementation\n6. Any necessary types for Supabase integration\n\nMake sure to follow best practices for managing environment variables in Next.js 14 and creating reusable React 18 contexts.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"prompt-4-database-schema-implementation",children:"Prompt 4: Database Schema Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Now that you have set up Supabase 2.x integration for the starter template application, you need to implement the database schema for the core entities.\n\nYour task is to create the SQL scripts and TypeScript 5.2+ interfaces for the database schema.\n\nRequirements:\n1. Create SQL scripts for the following tables:\n   - users\n2. Implement Row Level Security (RLS) policies for these tables in Supabase\n3. Define TypeScript 5.2+ interfaces that match the database schema\n4. Create a database types file for use throughout the application\n5. Implement basic database helper functions for common operations with Supabase 2.x\n\nPlease provide:\n1. SQL scripts for creating tables in Supabase\n2. SQL scripts for setting up RLS policies\n3. TypeScript 5.2+ interfaces for database entities\n4. Database helper functions for common operations\n5. Any necessary type guards or utility types\n\nEnsure the schema follows the specifications from the project requirements and implements proper security practices with RLS in Supabase.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"prompt-5-authentication-context-implementation",children:"Prompt 5: Authentication Context Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"With the Supabase 2.x integration and database schema in place for the starter template application, you now need to implement a comprehensive authentication context to manage user sessions.\n\nYour task is to create a full-featured authentication context that handles login, registration, and anonymous sessions using Supabase Auth.\n\nRequirements:\n1. Create a comprehensive AuthContext with React 18's Context API\n2. Implement a useAuth hook for components to access authentication state\n3. Add functions for login, registration, logout, and anonymous sessions using Supabase Auth\n4. Implement session persistence with Supabase's session management\n5. Add loading and error states for authentication operations\n6. Create TypeScript 5.2+ types for authentication state and functions\n7. Write tests for the authentication context using Jest 29.x\n\nPlease provide:\n1. Complete AuthContext implementation\n2. useAuth hook implementation\n3. Authentication utility functions\n4. Session persistence implementation\n5. TypeScript 5.2+ types for authentication\n6. Tests for the authentication context\n\nEnsure the implementation handles both registered users and anonymous sessions, with appropriate error handling and loading states using Supabase Auth 2.x features.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"prompt-6-authentication-forms-implementation",children:"Prompt 6: Authentication Forms Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Now that you have the authentication context set up with Supabase Auth for the starter template application, you need to create the user-facing authentication forms.\n\nYour task is to implement registration, login, and anonymous login forms using the authentication context you've created.\n\nRequirements:\n1. Create a Registration form component\n2. Implement a Login form component\n3. Create an Anonymous Login form component\n4. Add form validation for all forms using Zod 3.x\n5. Implement error handling and display\n6. Create loading states for form submission\n7. Make forms fully responsive with TailwindCSS 3.3+\n8. Write tests for all form components with React Testing Library 14.x\n\nPlease provide:\n1. Registration form component implementation\n2. Login form component implementation\n3. Anonymous Login form component implementation\n4. Form validation logic with Zod 3.x\n5. Error handling implementation\n6. CSS for responsive design using TailwindCSS 3.3+\n7. Tests for all form components\n\nEnsure the forms provide a good user experience with appropriate validation, error messages, and loading indicators. Make sure they integrate with the Supabase Auth context you've already built.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"prompt-7-protected-routes-implementation",children:"Prompt 7: Protected Routes Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"With authentication forms and context in place for the starter template application, you now need to implement protected routes to ensure that certain pages are only accessible to authenticated users.\n\nYour task is to create a protected route system using Next.js 14 and the Supabase Auth context.\n\nRequirements:\n1. Create middleware or route protection for Next.js 14 App Router\n2. Implement redirect logic for unauthenticated users\n3. Add loading state handling during authentication check\n4. Create different levels of protection (any user, registered user only)\n5. Implement custom error and unauthorized pages\n6. Write tests for the protected route system with Jest 29.x\n\nPlease provide:\n1. Route protection implementation for Next.js 14 App Router\n2. Redirect logic implementation\n3. Loading state component\n4. Example of using the protection with a protected page\n5. Custom error and unauthorized pages\n6. Tests for the protected route system\n\nEnsure the implementation correctly integrates with the Next.js 14 App Router and your Supabase Auth context, providing a seamless experience for users.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"prompt-8-integration-and-final-testing",children:"Prompt 8: Integration and Final Testing"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"You've successfully implemented all the components and functionality for Phase 1 of the starter template application. Now it's time to integrate everything and perform final testing.\n\nYour task is to ensure all parts of the application work together seamlessly and fix any integration issues.\n\nRequirements:\n1. Create a comprehensive test plan for Phase 1 functionality\n2. Implement end-to-end tests for the complete user flows using Playwright 1.40+\n3. Check for any integration issues between components\n4. Ensure mobile responsiveness for all screens with TailwindCSS 3.3+\n5. Fix any bugs or issues found during testing\n6. Create a summary of Phase 1 completion\n\nPlease provide:\n1. Test plan for Phase 1\n2. End-to-end test implementation with Playwright 1.40+\n3. Integration check results\n4. Mobile responsiveness report\n5. Bug fixes (if any)\n6. Phase 1 completion summary\n\nEnsure all parts of the application work together correctly and provide a seamless experience for users. Document any issues found and their resolutions.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"prompt-9-documentation-and-developer-onboarding",children:"Prompt 9: Documentation and Developer Onboarding"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Now that Phase 1 of the starter template application is complete and tested, you need to create documentation for the project and prepare for developer onboarding.\n\nYour task is to create comprehensive documentation for the codebase and set up developer onboarding materials.\n\nRequirements:\n1. Update the README with project overview, setup instructions, and usage\n2. Create API documentation for all endpoints\n3. Document the database schema and relationships in Supabase\n4. Write component documentation with usage examples\n5. Create developer onboarding guide\n6. Prepare a local development environment setup guide\n7. Document testing procedures and best practices\n\nPlease provide:\n1. Updated README.md\n2. API documentation\n3. Database schema documentation for Supabase\n4. Component documentation\n5. Developer onboarding guide\n6. Local development setup guide\n7. Testing documentation\n\nEnsure the documentation is clear, comprehensive, and follows best practices for technical documentation. Make it easy for new developers to understand the codebase and start contributing.\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);