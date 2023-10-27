import React, { useContext, useEffect, useState } from "react";
import styles from "../../styles/HeaderPage.module.css";
import "../../../public/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    let email = localStorage.getItem("email");
    setEmail(email);
  }, []);

  const logout = () => {
    localStorage.removeItem("email");
    router.push("/login");
  };

  return (
    <div className={styles.header}>
      <section className={styles.metalBox}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="logo.svg" alt="equinix-metal" />
          </Link>
        </div>
        <div className={styles.searchBox}>
          <input className="form-control" type="search" placeholder="Search" />
        </div>
      </section>
      {email && (
        <div className={styles.logout} onClick={logout}>
          Logout
        </div>
      )}
    </div>
  );
};

export default HeaderPage;
