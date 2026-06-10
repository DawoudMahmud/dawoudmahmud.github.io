# dawoudmahmud.github.io

Personal portfolio and GitHub Pages site for [Dawoud Mahmud](https://dawoudmahmud.github.io).

This site is designed to communicate my work across forward-deployed engineering, full-stack product development, cloud infrastructure, AI workflow automation, software QA, and customer-facing technical problem solving.

## Overview

The portfolio is a static site deployed through GitHub Pages. It focuses on a fast, dependency-light architecture so updates can be made directly in HTML/CSS and shipped through a normal Git workflow.

Core sections include:

- Hero positioning for forward-deployed engineering roles
- Selected project cards for marketplace, infrastructure, and AI workflow work
- Project archive with implementation details and links
- Experience and education timeline
- Resume PDF and LaTeX resume source
- Contact links for email, LinkedIn, and GitHub

## Technical Details

- **Deployment:** GitHub Pages from the `main` branch
- **Frontend:** Static HTML and CSS
- **Styling:** Custom responsive stylesheet in `assets/css/portfolio.css`
- **Legacy base CSS:** Existing HTML5 UP/Font Awesome assets retained for compatibility
- **Resume:** `Dawoud_Resume.pdf` with source in `Dawoud_Resume.tex`
- **Local preview:** Any static file server, such as Python's built-in HTTP server

## Local Development

From the repository root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Project Structure

```text
.
├── index.html              # Main portfolio homepage
├── projects.html           # Project archive
├── companies.html          # Experience and education timeline
├── Dawoud_Resume.pdf       # Current resume linked from the site
├── Dawoud_Resume.tex       # Resume source
├── assets/
│   ├── css/
│   │   ├── main.css        # Legacy base stylesheet
│   │   └── portfolio.css   # Custom portfolio redesign styles
│   └── js/                 # Legacy template scripts
├── images/                 # Profile, company, and project assets
└── blogs/                  # Archived writing
```

## Resume Workflow

The resume source can be compiled with `pdflatex`:

```bash
pdflatex Dawoud_Resume.tex
```

After compiling, replace `Dawoud_Resume.pdf` with the generated PDF so the site and resume stay aligned.

## Design Goals

The current version of the site is intentionally built around clarity and signal:

- Recruiters should quickly understand the role direction and strongest proof points.
- Engineering teams should be able to inspect projects, tools, and implementation areas.
- The site should feel polished without requiring a framework or build pipeline.
- Updates should stay simple enough to make during an active job search.

## Contact

- Email: [dawoud.mahmud@gmail.com](mailto:dawoud.mahmud@gmail.com)
- LinkedIn: [linkedin.com/in/dawoud-mahmud](https://www.linkedin.com/in/dawoud-mahmud/)
- GitHub: [github.com/DawoudMahmud](https://github.com/DawoudMahmud)
