# AI Generation Rules

## Purpose

These rules make the design system executable by AI. They define how AI should generate editable Figma drafts using PalmPay tokens, components, patterns, and UX rules.

## Core Principles

- Use PalmPay design system components before creating new elements.
- Do not invent undefined colors, typography, spacing, radius, shadows, or icon styles.
- Generate editable Figma structure, not flat screenshots.
- Generate all critical states, not only the ideal state.
- Flag component gaps instead of silently drawing one-off components.
- Keep business rules, localization, and accessibility visible in the output.

## Source Priority

AI must use sources in this order:

1. PalmPay Figma components and variables
2. Local documented components
3. Documented patterns
4. UX rules
5. New component proposal marked as `component-gap`

## Required Output

Every AI-generated design task must output:

- Component list
- Token list
- Pattern used
- Page or flow states
- Localization risks
- Accessibility risks
- Component gaps
- Product questions

## Page Generation Checklist

Before generating, AI must identify:

- User role
- Market or country
- Device type
- Product scenario
- Primary task
- Required data fields
- Required states
- Business constraints

## Component Rules

### Buttons

- One screen should have only one primary action unless a pattern defines otherwise.
- Destructive actions use danger styling.
- Button labels must start with action verbs.
- Long localized labels must wrap or resize safely.

### Forms

- Required fields must have visible labels.
- Validation errors must appear near the affected field.
- Placeholder text cannot be the only field explanation.
- Numeric, phone, ID, and amount fields must use suitable input behavior.
- Long mobile forms should use a fixed bottom action bar.

### Data Display

- Empty values use `-` unless the product rule defines another fallback.
- Status values use status components, not plain text.
- Amounts must include currency.
- Dates must define timezone or follow the product timezone rule.

### Status

- Success, warning, danger, info, pending, disabled, and review states must use semantic colors.
- Status labels must be localizable.

## Multi-market Rules

- Country, currency, language, timezone, ID type, phone code, address format, and account type must be configurable.
- Amount formatting must account for currency and decimal rules.
- Date formatting must account for timezone and locale.
- KYC, risk, and payment flows must support regulatory variation by country.

## Prohibited Behavior

- Do not create custom colors outside the token system.
- Do not create custom typography outside the type scale.
- Do not flatten complex screens into images.
- Do not omit loading, empty, error, permission, or disabled states.
- Do not mix steps from different user roles unless requested.
- Do not hide business assumptions; list them as product questions.
