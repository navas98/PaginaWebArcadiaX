"use client";

import { Section } from "@/components/layaout/Section"

const items = [
  "Ecosistema domótico modular",
  "Arcade física con software propio",
  "Sistema multimedia distribuido",
  "Control centralizado y remoto",
];

export const WhatIs = () => {
  return (
    <Section
      id="what-is"
      className="bg-[#0B0B0B] text-[#F5F5F5]"
    >
      <div className="max-w-5xl px-6 flex flex-col gap-12">
        
        <h2 className="text-4xl md:text-5xl font-orbitron">
          ¿Qué es ArcadiaX?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="border border-[#1F1F1F] p-6 text-[#8A8A8A]"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};
