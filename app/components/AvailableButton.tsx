"use client"
import React from 'react'
import { Link } from 'react-scroll'

const AvailableButton = () => {

    return (
        <>
            <Link to="contact" spy={true} smooth={true} duration={500} >
                <span className="rounded border px-2 py-1 text-sm text-center text-gray-500 hover:bg-cyan-400 hover:text-black">Available</span>
            </Link>
        </>
    )
}

export default AvailableButton