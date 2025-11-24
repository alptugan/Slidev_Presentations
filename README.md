# Slidev Presentations

A collection of Slidev presentation projects for courses and workshops.

## 📚 2025-2026 Course Materials

- [Week 01 - Introduction](https://alptugan.github.io/Slidev_Presentations/2025-2026/week01_cod_207/)
- [Week 02 - Shapes](https://alptugan.github.io/Slidev_Presentations/2025-2026/week02_cod_207-Shapes/)
- [Week 03 - Computational Thinking](https://alptugan.github.io/Slidev_Presentations/2025-2026/week03_cod_207-Computational_Thinking/)
- [Week 04 - Loops & Moiré Patterns](https://alptugan.github.io/Slidev_Presentations/2025-2026/week04_cod_207-Loops-Moire_Patterns/)
- [Week 05 - Randomness & Repetition](https://alptugan.github.io/Slidev_Presentations/2025-2026/week05_cod_207-Randomness-Repetetion/)
- Week 06 - No Class: National Holiday (Research: Algorithmic Art Praxis)
- [Week 07 - Media](https://alptugan.github.io/Slidev_Presentations/2025-2026/week06_cod_207-Media/)
- [Week 08 - Image Processing](https://alptugan.github.io/Slidev_Presentations/2025-2026/week07_cod_207-Image-Processing/)
- [Week 09 - Typography](https://alptugan.github.io/Slidev_Presentations/2025-2026/week08_cod_207-Typography)
- [Week 10 - Sound](https://alptugan.github.io/Slidev_Presentations/2025-2026/week09_cod_207-Interactivity-Sound)
- [Week 11 - Autonomous Agents](https://alptugan.github.io/Slidev_Presentations/2025-2026/week11_cod_207-Autonomous-Agents)
- [Week 11 - ALAP](https://alptugan.github.io/Slidev_Presentations/Workshops/Algorithmic-Art-Praxis)
- Week 12 - Final Project Proposals
- Week 13 - Final Project Revision & Feedback
- Week 14 - Final Project Revision & Feedback
- Week 15 - Final Project Presentation

## Creative Coding Topics
- [Algorithmic Art Praxis]() - Link will be added

## 🎓 Workshops

- [Code and Algorithm on Design](https://alptugan.github.io/Slidev_Presentations/Workshops/Code-and-algorithm-on-design/)
- [OMM Arduino Workshop](https://alptugan.github.io/Slidev_Presentations/Workshops/OMM_Arduino_Workshop/)

## 🚀 Automated Deployment

This repository uses GitHub Actions to automatically build and deploy Slidev presentations to GitHub Pages.

### How It Works

The `.github/workflows/deploy.yml` workflow provides:

- **Incremental Builds**: Only rebuilds presentations that have changed, saving build time
- **Multi-Directory Support**: Scans both `2025-2026` and `Workshops` folders for Slidev projects
- **Artifact Caching**: Preserves previously built presentations, ensuring all projects remain accessible
- **Automatic Detection**: Detects new or modified presentations and builds them automatically on push to `main`
- **Manual Trigger**: Can be manually triggered via workflow_dispatch to rebuild all presentations

### Workflow Features

1. **Smart Change Detection**: Uses git diff to identify which presentation folders were modified
2. **Previous Build Restoration**: Downloads and extracts previous deployment artifacts to maintain all presentations
3. **Error Handling**: Validates each project has required files (package.json, pnpm-lock.yaml, slides.md)
4. **Consolidated Deployment**: Merges new builds with existing ones before deploying to GitHub Pages

### Directory Structure

```
.
├── 2025-2026/
│   ├── week01_cod_207/
│   │   ├── slides.md
│   │   ├── package.json
│   │   └── pnpm-lock.yaml
│   └── ...
├── Workshops/
│   ├── Code-and-algorithm-on-design/
│   └── OMM_Arduino_Workshop/
└── .github/
    └── workflows/
        └── deploy.yml
```

## 📝 Adding New Presentations

1. Create a new folder in either `2025-2026/` or `Workshops/`. For a different directory, edit the `deploy.yml` file.
2. Create a new Slidev project.
3. Commit and push to `main` branch
4. GitHub Actions will automatically build and deploy your presentation


## Updating Existing Presentations
1. Each presentation project must contain:
    - 📝 `slides.md` - The Slidev presentation content
    - 📝 `package.json` - Project dependencies
    - 📝 `global-bottom.vue` - Footer text
    - 📝 `style.css` - Custom styles
    - 📁 `components` folder
    - 📁 `pages` folder
2. Run `pnpm install` to download packages.
3. Run `pnpm run dev` to preview project on local host.

---

Built with [Slidev](https://sli.dev/) • Deployed on [GitHub Pages](https://pages.github.com/)