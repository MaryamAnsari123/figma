
//PAPULAR PRODUCT FOR LANDING PAGE

import { client } from "@/sanity/lib/client";
import { Eye, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Card(){
  const query = await client.fetch(
    `*[_type == "product" && "hero" in tags]{
        _id,
      name,
      price,
      quantity,
      tags,
      "size": dimensions.height,
      description,
      "imageUrl": image.asset->url,
    }`   
);
  const details = await query
  console.log(details)
  return(
<div className="justify-items-center mt-5">
  <h1 className="lg:text-4xl text-2xl md:mb-6 mb-2 underline font-bold">Papular Products</h1>
  
  <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:flex justify-center items-center 
      gap-4 md:gap-3 lg:gap-2 w-full">
     {
     details.map((data: any , index:any) => (
        <div key={index} className="flex flex-col gap-2 justify-center items-center
         w-[280px] h-[388px] lg:w-[305px] hover:shadow-lg rounded-md hover:shadow-black  m-7 md:m-2 lg:h-[462px] p-2 bg-gray-200">

<div className='flex justify-center lg:gap-40 gap-44 items-center'>
        <Heart className='hover:bg-red-500 w-[34px]  h-[34px] p-2 bg-white rounded-full'/>
        <Link href={`/Alldata/${data._id}`}>
        <Eye className='w-[34px] hover:bg-yellow-300 h-[34px] p-2 bg-white rounded-full' />
      </Link>
        </div>
        <Image 
        src={urlFor(data.imageUrl).url()}
        alt={data.name}
        width={100}
        height={100}
        className="w-[200px] h-[250px] lg:w-[250px] lg:h-[300px] mt-5 rounded-md opacity-100" />

<h4 className='mt-4 lg:text-[20px] text-blue-700 text-sm font-bold'>{data.name}</h4>
<p className='lg:text-[18px] text-xs'>Price:
   <span className="text-green-800 font-bold"> £{data.price}</span></p>
   {/* <h4 className='mt-4 lg:text-[20px] text-gray-800 text-xs font-mono'>{data.description}</h4> */}
        </div>
 ))}
    </div>
    
     <div className="justify-items-center w-full">
 <div className='mb-4 mt-12'>
  <Link href="/Allproducts">
      <button className='bg-[#F9F9F9] hover:border-2 border-gray-400 py-4 px-8 font-medium text-base'>
                View Collection
            </button>
            </Link>
      </div>
      </div>
</div>
  )
}


        // <Link href={`/all/${data._id}`}>
        // <button className="font-bold underline
        // hover:text-green-700 hover:text-lg">more details....</button>
      // </Link> */}
      // </div>
      //   </div>