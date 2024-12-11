import React from "react";
import styles from "../../styles/ProductCard.module.css";

const ProductCard = ({ productName, price, quantity, onUpdate, onDelete }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src="product.svg" alt={productName} className={styles.image} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{productName}</h3>

        <p className={styles.productPrice}> ₹{price}</p>
        <p className={styles.productQuantity}>Available:{quantity}</p>

        <div className={styles.buttons}>
          <button
            className={styles.updateButton}
            onClick={() => console.log(onUpdate())}
          >
            Update
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => console.log(onDelete())}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
