import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaProductHunt } from "react-icons/fa";

const Test = () => {
  const [dropdown, setDropdowm] = useState(false);
  const handleClick = () => {
    if (!dropdown) {
      setDropdowm(true)
    }
    else {
      setDropdowm(false)

    }
  }
  return (
    <div>
      <div className=' ms-56 my-4 bg-slate-50'>
                <h2 onClick={handleClick} className=' m-0 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'><i className="fa-brands fa-product-hunt text-md text-slate-800 me-3 mt-1  rounded-md"></i>Products <br/>

                </h2>

                {!dropdown ?<div>
                  <button className='block bg-yellow-300'>a</button>
                  <button className='block bg-yellow-300'>b</button>
                  <button className='block bg-yellow-300'>c</button>
                  <button className='block bg-yellow-300'>d</button>
                 
                </div>:''}
            </div>

    </div>
  )
}

export default Test
