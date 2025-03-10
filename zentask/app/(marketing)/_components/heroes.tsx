import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[100px] h-[100px]
                sm:w-[150px] sm:h-[150px] md:h-[100px] md:w-[100px]">
                    <Image
                        src="/bulb.svg"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"
                    />
                    <Image
                        src="/hero-dark.svg"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"
                    />
                </div>
            </div>
        </div>
    )
}