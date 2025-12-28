export default function ArcadeIntro() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden">
      {/* GRID RETRO */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff004c0d_1px,transparent_1px),linear-gradient(to_bottom,#ff004c0d_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-4xl w-full text-center space-y-10">
        {/* TÍTULO NES */}
        <h1 className="nes-text is-error text-4xl md:text-6xl">
          ARCADE
        </h1>

        {/* CAJA NES */}
        <div className="nes-container is-dark with-title text-left">
          <p className="title">ARCADIAX SYSTEM</p>

          <p>
            En este proyecto se construye una <strong>arcade física</strong>,
            concebida como un nodo más dentro de un entorno domótico integrado.
          </p>

          <p>
            El sistema permite lanzar y controlar los juegos directamente desde
            el móvil, integrándose con el resto del ecosistema.
          </p>

          <p>
            La arcade deja de ser un dispositivo aislado para convertirse en una
            parte activa del sistema.
          </p>
        </div>

        {/* STATUS LINE */}
        <p className="nes-text is-success">
          PROYECTO DOCUMENTADO PASO A PASO EN FORMATO VÍDEO ▌
        </p>
      </div>
    </section>
  );
}
