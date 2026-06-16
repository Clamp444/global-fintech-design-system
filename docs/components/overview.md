# Components Overview

Components are reusable UI building blocks. They should be documented before they are used repeatedly in screens, flows, and AI-generated drafts.

## Component Categories

### Foundations

- Color
- Typography
- Spacing
- Radius
- Shadow
- Icon
- Grid
- Motion

### Basic Components

- Button
- Icon Button
- Text Field
- Select
- Radio Group
- Checkbox
- Switch
- Tabs
- Tag
- Toast
- Modal
- Tooltip

### Data Components

- Metric Card
- Data Card
- Table
- List
- Pagination
- Filter Bar
- Search
- Empty State
- Loading State
- Error State

### Flow Components

- Mobile App Bar
- Stepper
- Alert Banner
- Upload Card
- Face Recognition Guide
- Account Select Card
- Bottom Action Bar
- Map Location Card

### PalmPay Business Components

- Dealer Risk Overview
- Payment Collection Alert
- Workbench Entry
- Sales Data Card
- Date Range Filter
- Country Selector
- Currency Display
- Language Selector
- Timezone Display
- Approval Status
- KYC Status
- Transaction Status

## Documentation Template

Each component should include:

| Field | Description |
|---|---|
| Purpose | What the component solves |
| Anatomy | Internal structure |
| Variants | Size, style, state, density |
| States | Default, active, disabled, loading, error |
| Usage rules | When to use and when not to use |
| Content rules | Label length, empty values, formatting |
| Localization rules | Text expansion and market-specific behavior |
| Accessibility rules | Contrast, focus, semantics, touch target |
| Figma mapping | Figma name, component key, token bindings |

## AI Rule

AI must select existing components from the inventory before drafting new elements. If no reusable component exists, the output must mark the missing item as `component-gap` and describe the required variants and states.

See also:

- [PalmPay Design System](../skills/palmpay-system-design.md)
