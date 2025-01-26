// SubBranchStructure.js
import React from "react";
import SubBranchComponent from "../components/subBranches";

export default function subForConstr() {
    const subBranches = [
        { name: "Structure", description: "Funding for foundational and structural work, including walls, roofs, and pillars.", interestRate: 0.05 },
        { name: "Finishing", description: "Loans for interior and exterior finishing, such as painting, flooring, and carpentry.", interestRate: 0.07 },
        { name: "Loan", description: "Specialized loan options tailored for home construction projects.", interestRate: 0.1 },
    ];

    return <SubBranchComponent title="Construction Loans" subBranches={subBranches} />;
}