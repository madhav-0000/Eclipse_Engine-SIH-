import React from "react";

export default function Reports() {
  return (
    <div className="pt-4">
      <h1 className="text-2xl font-semibold mb-4">Reports</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 mb-4">Quick summary of allocations and participation.</p>
        <ul className="text-gray-700 space-y-2">
          <li>• Total Applicants: 1250</li>
          <li>• Allocated: 980</li>
          <li>• Pending: 270</li>
          <li>• Rural participation: 45%</li>
        </ul>
        <div className="mt-6 flex gap-3">
          <button className="px-4 py-2 bg-sky-600 text-white rounded">Export CSV</button>
          <button className="px-4 py-2 border rounded">Generate PDF</button>
        </div>
      </div>
    </div>
  );
}
