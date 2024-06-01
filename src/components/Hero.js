export default function Hero() {
    return (
        <section className="h-screen">
            <div className="flex justify-between items-stretch translate-y-[-17%]">
                <h1 className="w-fit text-[15vw] font-medium">
                    J
                </h1>
                <h1 className="w-fit text-[15vw] font-medium">
                    O
                </h1>
                <h1 className="w-fit text-[15vw] font-medium">
                    U
                </h1>
                <h1 className="w-fit text-[15vw] font-medium">
                    R
                </h1>
                <h1 className="w-fit text-[15vw] font-medium">
                    N
                </h1>
                <h1 className="w-fit text-[15vw] font-medium">
                    E
                </h1>
                <h1 className="w-fit text-[15vw] font-medium">
                    Y
                </h1>
                <h1 className="w-fit text-[15vw] font-medium">
                    S
                </h1>
            </div>

            {/* <div>
                <img src="/img5.jpg" className="img5 absolute rotate-[-15deg] left-[5%] rounded-full w-[7%]" />
                <img src="/img15.jpg" className="img15 absolute rotate-[15deg] right-[5%] top-[50%] rounded-xl w-[8%]" />
            </div> */}

            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-20%] bg-[#fbe7dc] w-[65%] h-[45%]">
            </div>
            <img src="/rose1.png" className="w-[63.3%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />

            <div className="absolute bottom-20 right-[1%] translate-x-[-50%]">
                <span className="font-medium">Scroll down</span>
                <span className="absolute left-[50%] top-[100%] bg-black px-[0.7px] py-5 bounce"></span>
            </div>
        </section>
    )
}