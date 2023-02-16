import { useLocalStorage } from '@/Custom Hook/localStorage';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderComponent from '@/Components/Order';

const Order = () => {
  const orders = useSelector((state) => state.order.orders)
  const dispatch = useDispatch();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24 w-auto max-w-4xl mx-auto">
      <table className='w-full text-left' >
        <thead className="text-md text-gray-700 uppercase bg-blue-500/[.8]">
          <tr>
            <th className="px-6 py-5">
              Order name
            </th>
            <th className="px-6 py-5">
              Amount
            </th>
            <th className="px-6 py-5">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <OrderComponent />
        </tbody>
      </table>
    </div>
  )
}

export default Order;