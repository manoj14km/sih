import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Scale, UserRound } from "lucide-react";

export default function Login() {
  const [role, setRole] = useState("applicant");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const submit = e => { e.preventDefault(); navigate(role === "officer" ? "/officer" : role === "admin" ? "/admin" : "/applicant"); };

  return <div className="min-h-screen bg-slate-50">
    <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center p-5">
      <div className="grid w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
        <div className="hidden bg-blue-700 p-12 text-white lg:block">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-100 hover:text-white"><ArrowLeft size={16}/> Back to website</Link>
          <div className="mt-20"><div className="mb-6 inline-flex rounded-2xl bg-white/10 p-4"><Scale size={34}/></div><h1 className="text-4xl font-black">Legal Metrology<br/>Verification Portal</h1><p className="mt-5 max-w-md leading-7 text-blue-100">Submit, monitor and manage verification requests through one transparent digital workflow.</p></div>
        </div>
        <div className="p-6 sm:p-10 lg:p-12">
          <Link to="/" className="mb-10 inline-flex items-center gap-2 font-extrabold text-slate-900 lg:hidden"><Scale size={21} className="text-blue-700"/> Legal Metrology</Link>
          <h2 className="text-3xl font-black text-slate-900">Welcome back</h2><p className="mt-2 text-sm text-slate-500">Sign in to continue to the portal.</p>
          <div className="mt-7 grid grid-cols-3 rounded-xl bg-slate-100 p-1">
            {[["applicant","Applicant"],["officer","LMO Officer"],["admin","Admin"]].map(([v,l])=><button type="button" key={v} onClick={()=>setRole(v)} className={`rounded-lg px-2 py-2 text-xs font-bold ${role===v?"bg-white text-blue-700 shadow-sm":"text-slate-500"}`}>{l}</button>)}
          </div>
          <form onSubmit={submit} className="mt-7 space-y-5">
            <div><label className="label">Email / Mobile Number</label><div className="relative"><UserRound className="absolute left-3.5 top-3 text-slate-400" size={18}/><input className="input pl-11" placeholder="Enter email or mobile" required/></div></div>
            <div><label className="label">Password</label><div className="relative"><LockKeyhole className="absolute left-3.5 top-3 text-slate-400" size={18}/><input className="input pl-11 pr-11" type={show?"text":"password"} placeholder="Enter password" required/><button type="button" onClick={()=>setShow(!show)} className="absolute right-3 top-2.5 p-1 text-slate-400">{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></div>
            <button className="btn-primary w-full py-3">Sign In</button>
          </form>
          <p className="mt-6 text-center text-xs text-slate-500">Demo mode: login redirects according to the selected role.</p>
        </div>
      </div>
    </div>
  </div>
}
