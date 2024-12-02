import React from "react";
import AsideNavBar from "./AsideNavBar";
import ShowStocks from "./ShowStocks";
import styles from "../../styles/StockLandingPage.module.css";

const StockLandingPage = () => {
  return (
    <div>
      <div className={styles.asideComponent}>
        <AsideNavBar />
      </div>
      <div className={styles.showStocksComponent}>
        <ShowStocks />
      </div>
    </div>
  );
};

export default StockLandingPage;
