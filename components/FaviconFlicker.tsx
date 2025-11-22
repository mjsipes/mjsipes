"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function FaviconFlicker() {
  const [isHovered, setIsHovered] = useState(false)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (!isHovered) {
      setOpacity(1)
      return
    }

    const interval = setInterval(() => {
      setOpacity(prev => prev === 1 ? 0 : 1)
    }, 40)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <Image
        src="/favicon.ico"
        alt="favicon"
        width={32}
        height={32}
        style={{ 
          opacity: opacity
        }}
      />
    </div>
  )
}

export function FaviconFlickerTimed() {
  const [opacity, setOpacity] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const [isFlickering, setIsFlickering] = useState(false)

  useEffect(() => {
    if (isHovered) {
      setIsFlickering(true)
      
      const timeout = setTimeout(() => {
        setIsFlickering(false)
        setOpacity(1)
      }, 1000)

      return () => clearTimeout(timeout)
    } else {
      setIsFlickering(false)
      setOpacity(1)
    }
  }, [isHovered])

  useEffect(() => {
    if (!isFlickering) return

    const interval = setInterval(() => {
      setOpacity(prev => prev === 1 ? 0 : 1)
    }, 40)

    return () => clearInterval(interval)
  }, [isFlickering])

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <Image
        src="/favicon.ico"
        alt="favicon"
        width={32}
        height={32}
        style={{ 
          opacity: opacity
        }}
      />
    </div>
  )
}

