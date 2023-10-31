import React from "react";
import styles from "../../styles/Home.module.css";
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
            <span>Killbill Account</span>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/subscriptions" className={styles.linkname}>
            <span>Subscriptions</span>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/invoices" className={styles.linkname}>
            <span>Invoices</span>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/payments" className={styles.linkname}>
            <span>Payments</span>
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/refunds" className={styles.linkname}>
            <span>Refunds</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
