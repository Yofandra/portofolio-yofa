// eslint-disable-next-line react/prop-types
const HeaderMenu = ({title, desc1, desc2}) => {
    return (
        <>
            <h1 className="font-semibold text-[15px] tracking-widest text-center md:text-[25px]">{title}</h1>
            <p className="w-[270px] font-semibold text-primary text-[10px] mt-2 text-center md:text-[20px] md:w-full md:mt-5">{desc1}</p>
            <p className="w-[270px] font-semibold text-primary text-[10px] text-center md:text-[20px] md:w-full">{desc2}</p>
        </>
    )
}

export default HeaderMenu