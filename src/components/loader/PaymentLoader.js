import React,{useState,useEffect} from 'react'

export const PaymentLoader = () => {
  
    const [checkNet,setchecknet] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setchecknet(true)
        },5000)
        
    },[])
    return(
       <div className = "flex justify-center flex-col items-center py-3">
          {<div className = "animate-spin rounded-full h-16 w-16 border-b-2 border-red-700"></div>}
        { <div className='text-red-600 font-bold m-3 text-xl'>Payment in progress, Kindly wait !</div> }
       </div>
    )
  
}
