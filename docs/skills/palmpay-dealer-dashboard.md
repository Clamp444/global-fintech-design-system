# Dealer Dashboard Template

## Purpose

The Dealer Dashboard template gives a dealer a quick view of risk, repayment alerts, frequent work actions, and sales data. AI-generated dealer home screens should reuse this structure instead of inventing a new dashboard layout.

## Required Structure

1. Header
2. Risk Overview
3. Payment Collection Alert
4. Workbench
5. Date Filter
6. Sales Data

## Header

### Required Content

- User name
- User role
- Notification action
- Create or add action

### Rules

- User name uses the strongest text hierarchy in the header.
- User role uses secondary text.
- Notification and create actions use icon buttons.
- Header should stay lightweight and should not use a card background.

## Risk Overview

### Required Metrics

- Overdue
- Overdue (1d)
- Overdue (7d)
- Overdue (14d)
- Never Paid (14d)

### Rules

- Use the PalmPay primary brand surface for the section background.
- The most severe risk number uses a danger or alert semantic color.
- Every clickable metric card must show a right arrow.
- The primary metric spans the full row; secondary metrics use a two-column layout.
- Every metric must include both value and label.

## Payment Collection Alert

### Required Content

- Due Today
- Due In 1 Day
- Repaid Today progress

### Rules

- Use a white or default surface container.
- Top alert metrics use a two-column layout.
- Each alert metric includes value, label, and clickable affordance.
- Repayment progress must show completed count and total count.
- Progress bars use success semantic color.

## Workbench

### Required Actions

- Create Recovery
- Phone Recovery
- Test&Course
- Task

### Rules

- Workbench entries use icon plus label.
- Default layout is four columns.
- Repeated rows must keep column widths consistent.
- Long labels can wrap; they must not be truncated.
- Icons must come from the PalmPay icon system.

## Date Filter

### Required Options

- Today
- Week
- Month
- Custom

### Rules

- Use pill selector or segmented filter behavior.
- Selected state uses the PalmPay primary brand color.
- Unselected state uses a soft surface color.
- Every option may include a dropdown indicator when the period can be configured.

## Sales Data

### Required Metrics

- Sales
- Sales Value

### Rules

- Use a white or default surface container.
- Metric cards use a two-column layout.
- Amount metrics must display currency, for example `TZS`.
- Large numbers must use thousands separators.

## Component Dependencies

| Component | Usage |
|---|---|
| App Header | User identity and global actions |
| Icon Button | Notification, create, detail, info |
| Metric Card | Risk, alert, sales values |
| Dashboard Section | Module container |
| Progress Bar | Repayment progress |
| Workbench Item | Work action entry |
| Date Filter | Time range switching |

## Required States

AI-generated dashboard drafts must include or account for:

- Normal state
- Loading state
- Empty state
- Data error state
- Network error state
- Permission unavailable state
- Long localized text state

## Multi-market Rules

- Amounts must include currency.
- Date ranges must respect timezone.
- Number formatting must support market-specific separators and decimals.
- Labels must support English, French, Chinese, and other target languages without breaking layout.

## AI Prompt

```md
Generate a PalmPay Dealer mobile dashboard.

User role: Dealer
Core task: Review risk, repayment alerts, workbench actions, and sales data.

Must include:
- Header: user name, role, notification action, create action
- Risk Overview: Overdue, Overdue (1d), Overdue (7d), Overdue (14d), Never Paid (14d)
- Payment Collection Alert: Due Today, Due In 1 Day, Repaid Today progress
- Workbench: Create Recovery, Phone Recovery, Test&Course, Task
- Date Filter: Today, Week, Month, Custom
- Sales Data: Sales, Sales Value

Design requirements:
- Use PalmPay design system components first.
- Do not create undefined colors, typography, radius, or shadow.
- Output editable Figma layers.
- Include normal, loading, empty, and error states.
- Amount values must include currency.
- Text must handle localization expansion.

Also output:
- Component list
- Token list
- Component gaps
- Page states
- Product questions
```
