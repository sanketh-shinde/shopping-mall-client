import React, { useState } from "react";
import styles from "../../styles/AsideNavBar.module.css";
import ShowStocks from "./ShowStocks";
import { useNavigate } from "react-router-dom";

const AsideNavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const [selectedMinPriceRange, setMinPrice] = useState("");
  const [selectedMaxPriceRange, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    const selectedMinPrice = e.target.value;

    if (
      parseInt(selectedMinPrice) <= parseInt(selectedMaxPriceRange) ||
      selectedMaxPriceRange === ""
    ) {
      setMinPrice(selectedMinPrice);
    } else {
      alert("Min Price cannot be greater than Max Price!");
    }
    console.log("Min Price: ", selectedMinPrice);
  };

  const handleMaxPriceChange = (e) => {
    const selectedMaxPrice = e.target.value;

    if (
      parseInt(selectedMaxPrice) >= parseInt(selectedMinPriceRange) ||
      selectedMinPriceRange === ""
    ) {
      setMaxPrice(selectedMaxPrice);
    } else {
      alert("Max Price cannot be less than Min Price!");
    }
    console.log("Max Price: ", selectedMaxPrice);
  };

  const handleSubmit = (e) => {
    if (
      (!selectedMinPriceRange && !selectedMaxPriceRange) ||
      (selectedMinPriceRange && !selectedMaxPriceRange) ||
      (!selectedMinPriceRange && selectedMaxPriceRange)
    ) {
      alert("please provide price range");
    } else {
      navigate(
        `/stock/priceRange?minPrice=${selectedMinPriceRange}&maxPrice=${selectedMaxPriceRange}`
      );
    }
  };

  const handleCategory = (e) => {
    setSelectedCategory(e.target.innerText);
    console.log(`Selected Category: ${selectedCategory}`);
  };

  return (
    <>
      <div className={styles.aside}>
        <div className={styles.category}>
          {selectedCategory && (
            <p className={styles.selectedCategory}>
              Selected Category: {selectedCategory}
            </p>
          )}
          <h3>Category</h3>
          <ul>
            <li onClick={handleCategory}>Electronics</li>
            <li onClick={handleCategory}>Cloth</li>
          </ul>
        </div>

        <div className={styles.price}>
          <h3>Price Range</h3>
          <ul>
            <li>
              Min Price
              <select
                id="minPrice"
                name="minPrice"
                value={selectedMinPriceRange}
                onChange={handleMinPriceChange}
              >
                <option>MinPrice</option>
                <option value="100">100₹</option>
                <option value="500">500₹</option>
                <option value="1000">1000₹</option>
                <option value="2000">2000₹</option>
                <option value="3000">3000₹</option>
              </select>
            </li>

            <li>
              Max Price
              <select
                id="maxPrice"
                name="maxPrice"
                value={selectedMaxPriceRange}
                onChange={handleMaxPriceChange}
              >
                <option>MaxPrice</option>
                <option value="800">800₹</option>
                <option value="1500">1500₹</option>
                <option value="3000">3000₹</option>
                <option value="6000">6000₹</option>
                <option value="15000">15000₹</option>
                <option value="50000">50000₹</option>
              </select>
            </li>
          </ul>
          {selectedMinPriceRange && selectedMaxPriceRange && (
            <p className={styles.priceRange}>
              Selected Price Range: {selectedMinPriceRange}₹ -{" "}
              {selectedMaxPriceRange}₹
            </p>
          )}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <ShowStocks
        filter={{
          category: selectedCategory,
        }}
      />
    </>
  );
};

export default AsideNavBar;
