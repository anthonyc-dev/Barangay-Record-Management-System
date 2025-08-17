import { Footer } from "@/components/userComponents/Footer";
import { Header } from "@/components/userComponents/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const ResidentLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1  py-8">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResidentLayout;
