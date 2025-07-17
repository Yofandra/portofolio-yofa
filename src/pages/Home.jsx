/* eslint-disable react/no-unescaped-entities */
import me from "../assets/me.png";
import Service from "../sections/Service";
import Portofolio from "../sections/Portofolio";
import Contact from "../sections/Contact";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import Tools from "../sections/Tools";

const Home = () => {
  return (
    <div className="home-page relative bg-secondary font-overpass">
      <Navbar />
      <div className="flex justify-between items-center flex-col-reverse md:flex-row pt-[90px] md:h-screen md:px-32 md:pt-0">
        <div className="flex flex-col justify-center items-center md:!items-start font-poppins">
          <h2 className="font-bold mt-8 text-3xl md:!text-5xl">WELCOME TO</h2>
          <p className="font-bold mt-4 text-2xl md:!text-5xl md:mb-5">
            Yofandra's
          </p>
          <p className="font-bold text-2xl md:!text-5xl">Portfolio Website</p>
          <p className="text-center md:text-start px-[30px] mt-3 tracking-normal leading-loose md:text-[20px] md:px-0 md:w-[575px] md:leading-snug md:mt-4">
            Discover my project results, explore my skills and tools, and let's
            collaborate to create something amazing together!
          </p>
          <a href="/cv.pdf">
            <button className="bg-primary mt-8 w-[170px] lg:w-48 h-[50px] rounded-lg shadow-lg shadow-primary text-white text-base font-rubik font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
              Download CV
            </button>
          </a>
        </div>
        <div className="w-[160px] h-[160px] md:w-[515px] md:h-[515px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src={me}
            alt=""
          />
        </div>
      </div>
      <div className="h-full ">
        <About />
      </div>
      <div className="h-full">
        <div className=" h-3/4">
          <Service />
        </div>
      </div>
      <div className="h-full md:flex justify-center items-center">
        <Portofolio />
      </div>
      <div>
        <Tools />
      </div>
      <div className="h-full ">
        <Contact />
      </div>
      <div className="flex justify-center h-full ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
