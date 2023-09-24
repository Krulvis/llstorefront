import {Metadata} from "next"

export const metadata: Metadata = {
    title: "About | Limit Latex",
    description: "The philosophy of Limit Latex.",
}

const About = () => {
    return (
        <div
            className="centered-container flex flex-col small:items-start max-w-[1000px] mx-auto overflow-x-auto">
            <a href="https://fs.blog/william-blake-heaven-and-hell/"><h1>He who desires but acts not, breeds pestilence.</h1></a>
            <p>Both the angelic and the devilish aspects of human nature should be acknowledged and embraced rather than
                suppressed.</p>
        </div>
    )
}

export default About
