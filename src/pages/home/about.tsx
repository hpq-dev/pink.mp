import { useObserverOfScroll } from "@/components/customScroll/utils"
import HoverEffect from "@/components/hoverEffect"
import { motion } from "framer-motion"


const About = () => {
    const [ref, inView] = useObserverOfScroll({ range: .8 })

    return <div
        className="w-full bg-[#222222] mt-32 flex items-center justify-between gap-12 max-lg:grid max-lg:grid-cols-1"
        ref={ref}
    >
        <motion.img
            className="relative max-xl:w-[50%] h-auto max-lg:w-full"
            src='/about.png'
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
        <div className="w-[40%] max-lg:w-[95%] m-auto relative">
            <motion.h1
                className="text-7xl font-extrabold uppercase italic text-center max-sm:text-5xl"
                animate={!inView ? {
                    opacity: 0,
                    translateX: '20vh'
                } : {
                    opacity: [1, 1, 1],
                    translateX: ['20vh', '6vh', '1vh', '0vh']
                }}
                transition={{
                    duration: !inView ? .3 : 2
                }}
            >Despre noi</motion.h1>
            <motion.p
                className="text-sm opacity-40 text-center w-full mt-8"
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
                Echipa din spatele comunității TBA.MP este veterană în lumea francizei Grand Theft Auto, activând pe servere roleplay ale acesteia de peste 10 ani.<br /><br />
                În această notă, cu ocazia continuei migrări a jucătorilor români de pe comunitățile de GTA San Andreas Multiplayer pe cele de GTA V, ne-am decis să ne unim cunoștințele pentru a da naștere unei noi comunități de Rage MP în România, într-o abordare nouă, care să îmbine "good ol' days"-urile SA:MP-ului cu înfățișarea și mecanismele moderne ale GTA V-ului, capabile să scoată la iveală un roleplay cu de toate, realist, competitiv și totodată distractiv, oferindu-ți un mediu în care te poți relaxa împreună cu prietenii ori poți trage pentru a-ți face cunoscut de către toată lumea numele!
            </motion.p>
            <motion.div
                className="w-full relative flex justify-center mt-12"
                animate={!inView ? {
                    opacity: 0,
                    scale: 1.5,
                    filter: 'blur(1vh)'
                } : {
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0vh)'
                }}
                transition={!inView ? {
                    duration: .3,
                } : {
                    duration: .3,
                    delay: .4
                }}
            >
                <button className="bg-[#FE80CC] relative shadow-lg hover:bg-[#ca5f9f] overflow-hidden transition-all active:scale-95 duration-300 text-4xl uppercase font-bold px-24 py-6 rounded-lg w-fit">
                    join discord
                    <HoverEffect />
                </button>
            </motion.div>
        </div>
    </div>
}


export default About