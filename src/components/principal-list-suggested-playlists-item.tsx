import { Play } from "lucide-react";
import React from "react";

interface PrincipalListSuggestedPlaylistsItemProps {
  title: string;
  description: string;
}

export default function PrincipalListSuggestedPlaylistsItem({
  title,
  description,
}: PrincipalListSuggestedPlaylistsItemProps) {
  return (
    <div className="group w-full p-3 hover:bg-zinc-800 rounded-lg cursor-pointer">
      <div className="w-full h-auto aspect-square bg-gradient-to-br from-indigo-700 to-indigo-300 rounded-xl relative">
        <div className="w-12 h-12 translate-y-2 group-hover:translate-y-0 bg-green-500 text-black rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 absolute bottom-2 right-2 transition-[opacity,transform] duration-300 shadow-lg">
          <Play />
        </div>
      </div>
      <div className="mt-2 text-lg">{title}</div>
      <div className="text-sm text-zinc-400">{description}</div>
    </div>
  );
}
