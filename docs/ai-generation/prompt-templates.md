# Prompt Templates

Use these prompts when asking AI to generate PalmPay product designs.

## Dealer Dashboard

```md
Generate a PalmPay Dealer mobile dashboard.

User role: Dealer
Market: {country or market}
Core task: Review risk, repayment alerts, workbench actions, and sales data.

Use pattern:
- Dealer Dashboard Pattern

Must include:
- Header: user name, role, notification action, create action
- Risk Overview: Overdue, Overdue (1d), Overdue (7d), Overdue (14d), Never Paid (14d)
- Payment Collection Alert: Due Today, Due In 1 Day, Repaid Today progress
- Workbench: Create Recovery, Phone Recovery, Test&Course, Task
- Date Filter: Today, Week, Month, Custom
- Sales Data: Sales, Sales Value

Design requirements:
- Use PalmPay design system components first.
- Do not create undefined colors, typography, radius, or shadows.
- Output editable Figma layers.
- Include normal, loading, empty, error, and permission states.
- Amount values must include currency.
- Text must support localization expansion.

Output:
- Component list
- Token list
- Component gaps
- Page states
- Product questions
```

## Dealer Onboarding

```md
Generate a PalmPay dealer onboarding flow.

Flow type: {BD Adds Dealer / Shop Agent Self-onboards}
User role: {BD / Shop Agent}
Market: {country or market}
ID type: {BVN / NIN / CAC / other}

Use pattern:
- Dealer Onboarding Pattern

Design requirements:
- Use PalmPay design system components first.
- Do not create undefined colors, typography, radius, or shadows.
- Output editable Figma layers.
- Every step must include default, input, error, disabled, and loading states.
- Primary bottom actions must be fixed at the bottom.
- Multi-market fields must be configurable.

If BD Adds Dealer, include:
- Phone Number
- Verification Type
- Use PalmPay Account
- Financial Model
- Business Info

If Shop Agent Self-onboards, include:
- Identity Verification
- Face Recognition
- Basic Information
- Emergency Contact
- Settlement Info

Output:
- Component list
- Token list
- Page states
- Field dependency rules
- Component gaps
- Product questions
```

## Generic Mobile Form Flow

```md
Generate a PalmPay mobile form flow.

Scenario: {scenario}
User role: {role}
Market: {country or market}
Primary task: {task}

Must include:
- App bar
- Stepper if the flow has more than one step
- Required form fields
- Validation messages
- Fixed bottom action bar
- Success, error, loading, and disabled states

Design requirements:
- Use PalmPay components first.
- Follow mobile form rules.
- Do not rely only on placeholder text.
- Support localization and multi-market field differences.

Output:
- Component list
- Token list
- Flow states
- Field rules
- Component gaps
- Product questions
```
