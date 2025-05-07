import React from 'react'

const GlobalCard = ({title, description, className}) => {
  return (
    <div className={`flex flex-col items-center justify-between py-3 px-3 lg:py-6  ${className}`}>
      <h2 className='text-2xl lg:text-4xl font-bold lg:pb-2'>{title}</h2>
      <p className='text-sm pt-2 lg:text-lg text-zinc-500 text-center lg:pt-4'>{description}</p>
    </div>
  )
}

export default GlobalCard
