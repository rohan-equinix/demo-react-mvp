import React from "react";
import HeaderPage from "../header";
import Sidebar from "../sidebar";
import styles from "../../styles/Home.module.css";

const Payments = () => {
  return (
    <main className={styles.main}>
      <div className={styles.appheader}>
        <HeaderPage />
        <Sidebar />
      </div>
      <div className={styles.description}>
        <h2 className={styles.pagename}>Latest Payments</h2>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>01/01/2023</td>
              <td>200</td>
              <td>Success</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>01/01/2023</td>
              <td>200</td>
              <td>Success</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>01/01/2023</td>
              <td>200</td>
              <td>Success</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>01/01/2023</td>
              <td>200</td>
              <td>Success</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Payments;
