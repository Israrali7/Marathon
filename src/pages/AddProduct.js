import React, { useState } from "react";
import apiInstance from "../config/api/axios"; // Axios instance with base URL
import Navbar from "../components/navBar";
import Footer from "../components/Footer";
import showSwalMessage from "../config/helper/helper";


const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("authToken"); // Ensure user is logged in

        if (!token) {
            showSwalMessage("Error", "You need to log in first!", "error");
            return;
        }
        console.log(product)

        try {
            console.log(product)
            const response = await apiInstance.post(
                "/products/add-products",
                product,
            );

            if (response.data.isSuccess) {
                showSwalMessage("Success", "Product added successfully!", "success");
                setProduct({ name: "", description: "", price: "" });
            } else {
                showSwalMessage("Error", response.data.message, "error");
            }
        } catch (error) {
            console.error("Error details:", error.response || error.message);
            showSwalMessage("Error", "Failed to add product", "error");
        }        
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 py-10 px-6">
                <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Add Your Product</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Description</label>
                            <textarea
                                name="description"
                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Price</label>
                            <input
                                type="number"
                                name="price"
                                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddProduct;
