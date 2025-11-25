export function Experience() {
  return (
    <div className="w-full max-w-4xl px-6">
      <div className="border-2 border-sipes-green dark:border-sipes-green p-6">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        
        <div className="space-y-3">
          <div className="font-bold text-lg">
            RingCentral
          </div>
          
          <div className="flex justify-between items-baseline">
            <div className="italic text-base">
              AI Software Engineering Intern
            </div>
            <div className="text-base text-gray-600 dark:text-gray-400">
              June 2024 - August 2024
            </div>
          </div>
          
          <ul className="list-disc ml-5 space-y-2 text-base">
            <li>
              Built a retrieval-augmented generation system to detect and consolidate duplicate content across a knowledge base of 2,000+ articles.
            </li>
            <li>
              Conducted interviews with article writers, understood their workflow challenges, and defined technical requirements for the solution.
            </li>
            <li>
              Implemented the solution by generating semantic embeddings with OpenAI and storing them in Supabase (pgvector extension) to enable similarity search.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

