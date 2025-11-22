import fs from 'fs';
import path from 'path';

export interface Project {
  name: string;
  repo: string;
  liveUrl?: string;
  filepath: string;
}

export function getProjects(): Project[] {
  const dataPath = path.join(process.cwd(), 'data', 'projects.json');
  
  if (!fs.existsSync(dataPath)) {
    return [];
  }
  
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
}

export function getProjectReadme(projectName: string): string | null {
  const readmePath = path.join(process.cwd(), 'data', 'projects', `${projectName}.md`);
  
  if (!fs.existsSync(readmePath)) {
    return null;
  }
  
  return fs.readFileSync(readmePath, 'utf8');
}

