# #1 Stop Detailing Shop LLC

A responsive React + Vite + TypeScript website for the Millersville, Pennsylvania detailing shop. The supplied flyer is preserved in `public/images/business-flyer.jpg`; the header and footer display the complete approved logo in `public/images/approved-logo.png`, including finished water splashes and centered contact details. The site follows its black, electric blue, white and silver palette. All photos are labeled stock samples, not customer work.

## Local setup

Use Node.js 22.12+ (or 24).

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:5173/number-one-stop-detailing/. The project-site path is intentional. For root hosting, set `VITE_BASE_PATH=/` and restart/rebuild.

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
npm test
```

Browser tests use Chromium at `/usr/bin/chromium` by default. Else set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to a local Chromium binary, or run `npx playwright install chromium` and adjust the executable path in `playwright.config.ts`.

## GitHub Pages

1. Create a GitHub repository named `number-one-stop-detailing` and push these files on `main`.
2. In repository Settings → Pages → Build and deployment, choose **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` installs from the lockfile, lints, typechecks/builds, uploads `dist`, and deploys with official Pages actions. It derives the project base path from the repository name.
4. The expected URL is `https://YOUR-USERNAME.github.io/number-one-stop-detailing/`.

Example from this project folder, after authenticating GitHub CLI:

```sh
git init -b main
git add .
git commit -m "Build detailing business website"
gh repo create number-one-stop-detailing --public --source=. --push
```

For a custom domain, set the workflow `VITE_BASE_PATH` to `/` and configure the domain in Pages settings. No remote repository or live Pages deployment is implied by this source code.

## Enable real quote delivery

The default is **safe demo mode**: browser validation runs, but no form data leaves the page or is saved. Demo feedback explicitly says nothing was sent. Call-to-action links remain available for real inquiries.

1. Replace `business.email` in `src/data.ts` with the real business email. `detailing@example.com` is only a placeholder; editing that value alone does not route submissions.
2. Create a form at https://formspree.io and set its **recipient** in the Formspree dashboard to the real business email. Complete Formspree's verification and configure its spam/domain protections. Do not attempt to verify the example.com address.
3. Add the public form ID (the last segment of `https://formspree.io/f/FORM_ID`) as `VITE_FORMSPREE_FORM_ID` in `.env.local` for local use, and as a GitHub repository **Actions variable** for deployment. Do not use a secret API key. The form ID is necessarily public.
4. Rebuild/redeploy. Submit an authorized test inquiry, verify the success message, and confirm the actual email arrives in the correct mailbox. Check spam folders. Delivery must not be advertised as verified until this test succeeds.
5. Test service rejection, offline behavior, and rate limits. Failed/uncertain requests show an error with a call option; they never show success. The in-flight lock prevents concurrent duplicates. A network timeout can leave delivery uncertain, so the error asks customers to call before retrying.

Client validation, a honeypot, an in-flight lock, and service-side Formspree protection are included. Required fields: name, valid email, and phone number. Appointment dates are preferences, not bookings. Real submissions share contact/vehicle information with Formspree; review the provider's terms and privacy practices before launch.

**Attachments are disabled intentionally.** Before enabling them, confirm the selected service plan supports secure uploads, configure limits/type validation and abuse controls on the service, update the request handling and customer instructions, and test real delivery. This site does not send attachments.

## Edit content and gallery

- Business details, services, vehicle labels, gallery metadata: `src/data.ts`.
- Layout and form: `src/main.tsx`. Styling: `src/style.css`.
- Add optimized JPEGs to `public/images/`, then add gallery entries with `file` (filename without `.jpg`), `title`, accurate `alt`, and `phase`.
- For before/after work, add two entries for the same vehicle, labeled `Before` and `After`; keep their order adjacent. Obtain permission before publishing customer photos. Never relabel stock samples as customer work. Remove sample labeling only for genuine business work.
- Fullscreen viewing includes native modal focus behavior, Escape/close and previous/next controls. Gallery images load lazily.
- Stock photos: Unsplash image IDs `photo-1503376780353-7e6692767b70`, `photo-1492144534655-ae79c964c9d7`, `photo-1507136566006-cfc505b114fc`, `photo-1519003722824-194d4455a60c`, `photo-1567899378494-47b22a2ae96a`, `photo-1516939884455-1445c8652f83`, `photo-1558981806-ec527fa84c39`. Review https://unsplash.com/license before reusing or replacing them. Images are stored locally; fonts are bundled locally from Google Fonts with system fallbacks.

## Remaining launch requirements

Replace sample photographs with authorized business work; configure and verify a real Formspree recipient; authenticate GitHub, create/push the repository and enable Pages. No pricing, hours, reviews, certifications, warranties or business history were invented.
