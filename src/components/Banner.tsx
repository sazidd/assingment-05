import React from 'react';
import BannerStack from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Text Column */}
                <div>
                    <h2 className="text-4xl font-bold text-[#0F172A] leading-tight">
                        Build Your Ideal
                    </h2>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF5722] to-[#9333EA] bg-clip-text text-transparent mb-4 leading-tight">
                        Development Stack
                    </h2>
                    <p className="text-sm font-normal text-[#475569] leading-relaxed mb-6 max-w-md">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="flex gap-4">
                        <button className="btn bg-gradient-to-r from-[#FF5722] to-[#EC4899] text-white border-none">
                            Explore Technologies
                        </button>
                        <button className="btn bg-white border border-gray-200 text-[#374151] px-8">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="flex justify-center md:justify-end">
                    <img src={BannerStack} alt="Development Stack" className="max-w-sm w-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Banner;