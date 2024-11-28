import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1 className={styles.headerHeading}>Shopping Mall</h1>
        <nav className={styles.nav}>
          <NavBar />
        </nav>
      </header>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Shopping Mall </p>
      </footer>
    </div>
  );
};

export default Home;
