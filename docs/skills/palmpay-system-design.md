# PalmPay Design System Skill

This skill defines how AI should work with PalmPay brand, product UI, design tokens, components, patterns, and Figma assets.

Use this skill when the task is to:

- Generate a PalmPay product screen or flow
- Review whether a PalmPay design follows the system
- Convert screenshots into reusable components or patterns
- Map documentation rules to Figma components
- Identify component gaps for the PalmPay design system

## Workflow

### 1. Understand the Request

Before generating or reviewing, identify:

- Product area
- User role
- Market or country
- Device type
- Primary task
- Required states
- Business constraints
- Localization requirements

### 2. Choose the Right Layer

Use the lowest reusable layer that can solve the task:

| Layer | Use when |
|---|---|
| Token | The task is about color, type, spacing, radius, shadow, or motion |
| Component | The task is about a reusable UI element |
| Pattern | The task is about a page layout or multi-step flow |
| UX Rule | The task is about behavior, validation, state, or feedback |
| Case Study | The task needs full product context |

### 3. Reuse Before Creating

Priority order:

1. Existing PalmPay Figma component or variable
2. Existing documentation component
3. Existing pattern
4. Existing UX rule
5. New proposal marked as `component-gap`

AI must not silently create one-off components when a reusable component is missing.

### 4. Generate With Required States

Every generated screen or flow must account for:

- Normal state
- Loading state
- Empty state
- Error state
- Disabled state
- Permission state when relevant
- Long localized text state

For onboarding and KYC flows, also include:

- Input state
- Validation error state
- Submission loading state
- Upload failure state
- Review pending state

### 5. Output Checklist

Every AI design output should include:

- Pattern used
- Component list
- Token list
- State list
- Localization risks
- Accessibility risks
- Component gaps
- Product questions

## PalmPay-specific Rules

- Amounts must include currency.
- Dates must account for timezone.
- Phone fields must include country code behavior.
- ID types must be configurable by market.
- Status labels must use components and semantic colors.
- Risk, payment, KYC, and onboarding states must not rely on color alone.
- Mobile long forms should use a fixed bottom action bar.

## Related Pages

- [AI Generation Rules](../ai-generation/rules.md)
- [Prompt Templates](../ai-generation/prompt-templates.md)
- [Component Inventory](../ai-generation/component-inventory.md)
- [Figma Mapping](../ai-generation/figma-mapping.md)
- [Dealer Dashboard Pattern](../patterns/dealer-dashboard.md)
- [Dealer Onboarding Pattern](../patterns/dealer-onboarding.md)
