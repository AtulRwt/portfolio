# Atul Rawat — Interactive Portfolio

A modern, responsive, multi‑page portfolio built with HTML, CSS, and JavaScript. Includes About, Skills, Projects, and Contact pages, smooth animations, and a dark/light theme toggle.

## Structure

- `index.html` — Landing page with hero and featured projects
- `about.html` — Bio and strengths
- `skills.html` — Skill cards and tags
- `projects.html` — All projects grid
- `contact.html` — Contact form and quick links
- `assets/css/style.css` — Styles, layout, animations, and components
- `assets/js/main.js` — Shared header/footer, theme, and page render logic

## Live link
https://portfolio-opal-three-bffnk2zeyt.vercel.app/

## Customize

- Update links and social in `assets/js/main.js` (search for the `data` object)
- Edit navigation items in the `routes` array in `main.js`
- Tweak colors by changing CSS variables in `assets/css/style.css`
- Replace `Atul_Rawat_Resume.pdf` with your actual resume file in the root folder (optional)

## Notes

- All pages share the same header & footer rendered by JavaScript for consistency.
- Data is embedded client‑side to avoid fetch/CORS issues when opening files from disk.
