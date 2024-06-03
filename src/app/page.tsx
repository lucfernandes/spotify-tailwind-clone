import Sidebar from "@/components/sidebar";
import { ChevronLeft, ChevronRight, Bell, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 p-3 flex gap-3">
        <div className="w-80 h-full">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col gap-4 p-3 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl">
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
            <a href="" className="bg-white text-black px-3 rounded-full">
              Tudo
            </a>
            <a href="" className="bg-zinc-700 px-2 rounded-full">
              Música
            </a>
            <a href="" className="bg-zinc-700 px-2 rounded-full">
              Podcasts
            </a>
          </nav>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-zinc-700 rounded flex items-center overflow-hidden gap-2 font-semibold w-full">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-700 to-indigo-300" />
              <div>Lo-fi</div>
            </div>
            <div className="bg-zinc-700 rounded flex items-center overflow-hidden gap-2 font-semibold w-full">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-700 to-indigo-300" />
              <div>Lo-fi</div>
            </div>
            <div className="bg-zinc-700 rounded flex items-center overflow-hidden gap-2 font-semibold w-full">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-700 to-indigo-300" />
              <div>Lo-fi</div>
            </div>
            <div className="bg-zinc-700 rounded flex items-center overflow-hidden gap-2 font-semibold w-full">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-700 to-indigo-300" />
              <div>Lo-fi</div>
            </div>
          </div>
        </div>
      </div>
      <footer>footer</footer>
    </div>
  );
}
