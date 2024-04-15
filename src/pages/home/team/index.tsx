import { useObserverOfScroll } from "@/components/customScroll/utils"
import TeamItem from "./item"
import { motion } from "framer-motion"


const info: [string, string][] = [
    ['developer', 'Dezvoltator? Backend sau frontend? Sau poate web? Oricare ar fi, avem multe idei și avem nevoie de tine să le ducem la îndeplinire!'],
    ['beta tester', 'Ești elev, student sau chiar... șomer? Nouă ne-ar prinde bine disponibilitatea ta! Joacă-te, testează update-uri, descoperă bug-uri, investighează glitch-uri și, cel mai important, dă-ne de știre!'],
    ['content creator', 'Streamer? YouTuber? TikToker? Și îți place cum sună ideea unei colaborări? Contactează-ne pentru a afla oportunitățile de a juca alături de noi!']
]

const Team = () => {
    const [ref, inView] = useObserverOfScroll({ range: .8 })

    return <div className="w-full h-fit" ref={ref}>
        <motion.div
            className="w-full text-6xl font-bold uppercase text-center mt-52 max-sm:text-4xl"
            animate={!inView ? {
                opacity: 0,
                scale: 2,
                filter: 'blur(2vh)'
            } : {
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: .4
            }}
        >
            cautam colaborari cu
        </motion.div>
        <div className="flex gap-x-4 mt-24 max-lg:grid max-lg:grid-cols-1 gap-y-10">
            {info.map(([title, description], i) => <TeamItem
                index={i}
                title={title}
                description={description}
                active={inView}
            />)}
        </div>
    </div>
}

export default Team