import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, FileUp, Save, Send, UploadCloud } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = ["Applicant Details","Instrument Details","Verification","Documents","Review"];

export default function NewApplication() {
  const [step,setStep]=useState(0);
  const [submitted,setSubmitted]=useState(false);
  const [form,setForm]=useState({});
  const navigate=useNavigate();
  const set=(k,v)=>setForm({...form,[k]:v});
  const next=()=>step<4?setStep(step+1):setSubmitted(true);
  if(submitted) return <div className="mx-auto max-w-2xl py-16"><div className="card p-8 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Check size={32}/></div><h1 className="mt-5 text-2xl font-black">Application Submitted Successfully</h1><p className="mt-2 text-sm leading-6 text-slate-500">Your application ID is <b className="text-slate-800">LM-2026-006</b>. You can use it to track the verification process.</p><div className="mt-7 flex justify-center gap-3"><button className="btn-secondary" onClick={()=>navigate("/applicant")}>Dashboard</button><button className="btn-primary" onClick={()=>navigate("/track")}>Track Application</button></div></div></div>;

  return <div className="mx-auto max-w-5xl">
    <div><p className="text-sm font-bold text-blue-700">Verification Application</p><h1 className="mt-1 text-3xl font-black">New Application</h1><p className="mt-1 text-sm text-slate-500">Complete the form to request verification of a weighing or measuring instrument.</p></div>
    <div className="card mt-7 p-4 sm:p-6">
      <div className="mb-8 overflow-x-auto"><div className="flex min-w-[650px] items-center">{steps.map((s,i)=><div key={s} className="flex flex-1 items-center">{<div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${i<step?"bg-emerald-600 text-white":i===step?"bg-blue-700 text-white":"bg-slate-100 text-slate-400"}`}>{i<step?<Check size={17}/>:i+1}</div>}<div className={`ml-2 text-xs font-bold ${i===step?"text-blue-700":"text-slate-500"}`}>{s}</div>{i<steps.length-1&&<div className={`mx-3 h-px flex-1 ${i<step?"bg-emerald-400":"bg-slate-200"}`}/>}</div>)}</div></div>

      {step===0&&<Section title="Applicant Information"><div className="grid gap-5 sm:grid-cols-2"><Field label="Applicant Name *" onChange={v=>set("name",v)} placeholder="Enter full name"/><Field label="Business / Company Name *" onChange={v=>set("company",v)} placeholder="Business name"/><Field label="Mobile Number *" onChange={v=>set("mobile",v)} placeholder="10-digit mobile"/><Field label="Email *" type="email" onChange={v=>set("email",v)} placeholder="name@example.com"/><Field label="District *" onChange={v=>set("district",v)} placeholder="District"/><Field label="Pincode *" onChange={v=>set("pincode",v)} placeholder="Pincode"/><Field label="State *" value="Madhya Pradesh" onChange={v=>set("state",v)}/><div className="sm:col-span-2"><Field label="Address *" onChange={v=>set("address",v)} placeholder="Complete address"/></div></div></Section>}

      {step===1&&<Section title="Instrument Details"><div className="grid gap-5 sm:grid-cols-2"><Select label="Instrument Category *" options={["Weighing Instrument","Measuring Instrument"]}/><Select label="Instrument Type *" options={["Electronic Weighing Machine","Retail Weighing Scale","Platform Scale","Water Meter","Fuel Dispensing Unit","Other"]}/><Field label="Manufacturer *" placeholder="Manufacturer name"/><Field label="Model Number *" placeholder="Model number"/><Field label="Serial Number *" placeholder="Serial number"/><Field label="Capacity *" placeholder="e.g. 500 kg / 100 L"/><Field label="Accuracy / Class" placeholder="e.g. Class III"/><Field label="Year of Manufacture" type="number" placeholder="YYYY"/></div></Section>}

      {step===2&&<Section title="Verification Details"><div className="grid gap-5 sm:grid-cols-2"><Select label="Purpose of Verification *" options={["Trade / Commercial Use","Renewal of Verification","New Installation","Repair / Re-verification"]}/><Field label="Location of Instrument *" placeholder="Where is the instrument installed?"/><Field label="Previous Certificate Number" placeholder="If applicable"/><Field label="Previous Verification Date" type="date"/><Field label="Requested Verification Date" type="date"/><div className="sm:col-span-2"><label className="label">Additional Remarks</label><textarea className="input min-h-28" placeholder="Any additional information..."/></div></div></Section>}

      {step===3&&<Section title="Upload Documents"><div className="grid gap-4 sm:grid-cols-2">{["Purchase Invoice","Previous Verification Certificate","Instrument Photograph","Identity / Business Document"].map(x=><label key={x} className="cursor-pointer rounded-2xl border-2 border-dashed border-slate-200 p-6 text-center transition hover:border-blue-300 hover:bg-blue-50"><UploadCloud className="mx-auto text-blue-600" size={28}/><p className="mt-3 text-sm font-bold text-slate-800">{x}</p><p className="mt-1 text-xs text-slate-500">PDF, JPG or PNG • Max 5 MB</p><input type="file" className="hidden"/></label>)}</div></Section>}

      {step===4&&<Section title="Review & Submit"><div className="space-y-4">{[["Applicant","Rahul Kumar"],["Business","ABC Traders"],["Instrument","Electronic Weighing Machine"],["Serial Number","WM123456"],["Location","Jabalpur, Madhya Pradesh"],["Documents","4 files selected"]].map(([a,b])=><div key={a} className="flex flex-col justify-between gap-1 rounded-xl bg-slate-50 px-4 py-3 sm:flex-row"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">{a}</span><span className="text-sm font-semibold text-slate-800">{b}</span></div>)}<div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-800">I confirm that the information and documents submitted are accurate and complete.</div></div></Section>}

      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5"><button className="btn-secondary" disabled={step===0} onClick={()=>setStep(step-1)}><ChevronLeft size={17}/> Previous</button><div className="flex gap-2"><button className="btn-secondary hidden sm:inline-flex"><Save size={17}/> Save Draft</button><button className="btn-primary" onClick={next}>{step===4?<><Send size={17}/> Submit Application</>:<>Continue <ChevronRight size={17}/></>}</button></div></div>
    </div>
  </div>
}
function Section({title,children}){return <div><h2 className="mb-5 text-lg font-extrabold">{title}</h2>{children}</div>}
function Field({label,placeholder,type="text",value,onChange=()=>{}}){return <div><label className="label">{label}</label><input className="input" type={type} value={value??""} onChange={e=>onChange(e.target.value)} placeholder={placeholder}/></div>}
function Select({label,options}){return <div><label className="label">{label}</label><select className="input"><option>Select an option</option>{options.map(o=><option key={o}>{o}</option>)}</select></div>}
