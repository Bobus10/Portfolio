export default function Introduction() {
  return (
    <div className='flex flex-1 items-center justify-center text-white backdrop-filter backdrop-blur-sm'>
      <section className='flex flex-col text-center items-center drop-shadow-lg'>
        <h1 className='text-6xl flex sm:flex-row flex-col'>
          <div>
            Hi<span className=" text-pink-600">,</span> I'm 
          </div>
          <div>
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
          </div>
        </h1>
        <hr className=" w-52 h-1 mx-auto m-2 bg-green-400 border-0 rounded"></hr>
        <p className="text-2xl">
          Aspiring Laravel Developer
        </p>
        {/* <button>
          <Link
            href='#projects'
          >
            Check Out
          </Link>
        </button> */}
      </section>
    </div>
  )
}
