import Image from 'next/image';
import { glimpse } from '@/components/kibo-ui/glimpse/server';

interface ProjectLinksProps {
  repo: string;
  liveUrl?: string | null;
  projectName: string;
}

export async function ProjectLinks({ repo, liveUrl, projectName }: ProjectLinksProps) {
  const livePreview = liveUrl ? await glimpse(liveUrl) : null;
  const repoPreview = await glimpse(repo);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {liveUrl && livePreview && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border border-sipes-blue dark:border-sipes-orange hover:bg-sipes-blue/10 dark:hover:bg-sipes-orange/10 transition-colors overflow-hidden"
        >
          {livePreview.image && (
            <div className="aspect-[120/63] w-full relative bg-gray-100 dark:bg-gray-800">
              <Image
                src={livePreview.image}
                alt={livePreview.title || projectName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}
          <div className="p-4">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Live Demo</div>
            <div className="font-medium text-sipes-blue dark:text-sipes-orange truncate">
              {livePreview.title || projectName.replace(/-/g, ' ')}
            </div>
            {livePreview.description && (
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                {livePreview.description}
              </p>
            )}
          </div>
        </a>
      )}
      
      <a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors overflow-hidden"
      >
        {repoPreview?.image && (
          <div className="aspect-[120/63] w-full relative bg-gray-100 dark:bg-gray-800">
            <Image
              src={repoPreview.image}
              alt={repoPreview.title || 'GitHub'}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}
        <div className="p-4">
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">GitHub Repository</div>
          <div className="font-medium truncate">
            {repoPreview?.title || repo.replace('https://github.com/', '')}
          </div>
          {repoPreview?.description && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
              {repoPreview.description}
            </p>
          )}
        </div>
      </a>
    </div>
  );
}

