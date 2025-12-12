import React from "react";

const TickIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563EB"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const cardBase = {
  background: "#fff",
  border: "1px solid #E5E7EB",
  borderRadius: "12px",
  padding: "16px 20px",
  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  minWidth: "230px"
};

const DashboardStats = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "12px",
        overflowX: "auto",
        padding: "10px 0"
      }}
    >
      {/* --------------------------- CARD 1 ---------------------------- */}
      <div style={cardBase}>
        <div style={{ marginTop: "2px" }}>
          <TickIcon />
        </div>
        <div>
          <p style={{ margin: 0, color: "#6B7280", fontSize: "14px", marginBottom: "4px" }}>
            Messages Dispatched
          </p>
          <p style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>234,567</p>
        </div>
      </div>

      {/* -------------------- BIG CARD WITH 4 ITEMS -------------------- */}
      <div
        style={{
          ...cardBase,
          minWidth: "700px", 
          flexDirection: "column"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          {/* Total Successes */}
          <div style={{ display: "flex", gap: "10px" }}>
            <TickIcon />
            <div>
              <p style={{ margin: 0, color: "#6B7280", fontSize: "14px" }}>Total Successes</p>
              <p style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>229,875</p>
            </div>
          </div>

          {/* Delivered */}
          <div style={{ display: "flex", gap: "10px" }}>
            <TickIcon />
            <div>
              <p style={{ margin: 0, color: "#6B7280", fontSize: "14px" }}>Delivered</p>
              <p style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>225,287</p>
            </div>
          </div>

          {/* Read */}
          <div style={{ display: "flex", gap: "10px" }}>
            <TickIcon />
            <div>
              <p style={{ margin: 0, color: "#6B7280", fontSize: "14px" }}>Read</p>
              <p style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>220,700</p>
            </div>
          </div>

          {/* Sent */}
          <div style={{ display: "flex", gap: "10px" }}>
            <TickIcon />
            <div>
              <p style={{ margin: 0, color: "#6B7280", fontSize: "14px" }}>Sent</p>
              <p style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>232,221</p>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------- CARD 3 ---------------------------- */}
      <div style={cardBase}>
        <div style={{ marginTop: "2px" }}>
          <TickIcon />
        </div>
        <div>
          <p style={{ margin: 0, color: "#6B7280", fontSize: "14px" }}>Open Rate</p>
          <p style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>228,567</p>
        </div>
      </div>

      {/* --------------------------- CARD 4 ---------------------------- */}
      <div style={cardBase}>
        <div style={{ marginTop: "2px" }}>
          <TickIcon />
        </div>
        <div>
          <p style={{ margin: 0, color: "#6B7280", fontSize: "14px" }}>Engagements (Rate)</p>
          <p style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>227,456 (96.8%)</p>
        </div>
      </div>

      {/* --------------------------- CARD 5 ---------------------------- */}
      <div style={cardBase}>
        <div style={{ marginTop: "2px" }}>
          <TickIcon />
        </div>
        <div>
          <p style={{ margin: 0, color: "#6B7280", fontSize: "14px" }}>Execution Days Count</p>
          <p style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>2</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;