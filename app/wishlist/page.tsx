// Wishlist

"use client";
import Link from "next/link";
import { useWishlist } from "../context/WishlistContext";
import { Eye, Trash2 } from "lucide-react";
import Image from "next/image";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="bg-gray-100 p-6 flex items-center justify-center">
      <div className="md:w-[650px] lg:w-[900px] w-[320px] bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">My Wishlist &#x2764;&#xFE0F;</h1>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076432.png"
              alt="Empty Wishlist"
              className="w-32 h-32 mb-4 opacity-70"
            />
            <h2 className="text-2xl font-semibold text-gray-700">Oops! Your wishlist is empty.</h2>
            <p className="text-gray-500 mt-2">Start exploring and add your favorite items! &#x2B50;</p>
            <Link href="/Allproducts">
              <button className="mt-4 px-6 py-2 hover:bg-green-500 bg-blue-600 text-white rounded-lg font-bold shadow-md transition">
                Explore Products
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlist.map((item, index) => (
              <div
                key={index}
                className="bg-white border hover:shadow-lg hover:shadow-black rounded-lg
                 p-4 flex flex-col items-center transition-all duration-300"
              >

<div className="flex justify-center gap-36 items-center">
                {/* View Details Button */}
                <Link href={`/Alldata/${item._id}`}>
                  <Eye className="w-[34px] hover:bg-yellow-300 bg-blue-400 border-2 h-[34px] p-2 rounded-full cursor-pointer" />
                </Link>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="bg-red-500 black text-sm rounded-full hover:bg-red-400"
                >
                  <Trash2 className="w-[34px] border-2 h-[34px] rounded-full p-2  cursor-pointer"/>
                </button>
                </div>

<Image
  src={(item.imageUrl)}
  alt={item.name}
  width={100}
  height={100}
  className="w-[200px] h-[250px] lg:w-[250px] lg:h-[300px] mt-5 rounded-md opacity-100" />
                {/* Product Name */}
                <p className="text-gray-800 font-medium text-center">{item.name}</p>

                {/* Product Price */}
                <p className="text-base">
                  Price: <span className="text-green-800 font-bold"> £{item.price}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
