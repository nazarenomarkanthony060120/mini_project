import React from 'react'
import Card from '../components/Card'
import { SERVICE_INFO } from '../datas/data'

const Services = () => {

    return (
        <>
            <div className="bg-white dark:bg-black dark:text-white pb-6 sm:pb-8 lg:pb-20" id='services'>
                <div className="mx-auto max-w-screen-2xl flex flex-col gap-5 px-4 md:px-8">
                    <div className="text-center font-bold">SERVICES</div>
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                        <Card body={SERVICE_INFO}></Card>
                        
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Services