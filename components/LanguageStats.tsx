import { getLanguageStats } from '@/lib/github';

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89e051',
  Vue: '#41b883',
  Svelte: '#ff3e00',
};

export default async function LanguageStats({ username = 'mjsipes' }: { username?: string }) {
  const stats = await getLanguageStats(username);

  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl p-6 border border-gray-300 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Languages</h3>
      
      <div className="space-y-3">
        {stats.map(({ language, percentage }) => (
          <div key={language}>
            <div className="flex justify-between text-sm mb-1">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: LANGUAGE_COLORS[language] || '#8b949e' }}
                />
                <span>{language}</span>
              </div>
              <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all"
                style={{ 
                  width: `${percentage}%`,
                  backgroundColor: LANGUAGE_COLORS[language] || '#8b949e'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

