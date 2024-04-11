// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full bg-[#FFB4C9] p-6"> {/* Changed bg-gray-800 to bg-blue-800 */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-white font-bold"> {/* Added text-white and font-bold for better visibility */}
                        My Website
                    </Link>
                    <div>
                        <Link to="/" className="text-white font-semibold"> {/* Added text-white and font-semibold for better visibility */}
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
