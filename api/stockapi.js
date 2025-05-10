// api.js
const BASE_URL = "http://localhost:8080"; // ✅ Replace with your actual backend URL if different

// ✅ Fetch Stocks
export const fetchStocks = async () => {
  const response = await fetch(`${BASE_URL}/stocks`);
  if (!response.ok) throw new Error('Failed to fetch stocks');
  return response.json();
};

// ✅ Register User
export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error('Failed to register');
  return response.json();
};

// ✅ Login User
export const loginUser = async (credentials) => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error('Invalid credentials');
  return response.json();
};

// ✅ Buy Stock
export const buyStock = async (stockId, quantity, token) => {
  const response = await fetch(`${BASE_URL}/stocks/buy`, {
    method: 'POST',
    body: JSON.stringify({ stockId, quantity }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Use backticks to interpolate token correctly
    },
  });
  if (!response.ok) throw new Error('Failed to buy stock');
  return response.json();
};
