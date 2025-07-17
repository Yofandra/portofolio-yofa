// eslint-disable-next-line react/prop-types
const CardService = ({title, description, image}) =>{
    return (
        <div className="flex flex-col items-center card w-[310px] md:w-[520px] h-[120px] md:h-[244px] bg-[#CEE6EA] pt-2 mb-4 rounded-lg shadow-md shadow-gray-400 md:mx-4 md:mb-6" >
            <img className="w-[23px] md:w-[55px] md:mt-3" src={image} alt="" />
            <h2 className="font-semibold text-[#383838] text-[12px] md:text-[20px] my-2 md:my-5 tracking-wider">{title}</h2>
            <p className="mx-[20px] text-[10px] md:text-[15px] text-justify text-primary font-medium tracking-wide md:w-[435px]">{description}</p>
        </div>
    );
}

export default CardService;