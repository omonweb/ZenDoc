import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[200px] h-[200px]
                sm:w-[250px] sm:h-[250px] md:h-[200px] md:w-[200px]">
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