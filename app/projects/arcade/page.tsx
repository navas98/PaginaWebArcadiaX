import ArcadeVideos from "@/components/arcade/ArcadeVideos";
import ArcadeIntro from "@/components/arcade/ArcadeIntro";
import { Navbar } from "@/components/layaout/Navbar";


export default function ArcadePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <ArcadeIntro />
      <ArcadeVideos />
    </main>
  );
}
