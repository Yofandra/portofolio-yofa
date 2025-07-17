import PolinemaLogo from '../assets/polinema_logo.png'
import SanberLogo from '../assets/sanber_logo.png'
import SaiDokumentasi from '../assets/sai.jpg'

const CardEducationIntern = () => {
    const educationsInternship = [
        {
            id:1,
            title: 'State polytechnic of Malang',
            desc: 'Informatics Engineering',
            period: 'August 2021 - August 2025 (Expected)',
            image: PolinemaLogo
        },
        {
            id:2,
            title: 'Sanber Foundation x Academy',
            desc: 'Fullstack Javascript Developer',
            period: 'February 2024 - June 2024',
            image: SanberLogo
        },
        {
            id:3,
            title: 'PT. Surabaya Autocomp Indonesia',
            desc: 'Fullstack Web Developer (Internship)',
            period: 'July 2024 - December 2024',
            image: SaiDokumentasi
        },
    ]

  return (
    <div className="card w-screen flex flex-col md:flex-row justify-center md:!justify-around items-center md:px-16 md:mb-20">
        {educationsInternship.map((education) => (
            <div key={education.id} className="w-64 md:w-[410px] h-full md:!h-[460px] rounded-lg flex flex-col justify-center items-center mt-5 py-4 bg-primary md:bg-secondary">
                <div className='w-52 md:w-[330px] bg-white h-36 md:h-[250px] flex justify-center items-center'>
                    <img src={education.image} alt="" className="h-full rounded-lg" />
                </div>
                <h3 className="font-semibold text-sm md:text-[22px] mt-2 md:mt-6">{education.title}</h3>
                <p className="text-xs md:text-xl italic mt-2 md:mt-6">{education.desc}</p>
                <p className="text-xs md:text-lg">{education.period}</p>
            </div>
        ))}
    </div>
  );
}

export default CardEducationIntern;