import Image from "next/image";
import React from "react";


const Welcome = ()=>{
    return <div>
        <svg height="0" width="0">
            <defs>
                <filter id="distortion-filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="5" result="turbulence" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </defs>
        </svg>
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="text-center">
                <Image
                    src="/logo_trans.png" // Replace with your image path
                    width={500}
                    height={500}
                    alt="Centered Logo"
                    className="image-with-ripple"
                ></Image>
            </div>
        </div>
    </div>
}
export default Welcome