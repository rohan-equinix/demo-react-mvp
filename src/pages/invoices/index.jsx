import React from "react";
import HeaderPage from "../header";
import Sidebar from "../sidebar";
import styles from "../../styles/Home.module.css";

const Invoices = () => {
  return (
    <main className={styles.main}>
      <div className={styles.appheader}>
        <HeaderPage />
        <Sidebar />
      </div>
      <div className={styles.description}>
        <h2 className={styles.pagename}>Latest Invoices</h2>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Invoice Name</th>
              <th scope="col">Invoice org</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Test</td>
              <td>Test</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Test</td>
              <td>Test</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Test</td>
              <td>Test</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Test</td>
              <td>Test</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Invoices;
