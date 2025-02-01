// ADD TO CART

"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export default function Cart() {
  const { cartItems, removeFromCart, updateCartItemQuantity , } = useCart();
  const [cart, setCart] = useState<any[]>(cartItems);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  // Sync local state with cart context changes
  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (itemId: string, action: "increase" | "decrease") => {
    const item = cart.find((i: any) => i._id === itemId);
    if (!item) return;

    const newQuantity = action === "increase" ? item.quantity + 1 : item.quantity - 1;

    if (newQuantity > 0) {
      updateCartItemQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="justify-items-center">
    <div className="p-5 md:w-[700px]">
      <h1 className="text-3xl md:text-5xl font-bold mb-5">My Cart</h1>
      {cart.length === 0 ? (
        <div className="mt-6">
        <p className="animate-bounce font-bold text-sky-600">Oh no! Your cart is suffering from extreme loneliness. Please adopt some items Quickly &#128722; and 
          place your order now!&#129395;</p>
           <Link
           href="/Allproducts">
          <button className="animate-pulse mt-8 px-6 py-2 font-bold bg-blue-600 text-white rounded-lg
           hover:bg-gray-700 transition"
         >
           Start Shopping
           </button>
         </Link>
         </div>
      ) : (
        <div>
          {cart.map((item: any) => (
            <div key={item._id} className="flex justify-between gap-2 items-center border-b p-3">
              <div>
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-lg font-mono text-blue-400">${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item._id, "decrease")}
                  className="bg-gray-300 font-bold md:px-3 px-1 py-1 rounded"
                >
                  -
                </button>
                <span className="font-extrabold text-lg">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item._id, "increase")}
                  className="bg-gray-300 font-bold md:px-3 px-1 py-1 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-600 text-sm font-bold md:text-base text-white py-1 md:px-3 px-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 flex flex-col text-[#2A254B] justify-end items-end gap-3">
        <p className="lg:text-[20px] text-sm">
          Subtotal &nbsp; <span className="text-[24px] text-blue-600 font-mono">${subtotal.toFixed(2)}</span>
        </p>
        <p className="lg:text-[14px] text-[10px]">Taxes and shipping are calculated at checkout</p>
        <Link href="/checkout">
          <button className="bg-[#2A254B] font-bold hover:bg-blue-700 rounded-md 
          w-[130px] lg:w-[172px] h-[46px] text-white text-sm">
            Go to Checkout
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
}
