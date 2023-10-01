'use client'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { useRouter, usePathname } from 'next/navigation';
import { PATHNAMES } from '@/constants/pathnames';

const NavbarButtons = () => {
    const router = useRouter()
    const pathname = usePathname()

    const handleNav = (path: string) => {
        router.push(path)
    }

    return (
        <div className='hidden md:flex gap-2 items-center'>
            <Button variant={pathname === PATHNAMES.HOME ? 'outline' : 'ghost'} onClick={() => handleNav('/')}>
                Home
            </Button>
            <Button variant={pathname === PATHNAMES.PROJECTS ? 'outline' : 'ghost'} onClick={() => handleNav('/projects')}>
                Projects
            </Button>
            <Button variant={pathname === PATHNAMES.RESUME ? 'outline' : 'ghost'} onClick={() => handleNav('/resume')}>
                Resume
            </Button>
        </div>
    )
}

export default NavbarButtons