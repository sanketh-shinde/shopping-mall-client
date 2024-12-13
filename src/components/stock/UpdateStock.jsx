import React, { useEffect, useState } from "react";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { findStockById, updateProduct,getAllStocks } from "../../services/StockServices";

import styles from "../../styles/CreateStock.module.css";

const UpdateStock = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const initailState = {
    id: id,
    category: "",
    productName: "",
    quantity: "",
    price: "",
  };

  const [searchParams] = useSearchParams();

  const data = {
    stockId: searchParams.get("id"),
    price: searchParams.get("price"),
  };

  const [stocks, setStocks] = useState(initailState);

  const [errors, setErrors] = useState({
    price: "",
  });

  useEffect(() => {
    findStockById(id)
      .then((response) => {
        console.log("stock:", response.data.data);
        setStocks(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStocks((prevStock) => {
      const updateStock = {
        ...prevStock,
        [name]: value,
      };
      return updateStock;
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!stocks.price || isNaN(stocks.price) || stocks.price <= 0) {
      newErrors.price = "Price must be a positive number";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted with data:", stocks);
      // Here you can send the form data to an API or handle the submission further
      updateProduct((data.stockId = stocks.id), (data.price = stocks.price))
        .then((response) => {
          alert(response.data.message);
        })
        .catch((error) => console.log(error));
        getAllStocks()
        .then((response) => {
          console.log("All Stocks:", response.data.data);
          setStocks(response.data.data);
        })
        .catch((error) => console.error(error));
        setTimeout(()=>navigate('/stock'),4000)
    
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Update Stock Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="category"
            value={stocks.category}
            placeholder="Category"
            className={styles.inputField}
            readOnly
          />
          {errors.category && (
            <p className={styles.errorMessage}>{errors.category}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="productName"
            value={stocks.productName}
            placeholder="Product Name"
            className={styles.inputField}
            readOnly
          />
          {errors.productName && (
            <p className={styles.errorMessage}>{errors.productName}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            name="quantity"
            value={stocks.quantity}
            placeholder="Quantity"
            className={styles.inputField}
            readOnly
          />
          {errors.quantity && (
            <p className={styles.errorMessage}>{errors.quantity}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            name="price"
            value={stocks.price}
            onChange={handleChange}
            placeholder="Price"
            className={styles.inputField}
          />
          {errors.price && (
            <p className={styles.errorMessage}>{errors.price}</p>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateStock;
