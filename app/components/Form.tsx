import React from 'react'
import Image from 'next/image'
import Facebook from '../images/facebook_icon.svg'
import Github from '../images/github_icon.svg'
import LinkedIn from '../images/linkedIn_icon.svg'

const Form = () => {
    return (
        <>
            <div className="backdrop-opacity-80 py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8 dark:text-gray-300 text-black">

                    <div className="mb-10 md:mb-16 flex flex-col">
                        <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">Contact Me!</h2>
                        <div className="mx-auto">
                            <div className="flex gap-1">
                                <a href="https://www.facebook.com/chowking7691/" target="_blank">
                                    <Image width={38} height={38} src={ Facebook } loading="lazy" alt="Facebook" className="rounded border p-2 text-sm text-center bg-black dark:bg-white hover:bg-gray-700 hover:text-black"/>
                                </a>
                                <a href="https://www.linkedin.com/in/mark-anthony-nazareno-372236288/" target="_blank">
                                    <Image width={38} height={38} src={ LinkedIn } loading="lazy" alt="Facebook" className="rounded border p-2 text-sm text-center bg-black dark:bg-white hover:bg-gray-700 hover:text-black"/>
                                </a>
                                <a href="https://github.com/nazarenomarkanthony060120" target="_blank">
                                    <Image width={38} height={38} src={ Github } loading="lazy" alt="Github" className="rounded border p-2 text-sm text-center bg-black dark:bg-white hover:bg-gray-700 hover:text-black"/>
                                </a>
                            </div> 
                        </div>
                    </div>

                    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="mb-2 inline-block text-sm sm:text-base">First name*</label>
                            <input name="first-name" placeholder='First Name' className="w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div>
                            <label htmlFor="last-name" className="mb-2 inline-block text-sm sm:text-base">Last name*</label>
                            <input name="last-name" placeholder='Last Name' className="w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="mb-2 inline-block text-sm sm:text-base">Email*</label>
                            <input name="email" placeholder='Email' className="w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="subject" className="mb-2 inline-block text-sm sm:text-base">Subject*</label>
                            <input name="subject" placeholder='Subject' className="w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="mb-2 inline-block text-sm sm:text-base">Message*</label>
                            <textarea name="message" placeholder='Message' className="h-64 w-full rounded border bg-gray-50 px-3 py-2 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
                        </div>

                        <div className="flex items-center justify-between sm:col-span-2">
                            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>

                            <span className="text-sm text-gray-500">*Required</span>
                        </div>

                        <p className="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form