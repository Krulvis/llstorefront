import {Metadata} from "next"
import Image from "next/image";

export const metadata: Metadata = {
    title: "Measurements | Limit Latex",
    description: "Guide to taking measurements.",
}

const Measurements = () => {
    return (
        <div
            className="centered-container flex flex-col small:items-start max-w-[1000px] mx-auto overflow-x-auto">
            <h1 className="text-2xl-semi mb-4 text-center">Sizing is important, and this page will
                show you how to properly take measurements.</h1>
            <p className="text-large-regular mb-4 small:text-left small:items-start">
                Every piece of clothing starts with taking the correct measurements. But how do you do that? I’m
                sorry if this is a long read, but it makes it all much easier in the end.</p>
            <p className="text-large-regular mb-4 small:text-left">
                First of all, stand natural. Don’t strike a post, don’t suck in your belly. Just relax, look forward
                and stand straight. This is not an army drill so you don’t have to force up your chest and back. Be
                super careful not to stoop or stretch yourself into unnatural positions as this will add length or
                remove length.</p>
            <p className="text-large-regular mb-4 small:text-left">
                Don’t wear bulky clothing as this will add extra length to your measurements. Wear some sport
                leggings and if you have a turtleneck shirt (otherwise a normal t-shirt with a higher neckline is
                also good) and a bra to support the (prosthetic) breasts.</p>
            <p className="text-large-regular mb-4">
                A good fitting turtleneck shirt works well for measuring the neck circumference (number 1), around
                the base of the neck, as it allows you to easily follow the line of the neck.</p>
            <p className="text-large-regular mb-4">
                Another 2 important measurements are the chest and back widths (number 2 and 33). These measurements
                are taken between the widest points on the armhole circumference. By wearing a t-shirt the line of
                the armhole can be seen as the seam running from the ball of the shoulder to the armpit.</p>
            <p className="text-large-regular mb-4">
                Don’t pull too tightly on the tape measure. This will make measurements smaller than they are. Allow
                the tape to simply lay upon your skin. We will make sure that the latex still hugs you by applying
                the necessary reductions to the received measurements.</p>
            <p className="text-large-regular mb-4">
                Please take your time to take measures as they serve as the starting point of your latex piece. You
                can even take all measurements two or three times to rule out some errors.</p>
            <p className="text-large-regular mb-4">
                Okay, it’s finally time to grab the measuring tape! The first steps are the horizontal measurements.
                Most of these sizes are measured around your body. Make sure that the measuring tape is always held
                in a straight horizontal line. When measuring the circumferences it can help to mark the body with a
                skin friendly pen or a piece of sticky tape to double check your measurements. These marks will also
                guide you in the next step: measuring vertical sizes. Most of the vertical sizes stem from the waist
                circumference so make sure you have that marked. The best way is to tie a piece of string or ribbon
                around your waist so you always have the same starting point. Your waist is measured at the
                narrowest circumference of your torso. This is typically found around 6 cm above your belly button
                and often in alignment with the elbow.</p>
            <p className="text-large-regular mb-4">
                Also good to know:
                Your jugular is the dimple between your collarbones and the 7th cervical vertebra is the bony bump
                at the lower part of your neck that you’ll feel if you gently tilt your head forward and rub the
                back of your neck.
            </p>
            <Image
                src="/measures_numbered_1-15.jpg"
                loading="eager"
                priority={true}
                quality={90}
                alt="Photo of measurements number 1-15"
                className=""
                draggable="false"
                height={960}
                width={600}
                style={{
                    alignSelf: "center",
                }}
            />
            <ol className="list-inside list-decimal" start={1}>
                <li><b>Neck circumference:</b> from the jugular to the 7th cervical vertebra of the neck and back again,
                    also
                    called the t-shirt line
                </li>
                <li><b>Chest width:</b> starting around 6 cm down from jugular to the widest part of the armhole</li>
                <li><b>Bust:</b> across the nipples, around the widest part of the breast</li>
                <li><b>Under bust:</b> a horizontal measurements taken right under the breasts</li>
                <li><b>Waist:</b> narrowest part around the torso, about 6 cm above the belly button</li>
                <li><b>Hip:</b> widest part, around the buttocks.</li>
                <li><b>Upper thigh:</b> around the leg directly under the buttocks</li>
                <li><b>Thigh:</b> around the mid part/widest part of the upper leg</li>
                <li><b>Knee:</b> around the knee</li>
                <li><b>Calf:</b> around the widest part of the lower leg</li>
                <li><b>Ankle:</b> around the bony part of the ankle</li>
                <li><b>Upper arm:</b> around the arm directly at armpit level</li>
                <li><b>Bicep:</b> around the widest part of your upper arm</li>
                <li><b>Elbow:</b> around the elbow</li>
                <li><b>Wrist:</b> around the bony part of your wrist.</li>
            </ol>
            <div className="w-800">
                <Image
                    src="/measures_numbered_16-35.jpg"
                    loading="eager"
                    priority={true}
                    quality={90}
                    alt="Photo of measurements number 16-35"
                    className="min-w-full h-auto"
                    draggable="false"
                    height={600}
                    width={800}
                    style={{
                        alignSelf: "center",
                    }}
                />
            </div>
            <ol className="list-inside list-decimal" start={16}>


                <li><b>Shoulder:</b> from the neck circumference (number 1) to the ball of the arm (raise the arm and
                    where
                    a dimple forms is the ball)
                </li>
                <br/>
                <p>The next 4 measurements are all taken from the shoulder (the ball of the arm) at the side of the arm
                    with the arm in a restful state
                </p>
                <li><b>Shoulder – upper arm:</b> from the shoulder to the upper arm line</li>
                <li><b>Shoulder – bicep:</b> from the shoulder to the bicep line</li>
                <li><b>Shoulder – elbow:</b> from the shoulder to the elbow line</li>
                <li><b>Shoulder – wrist:</b> overall arm length</li>
                <li><b>Inside leg:</b> from the perineum to the ankle, measured as a straight line</li>
                <br/>
                <p>The next 5 measurements are all taken from the waist up. Please tie a piece of string or ribbon
                    around your waist, so you always have the same starting point.
                </p>
                <li><b>Front length waist:</b> in the middle from the waist up to the jugular.</li>
                <p>Measure the following numbers like the dotted line on the drawing (at the side of your body)</p>
                <li><b>Waist – chest width:</b> waist up to the chest width</li>
                <li><b>Waist – bust:</b> waist up to the bust line/nipple</li>
                <li><b>Waist – under bust:</b> waist up to the under bust line</li>
                <li><b>Waist – shoulder:</b> waist up to the middle of the shoulder</li>
                <li><b>Waist – waist:</b> taken from the waist front, down between the legs and up to the waist back
                </li>
                <br/>
                <p>The next 6 measurements are all taken from the waist down at the side of your leg.</p>
                <li><b>Waist – hip:</b> waist down to the hip line</li>
                <li><b>Waist – upper thigh:</b> waist down to the upper thigh line</li>
                <li><b>Waist – thigh:</b> waist down to the thigh line</li>
                <li><b>Waist – knee:</b> waist down to the knee line</li>
                <li><b>Waist – calf:</b> waist down to the calf line</li>
                <li><b>Waist – ankle:</b> waist down to the ankle line: overall leg</li>
                <li><b>Back width:</b> starting around 15 cm down from the 7th cervical vertebra of the neck to the
                    widest
                    part of the armhole
                </li>
                <li><b>Back length waist:</b> in the middle form the waist up to the 7th cervical vertebra of the neck
                </li>

            </ol>
            <Image
                src="/measures_numbered_36-38.jpg"
                loading="eager"
                priority={true}
                quality={90}
                alt="Photo of measurements number 36-38"
                className=""
                draggable="false"
                height={600}
                width={800}
                style={{
                    alignSelf: "center",
                }}
            />
            <ol className="list-inside list-decimal" start={36}>
                <li><b>Around forehead</b></li>
                <li><b>Around mouth</b></li>
                <li><b>Neck:</b> around the smallest circumference of the neck</li>
                <br/>
                <p>Final lengths</p>
                <p><b>Back length (for dresses, tops, jackets etc):</b> start from the 7th cervical vertebra of the neck
                    down to the desired length</p>
                <p><b>Side length (for pants, skirts ets):</b> start from the waist down to the desired length</p>
                <p><b>Sleeve length:</b> start from the ball of the arm down to the desired length</p>
            </ol>
        </div>
    )
}

export default Measurements
