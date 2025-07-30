import React, { useState } from "react";

export default function ScheduleForm() {
  const [form, setForm] = useState({
    phone: "",
    msg: "",
    date: "",
    time: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("http://localhost:3000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", msg: data.message });
        setForm({ phone: "", msg: "", date: "", time: "" });
      } else {
        setStatus({ type: "error", msg: data.message });
      }
    } catch (err) {
      console.error("Send failed:", err);
      setStatus({ type: "error", msg: "Request failed" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold mb-2">Schedule Message</h2>

      <input
        name="phone"
        type="text"
        placeholder="Phone (e.g. 5511999999999)"
        className="w-full p-2 border rounded-md"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <textarea
        name="msg"
        placeholder="Your message"
        className="w-full p-2 border rounded-md"
        rows={3}
        value={form.msg}
        onChange={handleChange}
        required
      />

      <input
        name="date"
        type="date"
        className="w-full p-2 border rounded-md"
        value={form.date}
        onChange={handleChange}
        required
      />

      <input
        name="time"
        type="time"
        className="w-full p-2 border rounded-md"
        value={form.time}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Schedule
      </button>

      {status && (
        <p
          className={`text-sm ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.msg}
        </p>
      )}
    </form>
  );
}
