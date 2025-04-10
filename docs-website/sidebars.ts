import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Organized sidebar for the Next.js TS Tailwind Supabase Starter documentation
 */
const sidebars: SidebarsConfig = {
  start: [
    'README',
    'developer-guide/structure',
    {
      type: 'category',
      label: 'Database Features',
      collapsed: false,
      items: [
        'developer-guide/database-features/integration',
        'developer-guide/database-features/authentication',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      collapsed: false,
      items: [
        'developer-guide/blueprint',
        'developer-guide/to-do',
        {
          type: 'category',
          label: 'LLM Prompts',
          items: [
            {
              type: 'autogenerated',
              dirName: 'developer-guide/prompts',
            },
          ],
        },
        {
          type: 'category',
          label: 'Templates',
          items: [
            {
              type: 'autogenerated',
              dirName: 'developer-guide/templates',
            },
          ],
        },
      ],
    },
    'developer-guide/testing',
    'developer-guide/deployment',
    {
      type: 'category',
      label: 'Tools',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'developer-guide/tools',
        },
      ],
    },
    'developer-guide/contributing',
    'developer-guide/version-reference',
  ],
  components: [
    {
      type: 'category',
      label: 'Layout',
      items: [
        {
          type: 'autogenerated',
          dirName: 'components/layout',
        },
      ],
    },
    {
      type: 'category',
      label: 'Navigation',
      items: [
        {
          type: 'autogenerated',
          dirName: 'components/navigation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Basic UI',
      items: [
        {
          type: 'autogenerated',
          dirName: 'components/ui',
        },
      ],
    },
    {
      type: 'category',
      label: 'Forms',
      items: [
        {
          type: 'autogenerated',
          dirName: 'components/forms',
        },
      ],
    },
    'components/style/typography',
    'components/style/theme-switch',
  ],
};

export default sidebars;
