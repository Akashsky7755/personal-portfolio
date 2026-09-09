# Akash Gautam — Portfolio

Personal portfolio website for Akash Gautam, a Computer Science student and full-stack (MERN) / WordPress web developer. The site presents an about section, skills, projects, and a working contact form.

**Live site:** _add your deployed URL here_

## Features

- Single-page layout with sticky nav and smooth-scroll anchor links (About, Skills, Projects, Contact)
- Scroll-triggered reveal animations via `IntersectionObserver`, with a `prefers-reduced-motion` fallback
- Contact form wired to [Formspree](https://formspree.io/) with client-side validation, async submit, and status messages
- Honeypot field for basic spam protection
- Downloadable resume (PDF) linked from the hero section and contact section
- Fully responsive layout with a dark, terminal-inspired visual theme

## Tech Stack

- HTML5
- CSS3 (custom properties, animations, no framework)
- Vanilla JavaScript (no build step, no dependencies)
- Google Fonts: JetBrains Mono, Space Grotesk
- Formspree for form handling

## Project Structure

```
.
├── index.html              # Page markup and content
├── style.css                # Styling, theme, and animations
├── script.js                 # Scroll reveal + contact form logic
├── Akash_Gautam_Resume.pdf   # Downloadable resume
└── images/
    └── my photo.jpeg          # Profile photo
```

## Getting Started

No build tools required — it's a static site.

1. Clone the repository
   ```bash
   git clone https://github.com/Akashsky7755/<repo-name>.git
   cd <repo-name>
   ```
2. Open `index.html` directly in a browser, or serve it locally:
   ```bash
   npx serve .
   ```

## Configuration

To use the contact form with your own Formspree account, replace the form `action` URL in `index.html`:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Deployment

This is a static site and can be deployed on any static host, e.g.:

- GitHub Pages
- Netlify
- Vercel

## Contact

- **Email:** cfact6507@gmail.com
- **Phone:** +91 7991832796
- **LinkedIn:** [linkedin.com/in/akash-gautam-a05922335](https://linkedin.com/in/akash-gautam-a05922335)
- **GitHub:** [github.com/Akashsky7755](https://github.com/Akashsky7755)

## License

© 2026 Akash Gautam. All rights reserved.
