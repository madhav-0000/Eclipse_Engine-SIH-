import React from "react";
import Table from "../components/Table";
import { STUDENTS } from "../data/mock";

export default function Allocations() {
  const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Student" },
    { key: "district", title: "District" },
    { key: "internship", title: "Internship Assigned", render: (r) => r.internship ?? "—" },
    { key: "status", title: "Status" },
  ];

  // Only mapped/allocated students
  const rows = STUDENTS.map((s) => ({
    ...s,
    internship: s.internship || "Not assigned",
  }));

  return (
    <div className="pt-4">
      <h1 className="text-2xl font-semibold mb-4">Allocation Results</h1>
      <Table columns={columns} rows={rows} />
    </div>
  );
}
