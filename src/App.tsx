import Home from "./pages/home";

import { ScrollLayer } from "@/components/customScroll";

const App = () => {
    return <ScrollLayer>
        <div className="bg-[#222222] w-full h-fit text-[#F2D5DC]">
            <Home />
        </div>
    </ScrollLayer>
};

export default App