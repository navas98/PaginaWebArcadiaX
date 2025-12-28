import ArcadeVideoCard from "./ArcadeVideoCard";

const videos = [
  {
    title: "DISEÑO Y CONCEPTO",
    description:
      "Definición de la arcade, objetivos del sistema y enfoque general del proyecto.",
  },
  {
    title: "HARDWARE Y CONTROLES",
    description:
      "Construcción física de la máquina, estructura, botones, joysticks y componentes electrónicos.",
  },
  {
    title: "SOFTWARE Y MODOS DE JUEGO",
    description:
      "Sistema de lanzamiento, modos de juego y lógica de funcionamiento.",
  },
  {
    title: "INTEGRACIÓN DOMÓTICA",
    description:
      "Control remoto desde el móvil y conexión con el resto del ecosistema ArcadiaX.",
  },
];

export default function ArcadeVideos() {
  return (
    <section className="px-6 py-28 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* DIVISOR */}
        <div className="mb-20 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

        <h2 className="text-center text-2xl font-mono tracking-widest text-red-400 mb-16">
          LOG DE CONSTRUCCIÓN
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((video) => (
            <ArcadeVideoCard
              key={video.title}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
