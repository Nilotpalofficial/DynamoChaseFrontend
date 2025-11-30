import { Breadcrumbs } from '@material-tailwind/react'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const Header = (data) => {
    const location = useLocation();
    const admin=localStorage.getItem('chess-admin-token');
    let pathname=location.pathname; 
    if(location.pathname==='/admin'){
        pathname="/admin/Dashboard"
    }
    console.log(pathname); 

    return (
        <div className=' sm:flex flex-col max-md:ms-4 max-sm:ms-1'>
        
            <div className='flex max-sm:flex-col justify-between flex-wrap '>
                <div className='breadcrump ms-4 my-2'><span className='opacity-60 text-white max-sm:hidden'>Dashboard</span><span className='capitalize text-white'>{pathname}</span>
                    <h4 className='font-bold capitalize text-white max-sm:hidden'>{pathname.replace("/","")}</h4>
                </div>
                <div className='flex flex-wrap gap-2 justify-between mb-5'>
                    <div className='max-md:w-full max-md:mx-3'>

                        <div className="relative flex max-sm:w-full mt-3 mr-8 rounded-md shadow-sm">
                        
                            <input
                                type="text"
                                name="price"
                                id="price" placeholder='Type here'
                                className="block max-sm:w-full rounded-2xl border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset 
                                  focus:outline-none focus:border-[#16884d] focus:border-1 sm:text-sm sm:leading-6"

                            />
                            <div className="absolute inset-y-0  flex  items-center">
                                <button className='text-slate-900 	'><FaSearch className='mx-2 me-5  text-bold opacity-60 ' /></button>
                            </div>
                           
                        </div>
                    </div>
                    {!admin && 
                    <Link to='/admin/signin' className='mx-3 flex mt-3 max-sm:mr-3 text-semibold text-lg text-white'><RiAdminFill className='me-1 mt-1 text-white'/>Sign in</Link>
                    }

                    <button className='mx-3 flex mt-3 bg-opacity-50 '><IoIosSettings className=' mt-1 text-xl text-white'/></button>
                    <button className='mx-2 mr-4 max-sm:mr-12 flex mt-3 '><IoIosNotifications className=' mt-1 text-xl text-white '/></button>
                </div>
            </div>
        </div>

    )
}

export default Header