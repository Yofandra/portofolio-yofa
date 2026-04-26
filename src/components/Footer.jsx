import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Instagram from "../assets/instagram.svg";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="w-[310px] md:w-[1280px] flex flex-col items-center mt-8 md:mt-20">
        <div className="w-full h-[2px] bg-primary"></div>
        <div className="w-full flex justify-between py-3">
          <img src={logo} alt="Logo" className="h-6" />
          <div className="flex justify-around w-20 md:w-24">
            <a href="https://www.linkedin.com/in/yofandra-arta-7012a6275/">
              <img src={Linkedin} alt="" className="w-5 md:w-6" />
            </a>
            <a href="https://www.instagram.com/yofandraarta/">
              <img src={Instagram} alt="" className="w-5 md:w-6" />
            </a>
            <a href="https://github.com/Yofandra">
              <img src={Github} alt="" className="w-5 md:w-6" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-primary text-sm md:text-lg">
            © Develop by Yofandra Arta
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
