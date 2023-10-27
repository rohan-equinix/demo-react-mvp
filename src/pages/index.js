"use client";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import AboutPage from "./about";
import HeaderPage from "./header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let userEmail = localStorage.getItem("email");
    !userEmail ? router.push("/login") : router.push("/dashboard");
  }, []);

  return (
    <main className="main">
      <div className="appheader">
        <HeaderPage />
      </div>
      <div className="appdescription">
        <AboutPage />
      </div>
    </main>
  );
}