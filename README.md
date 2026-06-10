# dawoudmahmud.github.io

Personal portfolio and GitHub Pages site for [Dawoud Mahmud](https://dawoudmahmud.github.io).

## Quick Links

- **Live portfolio:** [dawoudmahmud.github.io](https://dawoudmahmud.github.io)
- **Resume PDF:** [Dawoud_Resume.pdf](https://dawoudmahmud.github.io/Dawoud_Resume.pdf)
- **LinkedIn:** [linkedin.com/in/dawoud-mahmud](https://www.linkedin.com/in/dawoud-mahmud/)
- **GitHub:** [github.com/DawoudMahmud](https://github.com/DawoudMahmud)
- **Email:** [dawoud.mahmud@gmail.com](mailto:dawoud.mahmud@gmail.com)

No local setup is required to view the portfolio or resume. The public site is served directly through GitHub Pages.

## About

This portfolio presents my work across forward-deployed engineering, full-stack product development, cloud infrastructure, AI workflow automation, software QA, and customer-facing technical problem solving.

The site is designed to make the highest-signal information easy to access:

- Role direction and positioning for forward-deployed engineering
- Selected projects across marketplace, infrastructure, and AI workflow work
- Project archive with technical context and links
- Experience and education timeline
- Current resume as a directly accessible PDF
- Contact links for email, LinkedIn, and GitHub

## Technical Overview

- **Deployment:** GitHub Pages from the `main` branch
- **Frontend:** Static HTML and CSS
- **Styling:** Custom responsive stylesheet in `assets/css/portfolio.css`
- **Base assets:** Existing HTML5 UP/Font Awesome assets retained where useful
- **Resume:** `Dawoud_Resume.pdf`, with LaTeX source in `Dawoud_Resume.tex`
- **Build step:** None required for the website itself

## Project Structure

```text
.
├── index.html              # Main portfolio homepage
├── projects.html           # Project archive
├── companies.html          # Experience and education timeline
├── Dawoud_Resume.pdf       # Current resume linked from the live site
├── Dawoud_Resume.tex       # Resume source
├── assets/
│   ├── css/
│   │   ├── main.css        # Legacy base stylesheet
│   │   └── portfolio.css   # Custom portfolio redesign styles
│   └── js/                 # Legacy template scripts
├── images/                 # Profile, company, and project assets
└── blogs/                  # Archived writing
```

## Maintenance

To preview changes locally:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

To compile the resume source:

```bash
pdflatex Dawoud_Resume.tex
```

After compiling, replace `Dawoud_Resume.pdf` with the generated PDF so the live site and resume stay aligned.

## Design Goals

- Keep recruiter access low-friction: live site first, direct resume PDF second.
- Make the strongest technical and customer-facing proof points easy to scan.
- Show engineering range without requiring visitors to inspect the repository.
- Keep the implementation static, fast, and easy to update during an active job search.
