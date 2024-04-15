import Newsteller from "@/components/newsteller"
import TextAnim from "@/components/textAnim"
import { motion } from 'framer-motion'

const Header = () => {
    return <div className="h-[100vh] w-full relative">
        <div className="w-full h-full bg-[#333333]">
            <motion.img
                className="w-full h-full object-cover pointer-events-none select-none"
                src='/header.png'
                alt="header"
                animate={{
                    scale: [2, 1],
                    filter: ['blur(2vh)', 'blur(0vh)'],
                    opacity: [0, 1]
                }}
                transition={{
                    duration: .6,
                    delay: .1
                }}
            />
        </div>

        <div className="absolute bottom-[20vh] font-extrabold uppercase italic pl-[10vw]">
            <motion.div
                className="text-[15vh] mb-[10vh] max-md:m-0 max-md:text-[18vw]"
                animate={{
                    translateY: ['-5vh', '0vh'],
                    opacity: [0, 1]
                }}
                transition={{
                    duration: .3
                }}
            >
                <TextAnim
                    text='pink.mp'
                    duration={1.5}
                    delay={.6}
                    appendDelay={0}
                />
            </motion.div>
            <motion.div
                className="bg-[url(/newsteller.png)] py-6 -ml-[10vw] pl-[10vw] bg-no-repeat bg-center"
                animate={{
                    translateX: ['-10vw', '0vw'],
                    opacity: [0, 1]
                }}
                transition={{
                    duration: .3,
                    delay: .25
                }}
            >
                <Newsteller />
            </motion.div>
        </div>

        <img
            className="absolute -bottom-[5vh] rotate-180 min-w-[220vh] h-[25vh] left-1/2 -translate-x-1/2 pointer-events-none"
            src='nav.svg'
            alt="nav"
        />
    </div>
}

export default Header