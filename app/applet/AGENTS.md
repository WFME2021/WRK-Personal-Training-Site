# WRK Personal Training - AI Rules & Guidelines

## 1. CMS & Admin Interface Protection
- **Never remove existing fields** from the Admin CMS (e.g., Draft/Published status dropdown, SEO inputs, CTA fields).
- **Connected Posts UI**: The CMS uses a visual multi-select checkbox interface for selecting related posts. **DO NOT** revert this to a comma-separated text input.
- **Draft/Published Status**: The Blog page (`/pages/Blog.tsx`) must ALWAYS filter out posts where `status === 'draft'`. Do not remove or alter this logic.
- **Data Integrity**: Always retain the full `BlogPost` schema and the complete `EMPTY_POST` structure in `Admin.tsx`.

## 2. Brand & Design Rules
- **Tone**: Calm, experienced, non-hype, non-salesy. 
- **Design**: Typography-led, minimal, modern. Strong hierarchy, generous white space.
- **Strict Scope**: Do not introduce gimmicks, heavy animations, "gym culture" aesthetics, or unsolicited features (like user accounts or dashboards). Focus on clarity and performance.
