import React, { useEffect } from 'react'

export function ProductThree() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
        }, []);
  return (
    <div className='ms-60 min-h-screen'>
         <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="rounded-md border bg-slate-50 p-2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px] transition ease-in-out delay-150  hover:scale-105  duration-500"
          />
          <div className="">
            <h1 className=" items-center text-xs text-center mt-1">Nike Airmax v2</h1>
            <p className=" text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            {/* <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Sneakers
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Nike
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Airmax
              </span>
            </div> */}
            <div className="mt-2 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Colors : </span>
              <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
              <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
              <span className="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <span className="block text-sm font-semibold">Size : </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                8 UK
              </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                9 UK
              </span>
              <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
                10 UK
              </span>
            </div>
            <p className='text-sm mt-3 mb-5'>Rs.15000<span className='line-through ms-1 text-slate-400'>Rs.20000</span></p>
            {/* <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button> */}
          </div>
        </div>
      ))}
    </div>
    </div>
   
  )
}
