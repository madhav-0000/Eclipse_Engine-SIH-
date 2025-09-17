import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { STATS } from "../data/mock";

const ruralUrban = [
  { name: "Rural", value: 520 },
  { name: "Urban", value: 730 },
];

const COLORS = ["#2563eb", "#06b6d4"]; // blue, teal

export default function Dashboard() {
  return (
    <div className="pt-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Applicants</div>
          <div className="text-2xl font-bold text-gray-800">{STATS.applicants}</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Internships</div>
          <div className="text-2xl font-bold text-gray-800">{STATS.internships}</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Allocated</div>
          <div className="text-2xl font-bold text-gray-800">{STATS.allocated}</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500">Pending</div>
          <div className="text-2xl font-bold text-gray-800">{STATS.pending}</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Rural vs Urban</h3>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={ruralUrban} dataKey="value" label outerRadius={80}>
                  {ruralUrban.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Quick Insights</h3>
          <ul className="space-y-3 text-gray-700">
            <li>Top skill demand: Python, SQL, Data Analysis</li>
            <li>Top locations: Delhi, Mumbai, Bangalore</li>
            <li>Affirmative action: 42% from aspirational districts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
