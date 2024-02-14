import Image from 'next/image'
import { projects } from '#/constants'
import { github, rightArrow } from '#/constants/icons'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className='text-white '>
      <h1 className='text-head'>
          Projects
      </h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        {projects.map((project, index) => {
          const isRoute = (project.route && project.route.length > 0)

          return (
            <div key={index} className="flex flex-col mt-6 text-gray-700 bg-stone-200 shadow-md bg-clip-border rounded-xl w-96">
              <div className="p-6">
                <div className="block mb-2 font-sans antialiased font-semibold leading-snug tracking-normal">
                  {/* Project name */}
                  <h1 className='text-2xl'>
                    {project.name}
                  </h1>
                  {/* Route to Github */}
                  {isRoute && 
                    <Link
                      href={project.route}
                      className='hover:underline underline-offset-1 flex flex-row gap-1 items-center text-center'
                      target="_blank"
                    >
                      Code on GitHub
                        <Image
                          src={github.src}
                          alt={github.label}
                          width={24}
                          height={24}
                        />
                    </Link>
                  }
                </div>
                {/* Icons of technologies used to create the project */}
                <div className='flex flex-row gap-2'>
                  {project.technologies.map((technology) => {
                    const isSrc = (technology.src && technology.src.length > 0 && technology.src.endsWith('.svg'))
                    return (
                      isSrc ? (
                        <Image
                          key={technology.label}
                          src={technology.src}
                          alt={technology.label}
                          width={24}
                          height={24}
                          title={technology.label}
                        />
                      ) : (
                        <p className='text-sm'>
                          {technology.label}
                        </p>
                      )
                    )
                  })}
                </div>
                {/* Project Description */}
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {project.description}
                </p>
              </div>
              {/* Learn More */}
              {/* <div className="p-6 pt-0">
                <button
                  className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                  type="button">
                  Learn More
                  <Image
                    src={rightArrow.src}
                    alt={rightArrow.label}
                    width={24}
                    height={24}
                  />
                </button>
              </div> */}
            </div> 
          )
        })}
      </div>
    </div>
  )
}
// TODO: Create shot description and add button "Learn more" to widening card with project and show the detailed description 
