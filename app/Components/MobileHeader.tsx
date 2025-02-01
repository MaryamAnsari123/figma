// NAVBAR FOR SMALL DEVICES
"use client"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"
import Link from "next/link"
import SearchBar from "./Search"
import CategoryDrop from "./CategoryDrop"

const MobileHeader = () => {
  const { cartTotalQuantity } = useCart();
    return (
        <div className="justify-items-center">
      <div className="flex justify-center gap-14 md:gap-56 items-center w-[340px] h-[69px]">

              <div>
              <SearchBar />
              </div>
            <div>
            <h1 className='text-2xl font-semibold'>
            Avion
            </h1>
            </div>

            <div className='flex justify-center items-center gap-2'>
           
            <button className="relative hover:bg-blue-400 p-2 rounded-full">
              <Link href="/ShoppingBasket">
                <ShoppingCart className='w-[24px] h-[24px]' />
              </Link>
              {cartTotalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartTotalQuantity}
                </span>
              )}
            </button>

              {/* RENDER DROPDOWN LIST FOR SMALL DEVICE  */}
              <CategoryDrop />
            </div>
      </div>

{/* HR Line */}
      <div className="bg-gray-600 h-[1px] w-[350px] md:w-[770px]">
      </div>
      </div>
    )
  }
  
  export default MobileHeader