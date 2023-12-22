import React from 'react'
import Card from '../components/Card'
import { CAREER_INFO } from '../datas/data'

const Career = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white pb-6 sm:pb-8 lg:pb-20" id='career'>
        <div className="mx-auto max-w-screen-2xl flex flex-col gap-5 px-4 md:px-8">
          <span className="text-center font-bold">Career</span>
          <div className="mx-auto">
            <Card body={CAREER_INFO}/>
          </div>
        </div>
      </div>
  )
}

export default Career