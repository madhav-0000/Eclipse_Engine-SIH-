import React from "react";
import Table from "../components/Table";
import { INTERNSHIPS } from "../data/mock";

export default function Internships() {
  const columns = [
    { key: "id", title: "ID" },
    { key: "title", title: "Title" },
    { key: "org", title: "Organization" },
    { key: "location", title: "Location" },
    { key: "capacity", title: "Capacity" },
    { key: "filled", title: "Filled" },
    { key: "vacant", title: "Vacant", render: (r) => r.capacity - r.filled },
  ];

  return (
    <div className="pt-4">
      <h1 className="text-2xl font-semibold mb-4">Internships</h1>
      <Table columns={columns} rows={INTERNSHIPS} />
    </div>
  );
}
