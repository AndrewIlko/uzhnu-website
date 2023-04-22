import Container from "../Container";
import FooterBlock from "./FooterBlock";
import FooterBlockTitle from "./FooterBlockTitle";

const Footer = () => {
  return (
    <>
      <footer className=" bg-neutral-900 w-full">
        <Container>
          <div className="w-full h-full px-[25px] lg:px-[48px] py-[32px] flex flex-col">
            <div className="grid footer-grid gap-[15px]">
              <FooterBlock>
                <FooterBlockTitle>Контакти</FooterBlockTitle>
                <ul className="flex flex-col gap-[10px] mt-[20px]">
                  <li className="text-[14px] text-[#fff]">
                    <div className="text-[14px] text-[#fff]">Розташування:</div>
                    <div className="text-[#b0b0b0] mt-[5px]">
                      88015, Україна, м. Ужгород, вул. Заньковецької, 89а
                    </div>
                    <iframe
                      className="mt-[10px] max-w-[300px] h-[200px] w-full rounded-[8px]"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.1870900703025!2d22.2622797763596!3d48.60626197129904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473918fb0de55555%3A0x4fcad634293c4ca8!2z0YPQuy4g0JfQsNC90YzQutC-0LLQtdGG0LrQvtC5LCA4OdCwLCDQo9C20LPQvtGA0L7QtCwg0JfQsNC60LDRgNC_0LDRgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA4ODAwMA!5e0!3m2!1sru!2sua!4v1681049561240!5m2!1sru!2sua"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </li>
                  <li className="text-[14px] text-[#fff]">
                    <div className="text-[14px] text-[#fff]">Телефон:</div>
                    <a href="tel:+380963706123">
                      <div className="text-blue-300 mt-[5px]">
                        +38 (096) 3706123
                      </div>
                    </a>
                  </li>
                </ul>
              </FooterBlock>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
