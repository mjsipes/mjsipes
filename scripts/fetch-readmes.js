#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const PROJECTS = [
  {
    name: 'layers4',
    url: 'https://raw.githubusercontent.com/mjsipes/layers4/main/README.md',
    repo: 'https://github.com/mjsipes/layers4',
    liveUrl: 'https://layers4.vercel.app/'
  },
  {
    name: 'drawtunes',
    url: 'https://raw.githubusercontent.com/mjsipes/drawtunes/main/README.md',
    repo: 'https://github.com/mjsipes/drawtunes',
    liveUrl: 'https://drawtunes.vercel.app/'
  },
  {
    name: 'f1racersipes-react',
    url: 'https://raw.githubusercontent.com/mjsipes/f1racersipes-react/main/README.md',
    repo: 'https://github.com/mjsipes/f1racersipes-react',
    liveUrl: 'https://www.f1racersipes.com/'
  },
  {
    name: 'lingo-llm',
    url: 'https://raw.githubusercontent.com/mjsipes/lingo-llm/main/README.md',
    repo: 'https://github.com/mjsipes/lingo-llm',
    liveUrl: 'https://lingo-llm.vercel.app/'
  },
  {
    name: 'mjthefox',
    url: 'https://raw.githubusercontent.com/mjsipes/mjthefox/main/README.md',
    repo: 'https://github.com/mjsipes/mjthefox',
    liveUrl: 'https://mjthefox.com/'
  },
  {
    name: 'pytorch_notebooks',
    url: 'https://raw.githubusercontent.com/mjsipes/pytorch_notebooks/main/README.md',
    repo: 'https://github.com/mjsipes/pytorch_notebooks',
    liveUrl: null  // No live demo
  },
  {
    name: 'stock_algorithms',
    url: 'https://raw.githubusercontent.com/mjsipes/stock_algorithms/main/README.md',
    repo: 'https://github.com/mjsipes/stock_algorithms',
    liveUrl: 'https://stock-algorithms.vercel.app/'
  },
  {
    name: 'tennis',
    url: 'https://raw.githubusercontent.com/mjsipes/tennis/main/README.md',
    repo: 'https://github.com/mjsipes/tennis',
    liveUrl: 'https://tennis-sipes.vercel.app/'
  }
];

async function fetchReadmes() {
  const dataDir = path.join(__dirname, '../data');
  const projectsDir = path.join(dataDir, 'projects');
  
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
  
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir);
  }

  console.log('Fetching project READMEs...\n');

  const results = [];

  for (const project of PROJECTS) {
    try {
      console.log(`Fetching ${project.name}...`);
      const response = await fetch(project.url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const markdown = await response.text();
      const filepath = path.join(projectsDir, `${project.name}.md`);
      
      fs.writeFileSync(filepath, markdown, 'utf8');
      console.log(`✓ Saved ${project.name}.md${project.liveUrl ? ` (Live: ${project.liveUrl})` : ''}\n`);
      
      results.push({
        name: project.name,
        repo: project.repo,
        liveUrl: project.liveUrl,
        filepath: `projects/${project.name}.md`
      });
    } catch (error) {
      console.error(`✗ Failed to fetch ${project.name}: ${error.message}\n`);
    }
  }

  const indexPath = path.join(dataDir, 'projects.json');
  fs.writeFileSync(indexPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n✓ Saved index to projects.json`);
  console.log(`\nFetched ${results.length}/${PROJECTS.length} projects successfully.`);
}

fetchReadmes().catch(console.error);

