import React from 'react';

const SimplePriceSection = () => {
    return (
        <div className=''>
            <div class="container mx-auto px-6 py-20">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p class="text-gray-500 text-lg">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                <div class="grid grid-cols-1  md:grid-cols-3 gap-10 items-stretch">
                    {/* Card 1 */}
                    <div class="flex flex-col justify-between bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                            <p class="text-gray-500 mb-6 text-sm">Perfect for getting started</p>
                            <div class="mb-8">
                                <span class="text-4xl font-bold text-gray-900">$0</span>
                                <span class="text-gray-500 text-lg">/Month</span>
                            </div>
                            <ul class="space-y-4 mb-10">
                                <li class="flex items-center gap-3 text-gray-600 text-sm"><span class="text-green-500">✓</span> Access to 10 free tools</li>
                                <li class="flex items-center gap-3 text-gray-600 text-sm"><span class="text-green-500">✓</span> Basic templates</li>
                                <li class="flex items-center gap-3 text-gray-600 text-sm"><span class="text-green-500">✓</span> Community support</li>
                                <li class="flex items-center gap-3 text-gray-600 text-sm"><span class="text-green-500">✓</span> 1 project per month</li>
                            </ul>
                        </div>
                        <button class=" w-full py-3 px-6 rounded-full bg-[#7C3AED] text-white font-semibold hover:opacity-90 transition-all mt-auto">
                            Get Started Free
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div class="relative flex flex-col justify-between bg-[#7C3AED] p-8 rounded-3xl text-white shadow-xl scale-105 z-10">
                        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            Most Popular
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-2">Pro</h3>
                            <p class="text-purple-100 mb-6 text-sm">Best for professionals</p>
                            <div class="mb-8">
                                <span class="text-4xl font-bold">$29</span>
                                <span class="text-purple-100 text-lg">/Month</span>
                            </div>
                            <ul class="space-y-4 mb-10">
                                <li class="flex items-center gap-3 text-sm"><span class="text-white">✓</span> Access to all premium tools</li>
                                <li class="flex items-center gap-3 text-sm"><span class="text-white">✓</span> Unlimited templates</li>
                                <li class="flex items-center gap-3 text-sm"><span class="text-white">✓</span> Priority support</li>
                                <li class="flex items-center gap-3 text-sm"><span class="text-white">✓</span> Unlimited projects</li>
                                <li class="flex items-center gap-3 text-sm"><span class="text-white">✓</span> Cloud sync</li>
                                <li class="flex items-center gap-3 text-sm"><span class="text-white">✓</span> Advanced analytics</li>
                            </ul>
                        </div>
                        <button class="w-full py-3 px-6 rounded-full bg-white text-[#7C3AED] font-bold hover:bg-gray-50 transition-all mt-auto">
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div class="flex flex-col justify-between bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                            <p class="text-gray-500 mb-6 text-sm">For teams and businesses</p>
                            <div class="mb-8">
                                <span class="text-4xl font-bold text-gray-900">$99</span>
                                <span class="text-gray-500 text-lg">/Month</span>
                            </div>
                            <ul class="space-y-4 mb-10">
                                <li class="flex items-center gap-3 text-gray-600 text-sm"><span class="text-green-500">✓</span> Everything in Pro</li>
                                <li class="flex items-center gap-3 text-gray-600 text-sm"><span class="text-green-500">✓</span> Team collaboration</li>
                                <li class="flex items-center gap-3 text-gray-600 text-sm"><span class="text-green-500">✓</span> Custom integrations</li>
                                <li class="flex items-center gap-3 text-gray-600 text-sm"><span class="text-green-500">✓</span> Dedicated support</li>
                                <li class="flex items-center gap-3 text-gray-600 text-sm"><span class="text-green-500">✓</span> SLA guarantee</li>
                            </ul>
                        </div>
                        <button class="w-full py-3 px-6 rounded-full bg-[#7C3AED] text-white font-semibold hover:opacity-90 transition-all mt-auto">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default SimplePriceSection;