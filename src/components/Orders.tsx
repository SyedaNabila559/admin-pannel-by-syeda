import Image from 'next/image';
import React from 'react';
import team1 from '../app/assets/black-sofa.png';
import team2 from '../app/assets/multi-sofa.png';
import team3 from '../app/assets/orange-sofa.png';
import team4 from '../app/assets/black-sofa.png';
import Navbar from './Navbar';
import Navbartwo from "./Navbartwo"
import Footer from "./Footer"


const Home = () => {
  const products = [
    {
      image: team1,
      name: 'Product 1',
      price: '$10.00',
      quantity: 5,
      address: '123 Main St, City, Country',
      customerName: 'John Doe',
      contactNo: '+1234567890',
    },
    {
      image: team2,
      name: 'Product 2',
      price: '$20.00',
      quantity: 3,
      address: '456 Another St, City, Country',
      customerName: 'Jane Doe',
      contactNo: '+0987654321',
    },
    {
      image: team3,
      name: 'Product 3',
      price: '$30.00',
      quantity: 2,
      address: '789 Third St, City, Country',
      customerName: 'Mark Smith',
      contactNo: '+1122334455',
    },
    {
      image: team4,
      name: 'Product 4',
      price: '$25.00',
      quantity: 7,
      address: '101 First St, City, Country',
      customerName: 'Sara Lee',
      contactNo: '+6677889900',
    },
   
  ];

  return (
    <>
    <Navbartwo/>
     <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Product Orders</h1>
        
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
                <th className="px-6 py-3 text-left border-b">Image</th>
                <th className="px-6 py-3 text-left border-b">Product Name</th>
                <th className="px-6 py-3 text-left border-b">Price</th>
                <th className="px-6 py-3 text-left border-b">Quantity</th>
                <th className="px-6 py-3 text-left border-b">Address</th>
                <th className="px-6 py-3 text-left border-b">Customer Name</th>
                <th className="px-6 py-3 text-left border-b">Contact No</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 border-b">
                    <Image src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-full" />
                  </td>
                  <td className="px-6 py-4 border-b font-semibold text-gray-800">{product.name}</td>
                  <td className="px-6 py-4 border-b text-gray-600">{product.price}</td>
                  <td className="px-6 py-4 border-b">{product.quantity}</td>
                  <td className="px-6 py-4 border-b">{product.address}</td>
                  <td className="px-6 py-4 border-b">{product.customerName}</td>
                  <td className="px-6 py-4 border-b">{product.contactNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;