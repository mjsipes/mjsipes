import Image from "next/image";
import Link from "next/link";
import Banner from "../../components/Banner";
import Banner2 from "../../components/Banner2";
import { ModeToggle } from "../../components/ModeToggle";
import ColorPalette from "../../components/ColorPalette";
import FaviconFlicker, {
  FaviconFlickerTimed,
} from "@/components/FaviconFlicker";
import LayeredMedia from "@/components/LayeredMedia";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sipes-green lg:sticky top-0 z-10 bg-background overflow-hidden w-full justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <div className="border-l border-border h-6 mx-2" />
          <Link href="/vision" className="hover:underline">Vision</Link>
        </div>
        <ModeToggle />
      </header>
      <main className="flex flex-col gap-[32px] items-center ">
        <h2 className="text-2xl font-bold">Banner Experiments</h2>
        <Banner height={200} width={1800} />
        <Banner2 height={200} width={1800} />
        
        <h2 className="text-2xl font-bold">Component Experiments</h2>
        <LayeredMedia width={400} />
        
        <div className="flex flex-row">
          <Image
            src="/michael_sipes_headshot.JPG"
            alt="Headshot of Michael Sipes"
            width={500}
            height={500}
            unoptimized
          />
          <Image
            src="/favicon.ico"
            alt="fox"
            className="aspect-square size-8"
            width={64}
            height={64}
          />
          <ColorPalette />
          <Image
            src="/1.gif"
            alt="description"
            width={500}
            height={500}
            unoptimized
          />
        </div>
        <ColorPalette />
        <FaviconFlicker />
        <FaviconFlickerTimed />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        hello from footer
      </footer>
    </div>
  );
}
