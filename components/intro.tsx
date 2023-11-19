"use client";

import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    return (
        <section
            ref={ref}
            id='home'
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className='flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <Image src="/Victor_Fernandez.jpg" alt="profile picture"
                        width={192}
                        height="192"
                        quality="95"
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-gray-50 shadow-xl'
                    />
                </motion.div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-center text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Victor.</span><br /> I'm a full-stack developer. I enjoy
                building <span className="italic">sites & apps</span>. <br />My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link href="#contact"
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:gb-gray-950 active:scale-105 transition'
                    onClick={() => {
                        setActiveSection('Contact')
                        setTimeOfLastClick(Date.now())
                    }}
                >Contact me here{" "}<BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' />{" "}
                </Link>
                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
                    href='/Victor_Fernandez_CV.pdf' download
                >
                    Downdoad CV{" "}<HiDownload className='opacity-60 group-hover:translate-y-1 transition' />{" "}
                </a>
                <a className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full cursor-pointer borderBlack hover:scale-[1.15] active:scale-105 transition dark:bg-white/10 dark:text-white/60'
                    href='https://www.linkedin.com/in/victorfernandezsaez/' target='blank'
                >
                    <BsLinkedin />
                </a>
                <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full  cursor-pointer borderBlack focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition  dark:bg-white/10 dark:text-white/60'
                    href='https://github.com/Victorfernandezsaez' target='blank'
                >
                    <BsGithub
                    /> </a>

            </motion.div>
        </section>)
}
