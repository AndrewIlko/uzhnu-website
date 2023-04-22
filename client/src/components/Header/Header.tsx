import Container from "../Container";

const Header = ({ children }: { children: any }) => {
  return (
    <>
      <header className="w-full h-[60px] bg-white">
        <Container>
          <div className="w-full h-full px-[25px] flex justify-between items-center">
            {children}
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
