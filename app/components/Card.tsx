import React from 'react'
import { Card } from '../types/types'
import Image from 'next/image'
import { Link } from 'react-scroll'
import AvailableButton from './AvailableButton'

const Card: React.FC<Card> = ({ body }) => {
    return (
        <>
            {
                body && body.map((data, index) => (
                    <div key={index} className='flex flex-col overflow-hidden rounded-lg border border-black dark:border-white'>
                        <a href="#" className="group relative block h-40 overflow-hidden bg-gray-100 md:h-56">
                            <Image src={ data.imagePic || '' } loading="lazy" alt={data.title} className="inset-0 h-full w-full transition duration-200 group-hover:scale-110" />
                        </a>
                        {
                            data.type === "about_me" || data.type === "career"
                            ? 
                                <>
                                    <div className="mt-auto flex items-center justify-between p-4 gap-20 ">
                                        <div className="flex items-center gap-2">
                                            {
                                                data.type !== "career" 
                                                
                                                ?   <>
                                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                                            <Image src={ data.picture || '' } loading="lazy" alt="Devil Hacker" className="h-full w-full object-cover object-center" />
                                                        </div>
                                                        <div>
                                                            <span className="block text-indigo-500">{data.name}</span>
                                                            <span className="block text-sm text-gray-400">{data.position} - {data.until}</span>
                                                        </div>
                                                    </>
                                                :   <>
                                                        <div>
                                                            <span className="block text-indigo-500">{data.title}</span>
                                                            <span className="block text-sm text-gray-400">{data.experience} - {data.until}</span>
                                                        </div>
                                                    </>
                                            }
                                        </div>
                                        {
                                            data.type !== "career" 
                                            ?   <div className="flex gap-1">
                                                    <a href="https://www.facebook.com/chowking7691/" target="_blank" className="group relative block overflow-hidden bg-gray-100  rounded">
                                                        <Image width={38} height={38} src={ data.facebook } loading="lazy" alt="Facebook" className="transition duration-200 group-hover:scale-125 p-2 bg-white hover:bg-gray-300 hover:text-black"/>
                                                    </a>
                                                    <a href="https://github.com/nazarenomarkanthony060120" target="_blank" className="group relative block overflow-hidden bg-gray-100  rounded">
                                                        <Image width={38} height={38} src={ data.github } loading="lazy" alt="Github" className="transition duration-200 group-hover:scale-125 p-2 bg-white hover:bg-gray-300 hover:text-black"/>
                                                    </a>
                                                </div> 
                                            : ''
                                        }
                                        
                                    </div>
                                    <div className="mt-auto flex items-center justify-between p-4 gap-20 sm:p-6">
                                        {data.short_description}
                                    </div>
                                </>

                            : data.type === "services" || data.type === "project" ?
                                <>
                                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                                        <h2 className="mb-2 text-lg font-semibold">
                                            <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{data.title}</a>
                                        </h2>
                                        <div className="flex gap-2">
                                            <p className="text-gray-500 min-w-fit">{data.cardBodyTitle1}</p>
                                            <div className=" text-gray-500">
                                                {
                                                    Array.isArray(data.progLanguage) && data.progLanguage.map((prog:any, index:any) => (
                                                        <span className='font-bold' key={index}>{prog.prog}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-gray-500 min-w-fit">{data.cardBodyTitle2}</p>
                                            <div className="text-gray-500">
                                                {
                                                    Array.isArray(data.backEnd) && data.backEnd.map((backEnd:any, index:any) => (
                                                        <span className='font-bold' key={index}>{backEnd.be}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-gray-500 min-w-fit">{data.cardBodyTitle3}</p>
                                            <div className="text-gray-500">
                                                {
                                                    Array.isArray(data.database) && data.database.map((database:any, index:any) => (
                                                        <span className='font-bold' key={index}>{database.db}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-auto flex items-center justify-between p-4 sm:p-6">
                                        <div className="flex items-center gap-2">
                                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                                <Image src={ data.picture || '' } loading="lazy" alt="Devil Hacker" className="h-full w-full object-cover object-center" />
                                            </div>
                                            <div>
                                                <span className="block text-indigo-500">{data.name}</span>
                                                <span className="block text-sm text-gray-400">{data.work}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <AvailableButton/>
                                        </div>
                                    </div>
                                </> 
                            : ''
                        }
                        
                        
                    </div>
                ))
            }
        </>
    )
}

export default Card