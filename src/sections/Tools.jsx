import django from "../assets/django.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import express from "../assets/express.svg";
import laravel from "../assets/laravel.svg";
import figma from "../assets/figma.svg";
import HeaderMenu from "../components/HeaderMenu";

const Tools = () => {
  return (
    <div id="tools-section" className="flex flex-col items-center justify-center py-12 font-overpass md:my-10">
      <HeaderMenu
        title={"TOOLS"}
        desc1={"Technologies and Frameworks That Power My Work"}
      />
      <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-10 mt-4 md:!mt-10">
        <li className="h-14 w-12 md:h-52 md:w-40 bg-[#D9D9D9] rounded-full flex justify-center items-center">
          <img src={react} alt="React" className="w-10 h-10 md:w-32 md:h-32" />
        </li>
        <li className="h-14 w-12 md:h-52 md:w-40 bg-[#D9D9D9] rounded-full flex justify-center items-center">
          <img
            src={express}
            alt="Express"
            className="w-10 h-10 md:w-32 md:h-32"
          />
        </li>
        <li className="h-14 w-12 md:h-52 md:w-40 bg-[#D9D9D9] rounded-full flex justify-center items-center">
          <img
            src={tailwind}
            alt="Tailwind"
            className="w-10 h-10 md:w-32 md:h-32"
          />
        </li>
        <li className="h-14 w-12 md:h-52 md:w-40 bg-[#D9D9D9] rounded-full flex justify-center items-center">
          <img
            src={laravel}
            alt="Laravel"
            className="w-10 h-10 md:w-32 md:h-32"
          />
        </li>
        <li className="h-14 w-12 md:h-52 md:w-40 bg-[#D9D9D9] rounded-full flex justify-center items-center">
          <img
            src={django}
            alt="Django"
            className="w-10 h-10 md:w-32 md:h-32"
          />
        </li>
        <li className="h-14 w-12 md:h-52 md:w-40 bg-[#D9D9D9] rounded-full flex justify-center items-center">
          <img src={figma} alt="Figma" className="w-10 h-10 md:w-32 md:h-32" />
        </li>
      </ul>
    </div>
  );
};

export default Tools;
