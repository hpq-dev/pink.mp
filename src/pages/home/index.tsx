import Navbar from "@/components/navbar"
import Header from "./header"
import Scroll from "@/components/customScroll"
import About from "./about"
import Team from "./team"
import Benefits from "./benefits"
import Footer from "./footer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/hook"
import { setValue } from "@/hook/scroll"

const Home = () => {
    const dispatch = useDispatch()
    const { setX, setY } = useSelector((state: RootState) => state.scroll.value)

    return <div className="w-full h-fit">
        <Scroll
            touch={true}
            onPos={(props: any) => dispatch(setValue(props))}
            pos={[setX, setY]}
        >
            <div className="w-full relative">
                <Navbar />
                <Header />
                <div className="w-[85%] m-auto max-2xl:w-[95%] relative">
                    <About />
                    <Team />
                    <Benefits />
                </div>
                <Footer />
                <div
                    className="fixed left-0 top-0 bg-[url('/effect.png')] w-full h-full opacity-25 pointer-events-none z-[99]"
                />
            </div>
        </Scroll>
    </div>
}

export default Home