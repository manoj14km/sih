import { NavLink } from "react-router-dom";
import { LayoutDashboard, FilePlus2, ClipboardList, SearchCheck, CalendarDays, Award, Users, BarChart3, X, Scale } from "lucide-react";

const applicantLinks = [
  ["Dashboard", "/applicant", LayoutDashboard],
  ["New Application", "/applicant/new", FilePlus2],
  ["My Applications", "/applicant/applications", ClipboardList],
  ["Track Application", "/track", SearchCheck],
  ["Certificate", "/applicant/certificate", Award],
];

const officerLinks = [
  ["Officer Dashboard", "/officer", LayoutDashboard],
  ["Applications", "/officer/applications", ClipboardList],
  ["Inspections", "/officer/inspections", CalendarDays],
  ["Verification", "/officer/verification", SearchCheck],
];

const adminLinks = [
  ["Admin Dashboard", "/admin", LayoutDashboard],
  ["Users", "/admin/users", Users],
  ["Reports", "/admin/reports", BarChart3],
];

export default function Sidebar({ open, onClose, role = "applicant" }) {
  const links = role === "officer" ? officerLinks : role === "admin" ? adminLinks : applicantLinks;

  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-slate-900/30 lg:hidden" onClick={onClose} />}
      <aside className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-5">
          <NavLink to="/" className="flex items-center gap-3" onClick={onClose}>
            <div className="rounded-xl bg-blue-700 p-2 text-white"><Scale size={22}/></div>
            <div>
              <div className="font-extrabold leading-tight text-slate-900">Legal Metrology</div>
              <div className="text-[11px] font-medium text-slate-500">Online Verification System</div>
            </div>
          </NavLink>
          <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" onClick={onClose}><X size={20}/></button>
        </div>

        <div className="px-4 pt-6">
          <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">{role} portal</p>
          <nav className="space-y-1">
            {links.map(([label, to, Icon]) => (
              <NavLink key={to} to={to} onClick={onClose} className={({isActive}) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`
              }>
                <Icon size={18}/>{label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-slate-100 p-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-bold text-slate-700">Need help?</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">Contact your Legal Metrology office for application support.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
