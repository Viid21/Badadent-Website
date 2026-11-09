# AGENTS.md — Badadent clinic website

## Project
Static website for **Clínica Dental Badadent** (Badalona, Spain), a family dental clinic with 20+ years of history.
Primary audience: **older patients** who must be able to book an appointment without help.
Goal: easy to read, easy to use, booking via a guided chat that ends by opening WhatsApp with a pre-filled message.

## What we want to achieve
This website has one job: **help the clinic's patients, especially older people, find what they need and book an appointment on their own, without calling a relative for help.**

Success means:
1. **Anyone can read it.** Large text, high contrast, short sentences, and a button to make everything bigger. A 75-year-old on a phone should never have to zoom.
2. **Booking takes under a minute.** A few simple questions with big buttons, then WhatsApp opens with the message already written. The patient only presses "send".
3. **The important things are always within reach.** The phone number, the "Pedir cita" button and the emergency call are visible from anywhere on the page.
4. **Patients trust what they see.** Real photos of the clinic, honest and clear information, no exaggerated promises, and full compliance with Spanish health advertising and privacy rules.
5. **It is fast and reliable.** It loads quickly on a slow mobile connection, works on any modern browser, and stays online at all times.
6. **It is easy to maintain.** Anyone can update hours, phone numbers, texts or photos years from now by following the README, without touching complex code.

When in doubt, choose the option that is **simpler for the patient**, even if it is less impressive visually.

## Stack and constraints
- Plain **HTML + CSS + vanilla JavaScript**. No frameworks, no build step, no npm dependencies unless explicitly approved.
- **No backend.** No database, no server-side code, no forms posting anywhere. Patient data never leaves the browser except through the WhatsApp link the user sends themselves.
- **No third-party scripts**: no analytics, no Google Maps embed, no external chat widgets, no tracking pixels, no external fonts from CDNs (self-host fonts in `/assets/fonts/`). This keeps the site cookie-free (no cookie banner needed).
- Hosted on **Netlify** (static deploy from Git). Do not use Cloudflare proxy/CDN (LaLiga IP blocks in Spain take Cloudflare sites down during football matches).
- Must work on mobile first; most patients will use a phone.

## Folder structure (keep it readable for future maintenance)
The site will be updated over time by someone who may not be the original developer. Prefer clear, boring, predictable names over clever ones. One responsibility per file. Spanish-speaking maintainers: folder names stay in English (web convention), but every folder has a short comment here.

```
/
├── index.html                 # Home page (all main sections)
├── aviso-legal.html           # Legal notice (LSSI)
├── privacidad.html            # Privacy policy (RGPD)
├── 404.html                   # Friendly "page not found"
├── netlify.toml               # Netlify config + security headers
├── robots.txt
├── sitemap.xml
├── README.md                  # How to edit content and deploy (in Spanish)
├── AGENTS.md                  # This file
│
├── assets/
│   ├── css/
│   │   ├── base.css           # Reset, variables (colors, font sizes, spacing), typography
│   │   ├── layout.css         # Header, footer, sections, grid
│   │   ├── components.css     # Buttons, cards, badges, emergency block, lightbox
│   │   └── chat.css           # Booking chat only
│   ├── js/
│   │   ├── config.js          # ★ CLINIC DATA: phone, WhatsApp, address, hours, treatments, chat texts
│   │   ├── chat.js            # Booking chat logic (reads texts from config.js)
│   │   ├── font-size.js       # "Letra más grande" toggle
│   │   ├── gallery.js         # Photo lightbox
│   │   └── main.js            # Small page-level wiring (open chat from cards/buttons)
│   ├── img/
│   │   ├── clinic/            # Optimized clinic photos generated from /photos-source (WebP + JPEG)
│   │   ├── icons/             # SVG icons for treatments and UI
│   │   └── brand/             # Logo, favicon, Open Graph image
│   └── fonts/                 # Self-hosted web fonts (woff2)
│
├── photos-source/             # ★ ORIGINAL clinic photos (JPEG) provided by the clinic — never edit or delete
│
└── scripts/
    └── optimize-images.*      # Regenerates /assets/img/clinic from /photos-source
```

Rules:
- **Anything the clinic may ask to change** (phone, WhatsApp, hours, address, treatment names/descriptions, chat questions and answers) lives in `assets/js/config.js`, with comments in Spanish explaining each field. HTML sections that show this data are filled from `config.js` or, if hardcoded for SEO, marked with `<!-- EDITAR: ... -->` comments.
- CSS uses custom properties defined once in `base.css`; no magic numbers scattered across files.
- No minification or bundling in the repo; files stay human-readable. Netlify serves them compressed.
- `README.md` (in Spanish) must explain in plain steps: how to change hours/phone/texts, how to add or replace a photo, how to deploy, and where each account (domain, Netlify, GitHub) is managed.

## Clinic photos
- The original photos are in **`/photos-source/`** (JPEG, straight from the clinic). Treat them as read-only originals; if the folder has a different name in the repo, use that one and rename it to `photos-source` only if asked.
- Generate web versions into `/assets/img/clinic/` with a reproducible script in `/scripts/` (e.g. Node + `sharp`, or a shell script with `cwebp`/ImageMagick), so new photos can be processed the same way later.
  - Fix orientation from EXIF, then **strip EXIF metadata** (may contain GPS/device info).
  - Resize: max 1600px wide for lightbox, 800px wide for gallery thumbnails/cards (also 400px for small screens via `srcset`).
  - Output **WebP** (quality ~75–80) plus a **JPEG** fallback (quality ~80, progressive).
  - Clear, descriptive, lowercase file names: `recepcion-1600.webp`, `sala-espera-800.jpg`, `gabinete-1-1600.webp`, `fachada-1600.webp`.
- Use `<picture>` with WebP source + JPEG fallback, `srcset`/`sizes`, explicit `width`/`height`, `loading="lazy"` except the hero façade photo (`fetchpriority="high"`).
- Write meaningful Spanish `alt` text per photo (e.g. "Recepción de la clínica, amplia y luminosa"). If the content of a photo is unclear, leave a `TODO` alt rather than guessing.
- Photos must not show identifiable patients or patient data (screens, files). Flag any that do instead of publishing them.

## Language
- All user-facing text in **Spanish**, formal "usted" register, short sentences, plain words (no jargon unless explained: e.g. "Tratamiento de las encías (periodoncia)").
- Code, comments, commit messages in English.
- A Catalan version may be added later: keep strings easy to extract.

## Accessibility (mandatory)
- Base font size at least 18px; use `rem` everywhere so the "Letra más grande" button can scale the whole page (toggle a class on `<html>` that raises the root font size, e.g. 100% → 125% → 150%). Persist the choice in `localStorage` wrapped in try/catch.
- Tap targets at least **48×48px**, generous spacing between buttons.
- WCAG AA contrast minimum (aim for AAA on body text).
- Semantic HTML: landmarks, one `<h1>`, logical heading order, real `<button>` and `<a>` elements.
- Visible focus styles; full keyboard navigation; the chat must be usable with keyboard and screen reader (`aria-live="polite"` for new messages, focus management when opening/closing).
- No content that relies on color alone; no animations that can't be disabled (`prefers-reduced-motion`).
- Images need meaningful `alt` text in Spanish.

## Page content (from the approved proposal)
**Header (sticky):** logo "BADAdent – Clínica dental · Badalona", button "Letra más grande", phone button "931 78 26 63" (`tel:` link).

**Hero:** badge "La primera visita es gratis"; heading "Su dentista de confianza en Badalona"; text "Más de 20 años cuidando sonrisas con un trato cercano y de familia. Pida su cita fácilmente: escríbanos en el chat y le contestamos por WhatsApp."; green button "Pedir cita por chat" + outline button "Llamar"; note "Sin complicaciones: usted solo contesta unas preguntas sencillas."; photo of the clinic façade.

**Floating button** (bottom-right, always visible): green "Pedir cita" → opens chat.

**Treatments** ("Nuestros tratamientos"), cards with icon + one sentence; clicking a card opens the chat with that reason preselected:
- Revisiones y limpieza — Una revisión completa y una limpieza para cuidar su boca.
- Implantes — Dientes fijos con prótesis sobre implantes. *(see copy rules)*
- Prótesis y dentaduras — Para volver a comer y sonreír con total comodidad.
- Encías — Tratamiento de las encías (periodoncia). *(see copy rules)*
- Endodoncia — Para salvar la muela y quitar el dolor.
- Estética y blanqueamiento — Aclare su sonrisa. *(see copy rules)*
- Niños y nietos — Odontopediatría: trato cariñoso para los más pequeños.
- Urgencias — Atendemos las urgencias el mismo día.

**Emergencies block** (red, highly visible): "¿Tiene dolor o una urgencia?" / "Atendemos las urgencias el mismo día. Llámenos ahora y le indicamos cómo ayudarle." Buttons: "Llamar: 931 78 26 63" and "Avisar por chat".

**Opening hours** ("Nuestro horario"): Lunes a viernes 9:00 a 20:00 · Sábados 9:00 a 13:30 · Domingos cerrado.
**Address:** Carrer de Ponent, 160 · 08912 Badalona. Button "Cómo llegar" = plain link to Google Maps (opens in new tab). **No embedded map.**

**Gallery** ("Conozca nuestra clínica"): "Espacios amplios, luminosos y a pie de calle. Pulse una foto para verla más grande." 6 photos, accessible lightbox (Esc to close, focus trap, close button).

**Footer:** clinic legal name, address, phone, **sanitary registry number** (placeholder until provided), links to Aviso legal and Política de privacidad.

## Booking chat
Scripted, step-by-step chat (not AI, no network calls). Each step shows large tap-able answer buttons; free text only where needed.
1. Bot: "Hola, buenos días. Soy el asistente de Badadent. ¿En qué le puedo ayudar?" → options: Quiero pedir cita / Tengo una urgencia / Tengo una pregunta.
2. Bot: "Perfecto, le ayudo con la cita. ¿Por qué motivo viene?" → options: Primera visita gratis / Revisión y limpieza / Implantes / Prótesis / Encías / Endodoncia / Estética / Niños / Otro.
3. Bot: "¿Cómo se llama usted?" → text input (placeholder "Su nombre").
4. Bot: "Encantados, {nombre}. ¿Cuál es su número de teléfono?" → `type="tel"`, `inputmode="tel"`, validate Spanish phone (9 digits, optional +34, ignore spaces); friendly error message if invalid.
5. Bot: "¿Prefiere por la mañana o por la tarde?" → Por la mañana / Por la tarde / Me da igual.
6. Summary + button "Enviar por WhatsApp" → opens `https://wa.me/<WHATSAPP_NUMBER>?text=<encodeURIComponent(message)>`.
   Message template: "Hola, soy {nombre}. Quiero pedir cita para: {motivo}. Prefiero {franja}. Mi teléfono es {telefono}."
- Header with restart and close buttons. Back/edit previous answer should be possible.
- Trim and length-limit all inputs; never inject user input as HTML (use `textContent`).
- "Tengo una urgencia" path: show the phone call button prominently first, then offer to continue via WhatsApp.
- `WHATSAPP_NUMBER` lives in `config.js`; **currently unconfirmed** — leave a clear TODO.

## Copy rules (health advertising — do not break)
- Never describe the clinic or staff as **"especialistas"** (dental specialties are not officially recognised in Spain). Use "profesionales con experiencia en…".
- No guaranteed results or absolute claims: avoid "dientes fijos en 24 horas", "2 a 4 tonos en una sola sesión", "sin dolor", "la mejor clínica", "la tecnología más avanzada". Use "según cada caso", "en muchos casos", "le explicaremos las opciones".
- "Primera visita gratis" is allowed only as approved by the clinic; do not add other offers, discounts or prices.
- No patient photos, testimonials or before/after images.
- Do not invent facts (staff names, years, equipment, prices). If something is missing, add a visible `TODO` placeholder.

## Legal pages
- **Aviso legal (LSSI):** owner name, NIF, address, email, professional college and registration number of the medical director, sanitary registry number. Use placeholders.
- **Política de privacidad (RGPD):** explain the site stores no personal data; the chat only builds a message that the user sends through WhatsApp (Meta), whose own privacy policy applies; the clinic handles the conversation as data controller; contact for data rights. Note that the site uses no cookies.

## Security
- `netlify.toml` with headers: `Content-Security-Policy` (self only, allow `wa.me` and `maps.google.com` links), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` disabling unused features, `X-Frame-Options: DENY`.
- No inline `onclick` handlers; no `innerHTML` with dynamic data.
- External links: `rel="noopener noreferrer"`.

## Performance
- Images: see "Clinic photos" section.
- Target Lighthouse ≥ 95 in Performance, Accessibility, Best Practices and SEO.
- Basic SEO: title, meta description, Open Graph tags, `LocalBusiness`/`Dentist` JSON-LD with address, phone and opening hours.

## Visual style
- Palette: dark teal/navy `#114A63`-ish for headings and primary UI, light blue accent for "dent", warm off-white background `#F6F3EE`, white cards, green `#22A45A`-ish for booking buttons, red `#C0392B`-ish for emergencies. Verify contrast.
- Serif for headings, clean sans-serif for body. Rounded cards, soft shadows, lots of white space.

## Open items (do not resolve by guessing)
- [ ] Confirm WhatsApp number (currently only landline 931 78 26 63 known).
- [ ] Sanitary registry number for footer.
- [ ] Legal entity data for Aviso legal.
- [ ] Clinic to validate all treatment texts.
- [ ] Clinic to approve which photos from `/photos-source/` are published.
- [ ] Domain name.

## Working agreement
- Make small, focused changes; explain what changed.
- Before finishing a task, check: mobile layout at 360px, keyboard navigation, font-size toggle at max size, chat end-to-end produces a correct WhatsApp URL.
