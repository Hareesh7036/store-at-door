import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import logger from 'redux-logger'
import { productsReducer } from '../reducers/productsReducer'

const Appstore = configureStore({
    reducer:{
        productsReducer
    },
    middleware:()=>{
        return [logger]
    }
})

export default Appstore;
