export default function StatCard({ icon: Icon, label, value, hint, iconClass = "bg-blue-50 text-blue-700" }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
          <p className="mt-1 text-xs text-slate-500">{hint}</p>
        </div>
        <div className={`rounded-2xl p-3 ${iconClass}`}><Icon size={21} /></div>
      </div>
    </div>
  );
}
