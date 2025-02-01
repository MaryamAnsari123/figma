// PRODUCT DYNAMIC DETAIL PAGE

"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "../../context/CartContext";
import Image from "next/image";

export default function Page({ params: { _id } }: { params: { _id: any } }) {
  const { addToCart } = useCart();
  const [info, setInfo] = useState<any>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = await client.fetch(
        `*[_type == "product" && _id == "${_id}"]{
          _id,
          name,
          price,
          quantity,
          "size": dimensions.height,
          "size2": dimensions.width,
          "size3": dimensions.depth,
          tags,
          description,
          "imageUrl": image.asset->url
        }[0]`
      );
      setInfo(query);
    };

    fetchData();
  }, [_id]);

  const handleAddToCart = (item: any) => {
    addToCart(item); // Add item to cart
    setMessage("Item added to cart successfully!"); // Set success message

    // Hide message after 3 seconds
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  if (!info) {
    return <div className="text-blue-600 font-mono text-2xl">Loading...</div>;
  }

  return (
    <div className='justify-items-center mt-10 mb-20'>
      <div className="flex gap-2 flex-col lg:flex-row justify-center items-center w-[320px]
       lg:w-[1440px] md:w-[700px] bg-slate-200 h-[1155px] md:h-[1020px] lg:h-[859px]">
        <Image
          src={urlFor(info.imageUrl).url()}
          alt={info.name}
          width={100}
          height={100}
          className="lg:w-[721px] lg:h-[659px] md:w-[430px] p-3 md:h-[320px] w-[230px] h-[250px] rounded-t"
        />

        <div className="flex flex-col gap-12 justify-start items-start 
        lg:ml-[33px] lg:w-[602px] h-[757px] w-[290px] md:w-[500px] lg:mt-28 mt-8 p-5">
          {/* 1st */}
          <div className="flex items-start justify-start flex-col gap-3 p-1">
            <p className="lg:text-3xl text-2xl font-bold">{info.name}</p>
            <p className="lg:text-xl text-lg">$ {info.price}</p>
          </div>

          {/* 2nd */}
          <div className="flex items-start justify-start flex-col gap-4 p-1">
            <p className="font-semibold">Description</p>
            <p className="lg:text-sm text-xs">{info.description}</p>
            <ul className="text-xs list-disc list-inside">
              <li>Premium Quality</li>
              <li>Material Guarantee</li>
              <li>Quality timeless classic</li>
            </ul>

            <p className="lg:text-xl text-base">
              <span className="text-lg font-bold">Quantity:</span> {info.quantity}
            </p>
          </div>

          {/* 3rd */}
          <div className="lg:w-[502px] lg:h-[134px] w-[250px] h-[92px] flex items-start justify-start flex-col gap-1">
            <p className="font-semibold p-1">Dimensions</p>
            <div className="p-2 flex text-center items-center gap-6">
              <div>
                <p className="text-[14px] font-medium">Height</p>
                <p className="text-[16px]">{info.size}</p>
              </div>

              <div className="h-[44px] border border-gray-400"></div>

              <div>
                <p className="text-[14px] font-medium">Width</p>
                <p className="text-[16px]">{info.size2}</p>
              </div>

              <div className="h-[44px] border border-gray-400"></div>

              <div>
                <p className="text-[14px] font-medium">Depth</p>
                <p className="text-[16px]">{info.size3}</p>
              </div>
            </div>
          </div>

          <button
            className="bg-[#2A254B] py-4 px-6 text-white h-[56px] hover:bg-blue-600 font-bold rounded-md"
            onClick={() => handleAddToCart(info)} // Add to cart action
          >
            Add to Cart
          </button>

          {message && (
            <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
