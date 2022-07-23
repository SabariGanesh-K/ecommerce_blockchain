import React, { useContext, useEffect, useState } from 'react'
import { useMoralisQuery,useMoralis } from "react-moralis";
import { AppContext } from '../../context/AppContext';
import { Loader2 } from '../loader/Loader2';
import { NoData } from './NoData';
import { OwnerProdPreview } from './OwnerProdPreview';
export const OwnedProdPage = () => {
    const {currentuser} = useContext(AppContext);
    const [loading,setloading] = useState( true )
    const [displayArts,setDisplayArts] = useState( <NoData/> )
    const [displaySports,setDisplaySports] = useState( <NoData/> )
    const [displayLiterature,setDisplayLiterature] = useState( <NoData/> )
    const [displayPhotography,setDisplayPhotography] = useState( <NoData/> )
    const { fetchArts } = useMoralisQuery(
        'art',
        (query)=>query.equalTo('ownerAddress',currentuser),
        [],
        { autoFetch: false }
      );
      const { fetchLiterature } = useMoralisQuery(
        'literature',
        (query)=>query.equalTo('ownerAddress',currentuser),
        [],
        { autoFetch: false }
      );
      const { fetchSports } = useMoralisQuery(
        'sports',
        (query)=>query.equalTo('ownerAddress',currentuser),
        [],
        { autoFetch: false }
      );
      const { fetchPhotography } = useMoralisQuery(
        'photography',
        (query)=>query.equalTo('ownerAddress',currentuser),
        [],
        { autoFetch: false }
      );

      
    useEffect(()=>{
        
        async function objectIdQuery(){
            fetchArts({
                onSuccess:(products)=>{
                    if (products.length){
                        let prods = JSON.parse(JSON.stringify(products))
                        setDisplayArts(prods.map((item,k)=>{
                            return(
                                <div key ={k} >
                                <OwnerProdPreview title = {item.title} imgSrc = {item.resource.url} price = {item.Price_in_eth}/>      
                                </div>
                            )
                        }))
                    }
                    
                },
                onError:(error) =>{
                    console.log("error",error)
                  }
            })

            fetchSports({
                onSuccess:(products2)=>{
                    if (products2.length){
                        let prods = JSON.parse(JSON.stringify(products2))
                        setDisplaySports(prods.map((item,k)=>{
                            return(
                                <div key ={k} >
                                <OwnerProdPreview title = {item.title} imgSrc = {item.resource.url} price = {item.Price_in_eth}/>      
                                </div>
                            )
                        }))
                    }
                    
                },
                onError:(error) =>{
                    console.log("error",error)
                  }
            })


            fetchLiterature({
                onSuccess:(products3)=>{
                    if (products3.length){
                        let prods = JSON.parse(JSON.stringify(products3))
                        setDisplayLiterature(prods.map((item,k)=>{
                            return(
                                <div key ={k} >
                                <OwnerProdPreview title = {item.title} imgSrc = {item.resource.url} price = {item.Price_in_eth}/>      
                                </div>
                            )
                        }))
                    }
                    
                },
                onError:(error) =>{
                    console.log("error",error)
                  }
            })


            fetchPhotography({
                onSuccess:(products4)=>{
                    if (products4.length){
                        let prods = JSON.parse(JSON.stringify(products4))
                        setDisplayPhotography(prods.map((item,k)=>{
                            return(
                                <div key ={k} >
                                <OwnerProdPreview title = {item.title} imgSrc = {item.resource.url} price = {item.Price_in_eth}/>      
                                </div>
                            )
                        }))
                    }
                    
                },
                onError:(error) =>{
                    console.log("error",error)
                  }
            })




        }
        objectIdQuery()
    })
  return (
      
    <div>
        {loading &&  <Loader2/> }
        {!loading && 
        
        <>
        <div className='text-black text-4xl text-center font-bold m-3'>PRODUCTS YOU OWN </div>
        <div className='m-3 border-2 border-black '>
        <div className='text-black font-bold text-3xl '>Arts</div>
{displayArts}
        </div>


        <div className='m-3 border-2 border-black '>
        <div className='text-black font-bold text-3xl '>Sports</div>
{displaySports}
        </div>


        <div className='m-3 border-2 border-black '>
        <div className='text-black font-bold text-3xl '>Literature</div>
{displayLiterature}
        </div>


        <div className='m-3 border-2 border-black '>
        <div className='text-black font-bold text-3xl '>Photography</div>
{displayPhotography}
        </div>
       
        
        
        </>
        
        
        
        
        }


    </div>
  )
}
