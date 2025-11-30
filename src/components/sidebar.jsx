import React, { useState, useRef, useEffect } from 'react'
import { TbLayoutDashboard } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import logo from "../assets/logo2.png";
import logo1 from "../assets/LOGO3.png";
import Newlogo from "../assets/Newlogo.png";
import { IoIosCube } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAssignment } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { GiDiamondTrophy } from "react-icons/gi";
import { GiGamepad } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { MdOutlineContentPaste } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { IoIosImages } from "react-icons/io";
import { MdCardMembership } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
const Sidebar = () => {
    const dropdownRef = useRef(null);
    const admin = localStorage.getItem('chess-admin-token');
    console.log(admin, "gggggggggggggggg");
    const location = useLocation();
    let pathname = location.pathname;
    if (location.pathname === '/admin') {
        pathname = "/AdminDashboard"
    }
    console.log(pathname);
    const [dropdown, setDropdown] = useState(false);
    const openDropdown = () => {
        setDropdown(true);
    };
    const closeDropdown1 = () => {
        console.log("+++")
        setDropdown1(false);
    };

    const closeDropdown2 = () => {
        console.log("+++")
        setDropdown2(false);
    };
    const closeDropdown3 = () => {
        console.log("+++")
        setDropdown3(false);
    };
    const closeDropdown4 = () => {
        console.log("+++")
        setDropdown4(false);
    };
    const closeDropdown5 = () => {
        console.log("+++")
        setDropdown5(false);
    };
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);
    const [dropdown5, setDropdown5] = useState(false);
    const dropdownRef1 = useRef(null);
    const dropdownRef2 = useRef(null);
    const dropdownRef3 = useRef(null);
    const dropdownRef4 = useRef(null);
    const dropdownRef5 = useRef(null);

    const toggleDropdown1 = () => setDropdown1(!dropdown1);
    const toggleDropdown2 = () => setDropdown2(!dropdown2);
    const toggleDropdown3 = () => setDropdown3(!dropdown3);
    const toggleDropdown4 = () => setDropdown4(!dropdown4);
    const toggleDropdown5 = () => setDropdown5(!dropdown4);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=' h-screen mt-0  '>
            <div className='lg:w-60 md:w-52 max-sm:hidden max-md:hidden '>
                <p className=' mx-2 flex my-2'>
                    <Link to={"/"}>
                        <img src={Newlogo} className='h-[58px] w-36 pl-4 bg-cover '></img>
                    </Link>
                </p>
                <hr className="h-px  bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-4 mt-4 max-md:mt-20 py-0.5" />
                <div className=' ms-4 my-3'>
                    <Link to='/' className='bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100 '><IoMdHome className={pathname === "/admin/Dashboard" ? "text-3xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"} />Dashboard</Link>
                </div>
                <div className=' ms-4 my-3'>
                    <Link to='/admin/user' className=' bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><FaUsers className={`text-md ${pathname === "/admin/user" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></FaUsers>Users</Link>
                </div>
                {/* <div className='ms-4 my-4 capitalize cursor-pointer' onClick={openDropdown} onMouseLeave={closeDropdown}>
                <a className='p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                    <FaProductHunt className={`text-md ${pathname === '/salerproduct' || pathname === '/allproduct' || pathname === '/addproduct' ? "text-3xl bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`} />Products
                 
                </a>
                {dropdown && (
                    <div ref={dropdownRef} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                        <Link to='/allproduct' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                            All Products
                        </Link>
                        <Link to='/salerproduct' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Saler Products
                        </Link>
                        <Link to='/addproduct' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            add product
                        </Link>
                    </div>
                )}
            </div> */}


                <h4 className='text-slate-600 ms-2 uppercase'>Account Pages</h4>
                {/* <div className=' ms-4 my-4'>
                <button className=' p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'><CgProfile className='text-2xl text-slate-800 me-3 bg-white p-1 rounded-md' />Profile</button>
            </div> */}
                <div className=' ms-4 my-2'>
                    <Link to='/admin/profile' className=' bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><CgProfile className={`text-md ${pathname === "/admin/profile" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></CgProfile>Profile</Link>
                </div>
                <div className='ms-4 my-2 capitalize cursor-pointer' onClick={() => toggleDropdown2(!dropdown2)} onMouseLeave={closeDropdown2} >
                    <a className='p-1 ps-2 pe-10 flex  hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                        <GiDiamondTrophy className={`text-md ${pathname === '/admin/ongoingmatch' || pathname === '/admin/upcomingmatch' || pathname === '/admin/completematch' || pathname === '/matches' || pathname === '/admin/result' || pathname === '/admin/creattournament' ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`} />Tournament

                    </a>
                    {dropdown2 && (
                        <div ref={dropdownRef2} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown2 ? 'max-h-35' : 'max-h-0 overflow-hidden'}`}>
                            <Link to='/admin/upcomingmatch' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                Upcoming Tournament
                            </Link>
                            <Link to='/admin/ongoingmatch' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                current Tournament
                            </Link>
                            <Link to='/admin/completematch' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                Completed Tournament
                            </Link>
                            <Link to='/admin/creattournament' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                Create Tournament
                            </Link>
                            {/* <Link to='/matches' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Matches
                        </Link> */}
                            {/* <Link to='/admin/result' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                Result
                            </Link> */}

                        </div>
                    )}
                </div>
                <div className='ms-4 my-2 capitalize cursor-pointer' onClick={() => toggleDropdown1(!dropdown1)} onMouseLeave={closeDropdown1} >
                    <a className='p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                        <GiGamepad className={`text-md ${pathname === '/admin/Gamelive' || pathname === '/admin/Tournamentlivegame' || pathname === '/admin/Timemanagement' ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl me-3 bg-white p-1 rounded-md"}`} />Game Management

                    </a>
                    {dropdown1 && (
                        <div ref={dropdownRef1} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown1 ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                            {/* <Link to='/admin/Gamelive' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                Live Game
                            </Link>
                            <Link to='/admin/Tournamentlivegame' className='mt-1 p-1 leading-4 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                Tournament live Game
                            </Link> */}
                            <Link to='/admin/Timemanagement' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                Time Management
                            </Link>
                        </div>
                    )}
                </div>
                <div className='ms-4 my-2 capitalize cursor-pointer' onClick={() => toggleDropdown3(!dropdown3)} onMouseLeave={closeDropdown3} >
                    <a className='p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100 leading-4'>
                        <MdOutlineAssignment className={`text-md ${pathname === '/admin/Contentmanagement' || pathname === '/admin/Rules' ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl me-3 bg-white p-1 rounded-md"}`} />Content Management

                    </a>
                    {dropdown3 && (
                        <div ref={dropdownRef3} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown3 ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                            <Link to='/admin/Contentmanagement' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                Content
                            </Link>
                            <Link to='/admin/Rules' className='mt-1 p-1 leading-4 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                Rules
                            </Link>
                            {/* <Link to='/admin/Timemanagement' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Time Management
                        </Link> */}
                        </div>
                    )}
                </div>
                {/*            
            <div className=' ms-4 my-4'>
                <Link to='/admin/Contentmanagement' className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><MdOutlineAssignment className={`text-md ${pathname === "/admin/Contentmanagement" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></MdOutlineAssignment>
                Content Management</Link>
            </div> */}
                <div className=' ms-4 my-2'>
                    <Link to='/admin/Bannermanagement' className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><IoIosImages className={`text-md ${pathname === "/admin/Bannermanagement" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></IoIosImages>
                        Banner Management</Link>
                </div>
                <div className='ms-4 my-2 capitalize cursor-pointer' onClick={() => toggleDropdown4(!dropdown4)} onMouseLeave={closeDropdown4} >
                    <a className='p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100 leading-4'>
                        <GiTeacher className={`text-md ${pathname === '/admin/trainer' ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl me-3 bg-white p-1 rounded-md"}`} />Trainer Management

                    </a>
                    {dropdown4 && (
                        <div ref={dropdownRef4} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown4 ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                            <Link to='/admin/trainer' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                Trainer
                            </Link>
                            {/* <Link to='/admin/Rules' className='mt-1 p-1 leading-4 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Rules
                        </Link> */}
                            {/* <Link to='/admin/Timemanagement' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Time Management
                        </Link> */}
                        </div>
                    )}
                </div>
                <div className='ms-4 my-2 capitalize cursor-pointer' onClick={() => toggleDropdown5(!dropdown5)} onMouseLeave={closeDropdown5} >
                    <a className='p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100 leading-4'>
                        <FcAbout className={`text-md ${pathname === '/admin/aboutus' || pathname === '/admin/abouttournament' ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl me-3 bg-white p-1 rounded-md"}`} />About

                    </a>
                    {dropdown5 && (
                        <div ref={dropdownRef5} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown5 ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                            <Link to='/admin/aboutus' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                About Us
                            </Link>
                            <Link to='/admin/abouttournament' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                About Tournament
                            </Link>
                            {/* <Link to='/admin/Timemanagement' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Time Management
                        </Link> */}
                        </div>
                    )}
                </div>
                <div className=' ms-4 my-2'>
                    <Link to='/admin/membership' className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><MdCardMembership className={`text-md ${pathname === "/admin/membership" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></MdCardMembership>
                        Membership</Link>
                </div>
                {/* <div className=' ms-4 my-2'>
                    <Link to='/admin/blogmanagement' className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><FaBlog className={`text-md ${pathname === "/admin/blogmanagement" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></FaBlog>
                        Blog Management</Link>
                </div> */}

                {/* <div className=' ms-4 my-2'>
                  
                    {admin &&

                        <Link to='/admin/signin' className=' bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><MdOutlineAssignment className={`text-md ${pathname === "/signin" ? "text-3xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></MdOutlineAssignment>Sign In</Link>

                    }
                </div> */}
                {/* <div className=' ms-4 my-4'>
                <Link to='/admin/Rules' className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><MdOutlineAssignment className={`text-md ${pathname === "/admin/Rules" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></MdOutlineAssignment>
                Rules</Link>
            </div> */}
                {/* <div className=' ms-4 my-4'>
                <Link to='signup' className=' bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><HiLogout className={`text-md ${pathname === "/signup" ? "text-3xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></HiLogout>Sign Up</Link>
            </div> */}
                {/* <div className=' ms-4 my-4'>
                <Link to='test' className=' bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><HiLogout className={`text-md ${pathname === "/signup" ? "text-3xl bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></HiLogout>test</Link>
            </div> */}



            </div>
            <div className='-mr-2 mt-12 flex lg:hidden'>
                <button onClick={toggleMenu} className='block md:hidden py-1 px- mx-1  rounded focus:outline-none hover:bg-gray-200'>
                    <svg
                        className={`h-6 w-6 ${isOpen ? 'hidden' : 'block text-white'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                    {/* Close Icon */}
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute left-0 h-screen top-0 bg-slate-200 w-64 z-50`}>
                    <button onClick={toggleMenu} className='float-end text-white p-1 bg-gradient-to-tl bg-red-500 '>
                        <svg
                            className={`h-6 w-6 ${isOpen ? ' block' : 'hidden '}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <ul className='flex flex-col items-start w-full text-base cursor-pointer ml- pt-2'>
                        <li className=' py-2 px-4'>
                            <Link to='/' onClick={() => toggleMenu(false)} className='bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md  '><IoMdHome className={pathname === "/" ? "text-3xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"} />Dashboard</Link>
                        </li>
                        <li onClick={() => toggleMenu(false)} className=' px-4'>

                            <Link to='/admin/user' className=' bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md '><FaUsers className={`text-md ${pathname === "/admin/user" ? "text-3xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></FaUsers>Users</Link>
                        </li>
                        <h4 className='text-slate-600 ms-2 uppercase'>Account Pages</h4>
                        <li onClick={() => toggleMenu(false)} className=' py-4 px-4'>
                            <Link to='/admin/profile' className=' bg-slate-200 p- ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><CgProfile className={`text-md ${pathname === "/admin/profile" ? "text-3xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></CgProfile>Profile</Link>
                        </li>
                        <div className='ms-4 my-1 capitalize cursor-pointer' onClick={() => toggleDropdown2(!dropdown2)} onMouseLeave={closeDropdown2} >
                            <a className='p-1 ps-2 pe-10 flex  hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                <GiDiamondTrophy className={`text-md ${pathname === '/admin/ongoingmatch' || pathname === '/admin/upcomingmatch' || pathname === '/admin/completematch' || pathname === '/admin/matches' || pathname === '/admin/result' || pathname === '/admin/creattournament' ? "text-3xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`} />Tournament

                            </a>
                            {dropdown2 && (
                                <div ref={dropdownRef2} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown2 ? 'max-h-35' : 'max-h-0 overflow-hidden'}`}>
                                    <Link to='/admin/upcomingmatch' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                        Upcoming Tournament
                                    </Link>
                                    <Link to='/admin/ongoingmatch' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                        current Tournament
                                    </Link>
                                    <Link to='/admin/completematch' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                        Completed Tournament
                                    </Link>
                                    <Link to='/admin/creattournament' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                        Creat Tournament
                                    </Link>
                                    {/* <Link to='/matches' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Matches
                        </Link> */}
                                    <Link to='/admin/result' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                        Result
                                    </Link>

                                </div>
                            )}
                        </div>
                        <div className='ms-3 my-1 capitalize cursor-pointer' onClick={() => toggleDropdown1(!dropdown1)} onMouseLeave={closeDropdown1} >
                            <a className='p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                <GiGamepad className={`text-md ${pathname === '/admin/Gamelive' || pathname === '/admin/Tournamentlivegame' || pathname === '/admin/Timemanagement' ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl me-2 bg-white p-1 rounded-md"}`} />Game Management

                            </a>
                            {dropdown1 && (
                                <div ref={dropdownRef1} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown1 ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                                    {/* <Link to='/admin/Gamelive' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                        Live Game
                                    </Link>
                                    <Link to='/admin/Tournamentlivegame' onClick={() => toggleMenu(false)} className='mt-1 p-1 leading-4 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                        Tournament live Game
                                    </Link> */}
                                    <Link to='/admin/Timemanagement' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                        Time Management
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className='ms-4 my-1 capitalize cursor-pointer' onClick={() => toggleDropdown3(!dropdown3)} onMouseLeave={closeDropdown3} >
                            <a className='p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100 leading-4'>
                                <MdOutlineAssignment className={`text-md ${pathname === '/admin/Contentmanagement' || pathname === '/admin/Rules' ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl me-3 bg-white p-1 rounded-md"}`} />Content Management

                            </a>
                            {dropdown3 && (
                                <div ref={dropdownRef3} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown3 ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                                    <Link to='/admin/Contentmanagement' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                        Content
                                    </Link>
                                    <Link to='/admin/Rules' onClick={() => toggleMenu(false)} className='mt-1 p-1 leading-4 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                                        Rules
                                    </Link>
                                    {/* <Link to='/admin/Timemanagement' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Time Management
                        </Link> */}
                                </div>
                            )}
                        </div>
                        <div className=' ms-4 my-1'>
                            <Link to='/admin/Bannermanagement' onClick={() => toggleMenu(false)} className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><IoIosImages className={`text-md ${pathname === "/admin/Bannermanagement" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></IoIosImages>
                                Banner Management</Link>
                        </div>
                        <div className='ms-4 my-4 capitalize cursor-pointer' onClick={() => toggleDropdown4(!dropdown4)} onMouseLeave={closeDropdown3} >
                            <a className='p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100 leading-4'>
                                <GiTeacher className={`text-md ${pathname === '/admin/trainer' ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl me-3 bg-white p-1 rounded-md"}`} />Trainer Management

                            </a>
                            {dropdown4 && (
                                <div ref={dropdownRef4} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown4 ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                                    <Link to='/admin/trainer' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                        Trainer
                                    </Link>
                                    {/* <Link to='/admin/Rules' className='mt-1 p-1 leading-4 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Rules
                        </Link> */}
                                    {/* <Link to='/admin/Timemanagement' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Time Management
                        </Link> */}
                                </div>
                            )}
                        </div>
                        <div className='ms-4 my-1 capitalize cursor-pointer' onClick={() => toggleDropdown5(!dropdown5)} onMouseLeave={closeDropdown5} >
                            <a className='p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100 leading-4'>
                                <FcAbout className={`text-md ${pathname === '/admin/aboutus' || pathname === '/admin/abouttournament' ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl me-3 bg-white p-1 rounded-md"}`} />About

                            </a>
                            {dropdown5 && (
                                <div ref={dropdownRef5} className={`h-auto ms-5 mt-2 transition-all ease-in-out delay-150 duration-1000 ${dropdown5 ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                                    <Link to='/admin/aboutus' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                        About Us
                                    </Link>
                                    <Link to='/admin/abouttournament' onClick={() => toggleMenu(false)} className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100 '>
                                        About Tournament
                                    </Link>
                                    {/* <Link to='/admin/Timemanagement' className='mt-1 p-1 ps-2 pe-10 flex text-slate-500 hover:bg-slate-100 rounded-md focus:bg-slate-100'>
                            Time Management
                        </Link> */}
                                </div>
                            )}
                        </div>
                        <div className=' ms-4 my-1'>
                            <Link to='/admin/membership' onClick={() => toggleMenu(false)} className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><MdCardMembership className={`text-md ${pathname === "/admin/membership" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></MdCardMembership>
                                Membership</Link>
                        </div>
                        {/* <div className=' ms-4 my-1'>
                            <Link to='/admin/blogmanagement' onClick={() => toggleMenu(false)} className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><FaBlog className={`text-md ${pathname === "/admin/blogmanagement" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></FaBlog>
                                Blog Management</Link>
                        </div> */}
                        {/* <div className=' ms-4 my-2'>
                <Link to='/admin/aboutus' onClick={() => toggleMenu(false)} className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><MdOutlineAssignment className={`text-md ${pathname === "/admin/aboutus" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></MdOutlineAssignment>
                About Us</Link>
            </div> */}

                        {/* <div className=' ms-4 my-4'>
                <Link to='/admin/Rules' className=' leading-4 bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><MdOutlineAssignment className={`text-md ${pathname === "/admin/Rules" ? "text-2xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></MdOutlineAssignment>
                Rules</Link>
            </div> */}
                        {/* {admin &&
                            <li className=' py-2 px-4'>
                                <Link to='/admin/signin' className=' bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><MdOutlineAssignment className={`text-md ${pathname === "/signin" ? "text-3xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></MdOutlineAssignment>Sign In</Link>
                            </li>
                        } */}
                        {/* <li className=' py-4 px-4'>
                                <Link to='signup' className=' bg-slate-200 p-1 ps-2 pe-10 flex hover:bg-slate-100 rounded-md focus:bg-slate-100'><HiLogout className={`text-md ${pathname === "/signup" ? "text-3xl bg-gradient-to-tl from-[#dddd23] to-[#16884d] shadow-soft-2xl me-2 rounded-md p-1 text-white" : "text-2xl text-slate-800 me-3 bg-white p-1 rounded-md"}`}></HiLogout>Sign Up</Link>
                                </li> */}
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Sidebar