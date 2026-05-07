# Jacob's Portfolio

A Jekyll-based portfolio site with an interactive terminal takeover intro sequence.

## Stack
- **Jekyll 4** — static site generator
- **GitHub Pages** — hosting
- **Vanilla JS + Canvas API** — intro sequence
- **Custom CSS** — dark design system

---

## Getting Started in VS Code

### Prerequisites
- Ruby (https://www.ruby-lang.org/en/downloads/)
- Bundler: `gem install bundler`

### Install & Run
```bash
# 1. Install dependencies
bundle install

# 2. Run local dev server
bundle exec jekyll serve

# 3. Open in browser
# http://localhost:4000
```

The site will hot-reload when you save files.

---

## Folder Structure

```
jacob-portfolio/
├── _config.yml          # Site settings (update your name, email, handles)
├── _layouts/
│   ├── default.html     # Main layout with intro sequence
│   └── project.html     # Individual project page layout
├── _includes/
│   ├── nav.html         # Navigation bar
│   └── footer.html      # Footer
├── _projects/           # Add .md files here for each project
│   ├── vulnerability-detection.md
│   ├── cappo.md
│   └── portfolio.md
├── assets/
│   ├── css/main.css     # All styles
│   ├── js/intro.js      # Terminal takeover sequence
│   └── js/main.js       # Nav + scroll behavior
└── index.html           # Homepage content
```

---

## Customizing

### Update your info
Edit `_config.yml`:
```yaml
title: Your Name's Portfolio
email: you@email.com
github_username: yourhandle
linkedin_username: yourhandle
```

### Add a project
Create a new file in `_projects/my-project.md`:
```markdown
---
layout: project
title: My Project
description: Short description shown on the card.
stack: Python · React
role: Solo Developer
github: https://github.com/you/project
live: https://yourproject.com
---

## Overview
Write your project details here in Markdown.
```

### Change your name in the nav
Edit `_includes/nav.html` — find `JL_` and replace with your initials.

---

## Deploying to GitHub Pages

1. Create a repo named `yourusername.github.io`
2. Push this folder to that repo
3. Go to repo Settings → Pages → set branch to `main`
4. Your site will be live at `https://yourusername.github.io`
