import { ReactNode } from "react";

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav className="flex">{children}</nav>
    </>
  );
};

export default Navbar;
