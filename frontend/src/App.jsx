import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import QRCodeDisplay from "./components/QRCodeDisplay";
import ScheduleForm from "./components/ScheduleForm";

export default function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/app"
          element={
            <div className="min-h-screen bg-gray-100 p-6">
              <h1 className="text-3xl font-bold text-center mb-8">
                WhatsApp Scheduler
              </h1>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <QRCodeDisplay />
                <ScheduleForm />
              </div>
            </div>
          }
        />
      </Routes>
   
  );
}
