import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useMoralisQuery,useMoralis } from "react-moralis";
import { AppContext } from '../../context/AppContext';
import { Loader2 } from '../loader/Loader2';
import { NoData } from './NoData';
import { OwnedArt } from './OwnedArt';
import { OwnerProdPreview } from './OwnerProdPreview';
import pic from '../../assets/bg.jpg'
export const OwnedProdPage = () => {
    const [showArts,setShowArts] = useState('hidden');
    const [showLit,setShowLit] = useState('hidden');
    const [showP,setShowP] = useState('hidden');
    const [showS,setShowS] = useState('hidden');
   
  return (
      
    <div className='min-h-screen' style={{backgroundImage: `url(${pic})`}} >
   

        <br/>
        <div className=' text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600 text-5xl text-center font-bold '> PRODUCTS YOU OWN  </div>
       

        {showArts==='hidden' && showLit==='hidden' && showP==='hidden' && showS==='hidden' &&
        <div className='text-white font-bold text-center text-4xl h-screen '> YOU DON'T OWN ANY PRODUCT  </div>

      }

        <div className={showArts}>
        <div className={'text-[#4A1D96] font-bold text-4xl mb-5 ml-5 '}>ART</div>
    <OwnedArt categ = 'art' visible = {setShowArts}/>
        </div>
      
        <div className={showS} >
        <div className='text-[#4A1D96] font-bold text-4xl mb-5 ml-5 '>SPORTS</div>
    <OwnedArt categ = 'sports ' visible = {setShowS}/>
        </div>
        <div className= {showLit} >
        <div className='text-[#4A1D96] font-bold text-4xl mb-5 ml-5 '>LITERATURE</div>
    <OwnedArt categ = 'literature' visible = {setShowLit} />
        </div>
        <div className= {showP} >
        <div className='text-[#4A1D96] font-bold text-4xl mb-5 ml-5 '>PHOTOGRAPHY</div>
    <OwnedArt categ = 'photography' visible = {setShowP} />
        </div>
      
        </div>
  )
}
