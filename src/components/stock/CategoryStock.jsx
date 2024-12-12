import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getByCategory } from "../../services/StockServices";
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

  const update = (stockId) => {
    console.log("update stock with id: " + stockId);
    navigate("/stock/update");
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
export default CategoryStock;
