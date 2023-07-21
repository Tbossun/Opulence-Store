import React from 'react'
import  PersonOutlineOutlinedIcon  from '@mui/icons-material/PersonOutlineOutlined';
import { FavoriteBorderOutlined, ShoppingCartOutlined,keyboardArrowDownIcon,searchIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                    <img src='.\images\icofl.jpg'/>
                    <keyboardArrowDownIcon/>
                </div>
                <div className='item'>
                    <span>NGR</span>
                    <keyboardArrowDownIcon/>
                </div>
                <div className='item'>
                    <Link className='link' to="/products/1">Women</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/products/2">Ladies</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/products/3">Children</Link>
                </div>           
            </div>
            <div className='center'>
                <Link className='link' to="/">Opulence Store</Link>
            </div>
            <div className='right'>
                <div className='item'>
                    <Link className='link' to="/">Home</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">About</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">Contact</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">Stores</Link>
                </div>
                <div className='icons'>
                    <searchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlined/>
                    <div className='cartIcon'>
                        <ShoppingCartOutlined/>
                        <span>0</span>
                    </div>
                </div> 
            </div>
        </div>      
    </div>
  )
}
 
export default Navbar