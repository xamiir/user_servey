import React from 'react'

const Card=(prpos)=> {
  return (
    <div id="Card" className='bg-white mx-5 px-6 py-4 rounded-md shadow-lg shadow-slate-500/10 my-3 w-full'
    >
      {prpos.children}  
    </div>
  )
}

export default Card;