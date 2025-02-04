
"use client";
import React from "react";
import Navbar from "./Navbar";
import Navbartwo from "@/components/Navbartwo"
import Footer from "@/components/Footer"

const Dashboard = () => {
  return (
    <>
    <Navbartwo/>
    <Navbar/>
      <h1 className="text-center text-pink-700 font-bold text-2xl md:text-3xl p-5">
        Dashboard
      </h1>
      <div className="flex flex-col gap-5 items-center lg:flex-row justify-center mb-6 mt-5">
        <div className="bg-gradient-to-r from-rose-400 to-pink-600 text-white font-semibold rounded-lg px-5 py-6 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-indigo-500 hover:to-blue-300 w-full sm:w-64">
          <p className="text-lg">Total Inventory:</p>
          <span className="text-red-600 text-xl bg-white px-2 py-1 rounded-md">
            Rs: 7,2473
          </span>
        </div>
        <div className="bg-gradient-to-r from-rose-400 to-pink-600 text-white font-semibold rounded-lg px-5 py-6 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-indigo-500 hover:to-blue-300 w-full sm:w-64">
          <p className="text-lg">Total Price:</p>
          <span className="text-green-600 text-xl bg-white px-2 py-1 rounded-md">
            Rs: 8,73452
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        <div className="bg-white shadow-xl p-5 rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-rose-600">Total Sales</h2>
          <p className="text-3xl text-pink-600 font-semibold">$5000</p>
        </div>
        <div className="bg-white shadow-xl p-5 rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-rose-600">Total Orders</h2>
          <p className="text-3xl text-pink-600 font-semibold">120</p>
        </div>
        <div className="bg-white shadow-xl p-5 rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold text-rose-600">Total Customers</h2>
          <p className="text-3xl text-pink-600 font-semibold">75</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;