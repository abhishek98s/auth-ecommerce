import { useLocalStorage } from '@/Custom Hook/localStorage';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Order = () => {
  const orders = useSelector((state) => state.order.orders)
  const dispatch = useDispatch();

  const [order, setOrder] = useLocalStorage("cart")

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24 w-auto max-w-6xl mx-auto">
      <table className='w-full text-left' >
        <thead className="text-md text-gray-700 uppercase bg-blue-500/[.8]">
          <tr>
            <th className="px-6 py-5">
              Order name
            </th>
            <th className="px-6 py-5">
              Price
            </th>
          </tr>
        </thead>
        <tbody>

          {order.map((order) => (
            <tr className="odd:bg-blue-600/[.2]">
              <th scope="row" className="px-6 py-3 w-full font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {order.title}
              </th>
              <td className="px-4 py-2">
                 <span>$ {order.price}</span>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}

export default Order;