import React from 'react';
import Navbar from './Navbar'
import Navbartwo from "./Navbartwo"
import Footer from "./Footer"

const Stock = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10.00', stock: 20, category: 'Category 1' },
    { id: 2, name: 'Product 2', price: '$20.00', stock: 15, category: 'Category 2' },
    { id: 3, name: 'Product 3', price: '$30.00', stock: 10, category: 'Category 1' },
    { id: 4, name: 'Product 4', price: '$25.00', stock: 5, category: 'Category 3' },
    { id: 5, name: 'Product 5', price: '$18.00', stock: 12, category: 'Category 2' },
    { id: 6, name: 'Product 6', price: '$35.00', stock: 8, category: 'Category 3' },
    { id: 7, name: 'Product 7', price: '$50.00', stock: 4, category: 'Category 1' },
    { id: 8, name: 'Product 8', price: '$40.00', stock: 2, category: 'Category 2' },
  ];

  return (
    <>
    <Navbartwo/>
     <Navbar />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Inventory Stock</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-rose-600 to-pink-500 text-white">
              <th className="px-6 py-3 text-left border-b">ID</th>
              <th className="px-6 py-3 text-left border-b">Product Name</th>
              <th className="px-6 py-3 text-left border-b">Price</th>
              <th className="px-6 py-3 text-left border-b">Stock</th>
              <th className="px-6 py-3 text-left border-b">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="even:bg-gray-50 hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 border-b">{product.id}</td>
                <td className="px-6 py-4 border-b font-semibold text-gray-800">{product.name}</td>
                <td className="px-6 py-4 border-b text-gray-600">{product.price}</td>
                <td className="px-6 py-4 border-b">{product.stock}</td>
                <td className="px-6 py-4 border-b">{product.category}</td>
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

export default Stock;