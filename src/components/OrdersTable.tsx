import React from 'react';
import Navbar from './Navbar'
import Navbartwo from "./Navbartwo"
import Footer from "./Footer"
const OrdersTable = () => {
  const orders = [
    { id: 1, product: 'Product 1', price: '$10', quantity: 2, customer: 'John Doe', status: 'Pending' },
    { id: 2, product: 'Product 2', price: '$15', quantity: 1, customer: 'Jane Doe', status: 'Shipped' },
    { id: 3, product: 'Product 3', price: '$25', quantity: 4, customer: 'Mark Smith', status: 'Delivered' },
    { id: 4, product: 'Product 4', price: '$30', quantity: 1, customer: 'Emily Johnson', status: 'Cancelled' },
    { id: 5, product: 'Product 5', price: '$45', quantity: 3, customer: 'Sarah Lee', status: 'Pending' },
  ];


  return (
    <>
    <Navbartwo />
     <Navbar />
    <div className="overflow-x-auto">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 mt-5">Manage Orders</h1>

      <table className="min-w-full table-auto border-collapse rounded-lg shadow-md">
        <thead>
          <tr className="bg-gradient-to-r from-rose-600 to-pink-500 text-white">
            <th className="px-6 py-3 text-left border-b">ID</th>
            <th className="px-6 py-3 text-left border-b">Product</th>
            <th className="px-6 py-3 text-left border-b">Price</th>
            <th className="px-6 py-3 text-left border-b">Quantity</th>
            <th className="px-6 py-3 text-left border-b">Customer</th>
            <th className="px-6 py-3 text-left border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4 border-b">{order.id}</td>
              <td className="px-6 py-4 border-b font-semibold">{order.product}</td>
              <td className="px-6 py-4 border-b">{order.price}</td>
              <td className="px-6 py-4 border-b">{order.quantity}</td>
              <td className="px-6 py-4 border-b">{order.customer}</td>
              <td> {order.status}</td>
                
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
   </>
  );
};

export default OrdersTable;