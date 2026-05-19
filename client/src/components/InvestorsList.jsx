import React from "react";
import InvestorsListItem from "./InvestorsListItem";

const InvestorsList = ({ investments, selectedProject }) => {
    console.log(investments);

    return (
        <div className="bg-card mt-10 border border-border rounded-lg p-6 text-card-foreground shadow-sm w-full max-w-5xl">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <h2 className=" font-bold text-lg uppercase tracking-tight">
                        Project investmments
                    </h2>

                    <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded">
                        {investments?.length || 0} invesmentments
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                {investments?.map((investment) => (
                    <InvestorsListItem investment={investment} />
                ))}
            </div>

            <div className="mt-8 pt-6 border-t  border-border flex items-center justify-between">
                <div>
                    <p className="text-sm text-muted-foreground">
                        Total Raised
                    </p>

                    <h3 className="text-3xl font-bold mt-1">
                        $
                        {selectedProject?.currentFunding?.toLocaleString() ||
                            "0"}
                    </h3>
                </div>

                <div className="text-right">
                    <p className="text-sm text-muted-foreground">Goal</p>

                    <h3 className="text-2xl font-semibold">
                        ${selectedProject?.fundingGoal?.toLocaleString() || "0"}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default InvestorsList;
