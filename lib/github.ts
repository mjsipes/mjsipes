// Fetch user's repositories
export async function fetchGitHubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

// Calculate language statistics from repositories
export async function getLanguageStats(username: string) {
  const repos = await fetchGitHubRepos(username);
  const languageTotals: Record<string, number> = {};
  
  for (const repo of repos) {
    if (repo.fork) continue; // Skip forked repos
    
    try {
      const langResponse = await fetch(repo.languages_url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }
      });
      
      if (!langResponse.ok) continue;
      const languages = await langResponse.json();
      
      // Aggregate language bytes
      for (const [lang, bytes] of Object.entries(languages)) {
        languageTotals[lang] = (languageTotals[lang] || 0) + (bytes as number);
      }
    } catch (error) {
      console.error(`Error fetching languages for ${repo.name}:`, error);
    }
  }
  
  // Calculate percentages
  const total = Object.values(languageTotals).reduce((sum, bytes) => sum + bytes, 0);
  const languageStats = Object.entries(languageTotals)
    .map(([language, bytes]) => ({
      language,
      bytes,
      percentage: ((bytes / total) * 100).toFixed(1)
    }))
    .sort((a, b) => b.bytes - a.bytes)
    .slice(0, 5); // Top 5 languages
  
  return languageStats;
}

// Fetch GitHub contribution data using GraphQL API
export async function getContributionData(username: string, year: number) {
  const token = process.env.GITHUB_TOKEN;
  
  if (!token) {
    console.error('GITHUB_TOKEN not found in environment variables');
    return null;
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  
  // If requesting current year, use today's date as end date
  // Otherwise use full year range
  const startDate = `${year}-01-01T00:00:00Z`;
  const endDate = year === currentYear 
    ? now.toISOString() 
    : `${year}-12-31T23:59:59Z`;

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          username,
          from: startDate,
          to: endDate,
        },
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('GitHub API error:', response.status);
      return null;
    }

    const result = await response.json();
    
    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      return null;
    }

    const weeks = result.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    
    if (!weeks) return null;

    // Flatten weeks into days and format for contribution graph
    const contributions = weeks.flatMap((week: any) => 
      week.contributionDays.map((day: any) => {
        const count = day.contributionCount;
        // Calculate level (0-4) based on contribution count
        let level = 0;
        if (count > 0) level = 1;
        if (count >= 3) level = 2;
        if (count >= 6) level = 3;
        if (count >= 9) level = 4;
        
        return {
          date: day.date,
          count,
          level,
        };
      })
    );

    return contributions;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return null;
  }
}

