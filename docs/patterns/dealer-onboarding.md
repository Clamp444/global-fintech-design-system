# Dealer Onboarding Pattern

## Purpose

This pattern defines PalmPay dealer onboarding and application flows. It covers two entry paths:

- BD adds a dealer
- Shop Agent self-onboards

AI-generated onboarding screens must identify the user role and entry source before choosing a flow. Fields and steps from different paths must not be mixed unless the product requirement explicitly says so.

## Flow A: BD Adds Dealer

### Goal

A BD helps a dealer complete initial information and move into the onboarding process.

### Screen Sequence

1. Add Dealer - phone number
2. Add Dealer - verification type
3. Add Dealer - verification information
4. Add Dealer - PalmPay Account selection
5. Add Dealer - Financial Model selection
6. Onboarding - Business Info

### Required Fields

- Phone Number
- Verification Type
  - BVN
  - NIN
  - CAC
- BVN / NIN / CAC Number
- Business Login Account
- Use PalmPay Account
- Financial Model
  - EMI
  - Shop

### Interaction Rules

- A mobile phone number can be linked to only one agent.
- If the phone number is already linked to another agent, show a clear alert message.
- Verification Type controls the next required input field.
- If `Use PalmPay Account = Yes`, Financial Model can be selected.
- If `Use PalmPay Account = No`, confirm whether Financial Model should be hidden or disabled.
- The Next button is enabled only when required fields are valid.
- Submission must show loading to prevent duplicate submission.

### Required New Module

- Financial Model

AI-generated drafts for this flow must include Financial Model and explain the EMI / Shop decision logic.

## Flow B: Shop Agent Self-onboards

### Goal

A Shop Agent completes identity verification, face recognition, basic information, emergency contact, and settlement information.

### Screen Sequence

1. Identity Verification - empty NIN input
2. Identity Verification - filled NIN and enabled Next
3. Face Recognition - guidance
4. Basic Information - information confirmation
5. Contact Information - empty contact form
6. Contact Information - completed contact form
7. Settlement Info - select account and submit

### Required Fields

#### Identity Verification

- NIN
- Dial code helper
- Next action

#### Face Recognition

- Face recognition illustration
- Capture guidance
- Authorization message
- Start action

#### Basic Information

- Full Name
- Gender
- Date of Birth
- Address
- Regular Exhibition Location
- Regular Exhibition Area
- Regular Exhibition Address
- WhatsApp
- Utility bill
- Email Address
- Alternate Phone Number

#### Contact Information

- Contact Relation
- Contact Name
- Phone Number

#### Settlement Info

- Settlement Account
- Account number
- Account holder
- Back action
- Submit action

### Required New Step

- Emergency Contact

AI-generated drafts for this flow must include Emergency Contact as a distinct step.

## Stepper Rules

### BD Adds Dealer

Use a three-step stepper:

- Identity
- Business Info
- Settlement Info

### Shop Agent Self-onboards

Use a three-step stepper:

- Basic Information
- Contact Information
- Settlement Info

### Shared Rules

- Completed steps use success semantic color.
- Current step is highlighted.
- Future steps use subdued styling.
- Step labels must stay short enough for mobile screens.

## Form Rules

### Text Field

- Required fields must have labels.
- Errors must be displayed near the field.
- Placeholder text must not be the only explanation of a field.
- Numeric fields must trigger a numeric keyboard.

### Radio Group

- Verification Type, Use PalmPay Account, and Financial Model use radio groups.
- Options should be compact and mobile-friendly.
- Selected state uses PalmPay primary color.

### Upload Card

- Upload entry uses dashed border and plus icon.
- Every upload item must have a title.
- Optional items must be explicitly marked as optional.
- Upload failure must offer retry.

### Bottom Action Bar

- Primary action is fixed at the bottom.
- When there are two actions, Back is on the left and Next / Submit is on the right.
- Disabled and enabled states must be visually distinct.
- Submitting state must show loading.

## Required States

AI-generated onboarding drafts must include or account for:

- Default state
- Input state
- Validation error state
- Disabled button state
- Submission loading state
- Uploading state
- Upload failure state
- Face recognition failure state
- Account already linked state
- No network state
- Server review pending state

## Multi-market Rules

- ID type must be configurable by country.
- Phone country code must be configurable.
- Address fields must support country-specific formats.
- Settlement account cards must support different banks and wallet account types.
- KYC and face recognition copy must support local languages.

## Component Dependencies

| Component | Usage |
|---|---|
| Mobile App Bar | Page title and back action |
| Alert Banner | Phone binding warning |
| Text Field | Phone, ID, contact, address fields |
| Radio Group | Verification type, PalmPay Account, Financial Model |
| Stepper | Onboarding progress |
| Upload Card | Shop photos, environment photos, proof documents |
| Face Recognition Guide | Face recognition instructions |
| Info Card | Identity information confirmation |
| Map Location Card | Exhibition location |
| Account Select Card | Settlement account selection |
| Bottom Action Bar | Back, Next, Submit |

## AI Prompt

```md
Generate a PalmPay dealer onboarding flow.

Flow type: {BD Adds Dealer / Shop Agent Self-onboards}
User role: {BD / Shop Agent}
Country: {country}
ID type: {BVN / NIN / CAC / other}

Must follow:
- Use PalmPay design system components first.
- Do not create undefined colors, typography, radius, or shadow.
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

Also output:
- Component list
- Token list
- Page states
- Field dependency rules
- Component gaps
- Product questions
```
