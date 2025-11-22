import React from 'react'
import LayeredMedia from './LayeredMedia'
import { Github, Linkedin, FileText } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

interface BannerProps {
  height?: string | number;
  width?: string | number;
}

const Banner = ({ height, width }: BannerProps) => {
  return (
    <header 
      className="flex h-16 shrink-0 items-center justify-center w-full relative"
      style={{
        backgroundImage: 'linear-gradient(45deg, hsl(240deg 100% 20%) 0%, hsl(281deg 100% 21%) 8%, hsl(304deg 100% 23%) 17%, hsl(319deg 100% 30%) 25%, hsl(329deg 100% 36%) 33%, hsl(336deg 100% 41%) 42%, hsl(346deg 83% 51%) 50%, hsl(3deg 95% 61%) 58%, hsl(17deg 100% 59%) 67%, hsl(30deg 100% 55%) 75%, hsl(40deg 100% 50%) 83%, hsl(48deg 100% 50%) 92%, hsl(55deg 100% 50%) 100%)'
      }}>
      <TypographyH1 />
      <div style={{ 
        position: 'absolute', 
        right: '2rem', 
        display: 'flex', 
        gap: '1.5rem', 
        alignItems: 'center' 
      }}>
        <ModeToggle />
        <a 
          href="/michael_sipes_resume.pdf" 
          target="_blank"
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 0.2s'
          }}
          title="Resume"
        >
          <FileText size={20} />
        </a>
        <a 
          href="https://www.linkedin.com/in/michael-sipes" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 0.2s'
          }}
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://github.com/mjsipes" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 0.2s'
          }}
          title="GitHub"
        >
          <Github size={20} />
        </a>
      </div>
    </header>
  )
}

export default Banner



export function TypographyH1() {
  return (
    <h1 style={{
      fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '2em',
      lineHeight: '1.1',
      fontWeight: 700,
      fontSynthesis: 'none',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }}>
      Hello World
    </h1>
  )
}

export function TypographyH1Alt() {
  return (
    <h2 style={{
      fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '3.2em',
      lineHeight: '1.1',
      fontWeight: 400
    }}>
      Hello World
    </h2>
  )
}
  
export function TypographyH3() {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Hello World
    </h3>
  )
}
