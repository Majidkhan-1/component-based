import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productsApi";
import { useState, useEffect } from "react";

export const useProductApi=()=>{
const [filteredProducts, setFilteredProducts] = useState(null)

      let {data,isPending,error} = useQuery({
    queryKey:['products'],
    queryFn:getProductsDataApi,
    staleTime:7000,
  })

 let match;

 


  useEffect(()=>{
    setFilteredProducts(data)
  },[data,match])
  return {
    data,
    isPending,
    error,
    filterProducts,
    filteredProducts,
  }
}