import CardService from "../components/CardService"
import custom from "../assets/custom.png"
import frontend from "../assets/frontend.png"
import backend from "../assets/backend.png"
import maintenance from "../assets/maintenance.png"
import HeaderMenu from "../components/HeaderMenu"

const Service = () => {
    return(
        <>  
            <div id="service-section" className="pt-[55px] flex flex-col justify-center items-center">
                <HeaderMenu 
                    title={'MY SERVICE'}
                    desc1={'Here are some of the key services I offer.'}
                    desc2={'Designed to provide seamless digital experiences and innovative web solutions.'}
                />
                <div className="mt-4 lg:flex">
                    <div>
                    <CardService 
                        image={custom} 
                        title={'Custom Website Development'}
                        description={'Build a website according to client needs, from concept to implementation, with responsive design that is optimized on various devices.'}
                        />
                    <CardService 
                        image={backend} 
                        title={'Back-End Development'}
                        description={'Develop robust and secure backend systems using Node.js, PHP, or Python, as well as integration with databases such as MySQL or MongoDB.'}
                        />
                    </div>
                    <div>
                    <CardService 
                        image={frontend} 
                        title={'Front-End Development'}
                        description={'Transforming designs into interactive and engaging interfaces using the latest technologies such as PHP, Python, and JavaScript.'}
                        />
                    <CardService 
                        image={maintenance} 
                        title={'Web Maintenance & Optimization'}
                        description={'Provide website maintenance to ensure optimal performance, security, and up-to-date features.'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service