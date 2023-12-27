import React from 'react'
import {SKILLS} from '../datas/data'
import Image from 'next/image'

const Skills = () => {
  return (
      <div className="bg-white dark:bg-black dark:text-white" id='skills'>
        <div className="flex flex-col gap-5">
          <span className="text-center font-bold">Skills</span>
          <div className="">
            <div className="w-full marquee-container">
              <div className='flex gap-5'>
                {
                  SKILLS.map((data, index) => (
                    <div key={index} className='flex gap-5'>
                      {data.frontend.map((imagePath, imageIndex) => (
                        <div key={imageIndex}>
                          <Image src={imagePath} alt={`Skill ${imageIndex + 1}`} width={100} height={100} />
                        </div>
                      ))}
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Skills