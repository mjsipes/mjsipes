import React from 'react'

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'body' | 'link';
  className?: string;
}

const Typography = ({ children, variant = 'body', className = '' }: TypographyProps) => {
  const baseStyles = {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: variant === 'h1' ? '1.1' : '1.5',
    fontWeight: variant === 'h1' ? 400 : variant === 'link' ? 500 : 400,
  }

  if (variant === 'h1') {
    return (
      <h1 
        style={{
          ...baseStyles,
          fontSize: '3.2em',
        }}
        className={className}
      >
        {children}
      </h1>
    )
  }

  if (variant === 'link') {
    return (
      <a 
        style={{
          ...baseStyles,
          color: '#646cff',
          textDecoration: 'inherit',
        }}
        className={`hover:text-[#535bf2] ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <div style={baseStyles} className={className}>
      {children}
    </div>
  )
}

export default Typography

