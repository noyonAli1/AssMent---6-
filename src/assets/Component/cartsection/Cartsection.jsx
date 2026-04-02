import React from "react";
import { toast } from "react-toastify";

const Cartsection = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const hadlePayment = () => {
    setCart([]);
    toast.success("Successfully paid !");
  };

  const handleDelete = (itemDelete) => {
    const filteredArrray = cart.filter((cd) => cd.id !== itemDelete.id);
    setCart(filteredArrray);
    toast.error("Successfully removed from cart !");
  };

  return (
    <div className="card bg-white shadow-sm border border-gray-100 rounded-xl container mx-auto">
      <div className="card-body">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Cart</h2>
        
        {cart.length === 0 ? (
         
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-gray-300 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-16 h-16"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                />
              </svg>
            </div>
            <p className="text-gray-400 font-medium">Your cart is empty</p>
          </div>
        ) : (
          
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex gap-4 justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md p-1 shadow-sm">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-ghost btn-xs text-red-500 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}

           
            <div className="border-t border-dashed pt-4 mt-6">
                <div className="flex justify-between items-center px-1 mb-4">
                    <p className="text-gray-600">Total Amount</p>
                    <p className="font-bold text-lg text-gray-900 lg:ml-[1300px]">${totalPrice}</p>
                </div>
                
                <button
                    onClick={hadlePayment}
                    className="btn btn-primary w-full bg-linear-to-r from-indigo-500 to-purple-600 border-none text-white rounded-full hover:opacity-90"
                >
                    Proceed to Checkout
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartsection;