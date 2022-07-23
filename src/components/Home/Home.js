import React from 'react'
import { CategoriesList } from './CategoriesList'
import pic from '../../assets/bg.jpg'

export const Home = () => {





  return (
    <div style={{backgroundImage: `url(${pic})`}}>
      <div className='bg-black '>
      <div className='mb-5  font-extrabold text-4xl sm:text-5xl 
      lg:text-6xl tracking-tight text-center text-transparent  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text'>
       " Creativity is what others see and

      </div>
      <div className='m-5  font-extrabold text-4xl sm:text-5xl 
      lg:text-6xl tracking-tight text-center text-transparent  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text' >
      thinking what no one else ever thought "
      </div>
      <br/><br/>
      </div>
      <br/> <br/> <br/>
   
      
     <CategoriesList/>
<br/><br/><br/>
    </div>
  )
}
