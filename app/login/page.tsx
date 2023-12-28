import React from 'react'
import Image from 'next/image'
import Facebook from '../images/facebook_icon_2.svg'
import Google from '../images/google_icon.svg'
import Back from '../images/go_back_icon.svg'

const Login = () => {
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

                    <form className="mx-auto w-fit rounded-lg border">
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                                <input name="email" type='email' className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required/>
                            </div>

                            <div>
                                <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                                <input name="password" type='password' className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" required/>
                            </div>

                            <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>

                            <div className="relative flex items-center justify-center">
                                <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                                <span className="relative bg-white px-4 text-sm text-gray-400">Log in with social</span>
                            </div>

                            <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                                <Image src={Facebook} height={24} width={24} alt='Facebook SVG'/>
                                Continue with Facebook
                            </button>

                            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                                <Image src={Google} width={24} height={24} alt='Google SVG'/>

                                Continue with Google
                            </button>

                        </div>

                        <a href="/">
                            <div className="flex items-center justify-center bg-gray-100 gap-3 p-4 transition-transform hover:bg-emerald-400">
                                <Image src={Back} width={24} height={24} alt='back' />
                                <p className="text-center text-sm">Back</p>
                            </div>
                        </a>
                        


                        <div className="flex items-center justify-center bg-gray-100 p-4">
                            <p className="text-center text-sm text-gray-500">Don&apos;t have an account? <a href="#" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login