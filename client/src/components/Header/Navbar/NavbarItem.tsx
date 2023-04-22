import Link from "next/link";

const NavbarItem = ({ link, children }: { link: string; children: string }) => {
  return (
    <>
      <Link href={link}>
        <div className="px-[15px] font-[500] py-[10px] text-[14px] text-neutral-900 transition-text duration-200 whitespace-nowrap">
          {children}
        </div>
      </Link>
    </>
  );
};

export default NavbarItem;
