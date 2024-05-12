import exps, { exp } from "../skills/data/experience"
import parse from "html-react-parser"
export default function Experience() {

    return (
        <div className="pt-24">
            <div className="mb-10 bg-white">
                <div className="text-center font-montserat text-4xl md:text-6xl text-gray-400 font-semibold uppercase">
                    projects
                </div>
                <div className="font-montserat text-center text-2xl mt-5">
                    Past Projects That I have been working on
                </div>
            </div>

            <div className="bg-text pt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-[1500px] mx-auto justify-items-center">
                    {exps.map((exp: exp, index: number) => (
                        <div key={index} className="w-5/6 md:w-[350px] md:h-[350px] bg-white flex flex-col justify-between p-5 exp mb-8 relative">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-montserat text-3xl font-semibold">
                                    {exp.company}
                                </h1>
                                <h3 className="font-montserat text-2xl italic">
                                    {exp.position}
                                </h3>
                                <div className="flex gap-3">
                                    {exp.tags.map((tag: string, idx: number) => (
                                        <span className="py-1 px-2 bg-primary text-gray-700 rounded-xl cursor-pointer hover:bg-accent">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h4 className="h-full mt-5">
                                {parse(exp.text)}
                            </h4>
                            <h3 className="text-right text-gray-400">
                                {exp.date}
                            </h3>
                            <div className="exp-line absolute left-0 bottom-0 right-0 h-1 w-full bg-primary transition-all duration-150 ease-linear">

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}