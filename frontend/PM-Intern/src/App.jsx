import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Internships from "./pages/Internships";
import Allocations from "./pages/Allocations";
import Reports from "./pages/Reports";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800">
      <Navbar />
      {/* Add padding-top to prevent overlap */}
      <main className="flex-1 container mx-auto px-6 pt-20">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/allocations" element={<Allocations />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;



