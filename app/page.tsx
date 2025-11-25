import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import { ModeToggle } from "@/components/ModeToggle";
import ColorPalette from "@/components/ColorPalette";
import FaviconFlicker, {
  FaviconFlickerTimed,
} from "@/components/FaviconFlicker";
import LayeredMedia from "@/components/LayeredMedia";
import ContributionGraphWrapper from "@/components/ContributionGraphWrapper";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { getProjects } from "@/lib/projects";

// Project descriptions
const PROJECT_DESCRIPTIONS: Record<string, string> = {
  'layers4': 'A creative visual layering experiment exploring depth and composition in web design.',
  'drawtunes': 'AI-powered music recommendation app that suggests songs based on artwork and drawings.',
  'f1racersipes-react': 'Interactive F1 racing statistics and visualization dashboard built with React.',
  'lingo-llm': 'Language learning application powered by large language models for conversational practice.',
  'mjthefox': 'Personal portfolio and photography website showcasing creative work and projects.',
  'pytorch_notebooks': 'Collection of PyTorch tutorials and machine learning experiments.',
  'stock_algorithms': 'Stock market analysis tools and algorithmic trading strategy implementations.',
  'tennis': 'Tennis match tracking and statistics analysis application.',
};

export default function Home() {
  const projects = getProjects();

  return (
    <div className="font-sans items-center justify-items-center">
      <Banner />
      <div className="w-full h-16" />
      <main className="flex flex-col gap-[32px] items-center">

        <div className="w-full max-w-4xl grid grid-cols-2 gap-8 px-6 items-center">
          <div className="flex justify-center">
            <LayeredMedia width={400} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-base leading-relaxed mb-4">
            Hello! I'm a student at the University of Southern California's Viterbi School of Engineering.
            </p>

          </div>
        </div>

        <ContributionGraphWrapper />

        <Education />

        <Experience />

        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={`/projects/${project.name}`}
                className="group border border-gray-300 dark:border-gray-700 hover:border-sipes-blue dark:hover:border-sipes-orange transition-colors"
              >
                <div className="flex items-center p-4 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold capitalize text-base group-hover:text-sipes-green">
                        {project.name.replace(/-/g, ' ')}
                      </h3>
                      {project.liveUrl && (
                        <span className="text-[10px] bg-sipes-green text-white px-2 py-0.5 rounded">
                          LIVE
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {PROJECT_DESCRIPTIONS[project.name] || 'A software project showcasing technical skills and creativity.'}
                    </p>
                  </div>
                  <div className="w-24 h-16 flex-shrink-0 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <Image
                      src={`https://opengraph.githubassets.com/1/${project.repo.replace('https://github.com/', '')}`}
                      alt={`${project.name} preview`}
                      width={96}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
