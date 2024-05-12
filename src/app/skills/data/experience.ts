export interface exp{
    company:string,
    position:string,
    text:string,
    tags:string[],
    date:string
}

const exps:exp[] = [
    {
        company:"PT. BINC",
        position:"Frontend Developer",
        text:"Successfully increased website traffic by <b>20%</b> through the implementation of <b>dynamic dApp listing</b> on the side menu, resulting in a <b>higher number of unique user IP addresses</b>.",
        tags:["frontend", "traffic"],
        date:"2022-2024"
    },
    {
        company:"PT. BINC",
        position:"Frontend Developer",
        text:"Achieved a <b>reduction in load</b> time by 320ms by optimizing with Chrome Lighthouse and implementing techniques such as <b>next image sharp<b/> and <b>lazy loading..</b>",
        tags:["frontend", "lazy loading"],
        date:"2022-2024"
    },
    {
        company:"PT. BINC",
        position:"UI/UX Designer",
        text:"<b>Enhanced responsiveness</b> across four additional display screens size through rigorous testing with device screen simulation, while simultaneously refining the design by eliminating distracting elements.",
        tags:["UIUX", "refining"],
        date:"2022-2024"
    },
    {
        company:"PT. BINC",
        position:"UI/UX Designer",
        text:"Recognized for <b>improving the basic design</b> and <b>enhancing overall hierarchy and spacing</b> in the Solana Sandstorm , as evidenced by jury scores and getting the <b>1st human readable award</b>",
        tags:["UIUX", "solana"],
        date:"2022-2024"
    },
    {
        company:"PT. BINC",
        position:"Frontend Developer",
        text:"Successfully <b>reduced analytics page processing time</b> from <b>hours</b> to <b>less than 30 minutes</b> and prevented refresh by <b>implementing socket.io</b> instead of REST API, verified through manual testing of load time.",
        tags:["frontend", "socket"],
        date:"2022-2024"
    },
    {
        company:"PT. BINC",
        position:"UI/UX Designer",
        text:"<b>Enhanced the design and color scheme</b> based on <b>user feedback</b> by implementing changes such as <b>altering the color scheme</b> and making the call-to-action more prominent..",
        tags:["UIUX", "color","feedback"],
        date:"2022-2024"
    },
    {
        company:"PT. BINC",
        position:"UI/UX Designer",
        text:"<b>Improved design and color scheme</b> further, resulting in a <b>14% increase</b> in positive feedback from users, based on user feedback, by refining the color scheme and enhancing the visibility of the call-to-action.",
        tags:["UIUX", "color","feedback"],
        date:"2022-2024"
    },
    {
        company:"tekape",
        position:"Graphic Designer",
        text:"Successfully improved social media <b>traffic by 7% within one month</b> by increasing Instagram followers and implementing <b>custom Instagram post designs</b> aligned with new branding guidelines.",
        tags:["Graphic Designer", "Instagram"],
        date:"2021-2022"
    },
    {
        company:"tekape",
        position:"Frontend Developer",
        text:"Achieved a <b>reduction in web load time by 300msd</b>, as measured by <b>Chrome Lighthouse</b>, through the migration from WordPress to Next.js.",
        tags:["frontend", "Instagram"],
        date:"2021-2022"
    },
    {
        company:"prismpods",
        position:"Graphic Designer",
        text:"Increased social media traffic by <b>17% in three months</b> by growing Instagram followers and boosting user engagement with <b>custom post designs</b> aligned with updated branding guidelines.",
        tags:["frontend", "Instagram"],
        date:"2020"
    },
    {
        company:"iConic Photography",
        position:"UIUX Designer",
        text:"Designed logo, web interface, and functional landing page within an <b>11-day timeframe</b> through effective collaboration with clients.",
        tags:["UIUX", "logo"],
        date:""
    },
    {
        company:"Dawn Design",
        position:"Graphic Designer",
        text:"Developed a comprehensive <b>branding guideline</b> PDF consisting of 20 pages within a <b>12-day timeframe</b>.",
        tags:["branding", "logo"],
        date:""
    },
    {
        company:"Hijrah Bank",
        position:"Graphic Designer",
        text:"Crafted a <b>logo</b>, developed a <b>branding guideline</b>, and designed a <b>landing page</b> within an impressive <b>two-day timeframe</b>.",
        tags:["branding", "logo"],
        date:""
    },
]

export default exps