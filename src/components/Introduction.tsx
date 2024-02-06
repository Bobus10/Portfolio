// import Image from 'next/image'

export default function Introduction() {
  return (
    <div className='flex flex-1 items-center justify-center text-white backdrop-filter backdrop-blur-sm'>
      {/* <Image
        src='./assets/images/git_profile.png'
        alt="GitHub Profile photo"
        width={220}
        height={220}
      /> */}
      <section className='flex flex-col text-center items-center drop-shadow-lg'>
        <h1 className='text-6xl'>
          Hi<span className=" text-pink-600">,</span> i'm 
          <span className='text-cyan-500'>
            {/* </ */}
            &nbsp;&lsaquo;/
          </span>
          <span className="text-7xl text-bold text-zinc-400 hover:text-white">
            Robert
          </span>
          <span className='text-cyan-500'>
            {/* > */}
            &rsaquo;
          </span>
        </h1>
        <hr className=" w-52 h-1 mx-auto m-2 bg-green-400 border-0 rounded"></hr>
        <p className="text-2xl">
          Aspiring Laravel Developer
        </p>
      </section>
    </div>
  )
}
