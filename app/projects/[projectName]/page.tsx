import { getProjects, getProjectReadme } from '@/lib/projects';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ProjectLinks } from '@/components/ProjectLinks';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    projectName: project.name,
  }));
}

export default function ProjectPage({ params }: { params: { projectName: string } }) {
  const projects = getProjects();
  const project = projects.find(p => p.name === params.projectName);
  
  if (!project) {
    notFound();
  }

  const readme = getProjectReadme(project.name);

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <Link href="/" className="text-sm hover:underline mb-4 inline-block">
          ← Home
        </Link>
        <h1 className="text-4xl font-bold capitalize mb-6">{project.name.replace(/-/g, ' ')}</h1>
        
        <ProjectLinks 
          repo={project.repo} 
          liveUrl={project.liveUrl}
          projectName={project.name}
        />
      </header>

      {readme ? (
        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-sipes-green prose-a:text-sipes-blue dark:prose-a:text-sipes-orange">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {readme}
          </ReactMarkdown>
        </article>
      ) : (
        <p className="text-gray-500">README not available</p>
      )}
    </div>
  );
}

