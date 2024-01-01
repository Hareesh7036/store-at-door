import React from 'react'
import Appstore from '../../store/appstore'

export const getproducts = async() => {
    try{
        const api_data= await fetch("https://fakestoreapi.com/products")
    const api_data1=await api_data.json();
    Appstore.dispatch({
        type:"API_DATA",
        payload:api_data1
    })
    }
    catch(e){
        console.log(e.message);
    }
    
    
  
}
