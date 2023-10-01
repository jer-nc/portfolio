import Image from 'next/image'
import React from 'react'
import heroImage from '../../../../public/aws-blender.webp'

const Bio = () => {
    return (
        <section className='w-full py-12 grid'>
            <div className='md:pt-8 grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center'>
                <div>
                    <h1 className='mx-auto text-5xl font-bold text-primary'>
                       Jer NC
                    </h1>
                    <p className='pt-4 leading-6 text-primary font-semibold'>
                        I&apos;m a student from Barcelona, Spain, and I&apos;m interested in working on complete projects. Initially, I started in frontend development, but my focus has shifted towards AWS infrastructure.
                    </p>
                    <p className='pt-8 leading-6 text-primary font-normal'>
                        Currently, I&apos;m experimenting with 3D scene rendering in the Cloud using AWS and Blender.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <Image style={{ height: 'auto' }} title='aws-blender-simple-diagram' priority src={heroImage} width={400} height={400} alt='aws-blender-simple-diagram' />
                </div>
            </div>
        </section>
    )
}

export default Bio