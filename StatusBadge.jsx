const styles = {
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  Approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Rejected: "bg-rose-50 text-rose-700 border-rose-200",
  "Inspection Scheduled": "bg-blue-50 text-blue-700 border-blue-200",
  "In Review": "bg-violet-50 text-violet-700 border-violet-200"
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${styles[status] || "bg-slate-50 text-slate-600 border-slate-200"}`}>
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
