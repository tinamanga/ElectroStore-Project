const API_URL = 'http://localhost:5000';

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

// Add product to db.json
export const addProduct = async (productData) => {
    const res = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
  
    if (!res.ok) {
      throw new Error('Failed to add product');
    }
  
    return res.json();
  };
  