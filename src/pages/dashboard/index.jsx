import Link from "next/link";
import styles from "../../styles/home.module.css";
import HeaderPage from "../header";
import Sidebar from "../sidebar";
import React from "react";
import AboutPage from "../about";

const Dashboard = () => {
  return (
    <main className="main">
      <div className="appheader">
        <HeaderPage />
        <Sidebar />
      </div>
      <div className="description">
        <h2 className="pagename">My Dashboard</h2>
        <hr />
        <AboutPage />
      </div>
    </main>
  );
};

export default Dashboard;
