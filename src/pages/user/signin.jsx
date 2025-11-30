import React, { useState } from 'react';
import curved from '../../assets/user_images/curved-images/curved6.jpg'
import burcemarce from '../../assets/user_images/bruce-mars.jpg'
import team1 from '../../assets/user_images/team-1.jpg'
import team2 from '../../assets/user_images/team-2.jpg'
import team3 from '../../assets/user_images/team-3.jpg'
import team4 from '../../assets/user_images/team-4.jpg'
import marie from '../../assets/user_images/marie.jpg'
import Chesspoint from '../../assets/Chesspoint.jpg'
import homedecor1 from '../../assets/user_images/home-decor-1.jpg'
import homedecor2 from '../../assets/user_images/home-decor-2.jpg'
import homedecor3 from '../../assets/user_images/home-decor-3.jpg'
import { IoCubeSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { Link, Navigate } from 'react-router-dom';
import { postApiWithFormdata } from '../../utils/api';
import { toastSuccess, toastWarn } from '../../utils/notifyCustom';
import { z } from 'zod';
import { loginSchema } from '../../utils/zodSchemas';
const Signin = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [loading,setLoading]=useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${import.meta.env.VITE_URL}${import.meta.env.VITE_LOGIN}`
        try {
            setLoading(true)
            // Validate form data against the schema
            const validatedData = loginSchema.parse(formData);
            console.log('Valid data:', validatedData,url);
            const res = await postApiWithFormdata(url, validatedData)
            console.log(res.data, "kkkkkkkk");

            if (res.data.success) {
                toastSuccess("Login Successfull");
                localStorage.setItem("chess-admin-token", JSON.stringify(res.data.data.token));
                // localStorage.setItem("User Detail", JSON.stringify(res.data.data));
                window.location.reload(false);
                Navigate('/');
            }
            else{
                toastSuccess(res.data.message);
            }

        } catch (error) {
            if (error instanceof z.ZodError) {
                toastWarn(error.errors[0].message);
            }
        }
        finally{
            setLoading(false)
        }
    };

    return (
        <div className='m-0 font-sans antialiase bg-white text-start text-base leading-normal text-slate-500'>
            <div className=" sticky top-0 z-50 ">
                <div className="flex flex-wrap  w-screen">
                    <div className="w-full px-6 flex-0">
                        <nav className='absolute top-0 left-0 right-0 z-50 flex flex-wrap items-center px-4 py-1 mx-10 my-6 shadow-md rounded-full bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start'>
                            <div className='container m-auto flex justify-between items-center text-gray-700'>
                                <Link
                                    className="py-2.5 text-xl max-sm:text-sm mr-4 ml-4  whitespace-nowrap font-bold  text-[#16884d] bg-clip-text lg:ml-6"
                                    to="/"
                                >
                                    {" "}
                                    Dynamo unicorn chess{" "}
                                </Link>
                                {/* <ul className='hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer'>
                                <li className=' py-4 px-4'>
                                <Link
                                                className="flex items-center text-lg hover:text-slate-900 px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out  text-black lg:px-2"
                                                aria-current="page"
                                                to="/admin"
                                            >
                                                <i className="mr-1 fa fa-chart-pie text-lg text-black" />
                                                Dashboard
                                            </Link>
                                </li>
                                <li className=' py-4 px-4'>
                                <Link
                                                className="block px-4 py-2 mr-2 text-lg hover:text-slate-900 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out  text-black lg:px-2"
                                                to="/admin/profile"
                                            >
                                                <i className="mr-1 fa fa-user text-lg text-black" />
                                                Profile
                                            </Link>
                                </li>
                                <li className=' py-4 px-4'>
                                <Link
                                                className="block px-4 py-2 mr-2 hover:text-slate-900 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out text-sm text-slate-700 lg:px-2"
                                                to="/signup"
                                            >
                                                <i className="mr-1 fas fa-user-circle opacity-60" />
                                                Sign Up
                                            </Link>
                                </li>
                                <li className=' py-4 px-4'>
                                <Link
                                            to='/admin/signin'
                                                className="block px-4 py-2 mr-2 text-lg hover:text-slate-900 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out text-black lg:px-2"
                                               
                                            >
                                                <i className="mr-1 fas fa-key text-lg text-black" />
                                                Sign In
                                            </Link>
                                </li>
                            </ul> */}
                                <div className='-mr-2 flex md:hidden'>
                                    <button onClick={() => setIsOpen(!isOpen)} className='block md:hidden py-1 px-2 mx-1  rounded focus:outline-none hover:bg-gray-200'>
                                        <svg
                                            className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
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
                                        <svg
                                            className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
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

                                        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute right-0 top-14 bg-gray-300 w-[100px] rounded-sm`}>
                                            <ul className='flex flex-col items-start w-full text-base cursor-pointer pt-2'>
                                                <li className=' py- px-'>
                                                    <Link
                                                        className="flex items-center hover:text-slate-900 px-1 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out text-sm text-black lg:px-2"
                                                        aria-current="page"
                                                        to="/admin/"
                                                    >
                                                        <i className="mr-1 fa fa-chart-pie opacity-60 text-black" />
                                                        Dashboard
                                                    </Link>
                                                </li>
                                                <li className=' py- px-'>
                                                    <Link
                                                        className="block px-1 py-2 mr-2  hover:bg-gray-900 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out text-sm text-black lg:px-2"
                                                        to="/admin/profile"
                                                    >
                                                        <i className="mr-1 fa fa-user opacity-60 text-black" />
                                                        Profile
                                                    </Link>
                                                </li>
                                                <li className=' py- px-'>
                                                    <Link
                                                        className="block px-4 py-2 mr-2 hover:text-slate-900 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out text-sm text-slate-700 lg:px-2"
                                                        to="/signup"
                                                    >
                                                        <i className="mr-1 fas fa-user-circle opacity-60" />
                                                        Sign Up
                                                    </Link>
                                                </li>
                                                
                                            </ul>
                                        </div>

                                    </button>
                                </div>
                            </div>
                        </nav>
                        {/* Navbar */}
                        {/* <nav className="absolute top-0 left-0 right-0 z-50 flex flex-wrap items-center px-4 py-2 mx-10 my-4 shadow-md rounded-full bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
                            <div className="flex flex-wrap gap-3 items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
                                <Link
                                    className="py-2.5 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0"
                                    to="/"
                                >
                                    {" "}
                                Dynamo unicorn chess{" "}
                                </Link>
                                <button
                                    navbar-trigger=""
                                    className="px-3 max-sm:hidden py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg ease-in-out lg:hidden"
                                    type="button"
                                    aria-controls="navigation"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
                                        <span
                                            bar1=""
                                            className="w-1/5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"
                                        />
                                        <span
                                            bar2=""
                                            className="w-1/5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"
                                        />
                                        <span
                                            bar3=""
                                            className="w-1/5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"
                                        />
                                    </span>
                                    
                                </button>
                                <div
                                    navbar-menu=""
                                    className="items-center max-sm:hidden flex-grow overflow-hidden transition-all duration-500 ease-linear lg-max:max-h-0 basis-full lg:flex lg:basis-auto"
                                >
                                    <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                                        <li>
                                            <Link
                                                className="flex items-center px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out text-sm text-slate-700 lg:px-2"
                                                aria-current="page"
                                                to="/"
                                            >
                                                <i className="mr-1 fa fa-chart-pie opacity-60" />
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out text-sm text-slate-700 lg:px-2"
                                                to="/profile"
                                            >
                                                <i className="mr-1 fa fa-user opacity-60" />
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out text-sm text-slate-700 lg:px-2"
                                                to="/signup"
                                            >
                                                <i className="mr-1 fas fa-user-circle opacity-60" />
                                                Sign Up
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                            to='/signin'
                                                className="block px-4 py-2 mr-2 font-normal transition-all lg-max:opacity-0 duration-250 ease-in-out text-sm text-slate-700 lg:px-2"
                                               
                                            >
                                                <i className="mr-1 fas fa-key opacity-60" />
                                                Sign In
                                            </Link>
                                        </li>
                                    </ul>
                                    {/* online builder btn  */}
                        {/* <li class="flex items-center">
            <a
              class="leading-pro ease-in text-fuchsia-500 border-fuchsia-500 text-xs tracking-tight-soft bg-150 bg-x-25 rounded-3.5xl hover:border-fuchsia-500 hover:scale-102 hover:text-fuchsia-500 active:hover:border-fuchsia-500 active:hover:scale-102 active:hover:text-fuchsia-500 active:opacity-85 active:shadow-xs active:bg-fuchsia-500 active:border-fuchsia-500 mr-2 mb-0 inline-block cursor-pointer border border-solid bg-transparent py-2 px-8 text-center align-middle font-bold uppercase shadow-none transition-all hover:bg-transparent hover:opacity-75 hover:shadow-none active:scale-100 active:text-white active:hover:bg-transparent active:hover:opacity-75 active:hover:shadow-none"
              target="_blank"
              href="https://www.creative-tim.com/builder/ui?ref=navbar-dashboard&amp;_ga=2.76518741.1192788655.1647724933-1242940210.1644448053"
              >Online Builder</a
            >
          </li> */}
                        {/* <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                                        <li>
                                            <a
                                                href="https://www.creative-tim.com/product/ui-dashboard-tailwind"
                                                target="_blank"
                                                className="leading-pro hover:scale-102 hover:shadow-xs active:opacity-85 ease-in text-xs tracking-tighter shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-2xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
                                            >
                                                Free download
                                            </a>
                                        </li>
                                    </ul> */}
                        {/* </div>
                            </div>
                        </nav> */}
                    </div>
                </div>
            </div>
            <main className="mt-0 transition-all duration-200 ease-in-out">
                <section>
                    <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
                        <div className="container z-10">
                            <div className="flex flex-wrap mt-0 -mx-3 p-8">
                                <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                                    <div className="relative flex flex-col min-w-0 mt-24 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                        <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                                            <h3 className=" text-3xl relative z-10 font-bold   bg-clip-text">
                                                Welcome back
                                            </h3>
                                            <p className="mb-0 mt-1">Enter your email and password to sign in</p>
                                        </div>
                                        <div className="flex-auto p-6">
                                            <form role="form" onSubmit={handleSubmit}>
                                                <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                                                    Email
                                                </label>
                                                <div className="mb-4">
                                                    <input
                                                        type="email"
                                                        className="focus:shadow-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-green-600 focus:outline-none focus:transition-shadow"
                                                        placeholder="Email"
                                                        aria-label="Email"
                                                        aria-describedby="email-addon"
                                                        name='email'
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                                                    Password
                                                </label>
                                                <div className="mb-4">
                                                    <input
                                                        type="password"
                                                        className="focus:shadow-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-green-600 focus:outline-none focus:transition-shadow"
                                                        placeholder="Password"
                                                        aria-label="Password"
                                                        aria-describedby="password-addon"
                                                        name='password'
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {/* <div className="min-h-6 mb-0.5 block ">
                                                    <input id='remberMe'
                                                        type="checkbox"
                                                        className='mt-0.5 rounded-xl duration-200 ease-in-out after:rounded-full after:shadow-2xl after:duration-200 checked:after:translate-x-5 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:-translate-x-px after:bg-slate-600 after:content: ""  checked:bg-gradient-to-tl from-[#dddd23] to-[#16884d]  checked:bg-right'
                                                        defaultChecked=""
                                                    />
                                                    <label
                                                        className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
                                                        htmlFor="rememberMe"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div> */}
                                                <div className="text-center pb-8 max-sm:pb-2">
                                                    <button
                                                        type="submit"
                                                        disabled={loading}
                                                        className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all  border-0 rounded-lg cursor-pointer shadow-md bg-x-25 bg-150 leading-pro text-xs ease-in tracking-tight-soft bg-green-600 hover:bg-green-500  active:opacity-85"
                                                    >
                                                        {loading?"loading...":"Sign in"}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                            <p className="mx-auto mb-6 leading-normal text-sm">
                                                Don't have an account?
                                                <a
                                                    href="../pages/sign-up.html"
                                                    className="relative z-10 font-semibold  text-[#16884d]"
                                                >
                                                    Sign up
                                                </a>
                                            </p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="w-full  max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                                    <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-12 -right-40 rounded-bl-xl md:block">
                                        <div
                                            className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-12"
                                            style={{
                                                backgroundImage: `url(${Chesspoint})`

                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    );
};
export default Signin;