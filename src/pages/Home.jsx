/* eslint-disable react/no-unescaped-entities */
import Me from "../assets/me.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Line from "../assets/line.png";
import PartTracking from "../assets/part_tracking.png";
import WorkingOrder from "../assets/working_order/kelola_barang.png";
import Contact from "../components/Contact";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page relative bg-secondary font-barlow">
      <Navbar />
      <div className="relative h-screen lg:pt-40 flex flex-col items-center justify-end md:justify-between">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl lg:text-3xl">Hello, my name is Yofandra</p>
          <h1 className="text-[90px] lg:text-[148px] text-center font-anton tracking-tight leading-none mt-3 md:mt-0">
            Web{" "}
            <span
              className="text-white"
              style={{ WebkitTextStroke: "2px black" }}
            >
              Developer
            </span>
          </h1>
        </div>
        <img src={Me} alt="Yofandra" className="lg:h-96 mt-10 md:mt-0" />
        <a className="absolute bottom-4" href="/cv.pdf">
          <button className="bg-primary w-[170px] lg:w-48 h-[50px] rounded-lg shadow-lg shadow-primary text-white text-base lg:text-2xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
            Download CV
          </button>
        </a>
      </div>

      <div
        id="about-section"
        className="flex flex-col justify-center items-center mt-12 lg:mt-20"
      >
        <h1 className="text-3xl lg:text-[40px] font-medium">About Me</h1>
        <p className="mx-7 lg:mx-[200px] text-justify md:text-center text-base lg:text-xl mt-4 lg:mt-10">
          Fullstack Web Developer with a strong specialization in web
          development. Proficient in building scalable and efficient web
          applications using modern frameworks such as Laravel, NestJS, React,
          and Django. Experienced in both front-end and back-end development,
          with solid knowledge of RESTful APIs, system architecture, and
          database management using MySQL and PostgreSQL. Adept at
          problem-solving, debugging, and writing clean, maintainable code. A
          highly motivated learner who is committed to continuously improving
          technical skills and delivering high-quality digital solutions.
        </p>
        <div className="flex mt-5 lg:mt-10 gap-8 md:gap-36">
          <div className="flex flex-col items-center">
            <h5 className="text-2xl md:text-4xl font-semibold">01+</h5>
            <p className="text-sm md:text-xl">Years Of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-2xl md:text-4xl font-semibold">10+</h5>
            <p className="text-sm md:text-xl">Projects Completed</p>
          </div>
        </div>
      </div>

      <div
        id="experience-section"
        className="flex flex-col md:flex-row justify-between lg:px-[180px] mx-7 md:mx-0 mt-20 lg:mt-40"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-medium">Experience</h1>
          <p className="text-base lg:mt-7 lg:w-64 leading-6">
            A timeline of my professional journey and experience
          </p>
        </div>
        <div className="flex gap-16">
          <img
            src={Line}
            alt=""
            className="hidden md:block flex-none self-start"
          />
          <div className="mt-5 md:mt-0">
            <div className="lg:w-[670px] mb-5 lg:mb-10">
              <p className="leading-none text-sm md:text-base text-[#6D6D6D]">
                Nov 2025 - May 2026
              </p>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-xl md:text-2xl font-medium">
                  Web Developer Intern
                </h3>
                <p className="text-base md:text-xl text-[#6D6D6D]">
                  Ayam Bakar Pak D
                </p>
              </div>
              <p className="lg:w-[610px] text-base lg:text-lg mt-2">
                Developed and maintained web applications using Laravel,
                including systems for daily activity tracking, price comparison,
                and purchasing orders. Responsible for implementing core
                features, managing data workflows, and handling testing,
                debugging, deployment, and system maintenance in a production
                environment.
              </p>
            </div>
            <div className="lg:w-[670px] mb-5 lg:mb-10">
              <p className="leading-none text-sm md:text-base text-[#6D6D6D]">
                Jul 2025 - Nov 2026
              </p>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-xl md:text-2xl font-medium">
                  Web Developer
                </h3>
                <p className="text-base md:text-xl text-[#6D6D6D]">Freelance</p>
              </div>
              <p className="lg:w-[610px] text-base lg:text-lg mt-2">
                Developed 5+ company profile websites for multiple brands using
                React, and built an e-commerce platform using NestJS (backend)
                and Next.js (frontend). Designed and integrated RESTful APIs for
                product management, user interactions, and transactions, while
                managing database systems using MySQL and PostgreSQL.
              </p>
            </div>
            <div className="lg:w-[670px] mb-5 lg:mb-10">
              <p className="leading-none text-sm md:text-base text-[#6D6D6D]">
                Jul 2024 - Dec 2024
              </p>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-xl md:text-2xl font-medium">
                  Web Developer Intern
                </h3>
                <p className="text-xs md:text-xl text-[#6D6D6D]">
                  PT Surabaya Autocomp Indonesia
                </p>
              </div>
              <p className="lg:w-[610px] text-base lg:text-lg mt-2">
                Developed web applications to manage inter-department goods
                requests and track item movement across production stages. Also
                handled deployment to the company server and managed environment
                configuration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects-section"
        className="mt-12 lg:mt-40 flex flex-col justify-center items-center lg:px-[180px]"
      >
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Projects
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-10 lg:mt-16">
          <div
            onClick={() => navigate("/part-tracking")}
            className="w-80 lg:w-[610px] py-5 cursor-pointer bg-[#f8f8f8] rounded-xl shadow-lg flex flex-col justify-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <div className="w-full flex justify-center">
              <img
                src={PartTracking}
                alt="Part Tracking"
                className="w-72 lg:w-[560px] lg:h-[300px] object-cover shadow-lg"
              />
            </div>
            <div className="px-4 md:px-6">
              <h1 className="text-lg md:text-2xl font-medium mt-4">
                Part Tracking System
              </h1>
              <p className="text-sm md:w-[360px] leading-4 md:leading-5 mt-1 md:mt-2">
                web application to manage incoming goods, transfer items, and inventory
              </p>
            </div>
          </div>
          <div onClick={() => navigate('/working-order')} className="w-80 lg:w-[420px] py-5 cursor-pointer bg-[#f8f8f8] rounded-xl shadow-lg flex flex-col justify-center transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
            <div className="w-full flex justify-center">
              <img
                src={WorkingOrder}
                alt="Working Order"
                className="w-72 lg:w-[370px] lg:h-[300px] object-cover shadow-lg"
              />
            </div>
            <div className="px-4 md:px-6 text-black">
              <h1 className="text-lg md:text-2xl font-medium mt-4">
                Working Order
              </h1>
              <p className="text-sm md:w-[360px] leading-4 md:leading-5 mt-1 md:mt-2">
                web application to manage inter-department goods requests in a
                production environment
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-36">
        <Contact />
      </div>

      <div className="flex justify-center h-full ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
