import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Order = () => {
    const orders = useSelector((state) => state.order.orders)
    const dispatch = useDispatch();

  return (
    <div>{orders}</div>
  )
}

export default Order;