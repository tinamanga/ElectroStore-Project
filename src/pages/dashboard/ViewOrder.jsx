import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getProduct } from "../../services/api";

export default function ViewOrder() {
  const { id } = useParams(); // use order id from URL

  const [product, setProduct]=useState([]);
 
   const location = useLocation();
    const { order } = location.state;

    useEffect(() => {
        if (order && order.items) {
          const fetchProducts = async () => {
            const products = await Promise.all(
              order.items.map((item) => getProduct(item.productId))
            );
            setProduct(products);
          };
      
          fetchProducts();
        }
      }, [order]);
  if (!order) return <p>Loading order details...</p>;

  return (
    <div className="order-details" style={styles.container}>
      <h2>Order #{order.orderId}</h2>
      <p><strong>Order Date:</strong> {order.orderDate}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>User ID:</strong> {order.userId}</p>

      <h3>Items</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, i) => (
            <tr key={i}>
              <td>{item.productId}</td>
              <td>{product[i]?.name || `Product `}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><strong>Total Amount:</strong> Ksh {order.totalAmount.toLocaleString()}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    textAlign: "left",
    borderBottom: "1px solid #ccc",
    padding: "8px"
  },
  td: {
    padding: "8px"
  }
};
