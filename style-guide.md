# 🎨 a6n Website Style Guide

(Built with shadcn/ui + Geist Font)

## 1. Brand Voice & Personality

-   **Tone** → Bold, Clear, Forward-looking.
-   **Personality** → Confident like a tech leader, but approachable for everyday users.
-   **Messaging Style** → Short, action-driven phrases ("Automate onboarding →", "Close deals faster →").

## 2. Typography

-   **Primary Font**: Geist Sans (by Vercel)
-   **Weights**: 400 / 500 / 600 / 700
-   **Line-height**: Tight for headers, relaxed for body
-   **Letter-spacing**: Slightly wide for small labels

### Text Hierarchy:

-   **h1** → `text-5xl font-bold tracking-tight` (Hero titles)
-   **h2** → `text-3xl font-semibold` (Section headers)
-   **h3** → `text-xl font-medium` (Feature cards)
-   **p** → `text-base font-normal text-foreground/80` (Body)
-   **small** → `text-sm uppercase tracking-wider text-muted-foreground` (Labels)

## 3. Color Palette

| Role        | Color         | Hex     | Usage                       |
|-------------|---------------|---------|-----------------------------|
| Primary     | Electric Blue | #077FE8 | CTA buttons, highlights     |
| Primary-FG  | White         | #FFFFFF | Text on primary             |
| Secondary   | Indigo        | #7B61FF | Accent buttons, hover states|
| Accent      | Yellow        | #FFD75C | Tags, illustrations         |
| Background  | White         | #FFFFFF | Page background             |
| Foreground  | Charcoal      | #1C1C1E | Main text                   |
| Muted       | Light Gray    | #F5F7FA | Background sections, cards  |
| Destructive | Coral         | #FF7A59 | Warnings, errors            |

## 4. Components (shadcn/ui)

### Navigation

-   **NavigationMenu** with:
    -   Logo left
    -   Links center (Products, Solutions, About, Contact)
    -   CTA button right ("Get Started →")

### Hero Section

-   `h1` + Framer Motion rotating text
-   Supporting `p` with muted foreground
-   CTA buttons: `Button` (primary filled + secondary outline)

### Feature Cards

-   Use **Card**:
    -   **Top** → `Badge` (department: HR AI, Sales AI, etc.)
    -   **Middle** → `h3` (action phrase)
    -   **Bottom** → subtle arrow icon (`lucide-react`)

### Forms

-   **Newsletter signup** → `Input` + `Button` inline
-   **Contact form** → `Input`, `Textarea`, `Select`

### About Section

-   Two-column layout: text left, illustration right (`Grid`)
-   `h2` + `p` with clean spacing

### Testimonials / Logos

-   Use `Carousel` or horizontal `ScrollArea` with client logos
-   Optional `Card` for testimonial quotes

### FAQ

-   `Accordion` for expandable questions

### Footer

-   `NavigationMenu` simplified: links left, socials right
-   Muted background, `small` text

## 5. Buttons

-   **Primary** → Electric Blue, white text
-   **Secondary** → Outline with hover fill
-   **Ghost** → Text only, for nav

```html
<Button className="rounded-full px-6 py-3 text-base font-medium">
  Get Started →
</Button>
```

## 6. Motion & Animation

-   **Hero rotating text** → fade + slide transitions (Framer Motion)
-   **Cards** → scale up slightly on hover
-   **Icons** → slide-right animation on hover (arrow →)
-   **Section entrance** → fade-up stagger animation

## 7. Iconography

-   Use **lucide-react** (already built into shadcn/ui)
-   **Style**: outlined, 2px stroke, consistent sizing
-   **Color**: `inherit` from text unless interactive (then use `primary`)

## 8. Spacing & Layout

### Container widths:

-   **Mobile**: `px-6`
-   **Tablet**: `px-10`
-   **Desktop**: `max-w-screen-xl mx-auto px-12`

### Grid System:

-   **Features** → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`
-   **About Section** → `grid-cols-1 lg:grid-cols-2 gap-12`

## 9. Accessibility

-   **Color contrast**: meet WCAG AA
-   **Buttons** → at least 44px height
-   **Keyboard focus states**: `outline-primary`
-   **Animations**: `reduced-motion` fallback

## 10. Illustrations

-   **Style**: minimal, flat-color, using `primary` + `secondary` + `accent`
-   **Shapes**: rounded, geometric, soft gradients
-   **Used in**: hero background, about section, feature highlights
