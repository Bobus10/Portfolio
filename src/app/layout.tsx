import '#/public/styles/globals.css'
import BottomBar from '@/components/BottomBar'
import NavBar from '@/components/NavBar'
import Introduction from '@/components/Introduction'
import { Metadata } from 'next'

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
    <html className="h-full" lang='en'>
      <body>
        {/* Page Container */}
        <div id='home' className="bg-img flex flex-col min-h-screen">
          <NavBar/>
          <Introduction/>
        </div>
        
        <section className='min-h-screen bg-slate-900'>
          {children}
        </section>
                
        {/* TODO: Nav move to bottom or make a hamburger menu */}
        {/* <nav className='lg:hidden sticky bottom-0'>
          <BottomBar/>
        </nav> */}
      </body>
    </html>
  )
}