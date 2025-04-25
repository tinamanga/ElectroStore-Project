import StatsCards from '../../components/dashboard/StatsCards';

export default function Dashboard() {
  const stats = [
    { label: 'Total Sales', value: '$5,200' },
    { label: 'Orders', value: '134' },
    { label: 'Products', value: '25' },
  ];

  return (
    <div>
      <StatsCards stats={stats} />
      <h2>Overview</h2>
      <p>Welcome to your store dashboard.</p>
    </div>
  );
}
