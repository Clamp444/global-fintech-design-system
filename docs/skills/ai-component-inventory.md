# Component Inventory for AI Generation

This inventory maps AI generation needs to PalmPay design system components. It helps AI decide what to reuse, what to document, and what to flag as a component gap.

## Figma Library Priority

1. PalmPay Guideline
2. PalmPay mobile component library
3. PalmPay colors
4. Current-file local components
5. New component proposal marked as `component-gap`

## Foundation Tokens

- Color
- Typography
- Spacing
- Radius
- Shadow
- Icon
- Grid
- Motion

## Basic Components

| Component | AI Usage |
|---|---|
| Button | Primary, secondary, danger, loading, disabled actions |
| Icon Button | Notification, add, detail, info actions |
| Text Field | Phone, ID, amount, address, name inputs |
| Select | Country, account, relation, configurable choices |
| Radio Group | Verification type, yes/no, financial model |
| Checkbox | Consent, optional selections |
| Switch | Binary settings |
| Tabs | View switching |
| Tag | Status, category, risk labels |
| Toast | Lightweight feedback |
| Modal | Confirmation and blocking decisions |
| Tooltip | Short contextual help |

## Data Components

| Component | AI Usage |
|---|---|
| Metric Card | Dashboard numbers and KPI blocks |
| Data Card | Compact grouped information |
| Table | Desktop and web data display |
| List | Mobile data display |
| Pagination | Desktop list navigation |
| Filter Bar | Search and filter control grouping |
| Search | Keyword or phone lookup |
| Empty State | No data result |
| Loading State | Fetching or submitting |
| Error State | Network or server failure |

## Flow Components

| Component | AI Usage |
|---|---|
| Mobile App Bar | Page title, back action, global actions |
| Stepper | Multi-step onboarding and KYC flows |
| Alert Banner | Warnings such as linked phone number |
| Upload Card | Document, store, utility bill uploads |
| Face Recognition Guide | Face capture instructions |
| Account Select Card | Bank or wallet settlement account |
| Bottom Action Bar | Fixed Back, Next, Submit controls |
| Map Location Card | Location selection and confirmation |

## Business Components

| Component | AI Usage |
|---|---|
| Dealer Risk Overview | Dealer dashboard risk summary |
| Payment Collection Alert | Repayment reminder block |
| Workbench Entry | Dealer quick action shortcut |
| Sales Data Card | Sales metrics |
| Date Range Filter | Today, Week, Month, Custom filters |
| Country Selector | Multi-market configuration |
| Currency Display | Amount plus currency |
| Language Selector | Localization settings |
| Timezone Display | Time-related clarity |
| Approval Status | Review and approval states |
| KYC Status | Identity verification state |
| Transaction Status | Payment and transaction state |

## Required Metadata Per Component

Each component should eventually include:

| Field | Description |
|---|---|
| Figma name | Component name in Figma |
| Component key | Figma component key |
| Variants | Size, type, state, density, etc. |
| Properties | Text, icon, boolean, instance swap |
| Token binding | Bound variables or styles |
| Usage rule | When to use it |
| AI rule | When AI should select it |
| Gap status | Existing, needs update, or missing |

## Known Gaps To Validate

- Metric Card
- Dealer Risk Overview
- Payment Collection Alert
- Workbench Entry
- Date Range Filter
- Bottom Action Bar
- Upload Card
- Face Recognition Guide
- Account Select Card
- Emergency Contact form group

These gaps should be validated against the PalmPay Figma libraries before creating new components.
