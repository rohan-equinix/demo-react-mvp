"use client";
import React from "react";
import styles from "../../styles/Home.module.css";
import HeaderPage from "../header";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.exampleInputEmail1.value);
    axios
      .post("kaui/sign_in", {
        username: e.target.exampleInputEmail1.value,
        password: e.target.exampleInputPassword1.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    router.push("/dashboard");
  };

  return (
    <main className={styles.main}>
      <div className={styles.appheader}>
        <HeaderPage />
      </div>
      <div className={styles.loginDesc}>
        <h2 className={styles.pagename}>Login</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
