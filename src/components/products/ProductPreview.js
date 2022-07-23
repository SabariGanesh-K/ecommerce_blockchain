import React, { useState,useContext } from 'react'
import { useMoralisQuery,useMoralis,useMoralisObject, useNewMoralisObject } from "react-moralis";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loader from '../loader/Loader';
import { PaymentLoader } from '../loader/PaymentLoader';
export const ProductPreview = (props) => {
  const navigate = useNavigate()
    const add = props.toAddress;
    const imgSrc = props.imgSrc;
   
    const categoryName = props.category
 
    const [ownerAddressExpanded,setOwnerAddressExpanded] = useState(false)
    const {currentuser} = useContext(AppContext)
    const ownedByUser = (props.toAddress === currentuser)
    const [paying,setpaying] = useState(false)
    const [error,seterror] = useState("")
    const [productCurrent,setcurrentproduct] = useState()
    const {Moralis} = useMoralis()
    // const { save } = useNewMoralisObject(categoryName.toLowerCase());
    const { fetch } = useMoralisQuery(
      categoryName.toLowerCase(),
      (query)=>query.equalTo('objectId',props.id),
      [],
      { autoFetch: false }
    );

     function objectIdQuery(){
       
      fetch({
       onSuccess:(products) =>{
        products[0].set("ownerAddress",currentuser);
        return products[0].save()
        
       },
       onError:(error) =>{
        
         console.log("Got a error:-",error)
       }
     })
  }


    const performTransaction = async() =>{
      
      setpaying(true)
      const web3 = await Moralis.enableWeb3()
      const options = {type: "native",
       amount: Moralis.Units.ETH(props.price.toString()),
        receiver: props.toAddress}
      if(currentuser){
                try{
          const transaction = await Moralis.transfer(options);
          const result = await transaction.wait();
          const prods =await objectIdQuery()
          setpaying(false)
          props.purchaseDone(prev=>prev+1)
        navigate("/owned")
         }
         catch(err){
           seterror("There was error. Check your balance or try after some time.")
           setpaying(false)
           props.purchaseDone(prev=>prev+1)
          
        }
    }
      else{
       seterror("Login First you dumbass !!")
        setpaying(false)
        setTimeout(()=>{
          seterror("")
        },2000)
      }

    
    
    }


  return (
    <div className=' p-3 flex flex-row justify-evenly h-64  mr-3 ml-3 border-t border-gray-700  hover:border-white'>
<img src = {imgSrc} className='w-64 h-38 object-contain hover:brightness-50 cursor-pointer' alt = "resource"  />
<div  className='flex flex-col justify-center text-center ml-8'>
    <div className='text-gray-300 font-bold text-4xl tracking-wider  rounded-full p-2'>
                {props.title}
    </div>
    <div className='flex flex-row justify-end'>
    <div className='text-gray-600 m-2'>
        by
    </div>
    <div className='text-gray-600 font-semibold text-xl m-2'>
    {ownerAddressExpanded ? add : (add.slice(0,6)+'...'+add.slice(39))}
    </div>
    </div>

    <div className='flex flex-row justify-evenly mt-5'>
    { !ownedByUser&& !paying && (
      <button onClick={performTransaction} type="button" className="hover:animate-pulse text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
      <svg className="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
      BUY with Ethereum
    </button>
    )}
    {paying && <PaymentLoader/> }
    {ownedByUser &&( <div className='text-green-500 font-bold text-xl'>OWNED </div>)}
    <div className='text-2xl text-green-400 font-semibold'>{props.price} ETH</div>

    </div>
{error && <div className='text-white font-semibold text-xl bg-red-700'>{error}   </div>}

</div>
    </div>
  )
}
