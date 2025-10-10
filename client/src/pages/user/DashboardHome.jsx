import React from 'react'



export default function DashboardHome() {
  const tips = [
    "📖 Stay consistent – study at least 2 hours every day.",
    "📝 Take handwritten notes to boost memory retention.",
    "⏰ Follow the Pomodoro technique – 25 min study, 5 min break.",
    "💡 Revise concepts weekly for long-term retention.",
    "🚀 Solve at least 3 DSA problems daily to sharpen coding skills.",
    "🌐 Explore documentation & official guides when stuck.",
    "🤝 Join group discussions to strengthen understanding.",
    "📊 Track your progress and celebrate small wins.",
  ];

  return (
    <div>
      <style>
        {`
          .dashboard {
            padding: 40px;
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(to right, #f9f9f9, #e0e0e0);
            min-height: 100vh;
          }
          .welcome {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #2c3e50;
          }
          .subtitle {
            font-size: 18px;
            margin-bottom: 30px;
            color: #555;
          }
          .tips-box {
            background: #fff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
            max-width: 700px;
            margin: auto;
          }
          .tips-box h2 {
            margin-bottom: 15px;
            color: #6a11cb;
          }
          .tips-box ul {
            list-style: none;
            padding: 0;
          }
          .tips-box li {
            padding: 10px 0;
            font-size: 16px;
            border-bottom: 1px solid #eee;
          }
          .tips-box li:last-child {
            border-bottom: none;
          }
        `}
      </style>

      <div className="dashboard">
        <div className="welcome">👋 Welcome back, Student!</div>
        <div className="subtitle">
          Here are some study tips & tasks to keep you motivated:
        </div>

        <div className="tips-box">
          <h2>📌 Study Tips</h2>
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

