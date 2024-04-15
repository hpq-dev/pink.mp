import HoverEffect from "@/components/hoverEffect"
import { motion } from "framer-motion"

interface props {
    index: number
    title: string
    description: string
    active?: boolean
}

const TeamItem = ({ index, title, description, active = false }: props) => {
    return <motion.div
        className="w-[550px] h-[380px] max-lg:w-full rounded-lg overflow-hidden relative group"
        animate={!active ? {
            scale: .3,
            opacity: 0
        } : {
            scale: 1,
            opacity: 1
        }}
        transition={{
            duration: .3,
            delay: index * .15
        }}
    >
        <img
            className="opacity-15 w-full h-full object-cover absolute left-0 top-0 group-hover:scale-125 group-hover:opacity-50 group-hover:blur-md transition-all duration-300"
            src={`/team/${index}.png`}
            alt={title}
        />

        <div className="text-3xl uppercase font-bold w-full text-center py-24">
            {title}
        </div>
        <div className="w-[90%] m-auto text-justify text-lg absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="relative opacity-60">
                {description}
            </div>
        </div>
        <HoverEffect />
    </motion.div>
}

export default TeamItem