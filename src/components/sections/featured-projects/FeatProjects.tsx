import React from 'react'
import { LightningBoltIcon } from "@radix-ui/react-icons"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { featProjects } from './feat-projects'

import firebaseIcon from '../../../../public/icons/firebase-1.svg'
import reactIcon from '../../../../public/icons/react-2.svg'
import awsIcon from '../../../../public/icons/aws-2.svg'
import javascriptIcon from '../../../../public/icons/logo-javascript.svg'
import chakraIcon from '../../../../public/icons/chakra.png'
import typescriptIcon from '../../../../public/icons/typescript.svg'
import nextjsIcon from '../../../../public/icons/next-js.svg'
import tailwindIcon from '../../../../public/icons/tailwind-css-2.svg'
import shadIcon from '../../../../public/icons/shad-icon.ico'
import { Icon } from '../../../types/IconTypes'; // Importa la interfaz Icon

const FeatProjects = () => {

    const technologyIcons: Record<string, Icon> = {
        react: { src: reactIcon, alt: 'React Icon' },
        javascript: { src: javascriptIcon, alt: 'JavaScript Icon' },
        firebase: { src: firebaseIcon, alt: 'Firebase Icon' },
        aws: { src: awsIcon, alt: 'AWS Icon' },
        chakra: { src: chakraIcon, alt: 'Chakra Icon' },
        typescript: { src: typescriptIcon, alt: 'TypeScript Icon' },
        next: { src: nextjsIcon, alt: 'Next.js Icon' },
        tailwindcss: { src: tailwindIcon, alt: 'Tailwind CSS Icon' },
        shad: { src: shadIcon, alt: 'Shadcn Icon' },
    };

    return (
        <div className='py-12'>
            <div className='flex gap-2 items-center'>
                <LightningBoltIcon />
                <h1 className='text-2xl font-semibold'>Featured Projects</h1>
            </div>
            <div className='pt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[20rem] w-full'>
                {featProjects.map((project, index) => (
                    <Card className='rounded-md flex w-full' key={index}>
                        <div className=' w-56 h-full'>
                            <Image className={`rounded-l-md ${project.type === 'contain' ? 'object-contain' : 'object-cover'}  h-full`} src={project.image} title={project.title} width={1000} height={1000} alt='avatar' />
                        </div>
                        <div className='h-full grid w-full'>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CardTitle>Technologies</CardTitle>
                                <div className='grid grid-cols-5  items-center justify-center'>
                                    {project.technologies.map((tech, techIndex) => (
                                        <div key={techIndex} className='flex justify-start pt-4'>
                                            <Image width={20} height={20} src={technologyIcons[tech]?.src} alt={technologyIcons[tech]?.alt} title={technologyIcons[tech]?.alt} />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardContent>
                                <CardTitle>Status</CardTitle>
                                <div className='flex gap-2 items-center pt-2'>
                                    <div className={`w-3 h-3 ${project.status === 'Active' ? 'bg-green-400' : 'bg-red-400'}  rounded-full`}></div>
                                    <CardDescription>
                                        {project.status}
                                    </CardDescription>
                                </div>
                            </CardContent>
                            <CardFooter className='flex justify-center text-blue-500 font-semibold'>
                                {project.title !== 'Portfolio' && (
                                    <Link target='_blank' href={project.link}>Visit</Link>
                                )}
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default FeatProjects;