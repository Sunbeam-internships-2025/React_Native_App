function RecentActivities({ activities }) {
  return (
    <div className="activities">
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>User</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((item, index) => (
            <tr key={index}>
              <td>{item.activity}</td>
              <td>{item.user}</td>
              <td>{item.date}</td>
              <td className={item.status === "Completed" ? "status-completed" : "status-pending"}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentActivities;
