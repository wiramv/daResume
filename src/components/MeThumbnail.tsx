import { meThumbnail } from "@/app/skills/data/about"

export default function MeThumbnail(props:meThumbnail){
    const Icon = props.icon
    return(
        <div className={`shadow-sm mx-auto hover:shadow-xl hover:-translate-y-3 w-full lg:w-[450px] h-fit lg:h-[300px] grid grid-cols-2 ${props.idx === 0 ||props.idx%2===0?"bg-accent":"bg-primary"} mb-5 lg:mb-24 items-center place-items-center text-secondary px-10 py-10 lg:py-0`}>
            <div className="text-5xl sm:text-9xl">
                <Icon/>
            </div>
            <div className="text-center">
                <h1 className="text-5xl font-semibold font-montserat">
                    {props.num}{props.num > 99?"++":""}
                </h1>
                <h4 className="text-lg sm:text-2xl">
                    {props.text}
                </h4>
            </div>
        </div>
    )
}