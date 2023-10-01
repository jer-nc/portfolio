'use client'
import React from 'react'
import { FileTextIcon, DownloadIcon } from "@radix-ui/react-icons"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import profile from '../../../public/assets/profile.webp'

const ResumeSection = () => {

    const handleDownloadResumeEnglish = () => {
        const url = '/cv-en.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume-english-jer.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleDownloadResumeSpanish = () => {
        const url = '/cv-es.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume-spanish-jer.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section className='py-12'>
            <div className='flex gap-4 items-center'>
                <div className='w-12 h-12 bg-secondary rounded-full flex justify-center items-center'>
                    <FileTextIcon className='text-blue-500' />
                </div>
                <h1 className='text-2xl font-semibold'>RESUME</h1>
            </div>
            <div className='pt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full'>
                <div>
                    <p className='text-muted-foreground'>
                        I&apos;m a second-year student of Multiplatform Application Development (DAM) in Barcelona with a passion for technology and a self-directed approach to learning.
                    </p>
                    <br />
                    <p className='text-muted-foreground'>
                        I&apos;ve acquired a set of technical skills in web development and cloud computing, including <b>React</b> , <b>Next.js</b>, <b>TypeScript</b>, and <b>AWS</b>. My goal is to solidify my knowledge in AWS and leverage it to design and develop scalable and efficient Cloud solutions.
                    </p>
                    <div className='flex flex-col md:flex-row gap-4 pt-8'>
                        <Button onClick={handleDownloadResumeEnglish} variant='outline' className='gap-2'>
                            <DownloadIcon />
                            Download Resume - English
                        </Button>
                        <Button onClick={handleDownloadResumeSpanish} variant='outline' className='gap-2'>
                            <DownloadIcon />
                            Download Resume - Spanish
                        </Button>
                    </div>
                </div>
                <div className='flex justify-center items-start'>
                    <Avatar className='w-56 h-56 border shadow-sm'>
                        <AvatarImage src={profile.src} alt="resume-photo" />
                        <AvatarFallback>J</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </section>
    )
}

export default ResumeSection