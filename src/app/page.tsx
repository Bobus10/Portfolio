import '#/public/styles/globals.css'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <>
      <main className='px-10 flex flex-col gap-5 py-5'>
        <section id='projects' className='max-lg:mb-16 min-h-screen '>
          <Projects/> 
        </section>
        <section className='flex flex-col gap-5'>
          <p className='text-head'>
            About me
          </p>
          <div id='aboutMe' className='min-h-[50vh] flex sm:flex-row flex-col gap-8'>
            <section className='max-lg:mb-16 flex sm:w-1/2 w-full text-justify'>
              <AboutMe/>
            </section>
            <section className='flex sm:w-1/2 w-full'>
              <Experience/>
            </section>
          </div>
        </section>
      </main>

      <footer className='min-h-[50vh] w-full flex flex-row max-xl:px-4'>
        <div className='xl:basis-1/3'></div>
        {/* Contact */}
        <div id='contact' className='xl:basis-1/3'>
          <Contact/>
        </div>
        <div className='xl:basis-1/3'></div>
      </footer>
    </>
  )
}
