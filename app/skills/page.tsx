import React from 'react'
import {SKILLS} from '../datas/data'
import Image from 'next/image'

const Skills = () => {
  return (
      <div className="bg-white dark:bg-black dark:text-white" id='skills'>
        <div className="flex flex-col gap-5">
          <span className="text-center font-bold">Skills</span>
          <div className="flex ">
            <marquee direction="right" scrollamount="20" bgcolor="#afdcec">
              <div className='flex gap-5'>
                {
                  SKILLS.map((data, index) => (
                    <div key={index} className='flex gap-10'>
                      {data.frontend.map((imagePath, imageIndex) => (
                        <div key={imageIndex} className='flex items-center py-5 gap-40'>
                          <Image src={imagePath} alt={`Skill ${imageIndex + 1}`} width={100} height={100} />
                        </div>
                      ))}

                      {data.styling.map((imagePath, imageIndex) => (
                        <div key={imageIndex} className='flex items-center py-5 gap-40'>
                          <Image src={imagePath} alt={`Skill ${imageIndex + 1}`} width={100} height={100} />
                        </div>
                      ))}

                      {data.backend.map((imagePath, imageIndex) => (
                        <div key={imageIndex} className='flex items-center py-5 gap-40'>
                          <Image src={imagePath} alt={`Skill ${imageIndex + 1}`} width={100} height={100} />
                        </div>
                      ))}

                      {data.database.map((imagePath, imageIndex) => (
                        <div key={imageIndex} className='flex items-center py-5 gap-40'>
                          <Image src={imagePath} alt={`Skill ${imageIndex + 1}`} width={100} height={100} />
                        </div>
                      ))}

                      {data.versionControl.map((imagePath, imageIndex) => (
                        <div key={imageIndex} className='flex items-center py-5 gap-40'>
                          <Image src={imagePath} alt={`Skill ${imageIndex + 1}`} width={100} height={100} />
                        </div>
                      ))}
                    </div>
                  ))
                }
              </div>
            </marquee>
          </div>
        </div>
      </div>
  )
}

export default Skills