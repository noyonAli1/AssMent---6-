import React from 'react';

const Ratting = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow-2xl bg-[#8B2CFF] text-white w-full py-10 border border-dotted border-blue-400">

            {/* Active Users Section */}
            <div className="stat place-items-center border-r border-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="stat-value text-5xl font-bold">50K+</div>
                <div className="stat-desc text-white/80 text-lg mt-2 font-medium">Active Users</div>
            </div>

            {/* Premium Tools Section */}
            <div className="stat place-items-center border-r border-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="stat-value text-5xl font-bold">200+</div>
                <div className="stat-desc text-white/80 text-lg mt-2 font-medium">Premium Tools</div>
            </div>

            {/* Rating Section */}
            <div className="stat place-items-center transition-all duration-300 hover:-translate-y-2">
                <div className="stat-value text-5xl font-bold">4.9</div>
                <div className="stat-desc text-white/80 text-lg mt-2 font-medium">Rating</div>
            </div>

        </div>
    );
};

export default Ratting;