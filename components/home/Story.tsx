"use client";

import { Section } from "@/components/layaout/Section";

export const Story = () => {
  return (
    <Section
      id="story"
      className="bg-[#0B0B0B] text-[#F5F5F5]"
    >
      <div className="max-w-4xl px-6 flex flex-col gap-8">
        
        <h2 className="text-4xl md:text-5xl font-orbitron tracking-wide">
          Espacio con potencial, pero sin alma
        </h2>

        <div className="text-lg text-[#8A8A8A] leading-relaxed flex flex-col gap-6">
          <p>
            Desde hace tiempo tengo un piso en un pueblo que apenas uso.
            Siempre lo vi como un lugar con posibilidades, pero vacío.
            Un espacio donde podía hacer algo más que dejar pasar el tiempo.
          </p>

          <p>
            La idea es domotizarlo poco a poco y convertirlo en un sitio para
            disfrutar y experimentar. Montar una mesa de billar, integrar
            tecnología, programar mis propios sistemas y probar ideas que no
            tienen sitio en un piso “normal”. Aquí no hay un plan cerrado: solo
            ganas de construir, romper y volver a montar.
          </p>

          <p>
            ArcadiaX nace como un proyecto personal y maker. Todo se hace paso a
            paso, mezclando software, hardware y muchas horas de pruebas. La
            intención es documentar el proceso y mostrar cómo un espacio
            olvidado puede transformarse en algo hecho a medida.
          </p>

          <p>
            No sé cómo acabará ArcadiaX. Solo sé que quiero construirlo yo,
            entenderlo por dentro y darle alma con el tiempo.
          </p>
        </div>

        <span className="mt-6 text-sm text-[#00FF9C]">
          Acompáñame a descubrirlo
        </span>

      </div>
    </Section>
  );
};
