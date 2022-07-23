import React, { useEffect, useState,useContext } from 'react'
import { ProductPreview } from './ProductPreview'
import { useParams } from 'react-router-dom'
import { useMoralisQuery,useMoralis } from "react-moralis";
import { AppContext } from '../../context/AppContext';
import  Loader2  from '../loader/Loader2';
import pic from '../../assets/bg.jpg'
import Loader from '../loader/Loader';
export const ProductsList = () => {

  const { isInitialized } = useMoralis() 
    const [productsData,setProductsData] = useState([])
    const [displayedList,setdisplayedlist] = useState( 
      <div className='h-screen'><Loader/></div>
     )
    const [purchaseDone,setpurchasedone] = useState(0)
    const {categoryName} = useParams()
    const [loading,setloading] = useState(true)
    const [error,seterror] = useState("")
const {currentUser} = useContext(AppContext)
    const { fetch } = useMoralisQuery(
      categoryName.toLowerCase(),
      (query)=>query.exists('objectId'),
      [],
      { autoFetch: false }
    );

    useEffect(()=>{
      window.scrollTo(0,0);
     async function objectIdQuery(){
       
         fetch({
          onSuccess:(products) =>{
            
            const prods = JSON.parse(JSON.stringify(products))
            setProductsData(JSON.parse(JSON.stringify(products)))
           
            setdisplayedlist(prods.map((item,k)=>{
             

              return(
                <div  key = {k}>
                
              <ProductPreview purchaseDone = {setpurchasedone} category={categoryName} id = {item.objectId} price = {item.Price_in_eth} toAddress = {item.ownerAddress} title = {item.title} imgSrc = {item.resource.url}/>
              </div>
              )
            }))
    
          },
          onError:(error) =>{
            seterror("There was a error.")
            
          }
        })
     }
   objectIdQuery()
   setloading(false)
  
    },[])

    return(
      <div style={{backgroundImage: `url(${pic})`}}>
       
     <div className='text-transparent  bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text font-extrabold text-6xl animate-pulse  text-center'>{categoryName}</div>
      {displayedList}
      </div>
    )


  
  
    
  
}
