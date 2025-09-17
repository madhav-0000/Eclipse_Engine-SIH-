import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-semibold mb-6 text-center text-white">
          Contact Support
        </h1>
        <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Message"
            className="w-full p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
