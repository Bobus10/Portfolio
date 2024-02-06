import '#/public/styles/globals.css'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <>
      <main className='px-10 flex flex-col gap-5'>
        <section id='projects' className='max-lg:mb-16'>
          <Projects/> 
        </section>
        <section id='aboutMe' className='max-lg:mb-16'>
          <AboutMe/>
        </section>
        <section id='experience'>
          <Experience/>
        </section>
      </main>

      <footer>
        {/* Contact */}
        <div id='contact' className=''>
            <Contact/>
          </div>
      </footer>
    </>
  )
}
