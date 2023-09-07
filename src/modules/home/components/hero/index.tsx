import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="h-[100vh] w-full relative">
            <div
                className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
                <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
                    Where Latex Couture Meets the Extraordinary
                </h1>
                <UnderlineLink href="/store">Explore projects</UnderlineLink>
            </div>
            <Image
                src="/fp-brug-edited.jpg"
                loading="eager"
                priority={true}
                quality={90}
                alt="Photo by Limit Latex"
                className="absolute inset-0"
                draggable="false"
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
            />
        </div>
    )
}

export default Hero
