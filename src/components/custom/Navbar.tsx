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
import NavbarMobile from './NavbarMobile'


const Navbar = () => {
    const scrolling = useScroll();

    const router = useRouter()

    return (
        <nav className={`bg-background z-40 items-center sticky top-0 ${scrolling && 'shadow-sm'}`}>
            <div className='max-w-[1200px] mx-auto w-full flex justify-between py-4 px-8'>
                <div className='md:mr-32 flex items-center min-w-[30px]'>
                    <Link href='/' className='max-w-fit'>
                        <Image  width={30} height={30} src={logo} alt='logo' />
                    </Link>
                </div>
                <NavbarButtons />
                <NavbarMobile />
                <div className='flex gap-2 items-center'>
                    <Button onClick={() => router.push('/#contact')} variant='outline'>
                        Contact
                    </Button>
                    <GithubButton />
                    <ThemeButton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar