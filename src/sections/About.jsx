/* eslint-disable react/no-unescaped-entities */
import me from "../assets/me.png";
import CardEducationIntern from "../components/CardEducationIntern";

const About = () => {

    return(
        <>
            <div id="about-section" className="pt-[80px] w-screen h-full flex flex-col justify-center items-center font-overpass md:bg-primary">
                <div className="flex flex-col md:flex-row items-center justify-between w-full md:!w-11/12">
                    <div className="w-80 h-48 md:w-[570px] md:h-[570px] mt-5 md:mt-0 bg-teal-100">
                        <img src={me} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col items-center justify-between w-full md:!w-[700px] md:h-72 md:!items-start mt-5">    
                        <h2 className="text-lg md:text-5xl">About Me</h2>
                        <h3 className="font-semibold text-lg md:text-6xl mt-5">Yofandra Arta Priyoga</h3>
                        <p className="text-justify text-sm md:text-lg md:font-bold w-5/6">I’m a passionate web developer specializing in responsive, user-friendly websites. With expertise in Python, PHP, and JavaScript, I create innovative solutions tailored to your needs. Let’s bring your ideas to life with seamless design and functionality!</p>
                    </div>
                </div>
                <h2 className="mt-8 md:mt-28 font-semibold md:text-4xl">Education & Internship</h2>
                <CardEducationIntern />
            </div>
        </>
    )
}

export default About