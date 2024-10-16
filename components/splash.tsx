"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

import Logo from "@/public/logos/placeholder.webp";

import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ISplashProps {
    img: string | StaticImport;
    title: string;
    link1: string;
    link2: string;
    link_title_1: string;
    link_title_2: string;
}
// TODO:Use Square Website Home page as reference for this Splash page
const Splash = (props: ISplashProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            threshold: 0.1, // Adjust the threshold as needed (percentage of element visibility)
        };

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    containerRef.current?.classList.add("show");
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect(); // Cleanup observer on component unmount
    }, []);

    return (
        <div ref={containerRef} className="fade-in w-full text-white bg-black md:h-[750px]">
            <div className="w-full h-full relative">
                <div className="absolute w-full h-full bg-gradient-to-r from-zinc-900 hidden md:flex"></div>
                <span>
                    <Image
                        className="w-full h-full object-cover object-top"
                        src={props.img}
                        alt={props.title}
                    />
                    <Image
                        src={Logo}
                        alt="logo"
                        className="w-10 absolute z-10 flex left-2 bottom-24 md:hidden"
                    />
                </span>
                {/* TEXT CONTAINER */}
                <div className="flex flex-col w-full top-[30%] z-10 p-4 md:absolute md:p-8">
                    <span className="hidden md:flex">
                        <Image src={Logo} alt="logo" className="w-24 py-2" />
                    </span>
                    <h1 className="text-white text-3x1 hidden md:flex md:text-5xl">
                        {props.title}
                    </h1>
                    <div className="my-4">
                        <Link
                            href={props.link1}
                            className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
                        >
                            {props.link_title_1}
                        </Link>
                        <Link
                            href={props.link2}
                            className="border  text-white border-gray-300 py-2 px-5 ml-4"
                        >
                            {props.link_title_2}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Splash;
