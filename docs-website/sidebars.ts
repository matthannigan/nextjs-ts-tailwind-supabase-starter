import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Organized sidebar for the Next.js TS Tailwind Supabase Starter documentation
 */
const sidebars: SidebarsConfig = {
  start: [
    'intro',
    'structure',
    {
      type: 'category',
      label: 'Features',
      items: ['features/authentication', 'features/database'],
    },
    {
      type: 'category',
      label: 'Development Guide',
      items: [
        'version-reference',
        'testing',
        'deployment',
        {
          type: 'category',
          label: 'Tools',
          items: [
            'tools/eslint',
            'tools/prettier',
            'tools/jest',
            'tools/playwright',
            'tools/husky-lint-staged',
            'tools/repomix',
          ],
        },
        'contributing',
      ],
    },
  ],
  components: [
    {
      type: 'category',
      label: 'Layout',
      items: ['components/layout/layout', 'components/layout/header', 'components/layout/footer'],
    },
    {
      type: 'category',
      label: 'Navigation',
      items: ['components/navigation/navigation-menu', 'components/navigation/navbar-mobile'],
    },
    {
      type: 'category',
      label: 'Basic UI',
      items: [
        'components/ui/alert',
        'components/ui/avatar',
        'components/ui/button',
        'components/ui/calendar',
        'components/ui/card',
        'components/ui/container',
        'components/ui/content-card',
        'components/ui/dialog',
        'components/ui/dropdown-menu',
        'components/ui/popover',
        'components/ui/table',
        'components/ui/tabs',
        'components/ui/toast',
        'components/ui/toaster',
        // Add more UI components as needed
      ],
    },
    {
      type: 'category',
      label: 'Custom Composites',
      items: ['components/ui/search-input', 'components/ui/theme-switch'],
    },
    {
      type: 'category',
      label: 'Forms',
      items: [
        'components/ui/form',
        'components/ui/checkbox',
        'components/ui/input',
        'components/ui/label',
        'components/ui/select',
        'components/ui/switch',
        'components/ui/textarea',
      ],
    },
    'components/ui/typography',
  ],
  development: [
    'development/blueprint',
    'development/documentation-prompts',
    'development/prompt-plan',
    'development/to-do',
  ],
};

export default sidebars;
