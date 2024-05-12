'use client'
import Links from "@/components/Links";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";



export interface link {
  text: string,
  url: string,
  button: boolean,
  current: string
}

export default function Navbar() {

  const path = usePathname()

  const links: link[] = [
    {
      text: "about",
      url: "/about",
      button: false,
      current: ""
    },
    {
      text: "skills",
      url: "/skills",
      button: false,
      current: ""
    },
    {
      text: "experience",
      url: "/experience",
      button: false,
      current: ""
    },
    {
      text: "projects",
      url: "/projects",
      button: false,
      current: ""
    },
    {
      text: "contact",
      url: "/contact",
      button: true,
      current: ""
    }
  ]
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-bg font-montserat">
      {/* navbar */}
      <div className="max-w-[1800px] mx-auto flex items-center justify-between py-5 px-10">
        {/* nama */}
        <div>
          <Link href="/" className="text-xl">
            <span>
              WIRA
            </span>
            <span className="font-bold text-accent">
              MAHATVAVIRYA
            </span>
          </Link>
        </div>
        {/* link */}
        <div className="flex max-w-[530px] justify-between items-center w-full">
          {links.map((link: link, index: number) => (
            <div key={index}>
              <Links text={link.text} url={link.url} button={link.button} current={path} />
            </div>
          ))}
          <button className="md:hidden">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  )
}