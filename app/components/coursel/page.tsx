import Image from "next/image";

// const metadata = {
//     title: "Coursel",
//     description: "Coursel",
// };

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg"];

const Coursel = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex">

                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-[214px] h-[284px] relative">
                        <Image
                            key={index}
                            src={image}
                            alt={`image-${index} `}
                            fill
                            priority={true}
                            className="object-cover"
                        />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Coursel;