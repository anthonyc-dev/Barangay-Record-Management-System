import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/adminLayout";
import HomePage from "@/pages/adminPage/Home.admin";
import Residents from "@/pages/adminPage/Resident.admin";
import Documents from "@/pages/adminPage/Documents.admin";
import ResidentLayout from "@/layouts/ResidentLayout";
import HomeUser from "@/pages/userPage/Home";
import Signin from "@/pages/general/auth/signin";
import Signup from "@/pages/general/auth/signup";
import AddResident from "@/pages/adminPage/functions/AddResident";
import ComplaintForm from "@/pages/userPage/section/ComplaintForm";
import DocumentRequest from "@/pages/userPage/section/DocumentRequest";
import PreRegister from "@/pages/userPage/section/userAuth/PreRegister";
import UserLogin from "@/pages/userPage/section/userAuth/UserLogin";

export default function AppRoutes() {
  return (
    <Routes>
      {/* admin side */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HomePage />} />
        <Route path="residents" element={<Residents />} />
        <Route path="addResident" element={<AddResident />} />
        <Route path="documents" element={<Documents />} />
      </Route>
      {/* user side */}
      <Route path="/" element={<ResidentLayout />}>
        <Route index element={<HomeUser />} />
        <Route path="residents" element={<Residents />} />
        <Route path="addResident" element={<AddResident />} />
        <Route path="documents" element={<Documents />} />
      </Route>
      {/* general */}
      <Route path="preRegister" element={<PreRegister />} />
      <Route path="complaint" element={<ComplaintForm />} />
      <Route path="documentReq" element={<DocumentRequest />} />
      <Route path="userLogin" element={<UserLogin />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}
