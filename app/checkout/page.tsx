// GO TO CHECKOUT
"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cartItems } = useCart(); // Get cart items from context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  // Calculate subtotal
  const subtotal = cartItems.reduce((total: any, item : any) => total + item.price * item.quantity, 0);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Order Submitted:", { cartItems, ...formData });
    alert("Order placed successfully!");
  };

  return (
    <div className="justify-items-center">
    <div className="p-5 md:w-[700px]">
      <h1 className="md:text-5xl text-3xl  font-bold mb-5 animate-bounce">Checkout</h1>

      <div className="mb-5">
        <h2 className="text-xl md:text-2xl animate-pulse text-gray-700 font-semibold mb-3">Order Summary</h2>
        {cartItems.length === 0 ? (
        <p className="animate-bounce font-bold text-sky-600">Oh no! Your cart is suffering from extreme loneliness. Please adopt some items Quickly &#128722; and 
          place your order now!&#129395;</p>
        ) : (
          <div className="border p-3 rounded">
            {cartItems.map((item: any) => (
              <div key={item._id} className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-green-500">${item.price}</p>
                </div>
                <p className="text-sky-600 font-bold">Qty: {item.quantity}</p> {/* Update quantity logic if required */}
              </div>
            ))}
            <hr className="my-3" />
            <p className="text-lg">
              Subtotal: <span className=" font-bold text-[#302c4a]">${subtotal.toFixed(2)}</span>
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold mb-3">Details</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="enter your name here"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="enter your email here"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="enter your address here"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="enter your city here"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="enter your postalcode here"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#2A254B] hover:bg-green-700 text-white py-2 px-4 rounded w-full"
        >
          Place Order
        </button>
      </form>
    </div>
    </div>
  );
}
