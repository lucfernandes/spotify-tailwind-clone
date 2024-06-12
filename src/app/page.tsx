import Footer from "@/components/footer";
import PrincipalListItem from "@/components/principal-list-items";
import PrincipalListLastPlaylists from "@/components/principal-list-last-playlists";
import PrincipalListSuggestedPlaylists from "@/components/principal-list-suggested-playlists";
import Sidebar from "@/components/sidebar";
import { ChevronLeft, ChevronRight, Bell, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-full flex-1 px-3 pt-3 flex gap-3">
        <div className="w-80 h-full">
          <Sidebar />
        </div>
        <div className="flex-1 flex h-full flex-col gap-4 p-3 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <a
                href=""
                className="bg-zinc-900 rounded-full w-8 h-8 flex justify-center items-center text-zinc-400"
              >
                <ChevronLeft />
              </a>
              <a
                href=""
                className="bg-zinc-900 rounded-full w-8 h-8 flex justify-center items-center text-zinc-400"
              >
                <ChevronRight />
              </a>
            </div>
            <div className="flex gap-2">
              <a
                href=""
                className="bg-zinc-900 rounded-full w-8 h-8 flex justify-center items-center text-zinc-400"
              >
                <Bell className="w-5 h-5" />
              </a>
              <a
                href=""
                className="bg-zinc-900 rounded-full w-8 h-8 flex justify-center items-center text-zinc-400"
              >
                <Users className="w-5 h-5" />
              </a>
              <a
                href=""
                className="bg-zinc-900 p-1.5 rounded-full w-8 h-8 flex justify-center items-center text-zinc-400"
              >
                <div className="w-full h-full bg-gradient-to-bl from-indigo-300 to-slate-100 rounded-full"></div>
              </a>
            </div>
          </div>
          <nav className="flex gap-2">
            <PrincipalListItem active title="Tudo" />
            <PrincipalListItem title="Música" />
            <PrincipalListItem title="Podcasts" />
          </nav>
          <div className="grid grid-cols-2 gap-2">
            <PrincipalListLastPlaylists title="LoFI Worship" />
            <PrincipalListLastPlaylists title="Corinho de fogo" />
            <PrincipalListLastPlaylists title="Dia de pentecostes" />
            <PrincipalListLastPlaylists title="Templo do Rock" />
          </div>
          <PrincipalListSuggestedPlaylists title="Feito para Lucas Fernandes" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
