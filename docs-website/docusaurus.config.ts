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
  trailingSlash: false,
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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
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
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/intro',
            },
            {
              label: 'Project Structure',
              to: '/structure',
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Next.js TS Tailwind Supabase Starter. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
