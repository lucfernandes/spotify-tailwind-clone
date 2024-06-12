import {
  ChevronFirst,
  ChevronLast,
  List,
  Maximize2,
  MicVocal,
  MonitorSpeaker,
  PictureInPicture2,
  Play,
  Plus,
  Repeat,
  Shuffle,
  SquarePlay,
  Volume2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="p-4 bg-black flex gap-10">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 rounded bg-zinc-50"></div>
        <div className="">
          <p className="text-sm font-semibold">Os que Confiam - Live</p>
          <p className="text-xs text-zinc-500">Fernandinho</p>
        </div>
        <Plus className="w-5 h-5 text-zinc-400 border-zinc-400 border-2 rounded-full" />
      </div>
      <div className="flex-1 flex flex-col items-center gap-3">
        <div className="flex gap-3 items-center justify-center">
          <Shuffle className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
          <ChevronFirst className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
          <Play className="w-8 h-8 p-1.5 bg-white text-black hover:scale-110 rounded-full cursor-pointer" />
          <ChevronLast className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
          <Repeat className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
        </div>
        <div className="flex w-full items-center gap-2">
          <p className="text-xs text-zinc-500">1:31</p>
          <div className="w-full h-1 bg-zinc-400 rounded-full group">
            <div
              className="h-full bg-white rounded-full group-hover:bg-green-500 relative"
              style={{ width: "50%" }}
            >
              <div className="w-3 h-3 bg-white rounded-full absolute -top-1 -right-1 invisible group-hover:visible cursor-pointer"></div>
            </div>
          </div>
          <p className="text-xs text-zinc-500">5:38</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <SquarePlay className="w-5 h-5 text-zinc-400" />
        <MicVocal className="w-5 h-5 text-zinc-400" />
        <List className="w-5 h-5 text-zinc-400" />
        <MonitorSpeaker className="w-5 h-5 text-zinc-400" />
        <Volume2 className="w-5 h-5 text-zinc-400" />
        <div className="w-24 h-1 bg-white rounded-full"></div>
        <PictureInPicture2 className="w-5 h-5 text-zinc-400" />
        <Maximize2 className="w-5 h-5 text-zinc-400" />
      </div>
    </footer>
  );
}
