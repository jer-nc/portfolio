import React from 'react'
import { ThemeButton } from './ThemeButton'
import GithubButton from './GithubButton'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center py-4 px-4'>
            <h1>Jer-NC</h1>
            <div className='flex gap-2 items-center'>
                <GithubButton />
                <ThemeButton />
            </div>
        </div>
    )
}

export default Navbar