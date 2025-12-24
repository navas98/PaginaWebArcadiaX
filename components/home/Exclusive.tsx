"use client";

import { Section } from "@/components/layaout/Section";

export const Exclusive = () => {
  return (
    <Section
      id="exclusive"
      className="bg-[#0B0B0B] text-[#F5F5F5]"
    >
      <div className="max-w-4xl px-6 flex flex-col gap-10 text-center">
        
        <h2 className="text-4xl md:text-5xl font-orbitron">
          Contenido exclusivo
        </h2>

        <p className="text-[#8A8A8A]">
          Experimentos, pruebas, documentación interna y decisiones técnicas.
        </p>

        <div className="border border-[#1F1F1F] p-6 text-[#8A8A8A]">
          Acceso restringido (placeholder)
        </div>

      </div>
    </Section>
  );
};
