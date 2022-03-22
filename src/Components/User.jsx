import React from 'react'
import Card from './UI/Card';
import {TrashIcon} from "@heroicons/react/solid"

 

const User = (props) => {
  return (
      
    <div  className='shadow shadow-gray-500'>
    <Card >
        <div className='relative mb-2 inline-block'>
        <div className="flex ">
    
    <span
         className="flex gap-1 text-red-500 hover:bg-red-600 hover:text-white px-2 cursor-pointer  hover:rounded-full absolute top-0 -right-96"
  
       >
       <TrashIcon className="w-5 h-5  " /> delete
       </span>
       </div> 
            
       <h1 className='text-lg font-bold tracking-wider'>{props.user.fullName} </h1>
            <span className='bg-blue-500 text-white rounded-full tracking-wider px-2 text-xs absolute top-2 -right-24'>{props.user.username}</span>
        </div>
        <div>
            <h5 className='font-semibold tracking-wider'> {props.user.email}</h5>
            
        </div >
        <div className='bg-green-500 w-10 h-10 rounded-full flex justify-center items-center mt-2'><span className='font-semibold text-white'> {props.user.age}</span></div>
     
    </Card>
</div>
  )
}

export default User;