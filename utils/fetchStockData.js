// src/utils/fetchStockData.js

const API_KEY = 'NQP715I59BWC36UH'; // Replace with your own Alpha Vantage API key

export const fetchStockData = async (symbol) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if Alpha Vantage returned an error message or note (e.g., API limit)
    if (data['Note'] || data['Error Message']) {
      console.error(`Alpha Vantage API error: ${data['Note'] || data['Error Message']}`);
      return [];
    }

    // Check if the expected time series data exists
    if (!data['Time Series (5min)']) {
      console.error(`No time series data found for symbol: ${symbol}`);
      return [];
    }

    const timeSeries = data['Time Series (5min)'];

    // Parse the chart data and sort by time (optional)
    const chartData = Object.entries(timeSeries).map(([time, values]) => ({
      time,
      price: parseFloat(values['4. close']),
    })).sort((a, b) => new Date(a.time) - new Date(b.time)); // oldest to newest

    return chartData;
  } catch (error) {
    console.error(`Error fetching stock data for ${symbol}:`, error);
    return [];
  }
};
