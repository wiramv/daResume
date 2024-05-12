// icons da
import { BiLogoPostgresql } from "react-icons/bi";
import { PiMathOperationsFill } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
// icons fd
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaReact } from "react-icons/lia";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiVuejsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaGitlab } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiWebstorm } from "react-icons/si";
// icon uiux
import { ImLab } from "react-icons/im";
import { SiMaterialdesignicons } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";
import { MdSendToMobile } from "react-icons/md";

import { IconType } from "react-icons";
// import Image, { StaticImageData } from "next/image";


export interface setSkill {
    name: string,
    icon: IconType,
    text: string
}
export interface skillData {
    name: string,
    image: string,
    sets: setSkill[]
}

const skillDatas: skillData[] = [
    {
        name: "Data Analytst",
        image: "url(/analyst_1.jpg)",
        sets: [
            {
                name: "sql",
                icon: BiLogoPostgresql,
                text: "When it comes to MySQL, I'm skilled at efficiently querying and manipulating databases to extract valuable insights from large datasets. I focus on optimizing queries to enhance database performance, making sure data retrieval for analysis is fast and smooth."
            },
            {
                name: "python",
                icon: FaPython,
                text: "When using Python, tools like Pandas and Jupyter are my go-to for diving into data analysis. Plus, getting creative with web scraping to grab extra datasets from the web adds depth and variety to analyses."
            },
            {
                name: "Business Math",
                icon: PiMathOperationsFill,
                text: "Drawing on principles of business math and statistics, analytical techniques are applied to interpret data and identify trends. Key metrics such as averages, standard deviations, and correlations are calculated to derive meaningful insights."
            },
            {
                name: "Excel",
                icon: FaFileExcel,
                text: "In Excel, advanced functions and formulas are utilized to clean, transform, and analyze data effectively. Dynamic dashboards and visualizations are then crafted to present key findings in a compelling manner, facilitating decision-making processes."
            },
            {
                name: "Power BI",
                icon: SiPowerbi,
                text: "Using PowerBI, interactive reports and dashboards are developed to offer actionable insights to stakeholders. Data integration from various sources enables comprehensive analysis and visualization of business metrics, enhancing decision-making processes."
            },
        ]
    },
    {
        name: "Frontend Developer",
        image: "url(/code_1.jpg)",
        sets: [
            {
                name: "HTML",
                icon: FaHtml5,
                text: "Using HTML, I structure web pages with semantic markup to enhance accessibility and SEO. I create well-organized document outlines that serve as the foundation for building responsive and interactive websites."
            },
            {
                name: "CSS",
                icon: IoLogoCss3,
                text: "With CSS, I style web pages to create visually appealing and consistent user interfaces. I utilize CSS grid and flexbox for layout design, and I implement animations and transitions to enhance user experience."
            },
            {
                name: "Javascript",
                icon: IoLogoJavascript,
                text: "Leveraging JavaScript, I add interactivity and dynamic behavior to web pages. I utilize modern ES6+ features to write clean and efficient code, enhancing the functionality and responsiveness of web applications."
            },
            {
                name: "ReactJs",
                icon: LiaReact,
                text: "In React, I develop reusable components that compose user interfaces with a modular approach. I manage state and data flow efficiently using React's component lifecycle methods and hooks, ensuring maintainable and scalable applications."
            },
            {
                name: "TailwindCSS",
                icon: RiTailwindCssFill,
                text: "Using Tailwind CSS, I design responsive and utility-first interfaces with minimal CSS code. I leverage its extensive utility classes to style components quickly and consistently, speeding up the development process."
            },
            {
                name: "Bootstrap",
                icon: FaBootstrap,
                text: "With Bootstrap, I build responsive and mobile-first websites using its pre-designed components and grid system. I customize Bootstrap themes to match brand aesthetics and optimize user experience across devices."
            },
            {
                name: "VueJs",
                icon: RiVuejsFill,
                text: "In Vue.js, I create interactive and reactive user interfaces with ease. I leverage Vue's reactivity system and component-based architecture to build scalable and maintainable single-page applications."
            },
            {
                name: "NextJs",
                icon: RiNextjsFill,
                text: "Utilizing Next.js, I develop server-side rendered and statically generated React applications. I leverage Next.js's built-in features like routing, data fetching, and image optimization to build high-performance web experiences."
            },
            {
                name: "Redux",
                icon: SiRedux,
                text: "With Redux, I manage application state in complex React applications with a predictable state container. I implement actions, reducers, and selectors to maintain a single source of truth for data, ensuring consistency across components."
            },
            {
                name: "Github",
                icon: TbBrandGithubFilled,
                text: "Using GitHub, I collaborate with team members and contribute to open-source projects by managing code repositories and version control. I utilize features like pull requests, branching strategies, and issue tracking to streamline development workflows."
            },
            {
                name: "GitLab",
                icon: FaGitlab,
                text: "In GitLab, I leverage its integrated CI/CD pipelines and version control features to automate software development processes. I manage project repositories, issues, and merge requests effectively, ensuring code quality and collaboration."
            },
            {
                name: "VsCode",
                icon: VscVscode,
                text: "With Visual Studio Code, I develop frontend applications efficiently with its extensive ecosystem of extensions and integrations. I customize my development environment with plugins for code linting, debugging, and version control integration."
            },
            {
                name: "Webstorm",
                icon: SiWebstorm,
                text: "Using WebStorm, I enhance productivity and code quality in JavaScript development with its intelligent code completion and refactoring tools. I leverage its built-in debugger and testing support to ensure robust and error-free code."
            },
        ]
    },
    {
        name: "UI/UX Designer",
        image: "url(/ux_1.jpg)",
        sets: [
            {
                name: "User Research",
                icon: ImLab,
                text: "Through user research, I conduct interviews, surveys, and usability tests to understand user behaviors and preferences. I analyze feedback to inform design decisions, ensuring that products meet user needs and expectations."
            },
            {
                name: "Prototyping",
                icon: SiMaterialdesignicons,
                text: "With prototyping tools like Figma and Adobe XD, I create interactive prototypes that simulate the user experience. These prototypes enable rapid iteration and testing of design concepts, allowing for refinement based on user feedback."
            },
            {
                name: "Graphic Design",
                icon: SiAdobe,
                text: "Utilizing graphic design principles, I craft visually appealing layouts and assets that enhance the user interface. I apply typography, color theory, and composition techniques to create engaging designs that resonate with users."
            },
            {
                name: "Adobe Photoshop",
                icon: SiAdobephotoshop,
                text: "In Photoshop, I manipulate images and graphics to achieve desired visual effects for digital interfaces. I optimize images for web and mobile platforms, ensuring high-quality visuals that enhance the user experience."
            },
            {
                name: "Adobe Illustrator",
                icon: SiAdobeillustrator,
                text: "With Illustrator, I create vector graphics and icons that contribute to the overall aesthetics of the user interface. I design custom illustrations and icons that align with brand identity and effectively communicate information to users."
            },
            {
                name: "Figma",
                icon: IoLogoFigma,
                text: "Using Figma, I collaborate with team members to design and prototype user interfaces in a cloud-based environment. I leverage its real-time collaboration features to streamline the design process and ensure consistency across designs."
            },
            {
                name: "Adobe XD",
                icon: SiAdobexd,
                text: "In Adobe XD, I develop interactive prototypes and wireframes that visualize the user journey and interface interactions. I utilize its prototyping capabilities to validate design concepts and gather feedback from stakeholders."
            },
            {
                name: "Responsive Design",
                icon: MdSendToMobile,
                text: "Implementing responsive design principles, I ensure that interfaces adapt seamlessly to various screen sizes and devices. I design flexible layouts and components that maintain usability and readability across different resolutions and orientations."
            },
        ]
    }
]

export default skillDatas