import React from "react"
import { useEffect, useState} from "react"
import { getOrders } from "../../redux/actions"
import { useDispatch, useSelector} from "react-redux"
import CardsContainer from "./CardsContainer"





const Orders = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOrders())
    },[dispatch])

    const orders = useSelector(state => state.orders)



    

    return(

		<>

        <CardsContainer orders={orders}/>



       </>
        
    )
}

export default Orders
