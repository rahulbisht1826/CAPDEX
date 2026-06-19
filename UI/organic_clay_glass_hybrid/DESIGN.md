---
name: Organic Clay-Glass Hybrid
colors:
  surface: '#f6faf7'
  surface-dim: '#d7dbd8'
  surface-bright: '#f6faf7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f5f2'
  surface-container: '#ebefec'
  surface-container-high: '#e5e9e6'
  surface-container-highest: '#dfe3e1'
  on-surface: '#181d1b'
  on-surface-variant: '#404943'
  inverse-surface: '#2d3130'
  inverse-on-surface: '#eef2ef'
  outline: '#707973'
  outline-variant: '#bfc9c1'
  surface-tint: '#2c694e'
  primary: '#0f5238'
  on-primary: '#ffffff'
  primary-container: '#2d6a4f'
  on-primary-container: '#a8e7c5'
  inverse-primary: '#95d4b3'
  secondary: '#0e6c4a'
  on-secondary: '#ffffff'
  secondary-container: '#a0f4c8'
  on-secondary-container: '#19724f'
  tertiary: '#004884'
  on-tertiary: '#ffffff'
  tertiary-container: '#0060ad'
  on-tertiary-container: '#c4dbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f0ce'
  primary-fixed-dim: '#95d4b3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#0e5138'
  secondary-fixed: '#a0f4c8'
  secondary-fixed-dim: '#85d7ad'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a4c9ff'
  on-tertiary-fixed: '#001c39'
  on-tertiary-fixed-variant: '#004883'
  background: '#f6faf7'
  on-background: '#181d1b'
  surface-variant: '#dfe3e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  container-padding-mobile: 16px
  container-padding-desktop: 32px
  gutter: 16px
  card-gap: 20px
---

## Brand & Style
The brand personality is adventurous, curious, and tactile. It aims to evoke a "digital specimen kit" feel—combining the scientific precision of nature exploration with the playful, collectible nature of a game. 

The design style is a sophisticated blend of **Claymorphism** and **Glassmorphism**. Primary UI containers use soft, inflated 3D effects (Claymorphism) to feel friendly and touchable, while contextual overlays and navigation elements utilize frosted-glass transparency (Glassmorphism) to maintain a connection with the environmental backgrounds. This hybrid approach ensures the UI feels like a physical object placed within a natural landscape.

## Colors
The palette is rooted in an organic "Forest-to-Sky" spectrum. 
- **Primary:** A deep, lush evergreen used for core brand elements and high-contrast typography.
- **Secondary:** A soft meadow green for active states and primary action buttons.
- **Tertiary:** A crisp sky blue reserved for water-related discoveries and informational highlights.
- **Neutrals:** Earthy, warm grays and off-whites that prevent the UI from feeling sterile.

**Rarity System:** 
Visual hierarchy for specimens is defined by specific rarity tokens:
- **Common:** Neutral Slate, representing everyday finds.
- **Rare:** Azure Blue, evoking the excitement of a clear sky.
- **Epic:** Deep Violet, suggesting the mystery of the deep forest or twilight.

## Typography
We use **Plus Jakarta Sans** across all levels to maintain a friendly, approachable, and modern aesthetic. Its soft curves complement the rounded corners of the UI components.

- **Scale:** Headlines use tight letter spacing and heavy weights to command attention during discovery moments. 
- **Readability:** Body text uses standard weights with generous line heights to ensure legibility when reading field guides or specimen descriptions outdoors.
- **Labels:** Small labels use uppercase styling with increased letter spacing for categorization (e.g., Rarity tags).

## Layout & Spacing
The layout uses a **fluid grid system** designed for high-reachability on Android and spacious clarity on Web.

- **Mobile (Android):** A 4-column layout with 16px margins. Primary interaction points (Scan button, Map filters) are placed in the bottom "thumb zone" using glassmorphic floating bars.
- **Web:** A 12-column grid that centers content within a 1280px max-width container. 
- **Rhythm:** We follow a 4px baseline grid. Spacing between related items (e.g., specimen image and its title) should be 8px, while spacing between distinct sections should be 32px or 40px to allow the "clay" elements room to breathe.

## Elevation & Depth
Depth is the cornerstone of this design system, achieved through two distinct methods:

1.  **Claymorphic Surfaces:** Use two inner shadows—a light highlight on the top-left and a darker, saturated tint of the background color on the bottom-right—to create an "inflated" 3D look. Outward shadows should be very soft, large, and low-opacity (10-15%).
2.  **Glassmorphic Overlays:** Used for non-interactive backgrounds like headers or navigation bars. These feature a 20px backdrop blur, 60% opacity white fill, and a subtle 1px inner border (white at 40%) to define the edges against the organic background.

## Shapes
Shapes are unapologetically organic and "squishy." 
- **Standard Components:** Use 0.5rem (8px) for small items like input fields.
- **Cards & Specimen Containers:** Use 1rem (16px) to emphasize the claymorphic volume.
- **Buttons & Floating Action Buttons:** Use full pill-shaping (3rem+) to differentiate them as the primary touch-points.

## Components

### Buttons
Primary buttons use the Claymorphic style with a Secondary Green (#74C69D) fill. They should appear to "depress" into the screen on tap (reduce shadow blur and offset). Secondary buttons should use the Glassmorphic style with a ghost border.

### Specimen Cards
Cards are the hero of the app. They feature a Claymorphic base with the specimen "popping" out of the frame. Use a color-coded top-right corner or a pill-shaped chip to indicate the 'Rarity' level using the defined rarity tokens.

### Navigation Bar
On Android, use a floating Glassmorphic bar at the bottom of the screen with a 24px margin from the edges. Icons should have a soft "active" state that glows with the Primary Green color.

### Input Fields
Fields are soft-recessed (inverted Claymorphism) to look like they are carved into the surface. Use a 16px corner radius and Plus Jakarta Sans for the placeholder text.

### Rarity Chips
Small, high-contrast pills.
- **Common:** Flat slate grey.
- **Rare:** Soft azure with a subtle blue inner glow.
- **Epic:** Deep violet with a subtle pulse animation if viewed on a specimen detail page.