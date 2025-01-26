import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useNavigate } from 'react-router-dom';


const SubBranch = () => {
    const subBranches = [
        { name: "University Fees", description: "Get financial support for university fee payments." },
        { name: "Child Fees Loan", description: "Affordable loan options to cover child education fees." },
    ];

    const [showPopup, setShowPopup] = useState(false);
    const [initialDeposit, setInitialDeposit] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanPeriod, setLoanPeriod] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [popupWidth, setPopupWidth] = useState("w-[400px]"); // Default width
    const navigate = useNavigate();

    const maxLoanPeriod = 4; // Maximum loan period (3 years)
    const minInitialDeposit = 50000; // Minimum initial deposit (50,000)

    const handleBackClick = () => {
        window.history.back(); // Go back to the previous page
    };

    const handleClickBranch = () => {
        setPopupWidth("w-[480px]"); // Increase the width of the popup when a branch is clicked
        setShowPopup(true); // Show popup on click
    };

    const handleClosePopup = () => {
        setPopupWidth("w-[400px]"); // Reset to default width when closing
        setShowPopup(false); // Close popup
    };

    const handleProceedClick = () => {
        // Check if any of the fields are empty
        if (!initialDeposit || !loanAmount || !loanPeriod) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all the fields before proceeding.',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
            return;
        }

        navigate("/form");
    };

    const handleSubmit = () => {
        const loan = parseFloat(loanAmount);
        const period = parseInt(loanPeriod);
        const deposit = parseFloat(initialDeposit);

        // Validate input values
        if (isNaN(loan) || isNaN(period) || isNaN(deposit) || loan <= 0 || period <= 0 || deposit <= 0) {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter valid values for all fields.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        // Check if initial deposit is below the minimum required
        if (deposit < minInitialDeposit) {
            Swal.fire({
                title: 'Error!',
                text: `Initial deposit must be at least PKR ${minInitialDeposit.toLocaleString()}.`,
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        // Check if loan period exceeds max allowed period
        if (period > maxLoanPeriod) {
            Swal.fire({
                title: 'Error!',
                text: `Loan period cannot exceed ${maxLoanPeriod} years.`,
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        // Loan calculation without interest
        const monthlyPaymentAmount = loan / (period * 12); // Direct calculation without interest

        setMonthlyPayment(monthlyPaymentAmount.toFixed(2)); // Set the monthly payment value
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-6">
            <button
                onClick={handleBackClick}
                className="text-gray-700 flex items-center mb-8"
            >
                <FaArrowLeft className="mr-2" />
                Back
            </button>
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Educational Loan
            </h1>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                {subBranches.map((branch, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        onClick={handleClickBranch}
                    >
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">{branch.name}</h2>
                        <p className="text-gray-600">{branch.description}</p>
                    </div>
                ))}
            </div>

            {/* Popup for loan details */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className={`bg-white p-8 rounded-xl ${popupWidth}`}>
                        <div className="absolute top-14 right-[465px] cursor-pointer text-xl" onClick={handleClosePopup}>
                            <span className="text-red-700 text-5xl">&times;</span>
                        </div>


                        <h2 className="text-2xl font-bold mb-4">Loan Details</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Initial Deposit</label>
                            <input
                                type="number"
                                value={initialDeposit}
                                onChange={(e) => setInitialDeposit(e.target.value)}
                                className="w-full p-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="Enter initial deposit"
                                min={minInitialDeposit} // Set minimum deposit to 50,000
                            />
                            <span className="text-blue-500">Minimum initial deposit: PKR {minInitialDeposit.toLocaleString()}</span>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Loan Amount</label>
                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                                className="w-full p-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="Enter loan amount"
                                min="50000" // Set minimum loan amount to 50,000
                            />
                            <span className="text-blue-500">Maximum loan: PKR 5 Lakh</span>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Loan Period (Years)</label>
                            <input
                                type="number"
                                value={loanPeriod}
                                onChange={(e) => setLoanPeriod(e.target.value)}
                                className="w-full p-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                                placeholder="Enter loan period In Year"
                            />
                            <span className="text-blue-500">Maximum loan period: 4 years</span>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 text-white p-2 rounded w-full"
                        >
                            Calculate Monthly Payment
                        </button>

                        {monthlyPayment && (
                            <div className="mt-4 text-center text-gray-700">
                                <h3 className="font-bold">Monthly Payment: PKR {monthlyPayment}</h3>
                            </div>
                        )}

                        <button
                            onClick={handleProceedClick}
                            className="mt-4 bg-green-500 text-white w-full text-center p-2 rounded"
                        >
                            Proceed
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubBranch;












  