"use client"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Import Eye icons from react-icons

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)  // State to manage password visibility
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const emailResponse = email?.current?.value
    const passwordResponse = password?.current?.value
    e.preventDefault()
    const url = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: emailResponse, password: passwordResponse }),
    })
    const data = await url.json()
    if (data.redirectUrl) {
      router.push(data.redirectUrl)
    }
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 p-5 pt-11">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[400px]">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Log in to Exclusive</h1>
        <p className="text-center text-gray-500 mb-6">Enter your details below</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email or Phone Number</label>
            <input
              type="text"
              id="email"
              ref={email}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Email or Phone Number"
            />
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type={showPassword ? "text" : "password"}  // Toggle between text and password
              id="password"
              ref={password}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Password"
            />
            {/* Eye icon to toggle password visibility */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}  // Toggle password visibility on click
              className="absolute right-3 top-8 text-gray-500"
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />} 
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Log in
          </button>

          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-600">Dont have an account? <span className="text-pink-600 hover:text-pink-700">Sign Up</span></p>
            <span className="text-sm text-pink-600 hover:text-pink-700">Forgot Password?</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login