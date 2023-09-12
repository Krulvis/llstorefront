import Hero from "@modules/home/components/hero"
import {Metadata} from "next"
import dynamic from "next/dynamic";


const Insta = dynamic(() => import('@modules/home/components/insta'), {
    ssr: false, // Disable SSR for this component
});

export const metadata: Metadata = {
    title: "Home",
    description:
        "Shop all available products only on Limit Latex. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
    return (
        <>
            <Hero/>
            <Insta/>
        </>
    )
}

export default Home
