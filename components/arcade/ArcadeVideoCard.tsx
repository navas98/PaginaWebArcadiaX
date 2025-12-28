type Props = {
  title: string;
  description: string;
};

export default function ArcadeVideoCard({ title, description }: Props) {
  return (
    <div className="relative border border-red-500/30 rounded-md p-5 bg-black hover:shadow-[0_0_25px_#ff004c44] transition">
      {/* SCANLINES */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_3px]" />

      <div className="relative">
        <div className="aspect-video bg-neutral-900 rounded mb-4 flex items-center justify-center text-red-400 font-mono text-xs border border-red-500/20 animate-pulse">
          &gt; LOADING VIDEO MODULE
        </div>

        <h3 className="text-red-400 font-mono tracking-wide">
          {title}
        </h3>

        <p className="mt-2 text-gray-400 text-sm font-mono">
          {description}
        </p>
      </div>
    </div>
  );
}
