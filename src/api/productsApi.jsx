import { axiosInstance } from "../config/axiosInstance";

export  const getProductsDataApi =async ()=>{
    try {
        console.log("Api called successfully:")
      let res = await axiosInstance('/products')
      
      return  res.data.products;
    } catch (error) {
       console.log("Error occured :",error)
    }
  }