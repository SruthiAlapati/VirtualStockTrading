import React from "react";
import "./Stocks.css";

const demoStocks = [
  { id: 1, name: "Apple", price: 180, logo: "https://logo.clearbit.com/apple.com" },
  { id: 2, name: "Amazon", price: 130, logo: "https://logo.clearbit.com/amazon.com" },
  { id: 3, name: "Google", price: 140, logo: "https://logo.clearbit.com/google.com" },
  { id: 4, name: "Microsoft", price: 290, logo: "https://logo.clearbit.com/microsoft.com" },
  { id: 5, name: "Tesla", price: 600, logo: "https://logo.clearbit.com/tesla.com" },
  { id: 6, name: "Meta (Facebook)", price: 270, logo: "https://logo.clearbit.com/meta.com" },
  { id: 7, name: "Netflix", price: 220, logo: "https://logo.clearbit.com/netflix.com" },
  { id: 8, name: "NVIDIA", price: 350, logo: "https://logo.clearbit.com/nvidia.com" },
  { id: 9, name: "AMD", price: 100, logo: "https://logo.clearbit.com/amd.com" },
  { id: 10, name: "Spotify", price: 200, logo: "https://logo.clearbit.com/spotify.com" },
  { id: 11, name: "Snapchat", price: 45, logo: "https://logo.clearbit.com/snapchat.com" },
  { id: 12, name: "Uber", price: 40, logo: "https://logo.clearbit.com/uber.com" }
];

const Stocks = ({ updatePortfolio }) => {
  const buyStock = (stock) => {
    let quantity = prompt("Enter quantity to buy:");
    quantity = parseInt(quantity);

    if (!quantity || isNaN(quantity) || quantity <= 0) {
      alert("Invalid quantity!");
      return;
    }

    // Fetch the current portfolio from localStorage or initialize an empty array
    const current = JSON.parse(localStorage.getItem("portfolio")) || [];
    const exists = current.find((s) => s.id === stock.id);

    let updated;
    if (exists) {
      // If stock already exists in portfolio, increase the count
      updated = current.map((s) =>
        s.id === stock.id ? { ...s, count: s.count + quantity } : s
      );
    } else {
      // If stock is new, add it to the portfolio
      updated = [...current, { ...stock, count: quantity }];
    }

    // Save the updated portfolio in localStorage
    localStorage.setItem("portfolio", JSON.stringify(updated));
    updatePortfolio(updated);
    alert(`${quantity} ${stock.name} stock(s) bought!`);
  };

  return (
    <div className="stocks-container">
      <h2>Available Stocks</h2>
      <div className="stocks-list">
        {demoStocks.map((stock) => (
          <div key={stock.id} className="stocks-card">
            <img src={stock.logo} alt={stock.name} className="stock-logo" />
            <p><strong>{stock.name}</strong></p>
            <p>Price: ${stock.price}</p>
            <button onClick={() => buyStock(stock)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stocks;
