import { NavLink, useNavigate } from "react-router-dom";

import { user } from "../services/authService";

import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const employee = user();

  return (
    <nav>
      <ul className={styles.list}>
        {employee && employee.detailsDTO.roles[0].designation === "Admin" && (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to="/register"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to="/stock"
              >
                Stock
              </NavLink>
            </li>
          </>
        )}
        {employee && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        )}
        {!employee ? (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <button
              className={styles.button}
              onClick={() => {
                localStorage.clear();
                return navigate("/login");
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
