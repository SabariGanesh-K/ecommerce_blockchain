import React from 'react'
import Literature from '../../assets/categories/literature.jpg'
import art from '../../assets/categories/art.jpg'
import photography from '../../assets/categories/photography.jpg'
import sports from '../../assets/categories/sports.jpg'
import { CategoryCard } from './CategoryCard'
import { NavLink } from 'react-router-dom'
export const CategoriesList = () => {
  const categoryData = [{name:'Literature',imgSrc : Literature ,desc:"It is in literature that the concrete outlook of humanity receives its expression.-Alfred North Whitehead"},
  {name:'Art',imgSrc : art ,desc:"The true work of art is but a shadow of the divine perfection. - Michelangelo"},
  {name:'Sports',imgSrc : sports ,desc:"A trophy carries dust. Memories last forever.-Mary Lou Retton"},
  {name:'Photography',imgSrc : photography ,desc:"In photography there is a reality so subtle that it becomes more real than reality.- Alfred Stieglitz"}]
  return (
    <div className='flex flex-row justify-evenly flex-wrap '>
      {categoryData.map((item,key)=>(
        <div key = {key}>
          <NavLink to = {`/category/${item.name}`}>
        <CategoryCard  imgSrc = {item.imgSrc} name = {item.name} desc = {item.desc}/>
        </NavLink>
        </div> 
      ))}
     
        
    </div>
  )
}
