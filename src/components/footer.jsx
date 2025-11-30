import React from 'react'

const Footer = () => {
  return (
    <div className=' px-6 py-8 m-0 '>
    <footer className="">
    <div className="w-full px-6 max-sm:px-4 mx-auto">
      <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
        <div className="w-full max-w-full px-3 max-sm:px-1 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
          <div className="leading-normal text-center text-lg text-black lg:text-left">
           
            <a
              href="#"
              className="font-semibold text-green-600"
              target="_blank"
            >
              Dyna 
            </a>
            mo unicorn chess.
          </div>
        </div>
        <div className="w-full max-w-full px-3 max-sm:px-1 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
          <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end text-lg">
            <li className="nav-item">
              <a
                href="#"
                className="block px-4 max-sm:px-2 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-md "
                target="_blank"
              >
                Creative Tim
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="block px-4 max-sm:px-2 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-md "
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="block px-4 max-sm:px-2 pt-0 pb-1 font-normal transition-colors ease-soft-in-out "
                target="_blank"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="block px-4 max-sm:px-2 pt-0 pb-1 pr-0 font-normal transition-colors ease-soft-in-out "
                target="_blank"
              >
                License
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

    </div>
  )
}

export default Footer