"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5171],{887:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"developer-guide/tools/eslint","title":"ESLint Configuration and Usage","description":"ESLint is a static code analysis tool for identifying problematic patterns in JavaScript and TypeScript code. This document covers how ESLint is configured and used in this project.","source":"@site/docs/developer-guide/tools/eslint.md","sourceDirName":"developer-guide/tools","slug":"/developer-guide/tools/eslint","permalink":"/nextjs-ts-tailwind-supabase-starter/developer-guide/tools/eslint","draft":false,"unlisted":false,"editUrl":"https://github.com/matthannigan/nextjs-ts-tailwind-supabase-starter/tree/main/docs-website/docs/developer-guide/tools/eslint.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"ESLint"},"sidebar":"start","previous":{"title":"Deployment","permalink":"/nextjs-ts-tailwind-supabase-starter/developer-guide/deployment"},"next":{"title":"Development Tools","permalink":"/nextjs-ts-tailwind-supabase-starter/developer-guide/tools/"}}');var t=i(4848),r=i(8453);const l={sidebar_position:1,sidebar_label:"ESLint"},o="ESLint Configuration and Usage",c={},a=[{value:"Overview",id:"overview",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Default Commands",id:"default-commands",level:2},{value:"Integration with Git Hooks",id:"integration-with-git-hooks",level:2},{value:"Editor Integration",id:"editor-integration",level:2},{value:"VS Code",id:"vs-code",level:3},{value:"Ignoring Files",id:"ignoring-files",level:2},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"eslint-configuration-and-usage",children:"ESLint Configuration and Usage"})}),"\n",(0,t.jsx)(n.p,{children:"ESLint is a static code analysis tool for identifying problematic patterns in JavaScript and TypeScript code. This document covers how ESLint is configured and used in this project."}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Version"}),": 8.x"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Primary plugins"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@typescript-eslint/eslint-plugin"}),": TypeScript-specific linting rules"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eslint-plugin-react"}),": React-specific linting rules"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eslint-plugin-react-hooks"}),": Rules for React Hooks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eslint-plugin-jsx-a11y"}),": Accessibility rules for JSX"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eslint-config-prettier"}),": Turns off ESLint rules that might conflict with Prettier"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The project uses the standard Next.js ESLint configuration with additional custom rules. The configuration is managed through package.json and potential future ",(0,t.jsx)(n.code,{children:".eslintrc.js"})," or ",(0,t.jsx)(n.code,{children:".eslintrc.json"})," files."]}),"\n",(0,t.jsx)(n.p,{children:"To customize the ESLint configuration, you can create a new file at the project root:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// .eslintrc.js\nmodule.exports = {\n  extends: ['next/core-web-vitals', 'prettier'],\n  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],\n  rules: {\n    // Add custom rules here\n    'react/react-in-jsx-scope': 'off',\n    'react/prop-types': 'off',\n    '@typescript-eslint/explicit-module-boundary-types': 'off',\n    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],\n  },\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"default-commands",children:"Default Commands"}),"\n",(0,t.jsx)(n.p,{children:"The following npm scripts are available for linting:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Lint check"}),": Checks for linting errors without fixing them"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run lint\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Lint with auto-fix"}),": Automatically fixes linting errors where possible"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run lint -- --fix\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"integration-with-git-hooks",children:"Integration with Git Hooks"}),"\n",(0,t.jsx)(n.p,{children:"ESLint is integrated with Git hooks through Husky and lint-staged. When you commit changes, ESLint will automatically run on the staged files."}),"\n",(0,t.jsxs)(n.p,{children:["The configuration in ",(0,t.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"lint-staged": {\n  "*.{js,jsx,ts,tsx,mjs}": [\n    "eslint --fix",\n    "prettier --write"\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"editor-integration",children:"Editor Integration"}),"\n",(0,t.jsx)(n.p,{children:"For the best development experience, integrate ESLint with your code editor:"}),"\n",(0,t.jsx)(n.h3,{id:"vs-code",children:"VS Code"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install the ESLint extension"}),"\n",(0,t.jsx)(n.li,{children:"Add the following configuration to your VS Code settings:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "editor.codeActionsOnSave": {\n    "source.fixAll.eslint": true\n  },\n  "eslint.validate": [\n    "javascript",\n    "javascriptreact",\n    "typescript",\n    "typescriptreact"\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ignoring-files",children:"Ignoring Files"}),"\n",(0,t.jsxs)(n.p,{children:["To exclude files from linting, create a ",(0,t.jsx)(n.code,{children:".eslintignore"})," file in the project root. Example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"node_modules\n.next\nbuild\ndist\nout\ncoverage\n"})}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Run lint checks locally"}),": Always run ",(0,t.jsx)(n.code,{children:"npm run lint"})," before pushing changes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fix issues early"}),": Address linting issues as they arise rather than ignoring them"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Understand the rules"}),": Take time to understand why certain patterns are flagged as errors"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Create custom rules sparingly"}),": Only add custom rules when absolutely necessary"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);