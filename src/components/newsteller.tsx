import { useState } from "react"
import HoverEffect from "./hoverEffect"


const Newsteller = () => {
    const [val, setVal] = useState<string>('')

    return <div className="flex gap-x-4">
            <div className="relative w-80 h-12 bg-[#F2D5DC] rounded-md max-md:w-[60vw]">
            <input
                className="w-full h-full bg-transparent placeholder:text-[#00000099] pl-6 font-normal text-md outline-none border-none text-black"
                value={val}
                onChange={e => setVal(e.target.value)}
                placeholder="Emailul dvs"
            />
        </div>
        <button className="bg-[#262626] hover:bg-[#313131] transition-all active:scale-95 overflow-hidden relative duration-150 text-[#FFFFFF75] font-normal px-10 rounded-md max-md:px-[2vw]">
            Newsteller
            <HoverEffect />
        </button>
    </div>
}

export default Newsteller