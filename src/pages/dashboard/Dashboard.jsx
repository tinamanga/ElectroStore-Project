import { useState, useEffect } from 'react';
import StatsCards from '../../components/dashboard/StatsCards';
import StatsCharts from '../../components/dashboard/StatsCharts';
import { getProducts, getOrders } from '../../services/api';

export default function Dashboard() {
    const [products, setProducts]=useState([]);
    const [orders, setOrders]=useState([]);
    useEffect(() => {
        getProducts().then(setProducts);
        getOrders().then(setOrders)
      }, []);

      const totalSales = orders.reduce((sum, order) => sum + order.totalAmount, 0);

  const stats = [
    { label: 'Total Sales', value: `Ksh ${totalSales}` },
    { label: 'Orders', value: orders.length },
    { label: 'Products', value: products.length },
  ];

  return (
    <div>
      <StatsCards stats={stats} />
      <h2>Overview</h2>
      <StatsCharts />
    </div>
  );
}
