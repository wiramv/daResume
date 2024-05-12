import { TbBrandGithubFilled } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import { IconType } from "react-icons";
import Link from "next/link";
export interface footerIcon{
    alt:string,
    url:string,
    icon:IconType
}

export default function Footer(){
    const icons:footerIcon[] = [
        {
            alt:"github",
            url:"",
            icon:TbBrandGithubFilled
        },
        {
            alt:"Linkdin",
            url:"",
            icon:GrLinkedinOption
        }
    ]
    return(
        <div className=" py-5 px-10 bg-text w-full text-bg flex flex-col gap-5 items-center sm:flex-row justify-between font-montserat">
            {/* name */}
            <div>
                <div>

                </div>
                <div>
                    <span>WIRA</span>
                    <span className="font-bold">MAHATVAVIRYA</span>
                </div>
            </div>
            {/* icons */}
            <div className="flex gap-5">
                {icons.map((icon:footerIcon, index:number) => {
                    const Icon:IconType=icon.icon
                    return(
                        <Link key={index} href={icon.url}>
                            <Icon className="bg-primary text-text rounded-full text-[1px] w-8 h-8 p-1"/>
                        </Link>
                    )
                })}
            </div>
            {/* text */}
            <div>
            wira mahatvavirya@2024
            </div>
        </div>
    )
}