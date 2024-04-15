
import { RiInstagramLine } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
    return <div className="w-full h-[10vh] absolute top-0 left-0 z-[1]">
        <img
            className="min-w-[220vh] absolute left-1/2 -translate-x-1/2 h-[25vh] pointer-events-none"
            src='/nav.svg'
        />
        
        <div className="w-[70%] max-lg:w-[90%] absolute left-1/2 -translate-x-1/2 top-[22%] h-[5vh] flex justify-between items-center">
            <div className="relative text-4xl uppercase font-extrabold italic">
                pink.mp
            </div>
            <div className="flex gap-x-4 text-3xl">
                <a href="#">
                    <RiInstagramLine />
                </a>
                <a href="#">
                    <FaDiscord />
                </a>
                <a href="#">
                    <FaYoutube />
                </a>
            </div>
        </div>
    </div>
}

export default Navbar