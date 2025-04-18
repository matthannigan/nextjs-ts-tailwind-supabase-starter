import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Next.js TS Tailwind Supabase Starter',
  tagline: 'Modern web application starter template with authentication and database integration',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://matthannigan.github.io', // Replace with your GitHub username
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/nextjs-ts-tailwind-supabase-starter/', // Replace with your repo name

  // GitHub pages deployment config.
  organizationName: 'matthannigan', // Replace with your GitHub org/user name
  projectName: 'nextjs-ts-tailwind-supabase-starter', // Replace with your repo name
  trailingSlash: undefined,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // This sets the /docs path as the default route
          routeBasePath: '/',
          // Update this to your repo
          editUrl:
            'https://github.com/matthannigan/nextjs-ts-tailwind-supabase-starter/tree/main/docs-website/',
          // --- ADDED: Exclude patterns ---
          exclude: [
            // Exclude files/directories starting with an underscore (common for drafts/partials)
            '**/_*.*',
            '**/_*/**',
            // Exclude any directory named 'templates' and its contents
            '**/templates/**/*',
            // Exclude files ending with .template.md or .template.mdx
            '**/*-template.{md,mdx}',
            // Add any other specific files or patterns needed
            // '**/my-specific-template.md',
          ],
          // --- End of Added Section ---
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/matthannigan/nextjs-ts-tailwind-supabase-starter/tree/main/docs-website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
          // You could add an 'exclude' array here too if you have blog templates
          // exclude: ['**/blog-templates/**'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
        indexBaseUrl: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Next.js TS Tailwind Supabase Starter',
      logo: {
        alt: 'Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'start',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'components',
          position: 'left',
          label: 'React Components',
        },
        {
          to: 'blog',
          label: 'Development Journey',
          position: 'left',
        },
        {
          href: 'https://github.com/matthannigan/nextjs-ts-tailwind-supabase-starter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      /*links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'README',
            },
            {
              label: 'Project Structure',
              to: 'structure',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/matthannigan/nextjs-ts-tailwind-supabase-starter',
            },
          ],
        },
      ],*/
      //copyright: `Copyright © ${new Date().getFullYear()} Next.js TS Tailwind Supabase Starter. Built with Docusaurus.`,
      copyright: `Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
