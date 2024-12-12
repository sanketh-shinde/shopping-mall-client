import React from "react";
import AsideNavBar from "./AsideNavBar";
import ShowStocks from "./ShowStocks";
import styles from "../../styles/StockLandingPage.module.css";
import { useNavigate } from "react-router-dom";

const StockLandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.display}>
      <div className={styles.asideComponent}>
        <AsideNavBar />
      </div>
      <div className={styles.showStocksComponent}>
        <button
          className={styles.btn}
          onClick={() => navigate("/stock/create")}
        >
          Create Stocks
        </button>

        <ShowStocks />
      </div>
    </div>
  );
};

export default StockLandingPage;
