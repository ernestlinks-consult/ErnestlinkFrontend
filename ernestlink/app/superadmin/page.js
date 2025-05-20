// pages/index.js (or app/page.js in Next.js)
import React from "react";
import DashboardLayout from "../components/SideBar";

const Home = () => {
  return (
    <DashboardLayout>
      <h2>Dashboard Overview</h2>
      <p>This is your main dashboard content.</p>
    </DashboardLayout>
  );
};

export default Home;
