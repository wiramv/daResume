'use client'
import { useState } from "react";
import NeoInput from "./NeoInput";


export default function () {

    const [data, setData] = useState(
        {
            name: "",
            phone: "",
            mail: "",
            reason: "",
            other: "",
            message: ""
        }
    )

    const handleChange = (event: any, id: any) => {
        const { value } = event.target
        setData({ ...data, [id]: value })
    }

    return (
        <div className="flex flex-col gap-5 my-24 px-10">
            <div className="flex flex-wrap gap-10 w-full max-w-[600px]">
                <div className="flex-shrink-0">
                    <NeoInput
                        id="name"
                        text="full name"
                        value={data.name}
                        handle={(e: any) => handleChange(e, "name")}
                    />
                </div>
                <div className="flex-shrink-0">
                    <NeoInput
                        id="phone"
                        text="phone number"
                        value={data.phone}
                        handle={(e: any) => handleChange(e, "phone")}
                    />
                </div>
                <div className="flex-shrink-0">
                    <NeoInput
                        id="mail"
                        text="email address"
                        value={data.mail}
                        handle={(e: any) => handleChange(e, "mail")}
                    />
                </div>
            </div>
            <select name="reason" id="reason" className="w-56" onChange={(e) => setData({ ...data, reason: e.target.value })}>
                <option value="full time">Full Time Job Offer</option>
                <option value="freelance">Freelance Job</option>
                <option value="other">Other</option>
            </select>

            {data.reason === "other" && <NeoInput
                id="other"
                text="Other Reason"
                value={data.other}
                handle={(e: any) => handleChange(e, "other")}
            />}
            <div className="relative w-full">
                <textarea id={"message"} className="border border-gray-500 h-[400px] px-4 outline-primary w-full sm:w-[600px] pt-5" placeholder=" " value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} />
                <label htmlFor={"message"} className="absolute left-3 text-xs top-2 transition-all ease-in-out duration-200">{"message"}<span className="text-red-500"> *</span></label>
            </div>
            <button className="border border-primary w-fit text-primary rounded-lg px-4 py-2 relative hover:text-white overflow-hidden submit">
                <span>Submit Message</span>
                <div className="bg-primary w-0 h-full absolute -z-10 top-0 left-0 right-0 bottom-0 submit-slide transition-all duration-200 ease-linear delay-75"></div>
            </button>
        </div>
    )
}