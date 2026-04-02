import React from "react";

const Tabs = ({setActiveTab,cart,activeTab}) => {
  return (
    <div className="tabs justify-center bg-transparent m-5 gap-2 ">
      <input
        type="radio"
        name="my_tabs_1"
        className={`tab  btn rounded-full w-40 ${activeTab === "Products" && "bg-primary text-white"}`}
        aria-label="Products"
        onClick={()=> setActiveTab("Products")}
        defaultChecked
      />
      <input
        type="radio"
        name="my_tabs_1"
        className={`tab btn rounded-full w-40 ${activeTab === "Cart" && "bg-primary text-white"}`}
        aria-label={`Cart(${cart.length})`}
        onClick={()=> setActiveTab("Cart")}
      />
    </div>
  );
};

export default Tabs;
