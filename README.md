# JustinePortfolio (Portfolio Website)

This is a simple responsive portfolio scaffold built with plain HTML, CSS and a small JavaScript file. It uses a placeholder image `assets/images/thumbnail.svg` as the design base — replace it with your `thumbnail.png` to match the screenshot design.

Files added/updated
- `index.html` — main page (hero, about, sections, projects, contact, footer)
- `assets/css/styles.css` — responsive styles, spacing and animations
- `assets/js/script.js` — mobile nav toggle, smooth scroll, reveal-on-scroll
- `assets/images/thumbnail.svg` — placeholder profile/project image (replace with `thumbnail.png`)

How to view locally (XAMPP)
1. Place this folder in your XAMPP `htdocs` directory (looks like it already is):

   c:\xampp\htdocs\JustinePortfolio

2. Start Apache in XAMPP and open in your browser:

   http://localhost/JustinePortfolio/

Replace the thumbnail
- Copy your `thumbnail.png` into `assets/images/` and update the `img` src in `index.html` if you want to keep the same name. The layout is responsive — a square-ish image around 800×1000 (or cropped) will work nicely.

Next improvements (optional)
- Add real project pages and modal previews.
- Wire a contact form with server-side handling or an email service.
- Replace social links with real accounts and add SVG icons.
- Add small unit tests for JS functions if you introduce a build step.

Enjoy — open `index.html` in the browser to preview.
