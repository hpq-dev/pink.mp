import { useObserverOfScroll } from "@/components/customScroll/utils"
import { motion } from "framer-motion"


const Benefits = () => {
    const [ref, inView] = useObserverOfScroll({ range: .8 })

    return <div className="w-full bg-[#222222] mt-52 flex items-center justify-between gap-12 max-lg:grid max-lg:grid-cols-1" ref={ref}>
        <div className="w-[40%] max-lg:w-[95%] m-auto relative">
            <motion.h1
                className="text-7xl font-extrabold uppercase italic text-center max-sm:text-5xl"
                animate={!inView ? {
                    opacity: 0,
                    translateX: '-20vh'
                } : {
                    opacity: [1, 1, 1],
                    translateX: ['-20vh', '-6vh', '-1vh', '0vh']
                }}
                transition={{
                    duration: !inView ? .3 : 2
                }}
            >Alaturate noua</motion.h1>
            <motion.p
                className="text-lg opacity-35 text-center w-full mt-8"
                animate={!inView ? {
                    opacity: 0,
                    scale: 1.5,
                    filter: 'blur(1vh)'
                } : {
                    opacity: .40,
                    scale: 1,
                    filter: 'blur(0vh)'
                }}
                transition={!inView ? {
                    duration: .3,
                } : {
                    duration: .3,
                    delay: .2
                }}
            >
                Hei, tu! Da, da, tu. Ești developer, designer, content creator? Ai suficient timp liber și îți place să ți-l petreci jucându-te? Le ai cu limbile străine? Prietenii îți tot spun că ai o imaginație bogată? Crezi că ai aptitudini de care n-avem cum să nu avem nevoie? Vino în echipa noastră și fii parte din proiect!
            </motion.p>
        </div>
        <motion.img
            className="relative max-xl:w-[50%] h-auto max-lg:w-full"
            src='/benefits.png'
            alt="about"

            animate={!inView ? {
                opacity: 0,
                translateY: '10vh'
            } : {
                opacity: 1,
                translateY: '0vh'
            }}
            transition={{
                duration: .5
            }}
        />
    </div>
}


export default Benefits