const API_URL = 'http://localhost:5000';

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};
