"use client";

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number]

function Project({ title, description, tags, imageUrl, navTo, }:
    ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div
            ref={ref}
            className='group mb-3 sm:mb-8 last:mb-0'
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <section
                className=' bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                        ))}
                    </ul>
                    {navTo.map((url, index) => (
                        <a key={index}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='inline-block bg-black/[0.7] mt-2 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full text-center'>
                            See Code {navTo.length > 1 ? index + 1 : ''}
                        </a>
                    ))}
                </div>
                <Image
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
                transition
                group-hover:scale-110
                group-hover:-transalete-x-3 
                group-hover:-transalete-y-3 
                group-hover:-rotate-2

                group-even:group-hover:-transalete-x-3 
                group-even:group-hover:-transalete-y-3 
                group-even:group-hover:rotate-2

                group-even:right-[initial] 
                group-even:-left-40 ' />
            </section>
        </motion.div>
    )
}

export default Project