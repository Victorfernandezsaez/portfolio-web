"use client";

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Airplane mechanic</span>, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Node.js, Express and MongoDB
                </span>
                . I am also familiar with TypeScript and Next.js. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a web
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy sports, going out in the nature or just read a book. I also enjoy{" "}
                <span className="font-medium">hand work</span>. I am currently
                preparing{" "}
                <span className="font-medium">my campervan</span>.
            </p>
        </motion.section>
    )
}
