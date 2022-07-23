import React from 'react'
import sports from '../../assets/categories/sports.jpg'
export const CategoryCard = (props) => {
  return (
    <div  className=' text-transparent hover:text-purple-700  hover:border-purple-700 hover:border-4 m-3 hover:bg-gradient-to-br from-gray-700 via-gray-900 to-black p-3 rounded-md w-80 h-90 cursor-pointer h-full '>
        <img src = {props.imgSrc} alt = {'sports'} className = 'w-72 h-42' /> 
        <div className='text-gray-300 font-bold font-mono mt-2 text-3xl text-center'>
            {props.name}
        </div>
        <div className=' font-semibold text-xl m-5 '>
       {props.desc}
        </div>

    </div>
  )
}
