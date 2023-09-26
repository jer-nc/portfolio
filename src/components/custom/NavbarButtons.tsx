'use client'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const NavbarButtons = () => {
    // Button variant ghost for u¡ianctive
    // Button variant secondary for active
    

    useEffect(() => {
        const buttons = document.querySelectorAll('.navbar-button')
        // SI la ruta es / entonces secondary variant
        // SI la ruta es /projects entonces  ghost variant

        const currentPath = window.location.pathname




        console.log('currentPath', currentPath)
    }, [])

    return (
        <div className='flex gap-4 items-center'>
            <Button variant='ghost'>Home</Button>
            <Button variant='ghost'>Projects</Button>
            <Button variant='ghost'>Resume</Button>
        </div>
    )
}

export default NavbarButtons