export default {
  title: 'Global Fintech Design System',
  description: 'A scalable design system for fintech products across global markets.',

  base: '/global-fintech-design-system/',

  themeConfig: {
    siteTitle: 'Design System',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Brand', link: '/brand/strategy' },
      { text: 'Tokens', link: '/tokens/design-tokens' },
      { text: 'Components', link: '/components/overview' },
      { text: 'Patterns', link: '/patterns/overview' },
      { text: 'AI Generation', link: '/ai-generation/rules' },
      { text: 'Governance', link: '/governance/overview' }
    ],

    sidebar: [
      {
        text: 'Foundation',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Brand Strategy', link: '/brand/strategy' },
          { text: 'Visual Identity', link: '/brand/visual-identity' }
        ]
      },
      {
        text: 'Design System',
        collapsed: false,
        items: [
          { text: 'Design Tokens', link: '/tokens/design-tokens' },
          { text: 'Components Overview', link: '/components/overview' },
          { text: 'UX Principles', link: '/ux-rules/principles' }
        ]
      },
      {
        text: 'Patterns',
        collapsed: false,
        items: [
          { text: 'Patterns Overview', link: '/patterns/overview' },
          { text: 'Dealer Dashboard', link: '/patterns/dealer-dashboard' },
          { text: 'Dealer Onboarding', link: '/patterns/dealer-onboarding' }
        ]
      },
      {
        text: 'AI Generation',
        collapsed: false,
        items: [
          { text: 'Generation Rules', link: '/ai-generation/rules' },
          { text: 'Prompt Templates', link: '/ai-generation/prompt-templates' },
          { text: 'Component Inventory', link: '/ai-generation/component-inventory' },
          { text: 'Figma Mapping', link: '/ai-generation/figma-mapping' }
        ]
      },
      {
        text: 'Experience System',
        collapsed: false,
        items: [
          { text: 'Campaign System', link: '/campaign/campaign-system' },
          { text: 'Localization', link: '/localization/overview' },
          { text: 'Accessibility', link: '/accessibility/overview' }
        ]
      },
      {
        text: 'Skills Library',
        collapsed: false,
        items: [
          { text: 'Skills Overview', link: '/skills/overview' },
          { text: 'PalmPay Design System', link: '/skills/palmpay-system-design' },
          { text: 'UX Review', link: '/skills/ux-review' },
          { text: 'Brand Audit', link: '/skills/brand-audit' },
          { text: 'Campaign Brief', link: '/skills/campaign-brief' }
        ]
      },
      {
        text: 'Case Studies',
        collapsed: false,
        items: [
          { text: 'PalmPay Brand System', link: '/case-studies/palmpay' },
          { text: 'StarShield Website', link: '/case-studies/starshield' },
          { text: 'Global Brand System', link: '/case-studies/global-brand-system' }
        ]
      },
      {
        text: 'Operations',
        collapsed: false,
        items: [
          { text: 'Governance', link: '/governance/overview' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clamp444' }
    ],

    footer: {
      message: 'Global Fintech Design System',
      copyright: 'Copyright © 2026'
    }
  }
}
