'use client'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';


const NavbarButtons = () => {
    // Button variant ghost for u¡ianctive
    // Button variant secondary for active
    const router = useRouter()

    const handleNav = (path: string) => {
        router.push(path)
    }

    return (
        <div className='flex gap-4 items-center'>
            <Button variant='ghost' onClick={() => handleNav('/')}>Home</Button>
            <Button variant='ghost' onClick={() => handleNav('/projects')}>Projects</Button>
            <Button variant='ghost' onClick={() => handleNav('/resume')}>Resume</Button>
        </div>
    )
}

export default NavbarButtons