import React from "react";
import HeaderPage from "../header";
import Sidebar from "../sidebar";
import styles from "../../styles/Home.module.css";

const Acounts = () => {
  return (
    <main className={styles.main}>
      <div className={styles.appheader}>
        <HeaderPage />
        <Sidebar />
      </div>
      <div className={styles.description}>
        <h2 className={styles.pagename}>Latest Accounts</h2>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Billing account</th>
              <th scope="col">Org</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Test</td>
              <td>Test</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Test</td>
              <td>Test</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Test</td>
              <td>Test</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Test</td>
              <td>Test</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Acounts;
