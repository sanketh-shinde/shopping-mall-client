import { NavLink } from "react-router-dom";

import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.link} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <button className={styles.button}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
