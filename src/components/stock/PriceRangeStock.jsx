import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "../../styles/ProductCard.module.css";
import { deleteProduct, getByPriceRange,getAllStocks } from "../../services/StockServices";

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

  const update = (stockId) => {
    navigate(`/stock/update/${stockId}`);
    
  };

  const deleteStock = (stockId) => {
    // console.log("delete stock with id: " + stockId);
    if (confirm("Are You Sure?")) {
      deleteProduct(stockId)
        .then((response) => {
          const productDeleted = response.data;
          alert(productDeleted.message);
        })
        .catch((error) => console.log(error));
        getAllStocks()
          .then((response) => {
            console.log("All Stocks:", response.data.data);
            setStocks(response.data.data);
          })
          .catch((error) => console.error(error));
    }
  };

  return (
    <>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        Back
      </button>
      <div className={styles.productGrid}>
        {stocks.map((stock) => {
          return (
            <ProductCard
              key={stock.id}
              productName={stock.productName}
              quantity={stock.quantity}
              price={stock.price}
              onUpdate={() => update(stock.id)}
              onDelete={() => deleteStock(stock.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default PriceRangeStock;
