import React from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <Link href="/dashboard" className={styles.linkname}>
            <span>Billing Account</span>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/accounts" className={styles.linkname}>
            <span>Accounts</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
