import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllStocks } from "../../services/StockServices";
import styles from "../../styles/ProductCard.module.css";

const ShowStocks = (props) => {
  console.log(props);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getAllStocks()
      .then((response) => {
        console.log(response.data.data);
        setStocks(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = () => {
    console.log(`Updating product with ID: $`);
  };
  const handleDelete = () => {
    // setStock(stocks.filter(product => product.productId !== stocks.id));
    // console.log(`Deleted product with ID: `);
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
              onUpdate={handleUpdate()}
              onDelete={handleDelete()}
            />
          );
        })}
      </div>
    </>
  );
};

export default ShowStocks;
