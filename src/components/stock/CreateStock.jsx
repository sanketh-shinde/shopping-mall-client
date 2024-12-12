import React, { useEffect, useState } from "react";
import styles from "../../styles/CreateStock.module.css";
import { createStocks } from "../../services/StockServices";
import { useNavigate } from "react-router-dom";
const CreateStock = () => {
  const navigate = useNavigate();
  const initialState = {
    category: "",
    productName: "",
    quantity: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.productName)
      newErrors.productName = "Product name is required";
    if (
      !formData.quantity ||
      isNaN(formData.quantity) ||
      formData.quantity <= 0
    ) {
      newErrors.quantity = "Quantity must be a positive number";
    }
    if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
      newErrors.price = "Price must be a positive number";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());

    if (Object.keys(validate()).length === 0) {
      console.log("Form submitted with data:", formData);
      createStocks(formData)
        .then((response) => {
          const stock = response.data;
          console.log(stock);
          alert(stock.message);
          navigate("/stock");
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    }
    setFormData(initialState);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Create Stock Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {errors.category && (
            <p className={styles.errorMessage}>{errors.category}</p>
          )}
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className={styles.inputField}
          />
        </div>
        <div>
          {errors.productName && (
            <p className={styles.errorMessage}>{errors.productName}</p>
          )}
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Product Name"
            className={styles.inputField}
          />
        </div>

        <div>
          {errors.quantity && (
            <p className={styles.errorMessage}>{errors.quantity}</p>
          )}
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className={styles.inputField}
          />
        </div>

        <div>
          {errors.price && (
            <p className={styles.errorMessage}>{errors.price}</p>
          )}
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className={styles.inputField}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateStock;
