'use client'
import { ThemeButton } from './ThemeButton'
import GithubButton from './GithubButton'
import { Button } from '../ui/button'
import NavbarButtons from './NavbarButtons'
import useScroll from '@/hooks/useScroll'
import logo from '../../../public/logo-jer.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const Navbar = () => {
    const scrolling = useScroll();

    const router = useRouter()

    return (
        <nav className={`bg-background z-40 w-full flex justify-between items-center py-4 px-4 sticky top-0 ${scrolling && 'shadow-sm'}`}>
            <Link href='/' className='w-[171px]' >
                <Image width={30} height={30} src={logo} alt='logo' />
            </Link>
            <NavbarButtons />
            <div className='flex gap-2 items-center'>
                <Button onClick={() => router.push('/#contact')} variant='outline'>
                    Contact
                </Button>
                <GithubButton />
                <ThemeButton />
            </div>
        </nav>
    )
}

export default Navbar