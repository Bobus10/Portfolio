import type { Metadata } from 'next'
import './globals.css'
import Introduction from '../components/Introduction'
// import NavBar from '../components/NavBar'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
// import BottomBar from '../components/BottomBar'
import Contact from '../components/Contact'


export const metadata: Metadata = {
  title: 'Portfolio Robert Kosieradzki',
  description: 'Portfolio Robert Kosieradzki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-black via-blue-900 to-blue-500 h-full bg-no-repeat bg-fixed'>
        <div className='flex flex-row max-lg:flex-col gap-5 mt-16'>
          <header className='lg:w-1/2'>
            <div className='lg:w-1/2 flex flex-col justify-center items-center lg:fixed gap-3'>
              {/* Short Introduction */}
              <section>
                <Introduction /> 
              </section>
              {/* About Me */}
              <section className='flex text-center items-center lg:px-20 px-10'>
                {children}
              </section>
              {/* Contact */}
              <div className=''>
                <Contact/>
              </div>
              {/* Navigation Links */}
              {/* <div className='max-lg:hidden '>
                <NavBar/>
              </div> */}
            </div>
          </header>
          <main className='lg:w-1/2 px-10 flex flex-col gap-5'>
            {/* Experience */}
            <section>
              <Experience/>
            </section>
            {/* Projects */}
            <section className='max-lg:mb-16'>
              <Projects/>
            </section>
          </main>
          {/* BottomBar to easy navigate on mobile devices */}
          {/* <div className='lg:hidden fixed bottom-0 w-full'>
            <BottomBar/>
          </div> */}
        </div>
      </body>
    </html>
  )
}