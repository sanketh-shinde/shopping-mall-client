import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getByCategory } from "../../services/StockServices";
import ProductCard from "./ProductCard";

import styles from "../../styles/ProductCard.module.css";

const CategoryStock = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  console.log(category);

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Filter by category
    getByCategory(category)
      .then((response) => {
        console.log("Filtered by Category:", response.data.data);
        setStocks(response.data.data); // Update stocks
      })
      .catch((error) => console.error(error));
  }, [category]);

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
export default CategoryStock;
