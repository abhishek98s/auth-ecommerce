import { useLocalStorage } from '@/Custom Hook/localStorage';
import React from 'react'

const Order = () => {

    const [order, setOrder] = useLocalStorage("cart");

    if (!order) {
        return (
            <>
                <tr className="odd:bg-neutral-800">
                    <td scope="row" className="px-6 py-3 w-full font-medium text-gray-900 dark:text-white">
                        No orders are made
                    </td>
                    <td scope="row" className="px-6 py-3 w-full font-medium text-gray-900 dark:text-white">

                    </td>
                    <td scope="row" className="px-6 py-3 w-full font-medium text-gray-900 dark:text-white">

                    </td>
                </tr>
            </>
        )
    }
    return (
        <>
            {order.map((order) => (
                <tr className="odd:bg-neutral-600">
                    <th scope="row" className="px-6 py-3 w-full font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {order.title}
                    </th>
                    <td className="px-4 py-2 text-center">
                        <span>{order.amount}</span>
                    </td>
                    <td className="px-4 py-2">
                        <span>$ {order.price}</span>
                    </td>
                </tr>
            ))
            }
        </>
    )
}

export default Order