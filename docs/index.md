# Global Fintech Design System

A scalable design framework for global digital finance products.

This documentation connects brand strategy, product UI, design tokens, AI-ready skills, localization, accessibility, and governance into one system.

<div class="home-vertical">

  <a class="home-card" href="/global-fintech-design-system/brand/strategy">
    <span class="home-label">01</span>
    <div>
      <h2>Brand Strategy</h2>
      <p>Define brand positioning, personality, design principles, and global-local balance for fintech products.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/brand/visual-identity">
    <span class="home-label">02</span>
    <div>
      <h2>Visual Identity</h2>
      <p>Establish logo usage, color palette, typography, iconography, imagery, and layout rules.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/tokens/design-tokens">
    <span class="home-label">03</span>
    <div>
      <h2>Design Tokens</h2>
      <p>Create reusable design variables for color, typography, spacing, radius, shadow, and motion.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/components/overview">
    <span class="home-label">04</span>
    <div>
      <h2>Components</h2>
      <p>Document reusable UI building blocks for product, campaign, and service touchpoints.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/skills/overview">
    <span class="home-label">05</span>
    <div>
      <h2>Skills Library</h2>
      <p>Turn system knowledge into reusable AI workflows for product design, review, generation, and Figma mapping.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/ux-rules/principles">
    <span class="home-label">06</span>
    <div>
      <h2>UX Rules</h2>
      <p>Define interaction principles for onboarding, payment, KYC, error states, and feedback flows.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/campaign/campaign-system">
    <span class="home-label">07</span>
    <div>
      <h2>Campaign System</h2>
      <p>Provide scalable templates for app banners, social cards, landing pages, and motion assets.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/localization/overview">
    <span class="home-label">08</span>
    <div>
      <h2>Localization</h2>
      <p>Support multi-market adaptation across language, currency, culture, regulation, and user behavior.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/accessibility/overview">
    <span class="home-label">09</span>
    <div>
      <h2>Accessibility</h2>
      <p>Ensure readable, inclusive, and compliant digital financial experiences across devices and markets.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/governance/overview">
    <span class="home-label">10</span>
    <div>
      <h2>Governance</h2>
      <p>Define how design assets, tokens, components, skills, and documentation are reviewed and maintained.</p>
    </div>
  </a>

  <a class="home-card" href="/global-fintech-design-system/research/overview">
    <span class="home-label">11</span>
    <div>
      <h2>AI / UX Research</h2>
      <p>Collect research on AI product design, prompt UX, agent workflows, competitor analysis, and emerging UX patterns.</p>
    </div>
  </a>

</div>

<style>
.home-vertical {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  max-width: 760px;
}

.home-card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 22px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}

.home-card:hover {
  border-color: #8F00FF;
  transform: translateY(-2px);
  background: rgba(143, 0, 255, 0.06);
}

.home-label {
  flex: 0 0 auto;
  min-width: 42px;
  font-size: 13px;
  font-weight: 700;
  color: #8F00FF;
  letter-spacing: 0.08em;
}

.home-card h2 {
  margin: 0 0 8px;
  border-top: none;
  padding-top: 0;
  font-size: 20px;
  line-height: 1.3;
}

.home-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  font-size: 15px;
}

@media (max-width: 640px) {
  .home-card {
    flex-direction: column;
    gap: 8px;
    padding: 20px;
  }

  .home-label {
    min-width: auto;
  }
}
</style>
