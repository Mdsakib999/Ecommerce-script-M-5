import React from 'react'

export default function Heading({content,subheading}) {
  return (
    <div className="w-full my-4 mx-auto">
        <h1 className="text-secondary text-center font-semibold text-4xl">{content}</h1>
        <p className="text-gray-500 text-center mt-4 text-md md:text-lg lg:text-xl text-md">{subheading}</p>
    </div>
  )
}
