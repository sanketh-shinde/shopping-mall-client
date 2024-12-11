import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "../../styles/ProductCard.module.css";
import { getByPriceRange } from "../../services/StockServices";
import ProductCard from "./ProductCard";

const PriceRangeStock = () => {
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  useEffect(() => {
    getByPriceRange(minPrice, maxPrice)
      .then((response) => {
        console.log("Filtered by Price Range:", response.data.data);
        setStocks(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div className={styles.productGrid}>
        {stocks.map((stock) => {
          return (
            <ProductCard
              key={stock.id}
              productName={stock.productName}
              quantity={stock.quantity}
              price={stock.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default PriceRangeStock;
