import { IconType } from "react-icons"
import { MdWorkHistory } from "react-icons/md";
import { GoFileCode } from "react-icons/go";
import { MdScience } from "react-icons/md";
import Link from "next/link";

export interface me {
    icon: IconType,
    text: string,
    url: string
}

export default function WhyMe() {
    const us: me[] = [
        {
            icon: MdWorkHistory,
            text: "Long Experience",
            url: ""
        },
        {
            icon: GoFileCode,
            text: "Reliable Skill",
            url: ""
        },
        {
            icon: MdScience,
            text: "Award Wining Project",
            url: ""
        },
    ]
    return (
        <div className="bg-bg">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 justify-around relative -translate-y-32">
            {us.map((me: me, index: number) => {
                const Icon = me.icon
                return (
                    <div key={index} className="max-w-[500px] w-full h-[270px] bg-text text-bg flex items-center flex-col justify-between py-8 shadow-xl">
                        <div className="bg-secondary text-accent w-20 h-20 rounded-full text-3xl flex items-center justify-center">
                            <Icon />
                        </div>
                        <div className="font-semibold text-2xl">
                            {me.text}
                        </div>
                        <Link href={me.url} className="bg-accent px-2 py-2">
                            Learn More
                        </Link>
                    </div>
                )
            })}
        </div>
        </div>
    )
}