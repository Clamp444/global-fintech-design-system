# Figma Mapping

This page defines how AI should connect documentation to PalmPay Figma assets.

## Target Figma File

| Item | Value |
|---|---|
| File name | PalmPayNewCodex |
| File key | `T4Pyl6HjL3pV0O8aepAdHG` |

## Connected Libraries

| Library | Role |
|---|---|
| PalmPay Guideline | Brand, foundations, design principles |
| PalmPay mobile component library | Mobile UI components and reusable patterns |
| PalmPay colors | Brand and semantic colors |

## Mapping Priority

When generating a Figma draft, AI should map documentation to Figma assets in this order:

1. Existing component in the PalmPay file
2. Component from connected PalmPay libraries
3. Existing variable or style from PalmPay libraries
4. Documented local component rule
5. New draft component marked as `component-gap`

## Required Mapping Fields

Every mapped component should eventually include:

| Field | Description |
|---|---|
| Documentation name | Name used in this docs site |
| Figma name | Name used in Figma |
| Component key | Figma component key |
| Library | Source library |
| Variants | Variant properties |
| Component props | Text, boolean, instance swap, icon swap |
| Token bindings | Color, typography, radius, spacing variables |
| AI selection rule | When AI should use this component |

## Current Mapping Worklist

| Documentation item | Expected Figma asset | Status |
|---|---|---|
| Dealer Dashboard Pattern | Mobile dashboard frames | Needs validation |
| Dealer Onboarding Pattern | Onboarding flow frames | Needs validation |
| Metric Card | KPI or data card component | Needs validation |
| Stepper | Onboarding progress component | Needs validation |
| Upload Card | File upload component | Needs validation |
| Bottom Action Bar | Mobile bottom action component | Needs validation |
| Alert Banner | Warning or info banner | Needs validation |
| Account Select Card | Bank or wallet account card | Needs validation |

## AI Rule

If a Figma component cannot be found, AI must not silently draw a one-off replacement. It must:

1. Mark the item as `component-gap`.
2. Describe the missing component behavior.
3. Propose variants and states.
4. Ask for confirmation before treating it as a reusable design system component.
