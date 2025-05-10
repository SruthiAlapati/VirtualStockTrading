// src/components/Market.jsx
import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';
import { fetchStockData } from '../utils/fetchStockData';
import './Market.css';

const demoStocks = [
  { id: 1, name: 'Apple', symbol: 'AAPL', logo: 'https://logo.clearbit.com/apple.com' },
  { id: 2, name: 'Amazon', symbol: 'AMZN', logo: 'https://logo.clearbit.com/amazon.com' },
  { id: 3, name: 'Google', symbol: 'GOOGL', logo: 'https://logo.clearbit.com/google.com' },
  { id: 4, name: 'Microsoft', symbol: 'MSFT', logo: 'https://logo.clearbit.com/microsoft.com' },
  { id: 5, name: 'Tesla', symbol: 'TSLA', logo: 'https://logo.clearbit.com/tesla.com' },
  { id: 6, name: 'Meta', symbol: 'META', logo: 'https://logo.clearbit.com/meta.com' },
  { id: 7, name: 'Netflix', symbol: 'NFLX', logo: 'https://logo.clearbit.com/netflix.com' },
  { id: 8, name: 'NVIDIA', symbol: 'NVDA', logo: 'https://logo.clearbit.com/nvidia.com' },
  { id: 9, name: 'AMD', symbol: 'AMD', logo: 'https://logo.clearbit.com/amd.com' },
  { id: 10, name: 'Spotify', symbol: 'SPOT', logo: 'https://logo.clearbit.com/spotify.com' },
  { id: 11, name: 'Snapchat', symbol: 'SNAP', logo: 'https://logo.clearbit.com/snapchat.com' },
  { id: 12, name: 'Uber', symbol: 'UBER', logo: 'https://logo.clearbit.com/uber.com' },
];

const defaultStockData = [
  { time: '2023-05-01T10:00:00', price: 150 },
  { time: '2023-05-02T10:00:00', price: 153 },
  { time: '2023-05-03T10:00:00', price: 152 },
  { time: '2023-05-04T10:00:00', price: 155 },
];

const Market = () => {
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    const fetchAllData = async () => {
      const data = {};
      for (const stock of demoStocks) {
        try {
          const stockChartData = await fetchStockData(stock.symbol);
          // Make sure each item has `time` and `price` fields
          data[stock.symbol] = stockChartData?.map((entry) => ({
            time: entry.time || entry.date || new Date().toISOString(),
            price: entry.price || entry.close || 0,
          })) || [];
        } catch (error) {
          console.error(`Failed to fetch data for ${stock.symbol}:`, error);
          data[stock.symbol] = []; // fallback
        }
      }
      setStockData(data);
    };

    fetchAllData();
  }, []);

  return (
    <div className="market-container">
      <h2>Market Data & Analytics</h2>
      {demoStocks.map((stock) => (
        <div key={stock.id} className="stock-chart">
          <h3>
            <img src={stock.logo} alt={stock.name} className="stock-logo" />
            {stock.name} ({stock.symbol})
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockData[stock.symbol]?.length ? stockData[stock.symbol] : defaultStockData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis
                dataKey="time"
                tickFormatter={(time) => time.slice(0, 10)} // show date only
              />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default Market;
