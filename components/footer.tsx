import React from 'react'

export default function Footer() {
    return (
        <footer className='sm:mb-10 mb-14 px-4 text-center text-gray-500'>
            <small className='mb-2 text-xs'>
                &copy; 2023 Victor Fernández Sáez. All rights reserved.
            </small>
            <p className='text-xs'>
                <span className='font-semibold'>About this website:</span> built with React & Next.js (App Router & Server Actions),TypeScript, Tailwind CSS, Framer Motion, React Email & Resend. Hosted on Vercel.
            </p>
        </footer>)
}
