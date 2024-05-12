'use client'

import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from "react-icons/io";
import React from "react";

import Image from "next/image"
import laptop from "|/laptop.png"
import projectDatas, { projectData } from "@/app/skills/data/projects"
import { useEffect, useState } from "react"
import Link from "next/link";

export default function ProjectsScroll() {
    const [image, setImage] = useState<number>(0)
    const [size, setSize] = useState<number>(0)
    const handleScroll = (sign:string) => {
        if(sign === "-"){
            if (image === 0) {
                setImage(projectDatas.length - 1)
            } else {
                setImage(image - 1)
            }
        }else{
            if (image === projectDatas.length - 1) {
                setImage(0)
            } else {
                setImage(image + 1)
            }
        }
    }
   
    return (
        <div className="relative w-fit mx-auto">
            <div className="mx-auto lg:w-[1000px] relative">
                <Image src={laptop} width={0} height={0} alt="laptop" className="w-fit lg:w-full hidden lg:block"  priority/>
                <div className="absolute z-10 text-accent text-5xl top-56 w-full flex justify-between px-10">
                    <button onClick={()=>handleScroll("-")}>
                        <IoMdArrowDropleftCircle />
                    </button>
                    <button onClick={()=> handleScroll("+")}>
                        <IoMdArrowDroprightCircle />
                    </button>
                </div>
            </div>
            <div className="static lg:absolute top-7 w-[750px] h-[500px] mx-auto left-0 right-0 flex flex-shrink-0 overflow-hidden">
                {projectDatas.map((pd: projectData, index: number) => (
                    <React.Fragment key={index}>
                    <Image
                        src={pd.image}
                        width={750}
                        height={500}
                        alt={pd.title}
                        className="object-cover transition-all duration-150 ease-in-out"
                        style={{ transform: `translateX(-${image * 750}px)` }}
                        loading="lazy"
                    />
                    <div className={`absolute bottom-0 ${image===index?"slider":""} w-[750px] h-fit bg-white px-5 py-2 desc transition-all duration-500 delay-75 ease-in lg:flex flex-col gap-3 hidden `}>
                        <div className="text-2xl text-primary">
                            {pd.title}
                        </div>
                        <div className="text-sm">
                            {pd.desc}
                        </div>
                        <Link href={pd.url} className="text-xs bg-primary px-3 py-1 w-fit">
                            Find out more
                        </Link>
                    </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}