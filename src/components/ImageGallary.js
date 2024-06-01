import {
    motion,
    useTransform,
    useScroll,
    useMotionTemplate,
    useMotionValue,
    useSpring
} from "framer-motion";

// import { FiMousePointer } from "react-icons/fi";
import { useRef } from "react";

const Example = () => {
    return (
        <div>
            <div className="h-screen">
                <h1 className="py-[200px] text-center text-[6vw]">
                    4 years happy anniversary
                </h1>
            </div>

            <div className="h-screen">
                <h1 className="py-[200px] text-center text-[6vw]">
                    First met
                </h1>
            </div>

            <div className="flex gap-[10rem] flex-col items-center px-[300px] pt-[100px] pb-[100px]">
                <img src="/img12.jpg" className="yay w-[600px] h-[600px] object-cover self-start" />
                <img src="/img13.JPG" className="yay w-[600px] h-[700px] object-cover self-end" />
                <img src="/img15.jpg" className="yay w-[600px] h-[600px] object-cover self-start" />
                <img src="/img14.JPG" className="yay w-[800px] h-[600px] object-cover self-center" />
            </div>

            <div className="h-screen">
                <h1 className="py-[300px] text-center text-[6vw]">
                    Dalat, City of Flowers
                </h1>
            </div>

            <div className="flex gap-[10rem] flex-col items-center px-[300px] pt-[100px] pb-[100px]">
                <img src="/img5.jpg" className="yay w-[500px] h-[700px] object-cover self-end" />
                <img src="/img17.jpg" className="yay w-[700px] h-[600px] object-cover self-start" />
                <img src="/img18.jpg" className="yay w-[400px] h-[700px] object-cover self-end" />
                <img src="/img20.JPG" className="yay w-[700px] h-[670px] object-cover self-start" />
            </div>

            <div className="h-screen">
                <h1 className="py-[300px] text-center text-[6vw]">
                    We're now
                </h1>
            </div>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <motion.div
                className="sticky top-0 flex h-screen items-center overflow-hidden"
            >
                <motion.div
                    style={{
                        x,
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="flex gap-[10rem]"
                >
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div key={card.id} className="yay yo group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-[2rem]">
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
        </div>
    );
};

export default Example;

const cards = [
    {
        url: "/img8.JPG",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/img7.jpg",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/img6.jpg",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/img2.jpg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/img1.jpg",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/img4.jpg",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/img22.PNG",
        title: "Title 6",
        id: 7,
    },
    {
        url: "/img16.png",
        title: "Title 6",
        id: 8,
    },
];
