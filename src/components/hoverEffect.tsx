

const HoverEffect = () => {
    return <div className="w-full h-full absolute left-0 top-0 overflow-hidden group">
        <div
            className="h-[200%] w-[8vh] bg-white opacity-0 -rotate-[25deg] -translate-y-1/2 absolute left-0 pointer-events-none top-1/2 -translate-x-[8vh] group-hover:left-[160%] group-hover:opacity-25 transition-all duration-300"
        />
    </div>
}

export default HoverEffect