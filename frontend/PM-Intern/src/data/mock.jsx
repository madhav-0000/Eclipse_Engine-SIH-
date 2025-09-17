export const STATS = {
  applicants: 1250,
  internships: 320,
  allocated: 980,
  pending: 270,
};

export const STUDENTS = [
  { id: 1, name: "Asha Verma", district: "Ranchi", category: "General", skills: ["Python","ML"], status: "Allocated", internship: "AI Research" },
  { id: 2, name: "Rohit Kumar", district: "Patna", category: "SC", skills: ["SQL","Excel"], status: "Pending", internship: null },
  { id: 3, name: "Priya Singh", district: "Jharkhand", category: "OBC", skills: ["Data Analysis","Python"], status: "Allocated", internship: "Data Analyst" },
  // ...more mock rows
];

export const INTERNSHIPS = [
  { id: 1, title: "AI Research", org: "GovTech Labs", location: "New Delhi", capacity: 10, filled: 8 },
  { id: 2, title: "Data Analyst", org: "FinAnalytica", location: "Mumbai", capacity: 15, filled: 12 },
  { id: 3, title: "Policy Research", org: "State Policy Unit", location: "Ranchi", capacity: 5, filled: 3 },
];
