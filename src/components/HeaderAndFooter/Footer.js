import React from 'react'
import react from '../../assets/footerIcons/react.jpg'
import tailwind from '../../assets/footerIcons/tailwind.jpg'
import moralis from '../../assets/footerIcons/moralis.jpg'
import linkedin from '../../assets/footerIcons/linkedin.png'
import instagram from '../../assets/footerIcons/instagram.png'
import github from '../../assets/footerIcons/github.png'
import twitter from '../../assets/footerIcons/twitter.png'
import metamask from '../../assets/footerIcons/metamask.jpg'
export const Footer = () => {
  return (
    <div className='bg-black '>
<br/><br/>
<div className='flex flex-row justify-evenly bg-orange-900 ml-10 mr-10 rounded-full mb-5  '>
<a href = "https://reactjs.org" target="_blank"> <img src = {react} alt = "React" className='rounded-full hover:animate-spin'/></a>
<a href = "https://tailwindcss.com" target="_blank"><img src = {tailwind} alt = "tailwind"  className='rounded-full hover:animate-spin'/></a>
<a href = "https://moralis.io" target="_blank"><img src = {moralis} alt = "moralis" className='rounded-full hover:animate-spin'/></a>
<a href = "https://metamask.io" target="_blank"><img src = {metamask} alt = "moralis" className='rounded-full hover:animate-spin'/></a>
      </div>



      <div className='flex  flex-row justify-evenly pb-3'>
      <a href = "https://www.linkedin.com/in/sabariganeshk/" target="_blank"><img src = {linkedin} className='cursor-pointer ' alt = "linkedin"/></a>
      <a href = "https://www.instagram.com/sabariganesh.tech/" target="_blank"><img src = {instagram} className='cursor-pointer ' alt = "instagram"/></a>
 
      <div className=' text-black text-center flex flex-row justify-around text-3xl font-semibold'>

  <div className='text-white'>Made by </div>
  <a href = "https://www.sabariganesh.tech" target="_blank"><div className='text-white hover:text-gray-500 ml-3 text-3xl font-semibold'>Sabari K 😎</div></a> 
</div>
<a href = "https://github.com/SabariGanesh-K" target="_blank"><img src = {github} className='bg-white rounded-full cursor-pointer' alt = "github"/></a>
<a href = "https://twitter.com/SABARISABS1" target="_blank"><img src = {twitter}className='cursor-pointer '  alt = "twitter"/></a>
 

      </div>


  

    </div>
  )
}
