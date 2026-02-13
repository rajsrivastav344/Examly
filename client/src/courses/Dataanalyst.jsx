// DataAnalytics.jsx
import React, { useState } from "react";
import "./All.css";

export default function DataAnalytics() {
  const [selected, setSelected] = useState("Introduction to Data Analytics");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "📊 Data Analytics Fundamentals": {
      "Introduction to Data Analytics": {
        title: "Introduction to Data Analytics",
        content: `
Data Analytics is the science of analyzing raw data to make conclusions and support decision-making.

Core steps:
- Collect → Clean → Explore → Analyze → Visualize → Interpret → Act

Why it matters in 2025–2026:
- Data volume growing exponentially (zettabytes era)
- AI/ML integration → faster insights
- Business value: cost reduction, revenue growth, risk mitigation
- Every industry uses it: retail, healthcare, finance, manufacturing, sports, government`,
        example: `<p>Amazon uses analytics to recommend products and optimize pricing in real-time.</p>`,
        graphic: `<svg width="400" height="180" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="60" width="80" height="60" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="70" y="95" text-anchor="middle">Raw Data</text>
  <polygon points="120,90 140,70 160,90 140,110" fill="#e3f2fd"/>
  <text x="140" y="95" text-anchor="middle">→</text>
  <rect x="170" y="60" width="80" height="60" fill="#fff9c4" stroke="#fbc02d"/>
  <text x="210" y="95" text-anchor="middle">Insights</text>
  <polygon points="260,90 280,70 300,90 280,110" fill="#fff9c4"/>
  <text x="280" y="95" text-anchor="middle">→</text>
  <rect x="310" y="60" width="80" height="60" fill="#c8e6c9" stroke="#388e3c"/>
  <text x="350" y="95" text-anchor="middle">Decisions</text>
</svg>`,
      },
      "Types of Data Analytics": {
        title: "Types of Data Analytics",
        content: `
1. Descriptive (What happened?) — reports, dashboards, KPIs
2. Diagnostic (Why did it happen?) — drill-down, root cause, correlation
3. Predictive (What will happen?) — forecasting, ML models, scoring
4. Prescriptive (What should we do?) — optimization, simulation, recommendation engines

2025 maturity:
- Most companies at Descriptive/Diagnostic
- Leaders moving to Predictive/Prescriptive with GenAI`,
        graphic: `<svg width="420" height="300" viewBox="0 0 420 300">
  <rect x="60" y="40" width="300" height="40" fill="#bbdefb"/>
  <text x="210" y="65" text-anchor="middle" font-weight="bold">Descriptive - What happened?</text>
  <rect x="60" y="100" width="300" height="40" fill="#fff9c4"/>
  <text x="210" y="125" text-anchor="middle">Diagnostic - Why?</text>
  <rect x="60" y="160" width="300" height="40" fill="#c8e6c9"/>
  <text x="210" y="185" text-anchor="middle">Predictive - What will happen?</text>
  <rect x="60" y="220" width="300" height="40" fill="#f8bbd0"/>
  <text x="210" y="245" text-anchor="middle">Prescriptive - What should we do?</text>
  <text x="210" y="290" text-anchor="middle" font-style="italic">Increasing value & complexity ↑</text>
</svg>`,
        example: `<p>Netflix: Descriptive (view counts), Predictive (recommendations), Prescriptive (auto-play next episode)</p>`,
      },
    },

    "🔄 Data Lifecycle & Preparation": {
      "Data Collection & Sources": {
        title: "Data Collection & Sources",
        content: `
Sources:
- Internal: CRM, ERP, databases, logs
- External: APIs, web scraping, public datasets, social media
- Real-time: IoT sensors, streaming (Kafka), clickstreams

Methods:
- Batch vs Streaming
- Structured (SQL tables), Semi-structured (JSON, XML), Unstructured (text, images)

2025 trend: Data Mesh & Data Fabric for decentralized collection`,
        example: `<p>Collecting real-time user behavior via Google Analytics + internal PostgreSQL sales table</p>`,
      },
      "Data Cleaning & Preparation": {
        title: "Data Cleaning & Preparation",
        content: `
Common issues:
- Missing values
- Duplicates
- Outliers
- Inconsistent formats (dates, units)
- Invalid entries

Tools: Pandas (Python), Power Query (Excel/Power BI), OpenRefine

Best practice: 60–80% of analyst time spent here`,
        example: `<pre><code>import pandas as pd
df = pd.read_csv('sales.csv')
df.dropna(subset=['customer_id'], inplace=True)
df['date'] = pd.to_datetime(df['date'])
df.drop_duplicates(inplace=True)</code></pre>`,
      },
      "Exploratory Data Analysis (EDA)": {
        title: "Exploratory Data Analysis (EDA)",
        content: `
Goal: Understand data before modeling
Techniques:
- Summary statistics (mean, median, std)
- Distributions (histograms, box plots)
- Correlations (heatmap)
- Relationships (scatter plots)
- Missing value patterns

Tools: Pandas + Matplotlib/Seaborn, Sweetviz, Pandas Profiling`,
        example: `<pre><code>df.describe()
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')</code></pre>`,
      },
    },

    "📈 Analysis & Modeling": {
      "Statistical Analysis": {
        title: "Statistical Analysis",
        content: `
Core concepts:
- Descriptive stats
- Inferential stats (hypothesis testing, confidence intervals)
- Distributions (normal, binomial, Poisson)
- Correlation vs Causation
- A/B testing

2025: Bayesian methods gaining popularity over frequentist`,
        example: `<p>A/B test: Did new checkout button increase conversion rate? (p-value < 0.05)</p>`,
      },
      "Data Mining & Pattern Discovery": {
        title: "Data Mining & Pattern Discovery",
        content: `
Techniques:
- Clustering (K-Means, DBSCAN)
- Classification (Decision Trees, Random Forest)
- Association Rules (Market Basket Analysis)
- Anomaly Detection

Use cases: Customer segmentation, fraud detection, recommendation systems`,
        example: `<p>Market basket: {bread} → {butter} with 70% confidence</p>`,
      },
      "Predictive Modeling": {
        title: "Predictive Modeling",
        content: `
Common algorithms:
- Regression (Linear, Logistic, Ridge/Lasso)
- Time Series (ARIMA, Prophet, LSTM)
- Tree-based (XGBoost, LightGBM, CatBoost)
- Neural Networks (for deep learning tasks)

Evaluation: RMSE, MAE, R², AUC-ROC, Precision/Recall`,
        example: `<pre><code>from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)</code></pre>`,
      },
    },

    "🛠️ Tools & Technologies 2025": {
      "Core Tools Stack": {
        title: "Core Tools Stack",
        content: `
- Programming: Python (Pandas, NumPy, Scikit-learn, Polars), R
- Databases: SQL (PostgreSQL, Snowflake, BigQuery), NoSQL (MongoDB)
- Visualization: Tableau, Power BI, Looker, Plotly Dash, Streamlit
- Big Data: Spark, Databricks, Snowflake, Dask
- Cloud Platforms: AWS (SageMaker, Redshift), Azure (Synapse), GCP (BigQuery, Vertex AI)
- Modern: dbt (data build tool), Great Expectations (data validation), Metabase

2025 leaders: Python + Snowflake + dbt + Power BI / Tableau`,
        example: `<p>Modern pipeline: Kafka → Spark → Snowflake → dbt → Power BI</p>`,
      },
    },

    "🌍 Real-World Applications & Case Studies": {
      "Retail & E-commerce": {
        title: "Retail & E-commerce",
        content: `
- Demand forecasting
- Price optimization
- Customer segmentation & churn prediction
- Recommendation engines
- Inventory management

Example: Flipkart/Amazon use analytics for dynamic pricing & personalized offers`,
      },
      "Healthcare Analytics": {
        title: "Healthcare Analytics",
        content: `
- Predictive readmission risk
- Disease outbreak detection
- Drug discovery acceleration
- Patient flow optimization

Example: COVID-19 spread modeling, hospital resource allocation`,
      },
      "Finance & Fraud Detection": {
        title: "Finance & Fraud Detection",
        content: `
- Credit scoring
- Fraud/anomaly detection (real-time)
- Algorithmic trading
- Risk modeling (VaR)

Example: Banks use XGBoost + graph analytics for fraud rings`,
      },
      "CRISP-DM Process": {
        title: "CRISP-DM Process",
        content: `
Standard analytics project methodology:
1. Business Understanding
2. Data Understanding
3. Data Preparation
4. Modeling
5. Evaluation
6. Deployment`,
        graphic: `<svg width="500" height="140" viewBox="0 0 500 140">
  <circle cx="60" cy="70" r="40" fill="#bbdefb"/>
  <text x="60" y="75" text-anchor="middle">1. Business</text>
  <polygon points="110,70 130,50 150,70 130,90" fill="#bbdefb"/>
  <text x="130" y="75" text-anchor="middle">→</text>
  <circle cx="190" cy="70" r="40" fill="#fff9c4"/>
  <text x="190" y="75" text-anchor="middle">2. Data Underst.</text>
  <polygon points="240,70 260,50 280,70 260,90" fill="#fff9c4"/>
  <text x="260" y="75" text-anchor="middle">→</text>
  <circle cx="320" cy="70" r="40" fill="#c8e6c9"/>
  <text x="320" y="75" text-anchor="middle">3. Preparation</text>
  <!-- abbreviated -->
  <text x="250" y="130" text-anchor="middle">Iterative process</text>
</svg>`,
      },
    },
  };

  // ────────────────────────────────────────────────
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  let selectedContent = null;
  for (const section in sections) {
    if (sections[section][selected]) {
      selectedContent = sections[section][selected];
      break;
    }
  }
  if (!selectedContent) selectedContent = { title: selected, content: "Select a topic from the sidebar." };

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>📊 Data Analytics Dashboard</h1>
        <input
          type="text"
          placeholder="Search topics..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <aside className="sidebar" style={{ width: sidebarWidth }}>
        {Object.keys(sections).map((section) => {
          const filtered = Object.keys(sections[section]).filter((t) =>
            t.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filtered.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filtered.map((topic) => (
                  <li
                    key={topic}
                    onClick={() => setSelected(topic)}
                    className={selected === topic ? "active" : ""}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          );
        })}
      </aside>

      <div className="resizer" onMouseDown={handleMouseDown}></div>

      <main className="content">
        <h2>{selected}</h2>
        <div>
          <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{selectedContent.content}</p>

          {selectedContent.example && (
            <pre className="code-block">
              <code>{selectedContent.example}</code>
            </pre>
          )}

          {selectedContent.graphic && (
            <div
              dangerouslySetInnerHTML={{ __html: selectedContent.graphic }}
              style={{ textAlign: "center", margin: "20px 0" }}
            />
          )}
        </div>
      </main>
    </div>
  );
}