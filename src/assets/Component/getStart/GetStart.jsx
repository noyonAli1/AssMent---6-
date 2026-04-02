import React from 'react';

const GetStart = () => {
    return (
       <div class="py-16 px-4 bg-gray-50">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    Get Started In 3 Steps
                </h2>
                <p class="text-gray-500 max-w-lg mx-auto">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-15 items-stretch container mx-auto">

                {/* Card 1 */}
                <div class="card h-full bg-base-100 shadow-sm border border-gray-100 p-8 relative flex flex-col items-center text-center">

                    <div class="absolute top-4 right-4">
                        <span class="badge badge-primary bg-indigo-600  border-none font-bold ">01</span>
                    </div>

                    <div class="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                        <img src="https://i.ibb.co.com/Kcq6bfgR/Create-Account.png" alt="" />
                    </div>

                    <div class="flex-jrow">
                        <h3 class="text-xl font-bold mb-3">Create Account</h3>
                        <p class="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                </div>
                {/* Card 2 */}
                <div class="card h-full bg-base-100 shadow-sm border border-gray-100 p-8 relative flex flex-col items-center text-center">
                    <div class="absolute top-4 right-4">
                        <span class="badge badge-primary bg-indigo-600 border-none font-bold p-3">02</span>
                    </div>
                    <div class="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                        <img src="https://i.ibb.co.com/gLV8DWWs/Choose-Products.png" alt="" />
                    </div>
                    <div class="flex-row">
                        <h3 class="text-xl font-bold mb-3">Choose Products</h3>
                        <p class="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                {/* Card 3 */}

                <div class="card h-full bg-base-100 shadow-sm border border-gray-100 p-8 relative flex flex-col items-center text-center">
                    <div class="absolute top-4 right-4">
                        <span class="badge badge-primary bg-indigo-600 border-none font-bold p-3">03</span>
                    </div>
                    <div class="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                        <img src="https://i.ibb.co.com/Qv8kLJJt/Start-Creating.png" alt="" />
                    </div>
                    <div class="flex-row">
                        <h3 class="text-xl font-bold mb-3">Start Creating</h3>
                        <p class="text-gray-500 text-sm">Download and start using your premium tools immediately.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default GetStart;