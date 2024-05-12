import  { meThumbnails,meThumbnail } from "../skills/data/about";
import MeThumbnail from "@/components/MeThumbnail";
import CoreValue from "@/components/CoreValue";
import { Suspense } from "react";



export default function AboutPage() {


    return (
        <div className=" pt-24 px-5 sm:px-24 pb-10 bg-bg">
            <div className="font-bold font-montserat text-3xl text-accent mx-auto mb-5">
                Personal Background
            </div>
            <div className="w-full lg:w-1/2">
                Hey there, I'm Wira, hailing from the bustling tech scene of Indonesia. For the last eight years, I've been fortunate to be part of incredible teams, constantly broadening my skills and understanding. Specializing in the tech field for four years, I've teamed up with top-notch talents at Tekape and Analisa.io. Together, we've led exciting ventures like the Crossbow Web3 Analytics platform and the revolutionary Voxen: AI-based Sentiment Analyzer. It's been a ride filled with innovation and challenges, and seeing our collaborative efforts come to life has been incredibly rewarding.
                <br />Throughout my journey, I've been deeply immersed in every aspect of the tech spectrum, from frontend development to data analysis. My passion lies in crafting seamless user experiences and translating complex data into actionable insights. With a keen eye for detail and a penchant for creativity, I thrive on pushing boundaries and delivering results that exceed expectations. As I look ahead, I'm excited to continue exploring new horizons and making meaningful contributions to the ever-evolving tech landscape.
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mt-10">
                {meThumbnails.map((thumb: meThumbnail, index: number) => (
                    <div key={index}>
                        <MeThumbnail icon={thumb.icon} num={thumb.num} text={thumb.text} idx={index} />
                    </div>
                ))}
            </div>
            <Suspense fallback={<p>Loading ...</p>}>
                <CoreValue />
            </Suspense>
        </div>
    )
}