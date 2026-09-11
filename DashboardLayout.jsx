import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({ role = "applicant" }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar open={open} onClose={() => setOpen(false)} role={role}/>
      <div className="lg:pl-72">
        <Topbar onMenu={() => setOpen(true)} role={role}/>
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
          <Outlet key={location.pathname}/>
        </main>
      </div>
    </div>
  );
}
