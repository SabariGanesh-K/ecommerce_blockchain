import React, { useContext, useEffect, useState } from 'react'
import { useMoralisQuery } from 'react-moralis'
import { AppContext } from '../../context/AppContext'
import Loader from '../loader/Loader'
import { NoData } from './NoData'
import { OwnerProdPreview } from './OwnerProdPreview'
export const OwnedArt = (props) => {
    const {currentuser} = useContext(AppContext)
    const [loading,setloading] = useState(true)
    const [display,setDisplay] = useState( "" )
    const { fetch } = useMoralisQuery(
      
        props.categ,
        (query)=>query.equalTo('ownerAddress',currentuser),
        [],
        { autoFetch: false }
      );
    
    useEffect(()=>{
        async function fetchData(){
           
            fetch({
                onSuccess:(products)=>{
                    const prods = JSON.parse(JSON.stringify(products));
                    if (products.length>0){

                        setDisplay(prods.map((item,k)=>{
                            return(
                                <div key = {k}>
                                    <OwnerProdPreview title = {item.title} imgSrc = {item.resource.url} price = {item.Price_in_eth}/>
                                </div>
                            )
                        }))
                        props.visible('visible')
                    }
                    else{
                        setDisplay(<NoData/>)
                    }
                }
            })

        }
        fetchData()
       
        setloading(false)
    },[])
  return (
    <div>

        {loading&& <Loader/> }
        {!loading && display }
    </div>
  )
}
