import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
      <div className='item'>
        <h1>Categories</h1>
        <span>Women</span>
        <span>Ladies</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </div>
      <div className='item'>
        <h1>Links</h1>
        <span>Faq</span>
        <span>Pages</span>
        <span>Stores</span>
        <span>Compare</span>
        <span>Cookies</span>
      </div>
      <div className='item'>
        <h1>About Us</h1>
        <span>
          Lorem ipsum From now on, we’ll always create component files using the Angular CLI throughout the
          rest of the book.
        </span>
      </div>
      <div className='item'>
        <h1>Contact</h1>
        <span>
          Lorem ipsum From now on, we’ll always create component files using the Angular CLI throughout the
          rest of the book.
        </span>
      </div>
      </div>
      <div className='bottom'>
      <div className='left'>
        <span className='logo'>
          Opulence Store
        </span>
        <span className='copyright'>
          Copyright 2023, All Rights Reserved
        </span>
      </div>
      <div className='right'>
        <img src='./images/Payment.jpeg' alt='payment method'/>
      </div>
      </div>
    </div>
  )
}

export default Footer