import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/adminLayout";
import HomePage from "@/pages/adminPage/Home.admin";
import Residents from "@/pages/adminPage/Resident.admin";
import AddResident from "@/pages/adminPage/functions/AddResident";
import Documents from "@/pages/adminPage/Documents.admin";

export default function AppRoutes() {
  return (
    <Routes>
      {/* admin side */}
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<HomePage />} />
        <Route path="residents" element={<Residents />} />
        <Route path="addResident" element={<AddResident />} />
        <Route path="documents" element={<Documents />} />
      </Route>
    </Routes>
  );
}
