'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView('Contact');

    return (
        <motion.section
            id='contact'
            ref={ref}
            className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6 dark:text-white/80'>
                Please contact me directly at<a className='underline' href='mailto v.ferna.saez@gmail.com'> v.ferna.saez@gmail.com</a> or through this form.
            </p>
            <form className='mt-10 flex flex-col dark:text-black'
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData)
                    if (error) {
                        toast.error(error)
                    }
                    toast.success('Message sent successfully!')
                }}
            >
                <input
                    className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
                    type='email'
                    name='senderEmail'
                    required
                    maxLength={500}
                    placeholder='Your email' />
                <textarea className='h-52 py-2 px-4 my-3 rounded-lg borderBlack  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
                    placeholder='Your message'
                    required
                    maxLength={5000}
                    name='message'
                />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}

