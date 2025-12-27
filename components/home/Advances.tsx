"use client";

import Link from "next/link";
import { Section } from "@/components/layaout/Section";

/**
 * View data – avances referenciados a proyectos
 */
import { advances } from "@/text/advances";

export const Advances = () => {
  return (
    <Section
      id="advances"
      className="bg-[#0B0B0B] text-[#F5F5F5]"
    >
      <div className="max-w-6xl px-6 mx-auto flex flex-col gap-12">

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-orbitron">
          Últimos avances
        </h2>

        {/* Grid responsive */}
        <div
          className="
            grid gap-6
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {advances.map((item) => (
            <Link
              key={item.project}
              href={item.href}
              className="
                group rounded-xl border border-[#1F1F1F]
                p-6 transition-all
                hover:bg-[#111]
                hover:border-[#3A3A3A]
                focus:outline-none focus:ring-2 focus:ring-[#2A2A2A]
                flex flex-col justify-between
              "
            >
              <div>
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="text-xl font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <span
                    className="
                      text-xs px-3 py-1 rounded-full
                      border border-[#2A2A2A]
                      text-[#8A8A8A]
                      whitespace-nowrap
                    "
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-sm text-[#8A8A8A] leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <span
                className="
                  mt-6 inline-block text-sm
                  text-[#6B6B6B]
                  group-hover:text-[#F5F5F5]
                "
              >
                Ver proyecto →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </Section>
  );
};
