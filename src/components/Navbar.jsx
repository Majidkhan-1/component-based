import React from 'react'
import {NavLink} from 'react-router';
import {  LogOut } from 'lucide-react';
const Navbar = () => {
  return (
    <div className='flex w-full justify-between p-4 items-center'>

       
          <h1>Sky_Mart</h1>
        

        <div className='flex gap-7 text-xl items-center'>
            <NavLink className={({isActive})=>{
              return isActive?"text-yellow-500":""
            }} end to={'/main'}>Home</NavLink>
            <NavLink className={({isActive})=>{
              return isActive?"text-yellow-500":""
            }} to={'/main/shop'}>Shop</NavLink>
            <NavLink className={({isActive})=>{
              return isActive?"text-yellow-500":""
            }} to={'/main/about'}>About</NavLink>
        </div>
        <div className='flex gap-4  items-center'>
          <h1>Hey,<strong className='text-yellow-700'>jhi</strong></h1>
          <button>Cart</button>
          <LogOut size={19}/>

        </div>
      
    </div>
  )
}

export default Navbar
