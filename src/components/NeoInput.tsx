import { ChangeEventHandler } from "react"


interface inputs{
    id:string,
    text:string,
    value:string,
    handle: ChangeEventHandler<HTMLInputElement>
}

export default function NeoInput(props:inputs) {

    return (
        <div className="relative w-56">
            <input type="text" id={props.id} className="border border-gray-500 h-10 px-4 outline-primary w-full" placeholder=" " value={props.value} onChange={props.handle}/>
            <label htmlFor={props.id} className="absolute left-3 text-xs top-2 transition-all ease-in-out duration-200">{props.text}<span className="text-red-500"> *</span></label>
        </div>
    )
}