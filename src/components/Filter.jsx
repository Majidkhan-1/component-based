import React from 'react'
import { useProductApi } from '../hooks/productHooks'

const Filter = ({filterProducts}) => {
   
  return (
    <div className='p-3 border rounded w-full flex gap-6'>

        <div className='flex gap-6 w-full'>

            <input 
            onChange={(e)=>filterProducts(e.target.value)}
            className='p-2 rounded border w-full' type="text" placeholder='search products....' />
            <button
            
             className='bg-white rounded p-2 text-black'>Search</button>
        </div>

        <div >
            <span>Select categories</span>
            <select className='p-2 rounded bg-white text-black outline-0'>
                <option value="groceries">Groceries</option>
                <option value="fragrances">Fragrances</option>
                <option value="beauty">Beauty</option>
            </select>
        </div>
      
    </div>
  )
}

export default Filter
