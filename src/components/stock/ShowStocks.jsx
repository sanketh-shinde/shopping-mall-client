import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { deleteProduct, getAllStocks } from "../../services/StockServices";
import styles from "../../styles/ProductCard.module.css";
import { useNavigate } from "react-router-dom";

const ShowStocks = ({ filter }) => {
  const navigate = useNavigate();
  const [stocks, setStocks] = useState([]);

  // Fetch stocks when the filter changes
  useEffect(() => {
    if (!filter) {
      // No filter, fetch all stocks
      getAllStocks()
        .then((response) => {
          console.log("All Stocks:", response.data.data);
          setStocks(response.data.data);
        })
        .catch((error) => console.error(error));
    } else if (filter?.category) {
      navigate(`/stock/${filter.category}`);
    }
  }, [filter]);

  const update = (stockId) => {
    console.log("update stock with id: " + stockId);
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
    }
  };

  return (
    <>
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

export default ShowStocks;
