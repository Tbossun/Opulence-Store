import React from 'react'
import "./Home.scss"
import Slider from '../Slider/Slider'
import FeaturedProduct from '../Components/FeaturedProducts/FeaturedProduct'
import Categories from '../Components/Categories/Categories'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProduct type="featured"/>
      <Categories/>
      <FeaturedProduct type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home