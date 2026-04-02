import React from 'react';

const WorkFlow = () => {
    return (
       <div className="bg-linear-to-r from-[#6366f1] to-[#8821e9] py-20 px-4 text-white text-center">
            <div className="container  mx-auto">

                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Ready To Transform Your Workflow?
                </h2>


                <p className="mb-10 text-gray-100 max-w-2xl mx-auto">
                    Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" />
                    Start your free trial today.
                </p>


                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <button className="btn bg-white text-purple-600 hover:bg-gray-100 border-none rounded-full px-8 capitalize text-lg">
                        Explore Products
                    </button>
                    <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-full px-8 capitalize text-lg">
                        View Pricing
                    </button>
                </div>


                <p className="text-sm opacity-90 flex flex-wrap justify-center gap-2">
                    <span>14-day free trial</span> •
                    <span>No credit card required</span> •
                    <span>Cancel anytime</span>
                </p>
            </div>
        </div>

    );
};

export default WorkFlow;