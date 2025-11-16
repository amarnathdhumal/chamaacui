import RandomImageReveal from "./reveal-card";

export default function RandomImageRevealDemo() {
    return (
        <RandomImageReveal
            images={["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg"]}
            duration={0.2}
        />
    );
}

