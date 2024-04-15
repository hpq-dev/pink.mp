import Newsteller from "@/components/newsteller"


import { RiInstagramLine } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useObserverOfScroll } from "@/components/customScroll/utils";

const Footer = () => {
    const [ref, inView] = useObserverOfScroll({ range: .8 })

    return <div className="w-full h-fit relative mt-32" ref={ref}>
        <img
            className="w-full h-[100vh] object-center object-cover"
            src="/footer.png"
            alt="footer"
        />
        <div className="relative -mt-[110vh]">
            <motion.div
                className="relative bg-clip-text w-[70vh] m-auto text-[12.8vh] max-md:text-[6vh] max-md:w-[35vh] uppercase font-extrabold italic mt-32"
                style={{
                    background: `linear-gradient(93deg, #F2D5DC 19.77%, rgba(245, 212, 220, 0.82) 37.07%, rgba(255, 209, 220, 0.19) 98.58%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
                animate={!inView ? {
                    opacity: 0,
                    scale: 2,
                    filter: 'blur(2vh)'
                } : {
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0vh)'
                }}
                transition={{
                    duration: .6
                }}
            >
                Stay here with our
            </motion.div>
            <div className="mt-32 relative w-[70%] max-xl:w-[90%] m-auto">
                <div className="relative grid grid-cols-3 max-md:grid-cols-1 gap-y-8">
                    <img
                        className="relative -translate-x-[8%]"
                        src='/logo.png'
                        alt="logo"
                    />
                    <div className="grid grid-cols-1 gap-y-4">
                        <a href="#" className="flex items-center gap-x-4 text-lg hover:text-[#FF90AB] transition-colors duration-300">
                            <RiInstagramLine className="text-2xl" />
                            Instagram
                        </a>
                        <a href="#" className="flex items-center gap-x-4 text-lg hover:text-[#FF90AB] transition-colors duration-300">
                            <FaDiscord className="text-2xl" />
                            Discord
                        </a>
                        <a href="#" className="flex items-center gap-x-4 text-lg hover:text-[#FF90AB] transition-colors duration-300">
                            <FaYoutube className="text-2xl" />
                            YouTube
                        </a>
                    </div>
                    <div className="relative opacity-70">
                        GTA 5 RP este un nou nivel de jocuri online. Joaca
                        un bandit sau un polițist, un oficial sau un medic, o mafie sau un agent FBI.

                        Simțiți atmosfera lumii uimitoare a unui joc de rol cu ​​o lume realistă pe GTA RP!
                    </div>
                </div>
                <div className="flex w-full justify-between border-t-2 border-solid border-[#ffffff20] py-8 mt-24 max-sm:grid max-sm:grid-cols-1 gap-y-2">
                    <div className="text-[#ffffff40] text-center">
                        Copyright @ <a
                            className="hover:text-[#f76f91] text-[#FFACD4] transition-colors duration-300 cursor-pointer"
                            href="https://hpq.ro"
                        >
                            hpq.ro
                        </a>
                    </div>
                    <a
                        href="#"
                        className="text-[#ffffff60] hover:text-[#f76f91] transition-colors duration-300 cursor-pointer text-center"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="text-[#ffffff60] hover:text-[#f76f91] transition-colors duration-300 cursor-pointer text-center"
                        href="#"
                    >
                        Terms And Conditions
                    </a>
                    <a
                        className="text-[#ffffff60] hover:text-[#f76f91] transition-colors duration-300 cursor-pointer text-center"
                        href="https://rage.mp"
                        target="_blank"
                    >
                        RAGE.MP
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Footer