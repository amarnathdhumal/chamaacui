import GifText from "./gif-text";

function GifTextDemo() {
    return (
        <div className="w-full h-[300px] md:h-[500px] relative ">
            <GifText
                text="OCEAN"
                containerClassName="h-full"
            />
        </div>
    );
}

export default GifTextDemo;
