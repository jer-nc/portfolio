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

const FeatProjects = () => {
    return (
        <div className='py-12'>
            <div className='flex gap-2 items-center'>
                <LightningBoltIcon />
                <h1 className='text-2xl font-semibold'>Featured Projects</h1>
            </div>
            <div className='pt-8 grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[20rem]'>
                <Card className='rounded-md flex'>
                    <div className=' w-56 h-full'>
                        <Image className='rounded-l-md object-cover h-full' src='https://ph-files.imgix.net/46e95e11-1d3c-43f9-90c9-4fc047bb1446.jpeg?auto=format&fit=crop' width={1000} height={1000} alt='avatar' />
                    </div>
                    <div className='h-full grid'>
                        <CardHeader>
                            <CardTitle>ReadmeStack</CardTitle>
                            <CardDescription>Free Markdown web editor synchronized with GitHub</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <CardTitle>Technologies</CardTitle>

                            <p>Card Content</p>
                        </CardContent>
                        <CardContent>
                            <CardTitle>Status</CardTitle>

                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className='flex justify-center text-blue-500 font-semibold'>
                            <Link target='_blank' href='https://www.readmestack.com'>Visit</Link>
                        </CardFooter>
                    </div>
                </Card>


            </div>
        </div>
    )
}

export default FeatProjects