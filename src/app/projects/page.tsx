'use client'

import ProjectThumbnail from "@/components/ProjectThumbnail";
import ProjectsScroll from "@/components/ProjectsScroll";


export default function Projects() {


    return (
        <div className="mt-24">
            <div className="mb-10">
                <div className="text-center font-montserat text-4xl md:text-6xl text-gray-400 font-semibold uppercase">
                    projects
                </div>
                <div className="font-montserat text-center text-base px-10 sm:text-2xl mt-5">
                    Past Projects That I have been working on
                </div>
            </div>
            <div className="hidden lg:block">
                <ProjectsScroll/>
            </div>
            <div className="block lg:hidden">
                <ProjectThumbnail/>
            </div>
        </div>
    )
}