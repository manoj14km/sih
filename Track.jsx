import { useState } from "react";
import { CheckCircle2, Search } from "lucide-react";

const timeline = [
  ["Application Submitted", "10 Sep 2026", "Application received successfully."],
  ["Documents Verified", "11 Sep 2026", "Documents have been checked."],
  ["Inspection Scheduled", "12 Sep 2026", "Officer inspection has been scheduled."],
  ["Physical Verification", "Pending", "Instrument verification will be conducted."],
  ["Approved", "Pending", "Application approval is pending."],
  ["Certificate Generated", "Pending", "Certificate will be generated after approval."],
];

export default function Track() {
  const [id, setId] = useState("LM-2026-001");
  const [searched, setSearched] = useState(true);

  const handleSearch = () => {
    setSearched(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Track Application
        </h1>
        <p className="text-slate-500 mt-1">
          Check the current status of your verification application.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter Application ID"
            className="flex-1 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700"
          >
            <Search size={18} />
            Track
          </button>
        </div>
      </div>

      {searched && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-slate-500">Application ID</p>
              <h2 className="text-xl font-bold text-slate-900">{id}</h2>
            </div>

            <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
              In Progress
            </span>
          </div>

          <div className="space-y-6">
            {timeline.map(([title, date, description], index) => {
              const completed = index < 3;

              return (
                <div key={title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <CheckCircle2
                      size={26}
                      className={
                        completed
                          ? "text-green-600"
                          : "text-slate-300"
                      }
                    />

                    {index !== timeline.length - 1 && (
                      <div className="w-px h-12 bg-slate-200 mt-2" />
                    )}
                  </div>

                  <div className="pb-2">
                    <h3 className="font-semibold text-slate-900">
                      {title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {date}
                    </p>

                    <p className="text-sm text-slate-600 mt-1">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}