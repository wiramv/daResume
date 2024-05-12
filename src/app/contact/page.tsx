import ContactForm from "@/components/ContactForm"
import Image from "next/image"
import da_1 from "|/analyst_1.jpg"

export default function Contact() {

    return (
        <div className="mt-24">
            <div className="mb-10">
                <div className="text-center font-montserat text-4xl md:text-6xl text-gray-400 font-semibold uppercase">
                    Contact Me
                </div>
                <div className="font-montserat text-center text-base px-10 sm:text-2xl mt-5">
                    Got Something in mind, just let me know
                </div>
            </div>
            <div className="grid grid-cols-1 2xl:grid-cols-2 max-w-[1500px] mx-auto mb-10">
                <div className="w-fit mx-auto order-2">
                    <ContactForm/>
                </div>
                <div className="h-[200px] 2xl:h-[800px] sm:w-[600px] w-full 2xl:w-full bg-green-300 mx-auto">
                    <Image src={da_1} alt="data analyst" priority className="object-cover h-full"/>
                </div>
            </div>
        </div>
    )
}