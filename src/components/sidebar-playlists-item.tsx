import { Heart, Pin } from "lucide-react";

export default function SidebarPlaylistItem() {
  return (
    <a href="" className="flex items-center gap-3">
      <div className="w-12 h-12 rounded bg-gradient-to-br from-indigo-950 via-blue-500 to-indigo-100 flex justify-center items-center">
        <Heart className="w-6 h-6 m-auto" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="m-0">Músicas Curtidas</p>
        <p className="flex items-center text-sm text-zinc-400 gap-1 m-0">
          <Pin className="w-4 h-4 text-green-500" />
          Playlist • 1 música
        </p>
      </div>
    </a>
  );
}
