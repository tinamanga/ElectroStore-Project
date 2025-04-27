import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function StatsCharts() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  const salesData = {
    labels,
    datasets: [
      {
        label: 'Total Sales (Ksh)',
        data: [800, 1300, 950, 1500, 1100, 5200],
        backgroundColor: '#4CAF50',
      },
    ],
  };

  const ordersData = {
    labels,
    datasets: [
      {
        label: 'Orders',
        data: [40, 50, 65, 80, 90, 134],
        fill: false,
        borderColor: '#2196F3',
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ display: 'flex', gap: '40px', marginTop: '30px', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h3>Sales Overview</h3>
        <Bar data={salesData} />
      </div>
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h3>Orders Trend</h3>
        <Line data={ordersData} />
      </div>
    </div>
  );
}
