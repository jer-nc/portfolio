import Navbar from '@/components/custom/Navbar'
import Bio from '@/components/sections/bio/Bio'
import FeatProjects from '@/components/sections/featured-projects/FeatProjects'
import HomeLayout from '@/layouts/HomeLayout'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <HomeLayout>
        <Bio />
        <FeatProjects />
      </HomeLayout>
    </main>
  )
}
