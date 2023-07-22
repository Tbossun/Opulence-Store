import React from 'react'
import "./Products.scss";

const Products = () => {
  return (
    <div className='products'>
        <div className='left'>
            <div className='filterItem'>
                <h1>Product Categories</h1>
                <div className='inputItem'>
                    <input type='checkbox' id='1' value={1}/>
                    <label htmlFor='1'>Shoes</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='1' value={2}/>
                    <label htmlFor='2'>Bags</label>
                </div>
                <div className='inputItem'>
                    <input type='checkbox' id='1' value={3}/>
                    <label htmlFor='3'>Skirts</label>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Products