import { Heart, Pin } from "lucide-react";

interface SidebarPlaylistItemProps {
  title: string;
  pinned?: boolean;
  countMusics?: number;
  type: "Playlist" | "Podcast";
}

export default function SidebarPlaylistItem({
  title,
  pinned = false,
  countMusics = 1,
  type,
}: SidebarPlaylistItemProps) {
  return (
    <a
      href=""
      className="flex items-center gap-3 hover:bg-zinc-800 rounded-lg p-1"
    >
      <div className="w-10 h-10 rounded bg-gradient-to-br from-indigo-950 via-blue-500 to-indigo-100 flex justify-center items-center">
        <Heart className="w-6 h-6 m-auto" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="m-0">{title}</p>
        <p className="flex items-center text-sm text-zinc-400 gap-1 m-0">
          {pinned && <Pin className="w-4 h-4 text-green-500" />}
          {type} •{" "}
          {type == "Playlist" ? `${countMusics} música(s)` : "1 episódio"}
        </p>
      </div>
    </a>
  );
}
