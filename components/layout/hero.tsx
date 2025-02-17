import Image from "next/image"

interface HeroProps {
  title: string
  description: string
}

export function Hero({ title, description }: HeroProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-16">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
        <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]">
          {title}
        </h1>
        <p className="mt-4 text-black [text-wrap:balance] md:text-xl">
          {description}
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/tech-internship.png"
          alt="MVHS Spartan Logo"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  )
}