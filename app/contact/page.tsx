import React from 'react'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white pb-6 sm:pb-8 lg:pb-20" id='contact'>
      <div className="mx-auto max-w-screen-2xl flex flex-col gap-5 px-4 md:px-8">
        <div className="mx-auto">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact