import React from 'react'
import { Link } from 'react-router-dom';

const SearchBar = ({ onchange }) => {
    const logOut = () => {
localStorage.removeItem("authToken")
    }

    return (
        <div className='m-3'>
            <input
                type="text"
                placeholder="Search..."
                onChange={onchange} // Use the passed function here
                className="p-3 mb-4 w-72 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                className="ml-6 mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            ><Link to="/addProduct" className="hover:underline">Add A New Product</Link>
            </button>
            <button className="ml-10 mt-3 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={logOut}>Logout</button>
        </div>
    );
};

export default SearchBar;
