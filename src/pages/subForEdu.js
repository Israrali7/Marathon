// SubBranchEducation.js
import React from "react";
import SubBranchComponent from "../components/subBranches";

export default function subForEdu() {
    const subBranches = [
        { name: "University Fees", description: "Get financial support for university fee payments." },
        { name: "Child Fees Loan", description: "Affordable loan options to cover child education fees." },
    ];

    return <SubBranchComponent title="Education Loans" subBranches={subBranches} />;
}
