import React from 'react';

const Landing = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center px-2 lg:px-4">
            {/* Left Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Find Your Perfect <br />
                        <span className="text-black"><span className='text-blue-600'>Room</span> Near You</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                        Helping students and newcomers easily discover affordable,
                        vetted rooms in their preferred locality without the hassle.
                    </p>
                </div>

                {/* Search Bar Group */}
                <div className="flex justify-between items-center bg-white rounded-full shadow-lg p-2 max-w-xl border border-gray-100">
                    <input
                        type="text"
                        placeholder="Search by area, city, or university..."
                        className="flex-1 px-6 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400 min-w-0"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 cursor-pointer rounded-full transition-all duration-200 font-semibold shrink-0">
                        Search
                    </button>
                </div>

                {/* Action Links */}
                <div className="flex items-center space-x-6 pt-4">
                    <a href="#browse" className="text-blue-600 font-bold border-b-2 border-transparent hover:border-blue-600 transition-all">
                        Browse All Rooms
                    </a>
                    <span className="text-gray-300">|</span>
                    <a href="#list" className="text-gray-700 font-medium hover:text-blue-600 transition-all">
                        List Your Property
                    </a>
                </div>
            </div>

            {/* Right Image Section */}
            <div className="hidden lg:flex w-1/2 justify-center items-center p-8">
                <div className="relative w-full ">
                    {/* Decorative Background Blob */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                    <img
                        src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000"
                        alt="Modern cozy room"
                        className="relative rounded-3xl shadow-2xl object-cover w-full h-full transform hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;