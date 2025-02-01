//NEW CERAMICS

"use client";  //  This makes it a client component

import { useWishlist } from "../context/WishlistContext";
import { client } from "@/sanity/lib/client";
import { Eye, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Join from "../Components/Join";
import Comp1 from "../Components/Comp1";
import { useEffect, useState } from "react";

export default function newCeramics(){
  const [details, setDetails] = useState<any[]>([]);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    async function fetchData() {
      const query = await client.fetch(
        `*[_type == "product" && "new ceramics" in tags]{
          _id,
          name,
          price,
          quantity,
          tags,
          "size": dimensions.height,
          description,
          "imageUrl": image.asset->url
        }`
      );
      setDetails(query);
    }
    fetchData();
  }, []);

  return (
    <div className="w-[320px] md:w-full mt-20">
      <div className="justify-items-center md:px-12">
        <h1 className="lg:text-4xl text-3xl underline animate-bounce font-bold mb-10">
          Our Ceramic Items
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
          gap-2 md:gap-3 lg:gap-2 w-[320px] lg:w-full md:w-[630px] justify-items-center">
          {details.map((data) => {
            const isInWishlist = wishlist.some((item) => item._id === data._id);

            return (
              <div key={data._id} className="flex flex-col gap-2 justify-center items-center
                hover:shadow-lg m-2 rounded-md hover:shadow-black 
                w-[305px] md:m-2 h-[462px] p-2 bg-gray-200">

                <div className="flex justify-center lg:gap-40 gap-48 items-center">
                  <button
                    onClick={() => (isInWishlist ? removeFromWishlist(data._id) : addToWishlist(data))}
                  >
                    <Heart className={`rounded-full w-[34px] h-[34px] p-2 
                      ${isInWishlist ? "bg-red-500 text-white" : "bg-white text-black"}`} />
                  </button>

                  <Link href={`/Alldata/${data._id}`}>
                    <Eye className="w-[34px] hover:bg-yellow-300 h-[34px] p-2 bg-white rounded-full" />
                  </Link>
                </div>

                <Image 
                  src={urlFor(data.imageUrl).url()}
                  alt={data.name}
                  width={100}
                  height={100}
                  className="w-[200px] h-[250px] lg:w-[250px] lg:h-[300px] mt-5 rounded-md opacity-100"
                />

                <h4 className="mt-4 lg:text-lg text-blue-700 text-xl font-bold">
                  {data.name}
                </h4>
                <p className="text-base">
                  Price: <span className="text-green-800 font-bold"> £{data.price}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Comp1 />
        </div>

        <div className="mt-10">
          <Join />
        </div>
      </div>
    </div>
  );
}
