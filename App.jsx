import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import NewApplication from "./pages/NewApplication";
import Applications from "./pages/Applications";
import Track from "./pages/Track";
import OfficerDashboard from "./pages/OfficerDashboard";
import Verification from "./pages/Verification";
import Certificate from "./pages/Certificate";
import AdminDashboard from "./pages/AdminDashboard";
import Placeholder from "./pages/Placeholder";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App(){
  return <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/track" element={<Track/>}/>

    <Route element={<DashboardLayout role="applicant" />}>
      <Route path="/applicant" element={<ApplicantDashboard/>}/>
      <Route path="/applicant/new" element={<NewApplication/>}/>
      <Route path="/applicant/applications" element={<Applications/>}/>
      <Route path="/applicant/certificate" element={<Certificate/>}/>
    </Route>

    <Route element={<DashboardLayout role="officer" />}>
      <Route path="/officer" element={<OfficerDashboard/>}/>
      <Route path="/officer/applications" element={<Applications officer/>}/>
      <Route path="/officer/inspections" element={<Placeholder title="Inspection Schedule" subtitle="Calendar and field-visit management UI can be connected here."/>}/>
      <Route path="/officer/verification" element={<Verification/>}/>
    </Route>

    <Route element={<DashboardLayout role="admin" />}>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/admin/users" element={<Placeholder title="User Management" subtitle="Manage applicants, officers and role-based access."/>}/>
      <Route path="/admin/reports" element={<Placeholder title="Reports & Analytics" subtitle="Department reports and verification statistics."/>}/>
    </Route>

    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>
}
