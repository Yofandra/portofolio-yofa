/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    console.log("toggleMenu clicked!", isOpen);
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (href) => {
    const sectionId = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/", { replace: false }); 
      setTimeout(() => scrollToSection(sectionId), 100); 
    } else {
      scrollToSection(sectionId);
    }
    closeMenu();
  };

  const NavItem = ({ to, href, label }) => {
    const commonClasses =
      "block text-lg font-barlow md:text-xl py-5 md:px-0 text-primary hover:underline underline-offset-4 transition duration-300";

    return href ? (
      <button onClick={() => handleNavClick(href)} className={`${commonClasses}`}>
        {label}
      </button>
    ) : (
      <Link to={to} onClick={closeMenu} className={`${commonClasses}`}>
        {label}
      </Link>
    );
  };

  return (
    <nav
      className={`navbar fixed top-0 w-full h-16 md:h-16 lg:h-24 z-50 m-0 px-5 lg:px-40 ${
        isOpen ? "bg-white" : isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="navbar-container h-full flex justify-between items-center">

        <img src={Logo} alt="Logo" className="h-8 md:h-12" />

        <div className="menu-toggle md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 text-primary`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  : "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              }
            />
          </svg>
        </div>

        <ul
          className={`nav-links flex flex-col md:flex-row md:gap-6 items-center pt-20 md:pt-0 h-screen md:!h-full absolute md:static bg-white w-full md:w-auto top-16 md:top-4 left-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:!flex"
          }`}
        >
          <li>
            <NavItem to="/" label="Home"/>
          </li>
          <li>
            <NavItem href="#about-section" label="About"/>
          </li>
          <li>
            <NavItem href="#experience-section" label="Experience"/>
          </li>
          <li>
            <NavItem href="#projects-section" label="Projects"/>
          </li>
          <li>
            <NavItem href="#contact-section" label="Contact"/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
