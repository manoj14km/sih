import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, FileCheck2, FilePlus2, SearchCheck, TrendingUp, XCircle } from "lucide-react";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { applications, stats } from "../data/dummyData";

export default function ApplicantDashboard() {
  return <div>
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-blue-700">Applicant Portal</p><h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900">Good evening, Rahul 👋</h1><p className="mt-1 text-sm text-slate-500">Manage your weighing and measuring instrument verifications.</p></div><Link to="/applicant/new" className="btn-primary"><FilePlus2 size={18}/> New Application</Link></div>
    <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard icon={ClipboardList} label="Total Applications" value={stats.total} hint="All submitted requests"/>
      <StatCard icon={SearchCheck} label="Pending" value={stats.pending} hint="Awaiting action" iconClass="bg-amber-50 text-amber-700"/>
      <StatCard icon={FileCheck2} label="Approved" value={stats.approved} hint="Successfully verified" iconClass="bg-emerald-50 text-emerald-700"/>
      <StatCard icon={XCircle} label="Rejected" value={stats.rejected} hint="Needs attention" iconClass="bg-rose-50 text-rose-700"/>
    </div>

    <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_340px]">
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 p-5"><div><h2 className="font-extrabold">Recent Applications</h2><p className="mt-1 text-xs text-slate-500">Latest verification requests</p></div><Link to="/applicant/applications" className="text-sm font-bold text-blue-700">View all</Link></div>
        <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-5 py-3">Application</th><th className="px-5 py-3">Instrument</th><th className="px-5 py-3">Date</th><th className="px-5 py-3">Status</th></tr></thead><tbody className="divide-y divide-slate-100">{applications.slice(0,4).map(a=><tr key={a.id} className="hover:bg-slate-50"><td className="px-5 py-4 font-bold text-slate-800">{a.id}</td><td className="px-5 py-4 text-slate-600">{a.instrument}</td><td className="px-5 py-4 text-slate-500">{a.date}</td><td className="px-5 py-4"><StatusBadge status={a.status}/></td></tr>)}</tbody></table></div>
      </div>
      <div className="card p-5">
        <h2 className="font-extrabold">Quick Actions</h2>
        <div className="mt-4 space-y-3">
          <Link to="/applicant/new" className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:border-blue-200 hover:bg-blue-50"><span className="flex items-center gap-3 text-sm font-bold"><FilePlus2 size={18} className="text-blue-700"/> Apply for verification</span><ArrowRight size={16}/></Link>
          <Link to="/track" className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:border-blue-200 hover:bg-blue-50"><span className="flex items-center gap-3 text-sm font-bold"><SearchCheck size={18} className="text-blue-700"/> Track application</span><ArrowRight size={16}/></Link>
          <div className="rounded-xl bg-slate-50 p-4"><div className="flex items-center gap-2 text-sm font-bold"><TrendingUp size={18} className="text-emerald-600"/> Process overview</div><p className="mt-2 text-xs leading-5 text-slate-500">Submit → Document check → Inspection → Verification → Certificate</p></div>
        </div>
      </div>
    </div>
  </div>
}
