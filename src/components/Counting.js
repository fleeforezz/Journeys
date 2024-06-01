import React, { useRef, useEffect, useState } from "react";

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    AnimatePresence,
} from "framer-motion";

import { FiHeart } from "react-icons/fi";
import CountUp from 'react-countup';

export default function Counting() {
    return (
        <div className="grid h-screen w-full place-content-center bg-[#fbe7dc] px-4 py-12 text-slate-900">
            <h1 className="text-[4rem] text-center mb-[2rem] font-bold">
                We've been together
            </h1>
            <TiltCard />
        </div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-[20rem] w-[40rem] rounded-xl bg-[#eec1a8]"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-[#f7efeb] shadow-lg"
            >
                <FiHeart
                    style={{
                        transform: "translateZ(75px)",
                    }}
                    className="mx-auto text-4xl"
                />
                <motion.div 
                    className="flex gap-4 items-center"
                    style={{
                        transform: "translateZ(75px)",
                    }}
                >
                    <CountUp
                        style={{
                            transform: "translateZ(50px)",
                        }}
                        className="account-balance text-center text-2xl font-bold"
                        start={0}
                        end={1474}
                        duration={1}
                        useEasing={true}
                        separator="."
                    />
                    <p className="text-2xl font-bold text-[#7a60f4]">
                        Days
                    </p>
                </motion.div>

                <motion.div 
                    className="flex gap-4 items-center"
                    style={{
                        transform: "translateZ(75px)",
                    }}
                >
                    <CountUp
                        style={{
                            transform: "translateZ(50px)",
                        }}
                        className="account-balance text-center text-2xl font-bold"
                        start={0}
                        end={48}
                        duration={0.8}
                        useEasing={true}
                        separator="."
                    />
                    <p className="text-2xl font-bold text-[#7a60f4]">
                        Months
                    </p>
                </motion.div>

                <motion.div 
                    className="flex gap-4 items-center"
                    style={{
                        transform: "translateZ(75px)",
                    }}
                >
                    <CountUp
                        style={{
                            transform: "translateZ(50px)",
                        }}
                        className="account-balance text-center text-2xl font-bold"
                        start={0}
                        end={4}
                        duration={1}
                        useEasing={false}
                        separator="."
                    />
                    <p className="text-2xl font-bold text-[#7a60f4]">
                        Years
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};