import skillDatas ,{  skillData, setSkill } from "./data/skill"
import { Suspense } from "react";








export default function Skills() {
    


    return (
        <div className="pt-24 bg-bg">
            <div className="text-center font-montserat text-4xl md:text-6xl text-gray-400 font-semibold uppercase">
                Skill Sets
            </div>
            <div>
                {skillDatas.map((data: skillData, index: number) => (
                    <div key={index}>
                        <div className="text-xl md:text-3xl font-montserat font-semibold italic text-center my-10 ">
                            {data.name}
                        </div>
                        <div className="bg-accent h-1 w-full max-w-[1000px] rounded-xl mx-auto my-10"></div>
                        <div className={`max-w-[1920px] w-full h-[200px] mb-10 mx-auto bg-center`} style={{ backgroundImage: data.image, backgroundAttachment: "fixed", backgroundSize:"cover", resize:"both"}}>
                        </div>
                        <Suspense fallback={<p>Loading...</p>}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 w-fit mx-auto gap-5">
                            {data.sets.map((set: setSkill, idx: number) => {
                                const Icon = set.icon
                                return (
                                    <div key={idx * 111} className="bg-text text-accent max-w-[80%] mx-auto md:max-w-[350px] w-full h-[370px] p-10 flex flex-col items-center justify-center gap-5 md:mt-24 md:mb-10 shadow-sm hover:shadow-2xl hover:scale-110 transition-all ease-in-out duration-150 border-b-8 hover:border-b-primary border-accent hover:shadow-primary hover:text-primary">
                                        <div className=" text-7xl">
                                            <Icon />
                                        </div>
                                        <div className="text-2xl text-white">
                                            {set.name}
                                        </div>
                                        <div className="text-sm text-white">
                                            {set.text}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        </Suspense>
                    </div>
                ))}
            </div>
        </div>
    )
}
