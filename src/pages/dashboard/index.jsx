import Link from "next/link";
import styles from "../../styles/Home.module.css";
import HeaderPage from "../header";
import React from "react";

const Dashboard = () => {
  return (
    <main className={styles.main}>
      <div className={styles.appheader}>
        <HeaderPage />
      </div>
      <div className={styles.description}>
        <h2 className={styles.pagename}>My Dashboard</h2>
        <hr />
        <Link href="/dashboard/accounts">
          <div className={styles.card}>
            <h3>Accounts</h3>
          </div>
        </Link>
        <Link href="/dashboard/invoices">
          <div className={styles.card}>
            <h3>Invoices</h3>
          </div>
        </Link>
        <Link href="/dashboard/payments">
          <div className={styles.card}>
            <h3>Payments</h3>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Dashboard;
