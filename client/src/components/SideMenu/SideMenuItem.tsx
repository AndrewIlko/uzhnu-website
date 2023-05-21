import Link from "next/link";

const SideMenuItem = ({
  children,
  link,
  onClick,
  isSelected,
}: {
  children: any;
  link: string;
  onClick: any;
  isSelected: boolean;
}) => {
  return (
    <Link href={link} onClick={onClick}>
      <li
        className={`font-[500] px-[10px] py-[10px] hover:bg-neutral-100 rounded-[6px] border-b ${
          isSelected ? "text-yellow-500" : ""
        }`}
      >
        {children}
      </li>
    </Link>
  );
};

export default SideMenuItem;
