import React from "react";

export default function DashboardHomea() {
  const stats = [
    { title: "👨‍🎓 Total Students", value: "1,250" },
    { title: "📚 Courses Available", value: "24" },
    { title: "📝 Active Enrollments", value: "3,480" },
    { title: "⭐ Feedback Received", value: "420" },
  ];

  const actions = [
    "➕ Add New Course",
    "👥 Manage Students",
    "📊 View Reports",
    "⚙️ Settings",
  ];

  return (
    <div>
      <style>
        {`
          .admin-dashboard {
            padding: 40px;
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(to right, #e0eafc, #cfdef3);
            min-height: 100vh;
          }
          .header {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #2c3e50;
            text-align: center;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
          }
          .stat-card {
            background: #fff;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
          }
          .stat-card:hover {
            transform: translateY(-5px);
          }
          .stat-card h3 {
            font-size: 20px;
            margin-bottom: 10px;
            color: #6a11cb;
          }
          .stat-card p {
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }
          .actions {
            background: #fff;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: auto;
          }
          .actions h2 {
            margin-bottom: 15px;
            color: #2575fc;
          }
          .actions ul {
            list-style: none;
            padding: 0;
          }
          .actions li {
            padding: 12px 0;
            border-bottom: 1px solid #eee;
            font-size: 16px;
            cursor: pointer;
            transition: color 0.3s;
          }
          .actions li:hover {
            color: #2575fc;
          }
        `}
      </style>

      <div className="admin-dashboard">
        <div className="header">📊 Admin Dashboard</div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="actions">
          <h2>⚡ Quick Actions</h2>
          <ul>
            {actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
