import React from 'react';

const NavBer = ({cart}) => {
    return (
       <div className="bg-base-100 shadow-sm">
                <div className="navbar  px-4 lg:px-12 w-full sticky top-0 z-50 container mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a>Products</a>
                                </li>
                                <li>
                                    <a>Features</a>
                                </li>
                                <li>
                                    <a>Pricing</a>
                                </li>
                                <li>
                                    <a>Testimonials</a>
                                </li>
                                <li>
                                    <a>FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <a className="text-xl md:text-2xl lg:text-4xl font-bold text-[#8B2CFF]">
                            DigiTools
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2 text-base font-medium">
                            <li>
                                <a>Products</a>
                            </li>
                            <li>
                                <a>Features</a>
                            </li>
                            <li>
                                <a>Pricing</a>
                            </li>
                            <li>
                                <a>Testimonials</a>
                            </li>
                            <li>
                                <a>FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2 lg:gap-4">
                        <div className="flex items-center gap-1 lg:gap-2">
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        {" "}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />{" "}
                                    </svg>
                                    <span className="badge badge-sm indicator-item  text-red-600">
                                             {cart.length}
                                    </span>
                                </div>
                            </button>

                            <a className="link link-hover font-medium hidden sm:block">Login</a>
                        </div>
                        <a className="btn btn-sm lg:btn-md btn-primary text-white border-none rounded-full px-4 lg:px-6">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default NavBer;