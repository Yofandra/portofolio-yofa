/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const LineAbout = ({ header, image, imageClass, sections }) => {
    return (
        <>
            <h1 className="mt-4 text-[15px] font-bold tracking-wide">{header}</h1>
            <div className="flex mt-3">
                <img src={image} alt="" className={`${imageClass}`}/>
                <div className="ml-2">
                {sections.map((section) => (
                    <div key={section.id}>
                        <h3 className="text-primary text-[13px] font-bold">{section.title}</h3>
                        <h5 className="text-[12px] font-bold mt-1">{section.desc}</h5>
                        <p className="text-[10px] mb-5">{section.period}</p>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default LineAbout