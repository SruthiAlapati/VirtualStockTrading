// src/components/Tutorial.jsx
import React from 'react';

const Tutorial = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Stock Trading Tutorials</h2>
      <p>Explore beginner-friendly resources to learn how to trade stocks:</p>
      <ul>
        <li><a href="https://www.investopedia.com/terms/s/stock.asp" target="_blank" rel="noopener noreferrer">📘 What is a Stock? – Investopedia</a></li>
        <li><a href="https://www.youtube.com/watch?v=p7HKvqRI_Bo" target="_blank" rel="noopener noreferrer">🎥 Stock Market for Beginners – YouTube (Ryan Scribner)</a></li>
        <li><a href="https://www.nerdwallet.com/article/investing/how-to-trade-stocks" target="_blank" rel="noopener noreferrer">📘 How to Trade Stocks – NerdWallet</a></li>
        <li><a href="https://www.fool.com/investing/how-to-invest/stocks/" target="_blank" rel="noopener noreferrer">📘 How to Invest in Stocks – The Motley Fool</a></li>
        <li><a href="https://www.khanacademy.org/economics-finance-domain/core-finance/stock-and-bonds" target="_blank" rel="noopener noreferrer">📘 Stock & Bonds Basics – Khan Academy</a></li>
        <li><a href="https://www.youtube.com/watch?v=9xjP7cSdfqI" target="_blank" rel="noopener noreferrer">🎥 How the Stock Market Works – YouTube (Wealth Hacker)</a></li>
        <li><a href="https://www.robinhood.com/learn" target="_blank" rel="noopener noreferrer">📘 Robinhood Learn – Trading Basics, Strategy, and Terms</a></li>
        <li><a href="https://www.finra.org/investors/learn-to-invest" target="_blank" rel="noopener noreferrer">📘 FINRA Investor Education</a></li>
      </ul>
      <p>Be sure to check back regularly for more updated tutorials and guides.</p>
    </div>
  );
};

export default Tutorial;
