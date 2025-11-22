import { getContributionData } from "@/lib/github";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import ContributionGraphClient from "./ContributionGraphClient";

export default async function ContributionGraphWrapper({ username = "mjsipes" }: { username?: string }) {
  const now = new Date();
  const year = now.getFullYear();
  
  // Try to fetch real GitHub data
  let data = await getContributionData(username, year);
  
  // Fallback to sample data if GitHub fetch fails
  if (!data) {
    console.warn('Using sample contribution data - check GITHUB_TOKEN');
    const maxCount = 20;
    const maxLevel = 4;
    const days = eachDayOfInterval({
      start: startOfYear(now),
      end: endOfYear(now),
    });

    data = days.map((date) => {
      const c = Math.round(
        Math.random() * maxCount - Math.random() * (0.8 * maxCount)
      );
      const count = Math.max(0, c);
      const level = Math.ceil((count / maxCount) * maxLevel);

      return {
        date: formatISO(date, { representation: "date" }),
        count,
        level,
      };
    });
  }

  return <ContributionGraphClient data={data} />;
}

