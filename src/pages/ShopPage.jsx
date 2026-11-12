import React, { use, useEffect,useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import { getProductsDataApi } from '../api/productsApi';
import { useQuery } from '@tanstack/react-query';
import { useProductApi } from '../hooks/productHooks';
import Filter from '../components/Filter';


const ShopPage = () => {

  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const[filteredProducts,setFilteredProducts ] = useState([])

  const getProductsData = async ()=>{
    try {
      let data =await getProductsDataApi();
      setProductsData(data);
      setFilteredProducts(data);
      setIsLoading(false)
    } catch (error) {
      console.log("Error occurred:",error)
    }
  }

  useEffect(()=>{
    getProductsData()
  },[])

  let filterProducts = (searchParams) =>{
    
    let  match  =  productsData.filter((val)=>{
            return val.title.toLowerCase().includes(searchParams.toLowerCase())
        });
        console.log(match)
        console.log(searchParams)
        

        if(filteredProducts){
          setFilteredProducts(match);
        }
      }



  return (   
     <div className="min-h-screen bg-zinc-950 p-6">
      <Filter filterProducts={filterProducts} />
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

    {isLoading
      ? Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))
      :filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            
          />
        ))
    }

  </div>

</div>)
}

export default ShopPage
