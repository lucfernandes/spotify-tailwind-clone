interface PrincipalListLastPlaylistsItemProps {
  title: string;
}

export default function PrincipalListLastPlaylists({
  title,
}: PrincipalListLastPlaylistsItemProps) {
  return (
    <div className="bg-zinc-700 hover:bg-zinc-600 transition rounded flex items-center overflow-hidden gap-2 font-semibold w-full">
      <div className="w-11 h-11 bg-gradient-to-br from-indigo-700 to-indigo-300" />
      <div>{title}</div>
    </div>
  );
}
