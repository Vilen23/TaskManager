import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../states/UserAtom";
import axios from "axios";
import { Loading } from "../components/Spinner";
import { Alert } from "flowbite-react";

function Signup() {
  const navigate = useNavigate();
  const [user,setUser] = useRecoilState(userAtom);
  const [error,setError] = useState("")
  const [loading,setLoading] = useState(false);

  const HandleSignup = async()=>{
    setLoading(true)
    try {
      if(user.email === "" || user.password === "" || user.username === ""){
        setError("Please fill all the fields")
        setLoading(false)
        return;
      }
      const response = await axios.post("http://localhost:3000/api/auth/signup",user)
      if(response.status === 201){
        setLoading(false)
        navigate('/signin')
      }else if(response.status === 400){
        console.log("iskimaka");
        
        setError("User Already Exists");
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      if ((error as any).response && (error as any).response.status === 400) {
        setError("User Already Exists");
      } else {
        setError("Something went wrong")
      }
    }
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[90vh]">
      {
        error && <Alert color='red' className="mb-5 w-[400px] ">
          {error}</Alert>
      }
        <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          <div className="relative mt-5 ">
            <input
              type="email"
              id="email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            onChange={(e)=>{
              setUser({...user,email:e.target.value})
            }}
            onClick={()=>{
              setError("")
            }}/>
            <label
              htmlFor="email"
              className=" cursor-text absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Email
            </label>
          </div>
          <div className="relative mt-5">
            <input
              type="text"
              id="username"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            onChange={(e)=>{
              setUser({...user,username:e.target.value})
            }}
            onClick={()=>{
              setError("")
            }}/>
            <label
              htmlFor="username"
              className="cursor-text absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Username
            </label>
          </div>
          <div className="relative mt-5">
            <input
              type="password"
              id="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            onChange={(e)=>{
              setUser({...user,password:e.target.value})
            }}
            onClick={()=>{
              setError("")
            }}/>
            <label
              htmlFor="password"
              className="cursor-text absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Password
            </label>
          </div>
          <div className="mt-5">
            <button className="w-full py-2.5 px-4 bg-[#F5D565] text-slate-700 font-semibold rounded-lg hover:shadow-lg duration-300"
            onClick={HandleSignup}>
              {loading?<Loading/>:"Sign Up"}
            </button>
          </div>
          <div>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <span onClick={()=>{
                navigate('/signin')
              }} className="text-blue-600 cursor-pointer signInHover">Sign In</span>            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
