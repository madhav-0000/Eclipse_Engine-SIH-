import React, { useState, useMemo } from "react";
import Table from "../components/Table";
import { STUDENTS } from "../data/mock";

export default function Students() {
  const [query, setQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "district", title: "District" },
    { key: "category", title: "Category" },
    { key: "skills", title: "Skills", render: (r) => r.skills.join(", ") },
  ];

  const rows = useMemo(() => {
    return STUDENTS.filter((s) => {
      if (filterStatus !== "All" && s.status !== filterStatus) return false;
      if (
        query &&
        !`${s.name} ${s.district} ${s.skills.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [query, filterStatus]);

  return (
    <div className="pt-4">
      <h1 className="text-2xl font-semibold mb-4">Applicants</h1>

      <div className="flex gap-4 mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, district, skills"
          className="px-4 py-2 border rounded-md w-full"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option>All</option>
          <option>Allocated</option>
          <option>Pending</option>
        </select>
      </div>

      <Table columns={columns} rows={rows} />
    </div>
  );
}
