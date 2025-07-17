import Line from "../assets/line.png"
import Linkedin from "../assets/linkedin.png"
import Github from "../assets/github.png"
import Instagram from "../assets/instagram.png"

const Footer = () => {
  return (
    <>
        <div className="w-[310px] md:w-[1280px] flex flex-col items-center mt-8 md:mt-14">
            <img src={Line} alt="" className=""/>
            <div className="w-full flex justify-between">
              <p className="text-primary text-[10px] md:text-2xl text-center mt-3 font-baskerville">YOFANDRA</p>
              <div className="flex justify-around w-16 md:w-24 my-3">
                <a href="https://www.linkedin.com/in/yofandra-arta-7012a6275/">
                  <img src={Linkedin} alt="" className="w-[13px] md:w-6"/>
                </a>
                <a href="https://www.instagram.com/yofandraarta/">
                  <img src={Instagram} alt="" className="w-[13px] md:w-6"/>
                </a>
                <a href="https://github.com/Yofandra">
                  <img src={Github} alt="" className="w-[13px] md:w-6"/>
                </a>
              </div>
            </div>
            <div>
               <p className="text-primary text-[10px] md:text-lg">© Develop by Yofandra Arta</p> 
            </div>
        </div>
    </>
  );
}

export default Footer;