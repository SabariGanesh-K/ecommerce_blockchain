import React, { useEffect, useState } from 'react';
const Loader = () =>{
    const [checkNet,setchecknet] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setchecknet(true)
        },5000)
        
    },[])
    return(
       <div className = "flex justify-center flex-col items-center py-3">
          {<div className = "animate-spin rounded-full h-16 w-16 border-b-2 border-red-700"></div>}
           {checkNet && <div className='font-semibold animate-pulse text-red-700 text-2xl'>Check your Internet</div>}
       </div>
    )
}

export default Loader