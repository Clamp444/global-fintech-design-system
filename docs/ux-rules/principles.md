# UX Principles

These principles define how global fintech experiences should behave across onboarding, payment, KYC, risk, and operational workflows.

## 1. Make Financial State Explicit

Financial products must show state clearly.

- Amounts include currency.
- Dates account for timezone.
- Status values use semantic components.
- Pending, failed, overdue, rejected, and review states are not hidden behind generic text.

## 2. Design for Required States

Every screen must account for more than the ideal state:

- Normal
- Loading
- Empty
- Error
- Disabled
- Permission unavailable
- Long localized text

Flows such as onboarding and KYC must also include validation, upload, review, and retry states.

## 3. Keep User Role Visible

Different roles should not share the same flow unless their permissions and responsibilities are the same.

Examples:

- BD adds a dealer
- Dealer reviews dashboard data
- Shop Agent self-onboards
- Operations reviews approval status

## 4. Make Form Logic Understandable

Forms should explain what is required and why.

- Required fields have visible labels.
- Errors appear close to the field.
- Placeholder text is not the only instruction.
- Next or Submit is disabled until required fields are valid.
- Long mobile forms use fixed bottom actions.

## 5. Support Multi-market Variation

Global fintech products must allow market-specific differences:

- Country
- Currency
- Language
- Timezone
- ID type
- Phone code
- Address format
- Account type
- Regulation and KYC requirements

## 6. Prevent Risky Repetition

Risky actions should not be easy to repeat by accident.

- Submission shows loading.
- Duplicate submit is blocked.
- Destructive actions require confirmation.
- Error recovery should preserve user input when possible.

## 7. Use Skill Templates Before Inventing Screens

When a screen matches an existing skill template, reuse it.

Current key templates:

- [Dealer Dashboard](../skills/palmpay-dealer-dashboard.md)
- [Dealer Onboarding](../skills/palmpay-dealer-onboarding.md)

## 8. Keep AI Output Auditable

AI-generated designs must include:

- Template used
- Components used
- Tokens used
- States covered
- Localization risks
- Accessibility risks
- Component gaps
- Product questions
