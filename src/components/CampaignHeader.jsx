import React from "react";

const CampaignHeader = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "16px 20px",
        background: "#ffffff",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      {/* Left Section */}
      <div className="flex flex-wrap items-center gap-5">
        {/* Campaign Name */}
        <span className="text-[20px] font-semibold text-[#0b1f52] whitespace-nowrap">
          Campaign_Kotak_1234
        </span>

        {/* Divider */}
        <div className="hidden sm:block w-px h-9 bg-[#e5e7eb]" />

        {/* Creation Date */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[12px] text-slate-500">Creation Date</span>
          <span className="text-[14px] font-medium text-[#0b1f52]">19 Sept 2024</span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-9 bg-[#e5e7eb]" />

        {/* Execution Date */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[12px] text-slate-500">Execution Date</span>
          <span className="text-[14px] font-medium text-[#0b1f52]">22 Sep 2024</span>
        </div>
      </div>

      {/* Right Section: Status Badge */}
      <div className="flex items-center">
        <div className="flex items-center gap-2 bg-[#3B82F6] text-white px-4 py-2 rounded-full text-[14px] font-medium">
          <span className="w-2 h-2 rounded-full bg-white" />
          In Progress
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;