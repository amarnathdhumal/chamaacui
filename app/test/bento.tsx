import TiltCard from "../components/tilt-card/page";
import MarqueeCard from "../components/marquee-card/page";

const Bento = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-row gap-15  h-screen pt-[100px] px-[80px] max-w-[1440px] mx-auto items-start" >
                <TiltCard />
                <MarqueeCard />
            </div>
        </div>
    )
}

export default Bento;