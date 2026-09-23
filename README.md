# Juniper & Co. Beauty Studio

## What This Is

This is a **Forge CT demo for beauty shops**. It is designed to show a local owner what a modern, mobile-first business website could look like when customers are looking them up on their phone.

Juniper & Co. Beauty Studio is fictional. This repository is a reusable sales demo, not a real business website or a claim about an operating shop.

The project is a lightweight React and Vite site with reusable header, mobile navigation, footer, button, section, image, and page-layout components. It includes a homepage plus `/about`, `/services`, `/visit`, and `/contact` paths.

## Run Locally

From the repository root:

```bash
npm install
npm run dev
```

The development server is configured to listen on all interfaces. Open the local URL printed by Vite.

Before handing the demo to someone else, run the two checks supported by the repository:

```bash
npm run check
npm run build
```

`npm run check` runs TypeScript validation. `npm run build` creates the production output in `dist/`. The repository does not include a backend, database, CMS, authentication, booking system, or payment integration.

## Photos

Approved local demo photography belongs in:

```text
/public/demo/
```

The current supplied JPEGs are already stored there. Photo role assignments are documented in [public/demo/README.md](public/demo/README.md).

Use the roles as follows:

- **Hero:** the strongest wide or editorial image that communicates the visual mood immediately.
- **Service detail:** close-up work that supports a service such as hair, nails, skin, or makeup.
- **Room/chair:** a real interior, treatment room, station, chair, or other useful location context. Omit the role if no approved room image exists.
- **Texture/detail:** a tight crop of tools, finishes, materials, or service detail.
- **Optional team:** use only if an approved team image exists. Never imply that a photographed person owns or works at the fictional shop without explicit project direction.

Only approved local assets should be used. Do not add stock photography, external image URLs, or unapproved images. The reusable [DemoImage component](src/components/DemoImage.jsx) provides descriptive alt text and a fallback when an image is missing. The homepage hero is eager-loaded for the first screen; supporting page images are lazy-loaded.

## Customizing a Live Pitch

The fastest reskin is to keep the shell and replace the business data and page copy.

| What to change | Where it lives |
|---|---|
| Shop name, short name, town, fake phone, and phone link | [src/lib/site.js](src/lib/site.js) |
| Header and mobile navigation | [src/components/Header.jsx](src/components/Header.jsx), [src/components/MobileNav.jsx](src/components/MobileNav.jsx) |
| Footer name, location, phone, and Forge badge | [src/components/Footer.jsx](src/components/Footer.jsx) |
| Homepage headline, hero copy, homepage services, and CTA copy | [src/pages/Home.jsx](src/pages/Home.jsx) |
| Service categories and demo pricing | [src/pages/Services.jsx](src/pages/Services.jsx) |
| Hours table | [src/pages/Visit.jsx](src/pages/Visit.jsx) |
| Fictional address and arrival notes | [src/pages/Visit.jsx](src/pages/Visit.jsx) |
| Contact email placeholder and form copy | [src/pages/Contact.jsx](src/pages/Contact.jsx) |
| About story and photography layout | [src/pages/About.jsx](src/pages/About.jsx) |
| Call-to-book button variants | [src/components/Button.jsx](src/components/Button.jsx) |
| Page titles, descriptions, and local OG image reference | [index.html](index.html) and [src/App.jsx](src/App.jsx) |
| Color tokens, typography, spacing, borders, and responsive styling | [src/styles.css](src/styles.css) |
| Hero, service detail, texture, and other photo assets | [public/demo/](public/demo/) |
| Favicon and social preview placeholder | [public/favicon.svg](public/favicon.svg), [public/og-placeholder.svg](public/og-placeholder.svg) |

### Renaming the fictional shop

Update `name` and `shortName` in `src/lib/site.js`, then update any editorial copy that mentions Juniper & Co. in `src/pages/Home.jsx`, `src/pages/About.jsx`, and `index.html` if needed. Keep the demo framing clear until the project is intentionally converted for a real client.

### Changing the town and phone

Update `location`, `phone`, and `phoneHref` in `src/lib/site.js`. The phone link should remain a `tel:` link. Replace the fictional address and town-specific copy in `src/pages/Visit.jsx`, then review the page metadata in `src/App.jsx` and `index.html`.

### Changing hours, address, services, and CTA

The visit hours array is near the top of `src/pages/Visit.jsx`. The fictional address is in the same file. The service categories and descriptions are near the top of `src/pages/Services.jsx`. The main CTA is the `Button` component using the shared `phoneHref`; keep the primary action labeled clearly, usually **Call to book**. The no-backend contact form is in `src/pages/Contact.jsx` and is intentionally marked as a demo.

### Changing colors and photography

Reskin the site from the CSS variables at the top of `src/styles.css` before changing individual selectors. Replace local assets in `public/demo/`, update the `src` and alt text in `src/pages/Home.jsx` and `src/pages/About.jsx`, and update the role notes in `public/demo/README.md`. Keep image descriptions factual and limited to what is visibly present.

## Walk-In Pitch

Nick can say:

> This is a Forge demo for beauty shops. I build the site around what your customers actually need when they are looking you up on their phone.

A concise 60-second walkthrough:

1. Open the homepage and show the shop name, Farmington location, local photography, and **Call to book** CTA.
2. Tap **Services** and show the three service categories and scan-friendly descriptions.
3. Tap **About** to show the fictional local story and supplied demo photography.
4. Tap **Visit us** to show the hours structure, fictional address placeholder, phone, and map placeholder.
5. Tap **Call to book** to demonstrate the phone-first conversion path.
6. Mention that Forge CT can adapt the same focused shell around a real shop's approved content, photos, services, and contact details.

Keep the conversation grounded in what the shop owner would want to change. Do not promise pricing, timelines, features, or production status that have not been agreed.

## Vercel

This repository is a Vite project. No deployment has been claimed or verified from this repository.

To deploy it through Vercel's GitHub flow:

1. Push the repository to GitHub.
2. In Vercel, choose **Add New Project** and import `VoidcallerOC/Beauty-`.
3. Let Vercel detect the Vite project, or set the build command to `npm run build` and the output directory to `dist`.
4. Deploy, then open the generated preview URL and check `/`, `/about`, `/services`, `/visit`, and `/contact`.
5. Confirm the phone links, local images, mobile navigation, and form demo state before sharing the preview.

The Vercel dashboard or CLI can be used according to the account's existing setup. Do not put credentials in this repository, and do not describe the site as deployed until the preview has actually been verified.

## Demo Safety

- Juniper & Co. Beauty Studio is fictional.
- `(860) 555-0147` is a fake 555 number.
- The Visit page uses a clearly labeled fictional address placeholder.
- The footer includes a secondary **Demo by Forge CT** badge.
- Photography is stored locally under `public/demo/` and is treated as approved demo photography for this project.
- There is no real booking backend. The primary action is a phone link.
- The contact form is a demo-only UI and explicitly says that no message is sent or stored.
- Do not invent owners, staff, biographies, credentials, awards, reviews, or business history while adapting the demo.

## Reskinning

To adapt this shell for another Connecticut beauty shop, keep the existing layout, route structure, shared components, and CSS tokens. Replace the site values in `src/lib/site.js`, adjust page copy in the relevant files under `src/pages/`, update hours and address in `src/pages/Visit.jsx`, add only approved assets under `public/demo/`, and run `npm run check` followed by `npm run build`.

This approach keeps the demo reusable without rebuilding the application for every shop. Only add a new component when a repeated pattern genuinely needs one. Avoid adding booking integrations, analytics, CMS features, auth, payments, or backend systems during a walk-in sales demo.
