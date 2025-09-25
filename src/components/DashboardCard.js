function DashboardCard({ title, value, colorClass }) {
  return (
    <div className={`stat-card ${colorClass}`}>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

export default DashboardCard;
