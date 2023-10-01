import React from 'react'
import { Button } from '../ui/button'
import { PATHNAMES } from '@/constants/pathnames'
import { usePathname, useRouter } from 'next/navigation'

const NavbarMobile = () => {
    const router = useRouter()
    const pathname = usePathname()

    const handleNav = (path: string) => {
        router.push(path)
    }
    return (
        <>
            <div className='md:hidden fixed z-40 left-0 bottom-0 w-full bg-background '>
                <div className='flex gap-2 items-center justify-center py-4'>
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
            </div>
        </>
    )
}

export default NavbarMobile