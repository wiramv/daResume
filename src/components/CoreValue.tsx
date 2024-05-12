
import CoreComp from "./CoreComp"
import { core, cores } from "@/app/skills/data/about"



export default function CoreValue() {
   

    return (
        <div>
            {cores.map((core: core, index: number) => (
                <div key={index}>
                    <CoreComp
                        image={core.image}
                        num={index}
                        text={core.text}
                        title={core.title} 
                        />
                </div>
            ))}
        </div>
    )
}