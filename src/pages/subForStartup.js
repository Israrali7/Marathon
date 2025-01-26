// SubBranchBusiness.js
import React from "react";
import SubBranchComponent from "../components/subBranches";

export default function subForStartup() {
    const subBranches = [
        {
            name: "Buy Stall",
            description: "Get your own stall with top-notch quality and convenience.",
            requiresDeposit: true,
        },
        {
            name: "Advance Rent for Shop",
            description: "Secure your shop space with advance rent options.",
            requiresLoan: true,
        },
        {
            name: "Shop Assets",
            description: "Browse through various shop assets available for purchase.",
            requiresAssetsDetails: true,
        },
        {
            name: "Shop Machinery",
            description: "Find reliable and efficient machinery for your shop.",
            requiresMachineryDetails: true,
        },
    ];

    return <SubBranchComponent title="Business Loans" subBranches={subBranches} />;
}
