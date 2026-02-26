# Mission Briefing: Kinetic Clearing

## Project Identity & Soul
**Kinetic Clearing** (formerly Bush Bodies) is a digital "triage center" for the modern burnout. It utilizes a "backcountry survival" metaphor to deliver mental and physical health interventions. The goal is to move users from a state of being "frozen" (overwhelmed/static) to "kinetic" (movement/action).

## Vision & Architecture
The site is structured around three core offerings:
1.  **Field Repair (The Signal):** Immediate, short-form "fixes" for mental and physical stasis.
2.  **The Field Hatchet (The Tool):** A digital "Pocket Manual" for breaking trail through the daily grind (Future feature: PDF/Video series).
3.  **Kinetic Clearing (The Action):** Live-streamed workshops and mobile expeditions in urban wilderness.

## Technical Foundation
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-React (Primary: Compass, Axe, Radio, Signal)
- **Typography:**
  - `Bebas Neue`: High-impact, uppercase headers.
  - `Outfit`: Technical, modern vision text.
  - `Inter`: Clean body copy.

## Aesthetics & Design System
The visual language is "Gritty Backcountry":
- **Palette:** 
    - `Spruce` (Dark Green)
    - `Granite` (Deep Grey)
    - `Action` (Survival Orange)
    - `Yellow` (High-Vis Safety)
- **Image Treatment:** All photographic assets MUST use `filter grayscale contrast-125` (or higher) to maintain a recessionary, gritty Northern Ontario feel.
- **Dynamic UX:** The `DynamicHeader` component tracks the user's scroll position and updates the title dynamically based on the active section (`#home`, `#story`, `#hatchet`, `#clearing`).

## Future Iteration Trailmap
1.  **Field Hatchet Fulfillment:** Develop the "Ten Essentials" manual into a downloadable or interactive mini-app.
2.  **Radio Silence Updates:** Connect the Enrollment form in the `#enrollment` section to an email service provider (e.g., Mailchimp/ConvertKit).
3.  **Interactive Triage:** Expand the "Mental" and "Physical" kits in the `#repair` section with actionable timers or video overlays.
4.  **Clearing Schedule:** Add a dynamic calendar or "signal map" for upcoming Kinetic Clearing live sessions.

---
*End of Briefing. Break trail.*
