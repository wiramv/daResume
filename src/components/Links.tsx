import  {link}  from "@/components/template/navbar"
import Link from "next/link"

function Links(props:link) {
  return (
    <Link href={props.url} className={props.button?"hidden sm:block bg-accent text-secondary font-semibold p-3 rounded-md hover:bg-primary hover:text-text transition-all duration-150 ease-in-out":props.current === props.url?"hidden md:block border-b-2 border-transparent border-b-accent":"hidden md:block border-b-2 border-transparent hover:border-b-accent"}>
        {props.text}
    </Link>
  )
}

export default Links