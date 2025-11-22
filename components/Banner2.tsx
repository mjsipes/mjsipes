import React from 'react'
import LayeredMedia from './LayeredMedia'

interface Banner2Props {
  height?: string | number;
  width?: string | number;
}

const Banner2 = ({ height, width }: Banner2Props) => {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(55deg, hsl(209deg 90% 57%) 0%, hsl(199deg 100% 46%) 8%, hsl(194deg 100% 41%) 16%, hsl(185deg 100% 34%) 25%, hsl(171deg 100% 31%) 33%, hsl(158deg 97% 31%) 41%, hsl(105deg 39% 41%) 49%, hsl(85deg 52% 39%) 57%, hsl(70deg 68% 36%) 65%, hsl(58deg 97% 32%) 74%, hsl(49deg 100% 38%) 82%, hsl(41deg 100% 44%) 91%, hsl(35deg 99% 51%) 100%)',
      height: height,
      width: width,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <LayeredMedia width={300} />
      </div>
      <TypographyH1 />
      <div className="w-10"/>
      <TypographyH1Alt />
      <TypographyH3 />
    </div>
  )
}

export default Banner2

export function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
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

