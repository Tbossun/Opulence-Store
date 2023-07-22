import React from 'react'
import "./FeaturedProduct.scss"
//import { type } from '@testing-library/user-event/dist/type'
import Card from '../Card/Card'

const FeaturedProduct = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-Shirt",
            isNew:true,
            oldPrice:19,
            price:12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-Shirt",
            isNew:true,
            oldPrice:19,
            price:12
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            oldPrice:19,
            price:12
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice:19,
            price:12
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Hat",
            oldPrice:19,
            price:12
        }
    ];

  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>
            The error message you provided indicates that there is an issue 
            with the component being rendered in your React application. 
            The error message typically occurs when the component 
            being rendered is not a valid React component.
            </p>
        </div> 
        <div className='bottom'>
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>    
    </div>
  )
}

export default FeaturedProduct