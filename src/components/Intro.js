import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Intro() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const body = document.querySelector('body');

            if (body) {
                // Change color when scroll to About Me section
                if (scrollY > totalHeight * 0.05 && scrollY < totalHeight * 1.1) {
                    body.style.backgroundColor = '#fbe7dc';
                    body.style.color = 'black';
                } else {
                    body.style.backgroundColor = '#FAFAF9';
                    body.style.color = 'black';
                }
                if (scrollY > totalHeight * 0.09 && scrollY < totalHeight * 0.4) {
                    body.style.backgroundColor = '#d8ffd0'
                }
                if (scrollY > totalHeight * 0.12 && scrollY < totalHeight * 0.8) {
                    body.style.backgroundColor = '#ff8383'
                }
                if (scrollY > totalHeight * 0.2 && scrollY < totalHeight * 1.2) {
                    body.style.backgroundColor = '#0e100f'
                    body.style.color = 'white'
                }
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })


    return (
        <section>
            <div className="h-screen">
                <h1 className="py-[300px] text-center text-[6vw]">
                    Hi Ziie (Sally)
                </h1>
            </div>

            <div className="h-screen">
                <h1 className="py-[300px] text-center text-[6vw]">
                    Embrace the allure of recollection
                </h1>
            </div>

        </section>
    )
};
