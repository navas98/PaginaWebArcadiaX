"use client";

import { Section } from "@/components/layaout/Section"

export const Architecture = () => {
  return (
    <Section
      id="architecture"
      className="bg-[#0B0B0B] text-[#F5F5F5]"
    >
      <div className="max-w-6xl px-6 flex flex-col gap-10">
        
        <h2 className="text-4xl md:text-5xl font-orbitron">
          Arquitectura del sistema
        </h2>

        <div className="h-64 border border-dashed border-[#2A2A2A] flex items-center justify-center text-[#8A8A8A]">
          Diagrama interactivo (placeholder)
        </div>

        <p className="text-[#8A8A8A] max-w-3xl">
          Cada módulo del sistema es independiente, escalable y documentado.
          Esta arquitectura permite crecer sin comprometer estabilidad.
        </p>

      </div>
    </Section>
  );
};
