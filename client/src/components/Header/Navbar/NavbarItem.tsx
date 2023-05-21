import Link from "next/link";

const NavbarItem = ({
  link,
  children,
  isSelected,
}: {
  link: string;
  children: string;
  isSelected: boolean;
}) => {
  return (
    <>
      <Link href={link}>
        <div
          className={`px-[15px] font-[500] py-[10px] text-[16px] transition-text duration-200 whitespace-nowrap ${
            isSelected ? "text-yellow-500" : ""
          }`}
        >
          {children}
        </div>
      </Link>
    </>
  );
};

export default NavbarItem;
