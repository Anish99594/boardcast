import React from "react"

const rows = [
  {
    mobile: '+919876543210',
    nodeId: '294040',
    nodeType: 'Channel',
    channel: 'WhatsApp',
    category: 'Promotional',
    header: 'Helo.ai',
    template: 'res_richcard_001',
    received: '2024-12-06 13:11:05',
    sent: '2024-12-06 13:11:05',
    delivered: '2024-12-06 13:11:05',
    status: 'Read',
    code: 0,
  },
  {
    mobile: '+919876543210',
    nodeId: '294040',
    nodeType: 'Channel',
    channel: 'WhatsApp',
    category: 'Promotional',
    header: 'Helo.ai',
    template: 'res_richcard_001',
    received: '2024-12-06 13:11:05',
    sent: '2024-12-06 13:11:05',
    delivered: '2024-12-06 13:11:05',
    status: 'Read',
    code: 0,
  },
  {
    mobile: '+919876543210',
    nodeId: '294040',
    nodeType: 'Channel',
    channel: 'WhatsApp',
    category: 'Promotional',
    header: 'Helo.ai',
    template: 'res_richcard_001',
    received: '2024-12-06 13:11:05',
    sent: '2024-12-06 13:11:05',
    delivered: '2024-12-06 13:11:05',
    status: 'Delivered',
    code: 0,
  },
  {
    mobile: '+919876543210',
    nodeId: '294040',
    nodeType: 'Channel',
    channel: 'WhatsApp',
    category: 'Promotional',
    header: 'Helo.ai',
    template: 'res_richcard_001',
    received: '2024-12-06 13:11:05',
    sent: '2024-12-06 13:11:05',
    delivered: '2024-12-06 13:11:05',
    status: 'Delivered',
    code: 0,
  },
  {
    mobile: '+919876543210',
    nodeId: '294040',
    nodeType: 'Channel',
    channel: 'WhatsApp',
    category: 'Promotional',
    header: 'Helo.ai',
    template: 'res_richcard_001',
    received: '2024-12-06 13:11:05',
    sent: '2024-12-06 13:11:05',
    delivered: '2024-12-06 13:11:05',
    status: 'Sent',
    code: 0,
  },
  {
    mobile: '+919876543210',
    nodeId: '294040',
    nodeType: 'Channel',
    channel: 'WhatsApp',
    category: 'Promotional',
    header: 'Helo.ai',
    template: 'res_richcard_001',
    received: '2024-12-06 13:11:05',
    sent: '2024-12-06 13:11:05',
    delivered: '2024-12-06 13:11:05',
    status: 'Failed',
    code: 0,
  },
  {
    mobile: '+919876543210',
    nodeId: '294040',
    nodeType: 'Channel',
    channel: 'WhatsApp',
    category: 'Promotional',
    header: 'Helo.ai',
    template: 'res_richcard_001',
    received: '2024-12-06 13:11:05',
    sent: '2024-12-06 13:11:05',
    delivered: '2024-12-06 13:11:05',
    status: 'Expired',
    code: 0,
  },
  {
    mobile: '+919876543210',
    nodeId: '294040',
    nodeType: 'Channel',
    channel: 'WhatsApp',
    category: 'Promotional',
    header: 'Helo.ai',
    template: 'res_richcard_001',
    received: '2024-12-06 13:11:05',
    sent: '2024-12-06 13:11:05',
    delivered: '2024-12-06 13:11:05',
    status: 'Delivered',
    code: 0,
  },
  {
    mobile: '+919876543210',
    nodeId: '294040',
    nodeType: 'Channel',
    channel: 'WhatsApp',
    category: 'Promotional',
    header: 'Helo.ai',
    template: 'res_richcard_001',
    received: '2024-12-06 13:11:05',
    sent: '2024-12-06 13:11:05',
    delivered: '2024-12-06 13:11:05',
    status: 'Delivered',
    code: 0,
  },
]

const statusColors = {
  Read: "text-blue-600",
  Delivered: "text-slate-800",
  Sent: "text-green-600",
  Failed: "text-red-600",
  Expired: "text-red-600",
}

const dotColors = {
  Read: "bg-blue-600",
  Delivered: "bg-slate-800",
  Sent: "bg-green-600",
  Failed: "bg-red-600",
  Expired: "bg-red-600",
}

export default function DeliveryReport() {
  return (
    <div className="min-h-screen w-full bg-[#f7f8fb] py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col gap-5 text-slate-900 bg-white border border-[#e5e7e8] rounded-xl max-w-[1400px] px-5 sm:px-6 lg:px-8 py-6">
        {/* HEADER */}
        <header className="flex flex-col gap-4">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="text-[20px] font-bold text-[#0b1f52]">
            Delivery Report
          </div>

          <div className="flex items-center gap-3">
            <select className="h-10 border border-slate-200 bg-white rounded-lg px-3 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <option>All nodes</option>
              <option>Node 1</option>
              <option>Node 2</option>
            </select>

            <button className="w-10 h-10 border border-slate-200 rounded-lg bg-white flex items-center justify-center text-slate-700 text-lg shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              ⬇︎
            </button>
          </div>
        </div>

        {/* Bottom Header */}
        <div className="flex flex-wrap justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            
            {/* Search */}
            <div className="flex items-center gap-2 border border-slate-200 bg-white rounded-lg px-3 py-2 min-w-[200px] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="text-slate-500">🔍</span>
              <input
                className="outline-none text-sm w-full"
                placeholder="Search"
              />
            </div>

            {/* Status Filter */}
            <select className="h-10 border border-slate-200 bg-white rounded-lg px-3 text-sm min-w-[120px] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <option>All Status</option>
              <option>Read</option>
              <option>Delivered</option>
              <option>Sent</option>
              <option>Failed</option>
              <option>Expired</option>
            </select>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button className="h-10 border border-slate-200 rounded-lg px-3 bg-white text-sm font-medium flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <span className="text-slate-600">📅</span>
              <span className="text-[#0b1f52]">23 Dec 2024 - 23 Dec 2024</span>
            </button>

            <button className="w-10 h-10 border border-slate-200 rounded-lg bg-white flex items-center justify-center text-slate-700 text-lg shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              ↻
            </button>
          </div>
        </div>
      </header>

      {/* CARD */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden">

        {/* TABLE (desktop and up) */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-auto text-[13px] leading-5">
              <thead className="bg-slate-100">
                <tr>
                  {[
                    "Mobile No.",
                    "Node ID",
                    "Node Type",
                    "Channel",
                    "Message Category",
                    "Display Header",
                    "Template Name",
                    "Message Received",
                    "Message Sent",
                    "Message Delivered",
                    "Status",
                    "Code",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-3 py-3 font-semibold text-[#0b1f52] border-b border-slate-200 align-top"
                    >
                      <div className="whitespace-normal leading-5">{h}</div>
                      {(h.includes("Received") ||
                        h.includes("Sent") ||
                        h.includes("Delivered")) && (
                        <div className="text-[11px] text-slate-500 mt-1">
                          (Date/time)
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-blue-50 ${
                      idx % 2 === 0 ? "bg-slate-50" : "bg-white"
                    }`}
                  >
                    <td className="px-3 py-3">{row.mobile}</td>
                    <td className="px-3 py-3">{row.nodeId}</td>
                    <td className="px-3 py-3">{row.nodeType}</td>
                    <td className="px-3 py-3">{row.channel}</td>
                    <td className="px-3 py-3">{row.category}</td>
                    <td className="px-3 py-3">{row.header}</td>
                    <td className="px-3 py-3">{row.template}</td>

                    {/* Received */}
                    <td className="px-3 py-3">
                      <div>{row.received.split(" ")[0]}</div>
                      <div className="text-slate-500 text-xs">
                        {row.received.split(" ")[1]}
                      </div>
                    </td>

                    {/* Sent */}
                    <td className="px-3 py-3">
                      <div>{row.sent.split(" ")[0]}</div>
                      <div className="text-slate-500 text-xs">
                        {row.sent.split(" ")[1]}
                      </div>
                    </td>

                    {/* Delivered */}
                    <td className="px-3 py-3">
                      <div>{row.delivered.split(" ")[0]}</div>
                      <div className="text-slate-500 text-xs">
                        {row.delivered.split(" ")[1]}
                      </div>
                    </td>

                    {/* Status Chip */}
                    <td className="px-3 py-3 align-middle">
                      <span
                        className={`inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap px-2 py-1 rounded-full ${statusColors[row.status]}`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${dotColors[row.status]}`}
                        ></span>
                        {row.status}
                      </span>
                    </td>

                    {/* Code */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{row.code}</span>
                        <span className="w-5 h-5 border border-slate-400 rounded-full flex justify-center items-center text-[10px] font-bold">
                          i
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CARD LIST (mobile/tablet) */}
        <div className="grid gap-3 p-4 lg:hidden">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
            >
              <div className="flex justify-between items-start gap-3">
                <div>
                  <div className="text-sm font-semibold text-[#0b1f52]">
                    {row.mobile}
                  </div>
                  <div className="text-xs text-slate-500">Node {row.nodeId}</div>
                </div>
                <span
                  className={`inline-flex items-center gap-2 font-semibold px-2 py-1 rounded-full ${statusColors[row.status]}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${dotColors[row.status]}`}
                  ></span>
                  {row.status}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-700">
                <div>
                  <div className="font-semibold text-[#0b1f52]">Channel</div>
                  <div>{row.channel}</div>
                </div>
                <div>
                  <div className="font-semibold text-[#0b1f52]">Category</div>
                  <div>{row.category}</div>
                </div>
                <div>
                  <div className="font-semibold text-[#0b1f52]">Header</div>
                  <div>{row.header}</div>
                </div>
                <div>
                  <div className="font-semibold text-[#0b1f52]">Template</div>
                  <div>{row.template}</div>
                </div>
                <div>
                  <div className="font-semibold text-[#0b1f52]">Received</div>
                  <div className="text-slate-600">
                    {row.received.replace(" ", " | ")}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#0b1f52]">Sent</div>
                  <div className="text-slate-600">
                    {row.sent.replace(" ", " | ")}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#0b1f52]">Delivered</div>
                  <div className="text-slate-600">
                    {row.delivered.replace(" ", " | ")}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#0b1f52]">Code</div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{row.code}</span>
                    <span className="w-5 h-5 border border-slate-400 rounded-full flex justify-center items-center text-[10px] font-bold">
                      i
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex justify-end px-5 py-4 bg-white">
          <div className="flex items-center gap-4">
            <button className="text-slate-400 font-semibold">Previous</button>
            <span className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
              1
            </span>
            <button className="text-slate-400 font-semibold">Next</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
