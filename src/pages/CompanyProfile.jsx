import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mywash from "../assets/company_profile/mywash.png";
import Palugada from "../assets/company_profile/palugada.png";
import CniPartner from "../assets/company_profile/cni_partner.png";
import HouseOfBottles from "../assets/company_profile/house_of_bottles.png";
import Umamiso from "../assets/company_profile/umamiso.png";

const CompanyProfile = () => {
  const featureCard = [
    {
      title: "Mywash",
      img: Mywash,
      description:
        "A corporate website for MyWash, a company that sells laundry pod products. The website features a Home page that provides a general overview of the products, a Products page that displays detailed information for each product, and Reseller & Affiliate pages that present partnership opportunities for resellers and affiliates.",
      align: "left",
      link: "https://mywash.vercel.app/",
    },
    {
      title: "Palugada",
      img: Palugada,
      description:
        "A website for Palugada, a company specializing in import services from China to Indonesia. The website showcases the company profile, the services offered, articles, and contact information.",
      align: "right",
      link: "https://palugada-nine.vercel.app/",
    },
    {
      title: "CNI Partner",
      img: CniPartner,
      description:
        "A website for CNI Partner, a company that helps Chinese businesses market and sell their products in Indonesia. The website presents the company profile, services, and key information to support business expansion into the Indonesian market.",
      align: "left",
      link: "https://cni-partners.vercel.app/",
    },
    {
      title: "House Of Bottles",
      img: HouseOfBottles,
      description:
        "A website for House of Bottles, a company that sells a wide variety of perfume bottle designs. The website showcases the company profile, product catalog, and detailed information about each bottle.",
      align: "right",
      link: "https://house-of-bottle.vercel.app/",
    },
    {
      title: "Umamiso",
      img: Umamiso,
      description:
        "A website for Umamiso, a company that sells monosodium glutamate (MSG). The website showcases the company profile, product information, and key details about its offerings.",
      align: "left",
      link: "https://umamiso.vercel.app/",
    },
  ];
  return (
    <div className="font-barlow flex flex-col items-center">
      <Navbar />
      <div className="pt-20 lg:pt-40 lg:mx-[150px]">
        <h1 className="text-center text-5xl font-medium">Company Profile</h1>
        <p className="text-center text-base md:text-xl mt-5 px-5 md:px-0">
          This company profile website was originally developed for a client to
          showcase their products. Since the company is no longer active, I have
          transitioned this into a personal project to demonstrate my web design
          and development capabilities.
        </p>
        <div className="flex flex-col mt-10 lg:mt-20 gap-14 md:gap-20">
          {featureCard.map((feature, index) => (
            <div
              key={index}
              className={`flex ${feature.align === "left" ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row"} items-center gap-3 md:gap-16 px-6 md:px-0`}
            >
              {feature.align === "left" ? (
                <>
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="lg:w-[700px] shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base mt-2 md:mt-5">
                      {feature.description}
                    </p>
                    <p className="text-sm md:text-base mt-2 md:mt-5">
                      click{" "}
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        here
                      </a>{" "}
                      to visit the website
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base mt-2 md:mt-5">
                      {feature.description}
                    </p>
                    <p className="text-sm md:text-base mt-2 md:mt-5">
                      click{" "}
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        here
                      </a>{" "}
                      to visit the website
                    </p>
                  </div>
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="lg:w-[700px] shadow-lg"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyProfile;
