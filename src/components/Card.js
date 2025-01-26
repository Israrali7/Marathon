import React from 'react';

const MarriageLoanCard = ({ image, altText, description, buttonText, heading ,onclick }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center max-w-4xl m-5 hover:shadow-xl transition-shadow duration-300">
            <img
                className="w-48 h-48 rounded-xl object-cover"
                src={image}
                alt={altText}
            />
            <div className="m-5 text-center md:text-left">
                <h1 className="text-2xl font-bold text-gray-800 mb-3">{heading}</h1>
                <p className="text-gray-600 text-lg">{description}</p>
                <div className="mt-5">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300"
                    onClick={onclick}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MarriageLoanCard;
