import React from "react";
import HeaderPage from "../../header";
import styles from "../../../styles/Home.module.css";

const Invoices = () => {
  return (
    <main className={styles.main}>
      <div className={styles.appheader}>
        <HeaderPage />
      </div>
      <div className={styles.description}>
        <h2 className={styles.pagename}>Latest Invoices</h2>
        <hr />
      </div>
    </main>
  );
};

export default Invoices;
