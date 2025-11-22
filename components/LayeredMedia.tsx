import Image from "next/image";

interface LayeredMediaProps {
  width?: number;
}

export default function LayeredMedia({ width = 600 }: LayeredMediaProps) {
  const scale = width / 600;
  
  return (
    <div className="relative" style={{ width: `${width}px`, height: `${width}px` }}>
      {/* Base GIF layer */}
      <Image
        src="/1.gif"
        alt="Geometric pattern"
        width={width}
        height={width}
        unoptimized
        className="absolute inset-0 object-cover"
      />
      
      {/* Headshot overlay */}
      <div 
        className="absolute overflow-hidden hover:grayscale bg-white"
        style={{
          top: '14.2%',
          left: '3.2%',
          width: `${280 * scale}px`,
          height: `${210 * scale}px`
        }}
      >
        <Image
          src="/michael_sipes_headshot_no_background.png"
          alt="Headshot of Michael Sipes"
          width={336 * scale}
          height={247 * scale}
          unoptimized
          className="object-cover w-full h-full scale-110"
        />
      </div>
      
      {/* Favicon overlay */}
      <Image
        src="/favicon.ico"
        alt="fox"
        width={36 * scale}
        height={36 * scale}
        className="absolute object-cover hover:grayscale"
        style={{ top: '43.2%', left: '61.8%' }}
      />
    </div>
  );
}

