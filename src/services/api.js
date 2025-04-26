const API_URL = 'http://localhost:5000';

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

export const getProduct = async (id) => {
    const res = await fetch(`${API_URL}/products/${id}`);
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
  

//   Delete product
export const deleteProduct = async (id) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });
  
    if (!res.ok) {
      throw new Error('Failed to delete product');
    }
  
    return res.json();
  };
  

//  Edit product
export const editProduct = async (id, updatedProduct) => {
    const res = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
  
    if (!res.ok) {
      throw new Error('Failed to update product');
    }
  
    return res.json();
  };
  
  export const getOrders = async () => {
    const res = await fetch(`${API_URL}/orders`);
    return res.json();
  };

//   DeleteOrder
export const deleteOrder = async (id) => {
    const res = await fetch(`${API_URL}/orders/${id}`, {
      method: 'DELETE',
    });
  
    if (!res.ok) {
      throw new Error('Failed to delete order');
    }
  
    return res.json();
  };

  export const getUsers = async () => {
    const res = await fetch(`${API_URL}/users`);
    return res.json();
  };

  export const getUser = async (id) => {
    const res = await fetch(`${API_URL}/users/${id}`);
    return res.json();
  };
  export const deleteUser = async (id) => {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
    });
  
    if (!res.ok) {
      throw new Error('Failed to delete user');
    }
  
    return res.json();
  };

  // Add user to db.json
export const addUser = async (userData) => {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!res.ok) {
      throw new Error('Failed to add user');
    }
  
    return res.json();
  };

  export const editUser = async (id, updatedUser) => {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });
  
    if (!res.ok) {
      throw new Error('Failed to update user');
    }
  
    return res.json();
  };
  