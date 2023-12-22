import React from 'react'
import { ABOUT_US_INFO } from '../datas/data'
import Card from '../components/Card'


const AboutMe = () => {
  return (
    <>
      <div className="bg-white dark:bg-black dark:text-white pb-6 sm:pb-8 lg:pb-20" id='aboutme'>
        <div className="mx-auto max-w-screen-2xl flex flex-col gap-5 px-4 md:px-8">
          <span className="text-center font-bold">About Me</span>
          <div className="mx-auto">
            <Card body={ABOUT_US_INFO}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe