import Link from "next/link";
import styles from "../../styles/Home.module.css";
import HeaderPage from "../header";
import Sidebar from "../sidebar";
import React from "react";
import AboutPage from "../about";

const Dashboard = () => {
  return (
    <main className={styles.main}>
      <div className={styles.appheader}>
        <HeaderPage />
        <Sidebar />
      </div>
      <div className={styles.description}>
        <h2 className={styles.pagename}>My Dashboard</h2>
        <hr />
        <AboutPage />
      </div>
    </main>
  );
};

export default Dashboard;
