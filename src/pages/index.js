"use client";
import styles from "../styles/home.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import AboutPage from "./about";
import HeaderPage from "./header";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let userEmail = localStorage.getItem("email");
    !userEmail ? router.push("/login") : router.push("/dashboard");
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.appheader}>
        <HeaderPage />
        <Sidebar />
      </div>
      <div className={styles.appdescription}>
        <AboutPage />
      </div>
    </main>
  );
}
