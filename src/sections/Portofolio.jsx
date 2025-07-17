import HeaderMenu from "../components/HeaderMenu"
import CardPortofolio from "../components/CardPortofolio"

const Portofolio = () => {
    return(
        <>
            <div id="portfolio-section" className="pt-[80px] md:w-full h-full flex flex-col justify-center items-center">
                <HeaderMenu 
                    title={'MY PORTFOLIO'}
                    desc1={'Here are some of the key services I offer.'}
                    desc2={'Designed to provide seamless digital experiences and innovative web solutions.'}
                />
                <CardPortofolio />
            </div>
        </>
    )
}

export default Portofolio