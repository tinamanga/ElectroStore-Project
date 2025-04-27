export default function StatsCards({ stats }) {
    return (
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="card">
              <h3>{stat.label}</h3>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>
      );
  }