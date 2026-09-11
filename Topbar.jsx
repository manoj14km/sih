import { Bell, Menu, UserCircle } from "lucide-react";

export default function Topbar({ onMenu, role }) {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <button className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden" onClick={onMenu}><Menu size={22}/></button>
      <div className="hidden lg:block">
        <p className="text-sm font-bold capitalize text-slate-800">{role} portal</p>
        <p className="text-xs text-slate-500">Legal Metrology Department</p>
      </div>
      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        <button className="relative rounded-xl p-2.5 text-slate-600 hover:bg-slate-100">
          <Bell size={20}/><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"/>
        </button>
        <div className="hidden h-8 w-px bg-slate-200 sm:block"/>
        <div className="flex items-center gap-2">
          <UserCircle size={32} className="text-slate-400"/>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-slate-800">{role === "officer" ? "S. Sharma" : role === "admin" ? "Admin User" : "Rahul Kumar"}</p>
            <p className="text-xs capitalize text-slate-500">{role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
