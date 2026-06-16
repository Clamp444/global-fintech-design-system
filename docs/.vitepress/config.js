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
      { text: 'Skills', link: '/skills/overview' },
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
          { text: 'PalmPay Design System', link: '/skills/palmpay-system-design' },
          { text: 'Prompt Templates', link: '/skills/ai-prompt-templates' },
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
