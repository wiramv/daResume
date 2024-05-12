import { FaAward } from "react-icons/fa6";
import { AiFillCode } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { BsPersonVideo2 } from "react-icons/bs";
import { FaCalendarTimes } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IconType } from "react-icons";

import { StaticImageData } from "next/image"
import proud from "|/proud.jpg"
import value from "|/value.jpg"
import principle from "|/principle.jpg"
import growth from "|/growth.jpg"
import more from "|/more.jpg"
import CoreComp from "@/components/CoreComp";

export interface core {
    image: StaticImageData,
    title: string,
    text: string,
    num: number
}

export interface meThumbnail {
    icon: IconType,
    num: number,
    text: string,
    idx:number
}
const meThumbnails: meThumbnail[] = [
    {
        icon: FaAward,
        num: 3,
        text: "WORLD CLASS AWARDS",
        idx:0
    },
    {
        icon: AiFillCode,
        num: 7,
        text: "Programming Language",
        idx:0
    },
    {
        icon: FaReact,
        num: 10,
        text: "Framework & Library",
        idx:0
    },
    {
        icon: BsPersonVideo2,
        num: 3,
        text: "Skill Jobset",
        idx:0
    },
    {
        icon: FaCalendarTimes,
        num: 8,
        text: "years of Experience",
        idx:0
    },
    {
        icon: FaGlobeAmericas,
        num: 100,
        text: "Freelance Clients",
        idx:0
    },
]

const cores: core[] = [
    {
        image: proud,
        title: "THINGS THAT MAKE ME PROUD",
        text: "Participating in various tech competitions has been a highlight of my journey. Achieving 1st place in the Solana Sandstorm competition, securing 3rd place in the Grizzlython, and being the proud winner of 1st place at ETH Tokyo were moments of celebration and validation of our hard work and dedication. These experiences have not only sharpened my skills but also reinforced my belief in the power of teamwork and collaboration.",
        num: 0
    },
    {
        image: value,
        title: "core values",
        text: "My journey in the tech industry has equipped me with a diverse set of skills and expertise. From frontend development using JavaScript, React.js, and Vue.js, to backend development with Node.js and FastAPI, I've honed my abilities to bring innovative ideas to life. Additionally, proficiency in tools like MySQL for database management, Python for data analysis, and Adobe Illustrator and Photoshop for design work, has allowed me to contribute effectively to projects across various domains.",
        num: 0
    },
    {
        image: principle,
        title: "guiding principles",
        text: "At the core of my professional journey lies a steadfast principle: the pursuit of continuous growth and learning. I firmly believe that challenging oneself is the key to personal and professional development. This principle has driven me to explore diverse roles in graphic design, UI/UX design, full-stack development, and data analyst. Each challenge has not only expanded my skill set but also enriched my understanding of the tech landscape.",
        num: 0
    },
    {
        image: growth,
        title: "Professional Aspirations",
        text: "Looking ahead, my career goal is to deepen my expertise as a data analyst while venturing into the realm of machine learning. By gaining extensive experience in data analysis and expanding my scope to encompass machine learning techniques, I aim to transition into the role of a proficient data scientist. This journey represents my commitment to lifelong learning and my passion for leveraging technology to solve complex problems.",
        num: 0
    },
    {
        image: more,
        title: "One More Thing",
        text: "Beyond my professional pursuits, I find joy in learning new things that spark my curiosity. Whether it's diving into a new programming language, experimenting with design concepts, or exploring emerging technologies, I'm always eager to broaden my horizons. If you have any recommendations or ideas for collaboration, I'm all ears!",
        num: 0
    },
]

export  {meThumbnails, cores}