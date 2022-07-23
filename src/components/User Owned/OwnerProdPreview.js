import React from 'react'

export const OwnerProdPreview = (props) => {
    const imgSrc = props.imgSrc;
  return (
    <div className=' p-3 flex flex-row justify-evenly h-64  mr-3 ml-3 border-t border-gray-700  hover:border-white'>
    <img src = {imgSrc} className='w-64 h-38 object-contain hover:brightness-50 cursor-pointer' alt = "resource"/>
    <div  className='flex flex-col justify-center text-center ml-8'>
        <div className='text-gray-300 font-bold text-4xl tracking-wider  rounded-full p-2'>
                    {props.title}
        </div>
        <div className='text-green-400 font-semibold p-3 m-3 text-xl'>
            {props.price} Eth
            </div> 
      </div>
        </div>
  )
}
