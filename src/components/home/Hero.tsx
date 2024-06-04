import { TbBrandGithubFilled } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import { IconType } from "react-icons";
import Link from "next/link";
import { footerIcon } from "@/components/template/Footer";
import arrow from "|/arrow.png"
import Image from "next/image";
import face from "|/face.jpg"

export default function Hero() {
  const icons: footerIcon[] = [
    {
      alt: "github",
      url: "https://github.com/wiramv",
      icon: TbBrandGithubFilled
    },
    {
      alt: "Linkdin",
      url: "https://www.linkedin.com/in/wiramv/",
      icon: GrLinkedinOption
    }
  ]

  return (
    <div style={{ backgroundImage: "url(/main_bg.jpg)", backgroundAttachment: "fixed" }} className="w-full pb-52 pt-24">
      {/* glassmorph */}
      <div className="backdrop-blur-md border-4 border-white w-[90%] mx-auto py-24 rounded-xl px-5   grid grid-cols-1 2xl:grid-cols-3 items-center max-w-[1300px] mt-5 md:mt-24 ">
        {/* text */}
        <div className="font-montserat col-span-1 2xl:col-span-2 order-1 mx-auto text-text">
          <div className="font-pacifico sm:text-3xl text-lg text-gray-700">
            Hi There, my name is
          </div>
          <div className="text-2xl sm:text-5xl lg:text-7xl">
            <span>WIRA</span>
            <span className="font-bold">MAHATVAVIRYA</span>
          </div>
          {/* bottom text */}
          <div className="text-3xl">
            <span>And I'm a </span>
            <span className="font-bold uppercase">Data Analyst</span>
          </div>
          <div className="mt-10">
            {/* icon */}
            <div className="flex gap-5">
              {icons.map((icon: footerIcon, index: number) => {
                const Icon: IconType = icon.icon
                return (
                  <Link key={index} href={icon.url} className="border-2 border-accent p-2 rounded-xl hover:bg-accent hover:text-secondary">
                    <Icon className="text-xl" />
                  </Link>
                )
              })}
            </div>
            <Link href="/about" className="flex gap-2 bg-accent items-center p-2 rounded-md mt-10 relative hover:translate-x-1 text-secondary w-fit">
              <span>
                About Me
              </span>
              <Image src={arrow} width={0} height={0} alt="arrow"/>
            </Link>
          </div>
        </div>
        {/* pp */}
        <div className="max-w-[200px] h-[200px] w-full   2xl:order-2 mb-24 2xl:mb-0 mx-auto rounded-full overflow-hidden border-accent border-8">
              <Image src={face} alt="face" className="w-full h-full object-contain "/>  
        </div>
      </div>
    </div>
  );
}
