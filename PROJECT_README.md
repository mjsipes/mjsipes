# Project README System

## Overview

This website uses a build-time pre-fetch approach to keep project READMEs in sync with GitHub repos. The single source of truth is the GitHub repo READMEs.

## How It Works

1. **Data Source**: `scripts/fetch-readmes.js` contains the list of all projects with their GitHub raw README URLs
2. **Fetch Script**: Running `npm run fetch-readmes` fetches all READMEs and saves them to `data/projects/`
3. **Auto-fetch**: The `prebuild` script automatically fetches READMEs before every build
4. **Display**: The `/projects` page reads from the local files using `lib/projects.ts` utilities

## Usage

### Manual Fetch
```bash
npm run fetch-readmes
```

### Adding a New Project
Edit `scripts/fetch-readmes.js` and add to the `PROJECTS` array:
```javascript
{
  name: 'project-name',
  url: 'https://raw.githubusercontent.com/mjsipes/project-name/main/README.md',
  repo: 'https://github.com/mjsipes/project-name'
}
```

### Deployment
The script runs automatically before every build via the `prebuild` script, so:
- Vercel/Netlify deployments will always have fresh READMEs
- Local builds with `npm run build` will fetch fresh READMEs

### GitHub Action (Optional)
If you want to update READMEs on a schedule, you can add a GitHub Action that:
1. Runs `npm run fetch-readmes`
2. Commits changes to `data/`
3. Pushes to trigger deployment

## File Structure

```
mjsipes/
├── scripts/
│   └── fetch-readmes.js       # Fetch script
├── data/
│   ├── projects.json          # Project index
│   └── projects/              # README markdown files
│       ├── layers4.md
│       ├── drawtunes.md
│       └── ...
├── lib/
│   └── projects.ts            # Utilities to read projects
└── app/
    └── projects/
        └── page.tsx           # Projects page
```

