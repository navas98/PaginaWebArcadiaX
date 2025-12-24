"use client";

import { Section } from "@/components/layaout/Section";

const advances = [
  "Sistema arcade operativo",
  "Backend modularizado",
  "Frontend en desarrollo",
  "Automatizaciones activas",
];

export const Advances = () => {
  return (
    <Section
      id="advances"
      className="bg-[#0B0B0B] text-[#F5F5F5]"
    >
      <div className="max-w-5xl px-6 flex flex-col gap-12">
        
        <h2 className="text-4xl md:text-5xl font-orbitron">
          Últimos avances
        </h2>

        <ul className="space-y-4 text-[#8A8A8A]">
          {advances.map((item) => (
            <li key={item} className="border-b border-[#1F1F1F] pb-4">
              {item}
            </li>
          ))}
        </ul>

      </div>
    </Section>
  );
};
