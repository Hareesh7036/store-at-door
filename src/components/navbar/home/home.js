import React, { useEffect } from 'react'
import './home.css'
import { connect } from 'react-redux'
import { getproducts } from '../../products_data/getproducts'

let Home = (props) => {
    useEffect(()=>{
        getproducts();
    },[])
    const {data}=props
  return (
    <div>
        <h3>Home</h3>
        
        <ul>
            {
                data?.map((val,ind)=>{
                    return <li key={`li_${ind}`}>{val.title}</li>
                })
            }
        </ul>
        <ul>
            {
                data?.map((val,ind)=>{
                    return <li key={`li_${ind}`}>{val.title}</li>
                })
            }
        </ul>
    </div>
  )
}

Home=connect((state)=>{
    const {data}=state.productsReducer
    return {
        data
    }
})(Home)

export default Home


