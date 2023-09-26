import Image from 'next/image'
import React from 'react'
import heroImage from '../../../../public/aws-blender.png'

const Bio = () => {
    return (
        <div className='w-full py-12 grid'>
            <h1 className='mx-auto text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500'>
                Hi! I&apos;m Jer NC!
            </h1>
            <div className='pt-8 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center'>
                {/* <Image style={{ borderRadius: '100%' }} src='https://pbs.twimg.com/profile_images/1668911842645749768/EpHg-WB-_400x400.jpg' width={100} height={100} alt='avatar' /> */}
                <div>

                    <p className='pt-8 leading-6 text-muted-foreground font-semibold'>
                        I&apos;m a student from Barcelona, Spain, venturing into the creation of comprehensive projects. I initially started in frontend development, but my interest shifted towards AWS infrastructure.
                    </p>
                    <p className='pt-8 leading-6 text-muted-foreground font-normal'>
                        Currently, I&apos;m experimenting with 3D scene rendering in the cloud using AWS and Blender.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <Image title='aws-blender-simple-diagram' src={heroImage} width={400} height={400} alt='aws-blender-simple-diagram' />
                </div>
            </div>
        </div>
    )
}

export default Bio