import Hero from "@modules/home/components/hero"
import {Metadata} from "next"

export const metadata: Metadata = {
    title: "Home",
    description:
        "Shop all available products only on Limit Latex. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
    return (
        <>
            <Hero/>
        </>
    )
}

export default Home
