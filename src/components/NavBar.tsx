import Link from "next/link";
import { navLinks } from "#/constants";

export default function NavBar() {
  return (
    <div className="flex items-center h-20 backdrop-filter backdrop-blur-sm">
      {/* NavBar Container */}
      <div className='relative px-5 w-full flex justify-end'>
        {/* Links */}
        <nav className='group flex gap-5'>
            {navLinks.map((link) => {
              return (
                // Single Link
                <Link
                  href={link.route}
                  className="group-hover:text-zinc-400 text-white text-lg"
                >
                  <span className="hover:underline hover:underline-offset-8 hover:decoration-orange-600 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </span>
                </Link>
              )
            })}
        </nav>
      </div>
    </div>
  )
}
//TODO: In feature change navBar to Interactive scroll on the right side and hamburger menu on smaller devices