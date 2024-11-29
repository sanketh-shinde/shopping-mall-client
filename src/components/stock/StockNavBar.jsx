import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../styles/StockNavBar.module.css'

const StockNavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/createStock"
              activeClassName={styles.active} 
            >
              CreateStock
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/modify"
              activeClassName={styles.active}
            >
              Modify
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              activeClassName={styles.active}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default StockNavBar;
