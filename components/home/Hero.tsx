// components/home/Hero.tsx
import { Section } from "@/components/layaout/Section";

export const Hero = () => {
  return (
    <Section
      id="hero"
      className="relative bg-[#0B0B0B] text-[#F5F5F5]"
    >
      <div className="text-center flex flex-col items-center gap-6">
        
        <h1 className="text-6xl md:text-8xl font-orbitron tracking-widest">
          ARCADIAX
        </h1>

        <p className="text-lg md:text-xl text-[#8A8A8A] max-w-xl">
            La diversión junto al codigo
        </p>

        <span className="mt-12 text-sm text-[#00FF9C] animate-pulse">
          ↓ Descubrir mi proyecto
        </span>

      </div>
    </Section>
  )
}
