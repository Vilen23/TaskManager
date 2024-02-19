import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signin() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
          <h1 className="text-4xl font-bold text-center">Sign In</h1>
          <div className="relative mt-5 ">
            <input
              type="text"
              id="email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className=" cursor-text absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>
          </div>
          
          <div className="relative mt-5">
            <input
              type="password"
              id="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="cursor-text absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Password
            </label>
          </div>
          <div className="mt-5">
            <button className="w-full py-2.5 px-4 bg-[#F5D565] text-slate-700 font-semibold rounded-lg hover:shadow-lg duration-300">
              Sign In
            </button>
          </div>
          <div>
            <p className="text-center mt-5">
              Do not have an account?{" "}
              <span onClick={()=>{
                navigate('/signup')
              }} className="text-blue-600 cursor-pointer signInHover">Sign Up</span>            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin