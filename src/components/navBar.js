import React from "react";
import {  useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className="bg-blue-500 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                Saylani Microfinance
                </h1>
                {/* <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            className="hover:underline"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:underline"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="hover:underline"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            className="hover:underline"
                        >
                            Contact
                        </Link>
                    </li>
                </ul> */}
                <div>
                    <button
                        type="primary"
                        className="bg-white text-blue-500 hover:bg-gray-200 rounded-md w-24 h-9 ml-3"
                        onClick={() => { navigate("/login") }}
                    >

                        LogIn
                    </button>
                    {/* <button
                        type="primary"
                        className="bg-white text-blue-500 hover:bg-gray-200 rounded-md w-24 h-9 ml-3"
                        onClick={() => { navigate("/signUp") }}
                    >
                        SignUp
                    </button> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
