"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import profile from "../app/assets/profile.png"
import profile1 from "../app/assets/profile1.jpg"
import profile2 from "../app/assets/profile2.jpg"
import shirt from "../app/assets/multi-sofa.png"
import Navbar from './Navbar'
import Navbartwo from "./Navbartwo"
import Footer from "./Footer"
const ReviewCard = () => {
  const [qaimRating, setQaimRating] = useState(5); // Initial rating is 5
  const [ayeshaRating, setAyeshaRating] = useState(5); // Initial rating is 5
  const [zainabRating, setZainabRating] = useState(5); // Initial rating is 5


  const handleRatingChange = (setter: React.Dispatch<React.SetStateAction<number>>, rating: number) => {
    setter(rating === 5 ? 1 : rating + 1); // Cycles ratings between 1 and 5
  };

  const [quantity, setQuantity] = useState(0); // dynamic quantity state
  const handleAddToCart = () => {
    setQuantity(quantity + 1); // Increase quantity when added to cart
    alert("Product added to cart!");
  };

  return (
    <>
    <Navbartwo/>
     <Navbar />
    <div className="place-items-center">
      {/* Product */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out">
        <Image className="w-full h-64 object-cover" src={shirt} alt="Product" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Sofa Set</h2>
          <p className="text-gray-600 text-sm mb-4">High quality brand .</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">$49.99</span>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">In Cart: {quantity}</p> {/* Show quantity */}
          </div>
        </div>
      </div>
      {/* Product end*/}

      {/* 1st Review */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-300 mr-4">
            <Image src={profile} alt="pic" width={80} height={60} className='rounded-full' />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Fatima</h3>
            <div className="text-yellow-500">
              {'⭐'.repeat(qaimRating)}{' '}
              {'☆'.repeat(5 - qaimRating)} {/* Dynamically display stars */}
            </div>
            <div className="mt-2">
              <button
                className="bg-yellow-400 text-white py-1 px-4 rounded"
                onClick={() => handleRatingChange(setQaimRating, qaimRating)}
              >
                Change Rating
              </button>
            </div>
          </div>
        </div>
        <p className="text-gray-700">I like your websites products threy are cost effective with great quality and colors.</p>
      </div>
      {/* 1st Review end */}

      {/* 2nd Review */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-300 mr-4">
            <Image src={profile1} alt="pic" width={80} height={60} className='rounded-full' />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Ayesha</h3>
            <div className="text-yellow-500">
              {'⭐'.repeat(ayeshaRating)}{' '}
              {'☆'.repeat(5 - ayeshaRating)} {/* Dynamically display stars */}
            </div>
            <div className="mt-2">
              <button
                className="bg-yellow-400 text-white py-1 px-4 rounded"
                onClick={() => handleRatingChange(setAyeshaRating, ayeshaRating)}
              >
                Change Rating
              </button>
            </div>
          </div>
        </div>
        <p className="text-gray-700">You have really good products. Best designing SofaSet. You have good quality products.</p>
      </div>
      {/* 2nd Review end */}

      {/* 3rd Review */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-300 mr-4">
            <Image src={profile2} alt="pic" width={80} height={60} className='rounded-full' />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Zainab Farooq</h3>
            <div className="text-yellow-500">
              {'⭐'.repeat(zainabRating)}{' '}
              {'☆'.repeat(5 - zainabRating)} {/* Dynamically display stars */}
            </div>
            <div className="mt-2">
              <button
                className="bg-yellow-400 text-white py-1 px-4 rounded"
                onClick={() => handleRatingChange(setZainabRating, zainabRating)}
              >
                Change Rating
              </button>
            </div>
          </div>
        </div>
        <p className="text-gray-700">I was finding it. It is a great designing sofaset, that I want for my bedroom. I liked its color.</p>
      </div>
      {/* 3rd Review end */}
    </div>
    <Footer/>
    </>
  );
};

export default ReviewCard;