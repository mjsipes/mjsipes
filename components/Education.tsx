export function Education() {
  return (
    <div className="w-full max-w-4xl px-6">
      <div className="border-2 border-sipes-blue dark:border-sipes-orange p-6">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        
        <div className="space-y-1">
          <div className="font-bold text-lg">
            University of Southern California
          </div>
          
          <div className="flex justify-between items-baseline">
            <div className="italic text-base">
              M.S. in Computer Science
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              2025 - 2026
            </div>
          </div>
          
          <div className="flex justify-between items-baseline">
            <div className="italic text-base">
              B.S. in Computer Science
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              2021 - 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

