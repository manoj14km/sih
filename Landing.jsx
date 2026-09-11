import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileCheck2, ShieldCheck, Clock3, Scale, SearchCheck, Building2 } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-700 p-2.5 text-white"><Scale size={23}/></div>
            <div><div className="font-extrabold">Legal Metrology</div><div className="text-[11px] text-slate-500">Online Verification System</div></div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/track" className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 sm:block">Track Application</Link>
            <Link to="/login" className="btn-primary">Login <ArrowRight size={16}/></Link>
          </div>
        </div>
      </header>

      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-blue-700"><ShieldCheck size={15}/> Transparent • Secure • Digital</div>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Online Verification of Weights & Measures</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">A digital workflow for submitting applications, scheduling inspections, verifying instruments and issuing certificates.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/login" className="btn-primary px-5 py-3">Start Verification <ArrowRight size={18}/></Link>
              <Link to="/track" className="btn-secondary px-5 py-3">Track Application</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-600"/> Paperless workflow</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-600"/> Status tracking</span>
            </div>
          </div>
          <div className="relative">
            <div className="card mx-auto max-w-md overflow-hidden border-blue-100 shadow-xl">
              <div className="bg-blue-700 p-5 text-white"><p className="text-sm font-semibold text-blue-100">Application overview</p><p className="mt-1 text-2xl font-black">LM-2026-001</p></div>
              <div className="space-y-5 p-6">
                {["Application Submitted","Documents Verified","Inspection Scheduled","Physical Verification","Certificate Generated"].map((x,i)=>(
                  <div key={x} className="flex gap-3"><div className={`mt-0.5 rounded-full p-1 ${i<3 ? "bg-emerald-100 text-emerald-700":"bg-slate-100 text-slate-400"}`}><CheckCircle2 size={16}/></div><div><p className="text-sm font-bold text-slate-800">{x}</p><p className="text-xs text-slate-500">{i<3 ? "Completed":"Upcoming step"}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="text-center"><p className="text-sm font-bold text-blue-700">ONE DIGITAL WORKFLOW</p><h2 className="mt-2 text-3xl font-black">From application to certificate</h2></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [FileCheck2,"Apply Online","Submit instrument and applicant details with supporting documents."],
            [Clock3,"Schedule & Verify","Track inspection scheduling and verification progress."],
            [AwardIcon,"Get Certificate","Access the verification result and certificate digitally."]
          ].map(([Icon,title,text])=><div className="card p-6" key={title}><div className="w-fit rounded-2xl bg-blue-50 p-3 text-blue-700"><Icon size={22}/></div><h3 className="mt-5 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}
        </div>
      </section>
    </div>
  );
}
function AwardIcon(props){ return <ShieldCheck {...props}/>; }
