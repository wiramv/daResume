import { StaticImageData } from "next/image"
import cb_1 from "|/crossbow_1.png"
import vx_1 from "|/voxen_1.png"
import ana_1 from "|/crossbow_2.png"

export interface projectData{
    title:string,
    image:StaticImageData,
    desc:string,
    url:string
}

const projectDatas:projectData[] = [
    {
        title:"Crossbow",
        image:cb_1,
        desc:`Crossbow: Web3 analytics akin to "Google Analytics," seamlessly integrates on/off-chain DApp insights, no coding needed. Provides DApp behavior, NFT/token data, growth insights. Beta, Crossbow Analytics, analyzes user behaviors, net-worth, DeFi, NFTs. Expanding to Ethereum, partners SolanaFM, Helius.xyz, Flipside Crypto.` ,
        url:""
    },
    {
        title:"Voxen",
        image:vx_1,
        desc:`Voxen.ai: Social Listening & Media Monitoring for Brands, Media, Agencies, Governments, Entrepreneurs. Tracks brand mentions, keywords on TikTok, Twitter, news. Expanding to YouTube, Spotify, LinkedIn, Blogs, Forums, Reddit, more. Real-time dashboard, PDF reports.` ,
        url:""
    },
    {
        title:"Sustainable Product Analyst",
        image:ana_1,
        desc:`Sustainable product analysis: Explores link between sustainable products, pricing, sales trends. Investigates consumer behavior, satisfaction. Offers insights into sustainable consumption, market dynamics.` ,
        url:""
    },
]

export default projectDatas