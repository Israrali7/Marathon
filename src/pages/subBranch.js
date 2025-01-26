// SubBranchWedding.js
import React from "react";
import SubBranchComponent from "../components/subBranches";

export default function subBranch() {
    const subBranches = [
        { name: "Valima", description: "Exclusive Valima packages to make your event memorable." },
        { name: "Furniture", description: "Affordable and elegant furniture for your special day." },
        { name: "Valima Food", description: "Delicious catering options for Valima ceremonies." },
        { name: "Jahez", description: "Complete Jahez solutions with great deals." },
    ];

    return <SubBranchComponent title="Wedding Loans" subBranches={subBranches} />;
}
