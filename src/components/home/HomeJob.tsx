import da_1 from "|/analyst_1.jpg"
import ux_1 from "|/ux_1.jpg"
import code_1 from "|/code_1.jpg"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export interface jobData{
    title:string,
    text:string,
    image:StaticImageData,
    url:string
}

export default function HomeJob(){
    const jobDatas:jobData[]= [
        {
            title:"Data Analyst",
            text:"I specialize in crafting captivating user interfaces and smooth user experiences using the latest frontend technologies. Whether it's designing responsive layouts or building interactive web apps, I excel at turning designs into dynamic, user-friendly interfaces that impress across various platforms.",
            image:da_1,
            url:""
        },
        {
            title:"UI / UX Designer",
            text:"I love crafting user interfaces that are not only visually stunning but also intuitive, keeping users engaged and satisfied. By blending creativity with user-centric design principles, I create seamless experiences that leave a lasting impression across digital platforms.",
            image:ux_1,
            url:""
        },
        {
            title:"Frontend Developer",
            text:"I enjoy delving into the realm of data analysis and visualization, where I transform raw data into actionable insights. By leveraging my analytical skills and statistical knowledge, I uncover trends, patterns, and correlations that empower informed decision-making and foster business growth.",
            image:code_1,
            url:""
        },
    ]

    return(
        <div className="flex flex-col gap-24 relative">
            {jobDatas.map((job:jobData, index:number) => (
                <div key={index} className={index !== 1?"h-[500px] lg:h-[1000px] w-full bg-transparent lg:bg-primary flex items-center text-text":"h-fit lg:h-[1000px] w-full bg-primary flex flex-row-reverse items-center text-text"}>
                    <Image src={job.image} width={0} height={0} alt={job.title} className="lg:h-[1000px] object-contain lg:object-fill" loading="lazy"/>
                    <div className={index !== 1? "absolute right-1 md:right-36 h-fit lg:h-[600px] w-[300px] bg-bg flex flex-col items-center justify-center gap-10 p-5 -translate-x-40 shadow-xl":"absolute left-1 md:left-36 h-fit lg:h-[600px] w-[300px] bg-bg flex flex-col items-center justify-center gap-10 p-5 translate-x-40 shadow-xl"}>
                        <h1 className="font-montserat text-2xl font-bold">
                            {job.title}
                        </h1>
                        <h4>
                            {job.text}
                        </h4>
                        <Link href={job.url} className="font-montserat text-secondary bg-primary px-3 py-2 hover:shadow-lg hover:-translate-y-1">
                            Learn More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}