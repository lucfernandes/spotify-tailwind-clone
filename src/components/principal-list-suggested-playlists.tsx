import PrincipalListSuggestedPlaylistsItem from "./principal-list-suggested-playlists-item";

interface PrincipalListSuggestedPlaylistsItemProps {
  title: string;
}

export default function PrincipalListSuggestedPlaylists({
  title,
}: PrincipalListSuggestedPlaylistsItemProps) {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <a href="" className="text-sm font-bold text-zinc-400">
          Mostrar tudo
        </a>
      </div>
      <div className="grid grid-cols-4">
        <PrincipalListSuggestedPlaylistsItem
          title="Lo-Fi"
          description="LOFI Worship, The Lofi Christian, Lofi Christian Music e mais"
        />
        <PrincipalListSuggestedPlaylistsItem
          title="Worship"
          description="Fernandinho, Isadora Pompeo, Lukas Agustinho e mais"
        />
        <PrincipalListSuggestedPlaylistsItem
          title="Praying"
          description="Cassiane, Gabriela Rocha, Irmão Lázaro e mais"
        />
        <PrincipalListSuggestedPlaylistsItem
          title="Jesus is the lord"
          description="Thalles Roberto, Aline Barros, Diante do Trono e mais"
        />
      </div>
    </div>
  );
}
