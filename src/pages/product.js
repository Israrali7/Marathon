import React from "react";
import Navbar from "../components/navBar";
import MarriageLoanCard from "../components/Card";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 py-10 px-6">
                {/* Heading at the top */}
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Need Any Kind of Loan?
                </h1>

                {/* Loan Cards Section */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <MarriageLoanCard
                        heading="Home Construction Loans"
                        image="https://media.istockphoto.com/id/1041465228/photo/professional-engineer-architect-worker-with-protective-helmet-and-blueprints-paper-at-house.jpg?s=612x612&w=0&k=20&c=e84Qt0pHjgcj8Ncj62G_2U4wAECjwIKRfb05obFQwN0="
                        altText="Home Construction"
                        description="Build the home of your dreams with our Home Construction Loans. Get the funds you need to cover construction costs without any hassle."
                        onclick={()=>{navigate("/subForConstr")}}
                        buttonText="Start Building"
                    />
                    <MarriageLoanCard
                        heading="Wedding Loans"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnHJ8RrLzx4Oe6mLalfz-3k9ZkEBQwx3wOg&s"
                        altText="Wedding"
                        description="Celebrate your special day with our customized wedding cards, designed to match your theme perfectly."
                        onclick={()=>{navigate("/subBranch")}}
                        buttonText="Marriage Loan"
                    />
                    <MarriageLoanCard
                        heading="Business Startup Loans"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyKyeTQDkXcGsPlHZ5JwTXK74YWE1lv8LFw&s"
                        altText="Business Startup"
                        description="Turn your entrepreneurial vision into reality with our Business Startup Loans. We offer flexible financing to help launch your new venture."
                        onclick={()=>{navigate("/subForStartup")}}
                        buttonText="Launch Your Business"
                    />
                    <MarriageLoanCard
                        heading="Education Loans"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUVRGUBk5Hz-O_cXDOkH5TDwRdPqQ7sTetA&s"
                        altText="Education"
                        description="Invest in your future with our Education Loans. Whether for university or vocational training, we provide the support you need to pursue your studies."
                        onclick={()=>{navigate("/subForEdu")}}
                        buttonText="Apply for Education Loan"
                    />
                </div>
            </div>
        </>
    );
};

export default Product;
