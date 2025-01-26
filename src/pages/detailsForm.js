import React, { useState } from "react";
import apiInstance from "../config/api/axios";

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cnic: "",
    });

    const [loading, setLoading] = useState(false); // For loading state
    const [emailSent, setEmailSent] = useState(false); // To track email status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        // Save form data to localStorage
        localStorage.setItem("userFormData", JSON.stringify(formData));

        try {
            setLoading(true); // Start loading when submitting the form
            // Send POST request to backend to register user and send verification email
            const response = await apiInstance.post("/register", formData); // Correct API endpoint

            // Handle success
            setEmailSent(true); // Mark email as sent
            alert(response.data.message);  // Assuming the backend sends the message as part of response
        } catch (error) {
            // Handle error
            console.error("Error:", error);
            alert("Error sending verification email.");
        } finally {
            setLoading(false); // End loading once the request is finished
        }

        // Alert message with the form data
        alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nCNIC: ${formData.cnic}`);
    };

    const resendEmail = async () => {
        try {
            // Send POST request to resend verification email
            const response = await apiInstance.post("/resend-email", { email: formData.email });
            alert(response.data.message);  // Assuming the backend sends a message on successful resend
        } catch (error) {
            console.error("Error:", error);
            alert("Error resending verification email.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
            >
                <h1 className="text-2xl font-bold text-center mb-6">User Form</h1>

                {/* Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                {/* CNIC Input */}
                <div className="mb-6">
                    <label htmlFor="cnic" className="block text-gray-700 font-medium mb-1">
                        CNIC
                    </label>
                    <input
                        type="text"
                        id="cnic"
                        name="cnic"
                        value={formData.cnic}
                        minLength={13}
                        maxLength={13}
                        onChange={handleChange}
                        placeholder="Enter your CNIC"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>

                {/* Resend Email Button */}
                {emailSent && (
                    <button
                        type="button"
                        onClick={resendEmail}
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 mt-4"
                    >
                        Resend Verification Email
                    </button>
                )}
            </form>
        </div>
    );
};

export default UserForm;
 