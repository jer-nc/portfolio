import Image from 'next/image'
import React from 'react'

const Bio = () => {
    return (
        <div className='w-full py-12'>
            <div className='flex justify-center'>
                {/* <Image style={{ borderRadius: '100%' }} src='https://pbs.twimg.com/profile_images/1668911842645749768/EpHg-WB-_400x400.jpg' width={100} height={100} alt='avatar' /> */}
                <h1 className='text-5xl font-bold'>Hi! I&apos;m Jer NC!</h1>
            </div>
        </div>
    )
}

export default Bio