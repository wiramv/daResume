import projectDatas, { projectData } from "@/app/skills/data/projects"
import Image from "next/image"
import Link from "next/link"


export default function ProjectThumbnail() {

    return (
        <div className="flex flex-col gap-10">
            {projectDatas.map((pd: projectData, index: number) => (
                <div key={index} className="relative w-5/6 mx-auto md:w-full">
                    <div className="border-2 border-gray-300">
                        <Image src={pd.image} width={0} height={0} alt={pd.title} />
                    </div>
                    <div className={`static mt-10 md:mt-0 md:absolute bottom-0 z-10 w-full h-fit bg-white px-5 py-2 transition-all duration-500 delay-75 ease-in flex flex-col gap-6 md:gap-3 border-b-2 md:border-b-8 border-b-primary`}>
                        <div className="text-2xl text-primary">
                            {pd.title}
                        </div>
                        <div className="text-sm">
                            {pd.desc}
                        </div>
                        <Link href={pd.url} className="text-xs bg-primary px-3 py-1 w-fit">
                            Find out more
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}