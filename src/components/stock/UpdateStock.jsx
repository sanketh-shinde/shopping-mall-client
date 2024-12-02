import React, { useState } from "react";
import styles from "../../styles/CreateStock.module.css";
const UpdateStock = () => {
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    quantity: "",
    price: "",
  });

  const [errors, setErrors] = useState({
    category: "",
    productName: "",
    quantity: "",
    price: "",
  });

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
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted with data:", formData);
      // Here you can send the form data to an API or handle the submission further
    }
    setFormData({
      category: "",
      productName: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2>Update Stock Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className={styles.inputField}
          />
          {errors.category && (
            <p className={styles.errorMessage}>{errors.category}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Product Name"
            className={styles.inputField}
          />
          {errors.productName && (
            <p className={styles.errorMessage}>{errors.productName}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className={styles.inputField}
          />
          {errors.quantity && (
            <p className={styles.errorMessage}>{errors.quantity}</p>
          )}
        </div>

        <div>
          <input
            type="number"
            name="price"
            value={formData.price}
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
