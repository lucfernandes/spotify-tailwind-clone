import {
  Home as HomeIcon,
  Search,
  LibraryBig,
  Plus,
  ArrowRight,
  List,
  Heart,
  Pin,
} from "lucide-react";
import SidebarPlaylistItem from "./sidebar-playlists-item";

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-3">
      <nav className="space-y-4 bg-zinc-900 p-4 rounded-xl">
        <a href="" className="flex gap-4 font-semibold text-zinc-50">
          <HomeIcon />
          Início
        </a>
        <a
          href=""
          className="flex gap-4 font-semibold text-zinc-400 hover:text-zinc-50"
        >
          <Search />
          Buscar
        </a>
      </nav>
      <nav className="bg-zinc-900 p-4 rounded-xl flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="flex gap-2 m-0 font-semibold text-zinc-400 hover:text-zinc-50">
            <LibraryBig />
            Sua Biblioteca
          </p>
          <div className="flex gap-2 text-zinc-400">
            <div className="w-7 h-7 flex justify-center items-center hover:bg-zinc-800 rounded-full">
              <Plus />
            </div>
            <div className="w-7 h-7 flex justify-center items-center hover:bg-zinc-800 rounded-full">
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-hidden">
          <a
            href=""
            className="whitespace-nowrap bg-zinc-700 hover:bg-zinc-600 px-3 rounded-full text-sm"
          >
            Playlist
          </a>
          <a
            href=""
            className="whitespace-nowrap bg-zinc-700 hover:bg-zinc-600 px-3 rounded-full text-sm"
          >
            Podcasts e programas
          </a>
          <a
            href=""
            className="whitespace-nowrap bg-zinc-700 hover:bg-zinc-600 px-3 rounded-full text-sm"
          >
            Álbuns
          </a>
          <a
            href=""
            className="whitespace-nowrap bg-zinc-700 hover:bg-zinc-600 px-3 rounded-full text-sm"
          >
            Artistas
          </a>
        </div>
        <div className="flex justify-between text-zinc-400">
          <Search className="w-5 h-5 flex justify-center items-center hover:bg-zinc-800 rounded-full" />
          <div className="flex text-sm gap-1">
            Recentes
            <List className="w-5 h-5 " />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 overflow-y-hidden">
          <SidebarPlaylistItem
            title="Músicas Curtidas"
            pinned
            countMusics={10}
            type="Playlist"
          />
          <SidebarPlaylistItem
            title="Dia de pentecostes"
            countMusics={365}
            type="Playlist"
          />
          <SidebarPlaylistItem title="Legacy Osasco" type="Podcast" />
          <SidebarPlaylistItem
            title="Flow for Christ"
            type="Playlist"
            countMusics={15}
          />
        </div>
      </nav>
    </aside>
  );
}
