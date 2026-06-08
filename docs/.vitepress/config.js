export default {
  title: 'Global Fintech Design System',
  description: 'A scalable design system for fintech products across global markets.',

  // 如果你的仓库名不是 global-fintech-design-system，请改这里
  base: '/global-fintech-design-system/',

  themeConfig: {
    siteTitle: 'Design System',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Brand', link: '/brand/strategy' },
      { text: 'Tokens', link: '/tokens/design-tokens' },
      { text: 'Components', link: '/components/overview' },
      { text: 'UX Rules', link: '/ux-rules/principles' },
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
        text: 'System',
        collapsed: false,
        items: [
          { text: 'Design Tokens', link: '/tokens/design-tokens' },
          { text: 'Components Overview', link: '/components/overview' },
          { text: 'UX Principles', link: '/ux-rules/principles' }
        ]
      },
      {
        text: 'Experience',
        collapsed: false,
        items: [
          { text: 'Campaign System', link: '/campaign/campaign-system' },
          { text: 'Localization', link: '/localization/overview' },
          { text: 'Accessibility', link: '/accessibility/overview' }
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
{ text: 'Skills', link: '/skills/overview' }
{
  text: 'Skills',
  collapsed: false,
  items: [
    { text: 'Skills Overview', link: '/skills/overview' },
    { text: 'UX Review', link: '/skills/ux-review' },
    { text: 'Brand Audit', link: '/skills/brand-audit' },
    { text: 'Campaign Brief', link: '/skills/campaign-brief' },
    { text: 'Design Token Audit', link: '/skills/design-token-audit' },
    { text: 'Localization Review', link: '/skills/localization-review' },
    { text: 'AI Product Evaluation', link: '/skills/ai-product-evaluation' }
  ]
}
