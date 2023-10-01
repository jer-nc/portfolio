import Bio from '@/components/sections/bio/Bio'
import Contact from '@/components/sections/contact/Contact'
import FeatProjects from '@/components/sections/featured-projects/FeatProjects'
import HomeLayout from '@/layouts/HomeLayout'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HomeLayout>
        <Bio />
        <FeatProjects />
        <Contact />
      </HomeLayout>
    </main>
  )
}
