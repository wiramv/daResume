import { core } from "@/app/skills/data/about"
import Image from "next/image"

export default function CoreComp(props:core){


    return(
        <div className="max-w-[1600px] max-h-[1000px] grid grid-cols-1 xl:grid-cols-3 mb-5 md:gap-5 relative mx-auto">
            <div className={`col-span-2 ${props.num === 0 || props.num %2 === 0? "md:order-2":""} shadow-xl`}><Image src={props.image} width={0} height={0} alt={props.title} className=" object-contain w-full" loading="lazy"/></div>
            <div className="xl:h-full w-full md:w-[300px] top-0 bottom-0 xl:w-full bg-primary flex flex-col items-center justify-center gap-5 p-10 text-secondary static md:absolute xl:static shadow-xl">
                <div className="text-2xl font-semibold uppercase font-montserat">
                    {props.title}
                </div>
                <div>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

