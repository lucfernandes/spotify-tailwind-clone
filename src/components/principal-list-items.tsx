interface PrincipalListItemProps {
  title: string;
  active?: boolean;
}

export default function PrincipalListItem({
  title,
  active = false,
}: PrincipalListItemProps) {
  return (
    <a
      href=""
      className={`${
        active
          ? "bg-white text-black"
          : "bg-zinc-700 text-white hover:bg-zinc-600 transition"
      } px-3 rounded-full`}
    >
      {title}
    </a>
  );
}
