// Python.jsx - Enhanced Data Science with Python Dashboard (focus on scikit-learn + libraries)
import React, { useState } from "react";
import "./All.css";
import ReactMarkdown from "react-markdown";

export default function Python() {
  const [selected, setSelected] = useState("Introduction to Data Science");
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "📊 Data Science Fundamentals": {
      "Introduction to Data Science": {
        title: "Introduction to Data Science",
        content: `
Data Science combines domain knowledge, programming, mathematics & statistics 
to extract actionable insights from data.

Core stages in a typical data science project (CRISP-DM inspired):
1. Business Understanding
2. Data Understanding
3. Data Preparation (~80% of time)
4. Modeling
5. Evaluation
6. Deployment
7. Monitoring & Maintenance

Python became dominant thanks to:
• Readability & productivity
• Mature scientific ecosystem
• Industry adoption (Google, Meta, Netflix, Amazon, etc.)
• Huge open-source community

Most used Python data science stack in 2025–2026:
NumPy → Pandas → Matplotlib/Seaborn/Plotly → Scikit-learn → XGBoost/LightGBM → TensorFlow/PyTorch

Reference: Kaggle State of Data Science & Machine Learning reports
        `,
        example: `
# Quick "Hello Data Science" snippet
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

print("Data Science stack check:")
print("pandas:", pd.__version__)
print("numpy :", np.__version__)
print("seaborn:", sns.__version__)
        `
      },

      "Data Science vs Machine Learning vs AI": {
        title: "Data Science vs ML vs AI",
        content: `
• Data Science        → broad field (statistics + programming + domain knowledge)
• Machine Learning     → subset of DS: algorithms that learn from data
• Artificial Intelligence → broader goal: machines performing intelligent tasks
                          (ML is one way to achieve AI)

Popular 2025–2026 view:
Data Science = Exploratory Analysis + ML Modeling + Storytelling
Machine Learning Engineer = Production-grade ML systems (MLOps, APIs, monitoring)
AI Engineer = Often focuses on deep learning + LLMs + agents + multimodal models
        `
      }
    },

    "🐍 Core Python Libraries for Data Science": {

      "NumPy – Array Computing": {
        title: "NumPy – Numerical Foundation",
        content: `
NumPy = Numerical Python → backbone of almost every scientific Python library.

Key features:
• ndarray – fast, memory-efficient n-dimensional array
• Broadcasting
• Universal functions (ufuncs)
• Linear algebra, FFT, random number generation
        `,
        example: `
import numpy as np

a = np.arange(12).reshape(3,4)
print("Array:\\n", a)

print("\\nMean of each column:", a.mean(axis=0))
print("Transpose:\\n", a.T)

# Broadcasting example
print("\\nAdd row vector to matrix:\\n", a + np.array([10,20,30,40]))
        `
      },

      "Pandas – Data Wrangling": {
        title: "Pandas – DataFrame & Series",
        content: `
Pandas provides two main structures:
• Series   → 1D labeled array
• DataFrame → 2D labeled table (like Excel / SQL table)

Core strengths:
• Label-based indexing
• Handling missing data
• GroupBy / pivot / merge / join
• Time series support
• Read/write many formats (csv, excel, parquet, sql, json, hdf5, …)
        `,
        example: `
import pandas as pd

df = pd.DataFrame({
    'name': ['Aarav','Priya','Rohan','Neha'],
    'age':  [23,21,25,19],
    'city': ['Lucknow','Delhi','Mumbai','Bangalore'],
    'salary':[45000,62000,78000,32000]
})

print(df.describe())
print("\\nGroup by city average salary:\\n", df.groupby('city')['salary'].mean())
        `
      },

      "Matplotlib – Base Plotting": {
        title: "Matplotlib – Static & Publication Quality Plots",
        content: `
Still the most flexible low-level plotting library in Python.

Object-oriented vs pyplot API:
• fig, ax = plt.subplots()   → recommended (OO style)
• plt.plot()                  → quick scripting style

Modern usage often combines with seaborn or pandas .plot()
        `
      },

      "Seaborn – Statistical Visualization": {
        title: "Seaborn – Beautiful Statistical Plots",
        content: `
Built on matplotlib, but provides high-level interface + better defaults.

Strengths:
• Themes & color palettes
• Easy categorical plots
• Distribution + regression + matrix plots
• Works beautifully with pandas DataFrames
        `
      },

      "Plotly – Interactive & Web Visualizations": {
        title: "Plotly – Interactive Charts & Dashboards",
        content: `
Plotly = interactive, publication-quality graphing library.

Advantages in 2026:
• Works in Jupyter, scripts, Dash apps, Streamlit, HTML export
• Hover tooltips, zoom, pan, export to PNG/SVG
• 3D plots, maps, animations, financial charts out-of-the-box
        `
      }
    },

    "🔬 Scikit-learn – Machine Learning Toolkit": {

      "Scikit-learn Overview": {
        title: "What is Scikit-learn?",
        content: `
Scikit-learn (sklearn) is the most popular open-source machine learning library in Python.

Design principles:
• Simple & consistent API
• Built on NumPy, SciPy, matplotlib
• Well-tested, well-documented
• Focus on classical ML (not deep learning)

Main modules:
• preprocessing
• feature_selection
• model_selection
• metrics
• svm, linear_model, tree, ensemble, neighbors, cluster, decomposition, etc.
        `,
        example: `
from sklearn import __version__
print("scikit-learn version:", __version__)
        `
      },

      "Datasets in Scikit-learn": {
        title: "Built-in Datasets & make_* Generators",
        content: `
sklearn.datasets provides:
• Real-world small datasets (iris, digits, wine, breast_cancer, diabetes…)
• Toy dataset generators: make_classification, make_regression, make_blobs, make_moons, make_circles…
        `,
        example: `
from sklearn.datasets import load_iris, make_classification

iris = load_iris()
print("Iris feature names:", iris.feature_names)

X, y = make_classification(n_samples=2000, n_features=20, n_informative=15,
                           n_redundant=2, random_state=42)
print("Synthetic data shape:", X.shape, y.shape)
        `
      },

      "Train-Test Split & Cross-Validation": {
        title: "train_test_split & Cross Validation Strategies",
        content: `
Core function: train_test_split

Cross-validation strategies:
• KFold, StratifiedKFold
• LeaveOneOut, LeavePOut
• TimeSeriesSplit
• GroupKFold, StratifiedGroupKFold
        `,
        example: `
from sklearn.model_selection import train_test_split, cross_val_score, StratifiedKFold
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_breast_cancer

X, y = load_breast_cancer(return_X_y=True)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, stratify=y, random_state=42
)

model = LogisticRegression(max_iter=1000)
scores = cross_val_score(model, X_train, y_train, cv=StratifiedKFold(5), scoring='roc_auc')
print("5-Fold CV ROC-AUC scores:", scores)
print("Mean:", scores.mean().round(4))
        `
      },

      "Preprocessing Pipelines": {
        title: "ColumnTransformer + Pipeline – Modern Workflow",
        content: `
Best practice in 2025–2026: use Pipeline + ColumnTransformer

Advantages:
• Prevents data leakage
• Clean, reproducible code
• Easy hyperparameter tuning with GridSearchCV / RandomizedSearchCV
        `,
        example: `
from sklearn.pipeline import Pipeline, make_pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.impute import SimpleImputer
from sklearn.linear_model import Ridge

num_features = ['age','income','credit_score']
cat_features = ['education','marital_status']

num_pipe = make_pipeline(
    SimpleImputer(strategy='median'),
    StandardScaler()
)

cat_pipe = make_pipeline(
    SimpleImputer(strategy='most_frequent'),
    OneHotEncoder(handle_unknown='ignore', sparse_output=False)
)

preprocessor = ColumnTransformer([
    ('num', num_pipe, num_features),
    ('cat', cat_pipe, cat_features)
])

full_pipe = Pipeline([
    ('preprocessor', preprocessor),
    ('model', Ridge(alpha=1.0))
])

# Later: full_pipe.fit(X_train, y_train)
        `
      },

      "Classification Models – Overview": {
        title: "Classification Algorithms in scikit-learn",
        content: `
Popular classifiers:

Linear models:
• LogisticRegression
• SGDClassifier
• LinearSVC

Tree-based:
• DecisionTreeClassifier
• RandomForestClassifier
• GradientBoostingClassifier
• HistGradientBoostingClassifier (fast & great default)

Neighbors:
• KNeighborsClassifier

Others:
• SVC (kernel trick)
• GaussianNB, ComplementNB
• MLPClassifier (simple neural net)
        `
      },

      "Ensemble Methods": {
        title: "Ensemble Learning – Bagging, Boosting, Stacking",
        content: `
Scikit-learn offers excellent ensemble support:

• Bagging: RandomForestClassifier / BaggingClassifier
• Boosting: GradientBoostingClassifier, HistGradientBoostingClassifier, AdaBoostClassifier
• Voting: VotingClassifier (hard / soft)
• Stacking: StackingClassifier (very powerful in 2025–2026 competitions)
        `,
        example: `
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier, StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score

estimators = [
    ('rf', RandomForestClassifier(n_estimators=200, random_state=42)),
    ('gb', GradientBoostingClassifier(n_estimators=150, random_state=42))
]

stack = StackingClassifier(
    estimators=estimators,
    final_estimator=LogisticRegression(),
    cv=5
)

# scores = cross_val_score(stack, X, y, cv=5, scoring='roc_auc')
        `
      },

      "Regression Models": {
        title: "Regression Algorithms",
        content: `
Common regressors:

• LinearRegression, Ridge, Lasso, ElasticNet
• SGDRegressor
• DecisionTreeRegressor, RandomForestRegressor, GradientBoostingRegressor
• HistGradientBoostingRegressor
• SVR, Kernel Ridge
        `
      },

      "Model Evaluation Metrics": {
        title: "Classification & Regression Metrics",
        content: `
Classification:
• accuracy_score
• precision_score, recall_score, f1_score
• roc_auc_score, average_precision_score
• confusion_matrix, ConfusionMatrixDisplay
• classification_report

Regression:
• mean_squared_error, mean_absolute_error, r2_score
• mean_absolute_percentage_error
        `,
        example: `
from sklearn.metrics import classification_report, ConfusionMatrixDisplay
import matplotlib.pyplot as plt

# After prediction
print(classification_report(y_test, y_pred))

ConfusionMatrixDisplay.from_predictions(y_test, y_pred, cmap='Blues')
plt.title("Confusion Matrix - Breast Cancer")
plt.show()
        `
      },

      "Hyperparameter Tuning": {
        title: "GridSearchCV / RandomizedSearchCV / HalvingGridSearchCV",
        content: `
Modern tuning approaches (2025–2026):

• RandomizedSearchCV – usually best starting point
• HalvingGridSearchCV / HalvingRandomSearchCV – successive halving
• Optuna, Hyperopt, scikit-optimize – Bayesian / TPE search (outside sklearn)
        `
      },

      "Feature Selection Techniques": {
        title: "Feature Selection – Filter, Wrapper, Embedded",
        content: `
Filter methods:
• VarianceThreshold
• SelectKBest, SelectPercentile (f_classif, mutual_info_classif, chi2)

Wrapper:
• Recursive Feature Elimination (RFE)

Embedded:
• Lasso (L1 penalty)
• tree.feature_importances_
• SelectFromModel
        `
      }
    },

    "🚀 Advanced & Complementary Libraries": {

      "XGBoost – Gradient Boosting Leader": {
        title: "XGBoost – Extreme Gradient Boosting",
        content: `
Still (2026) one of the strongest classical ML libraries.

Advantages over sklearn GBM:
• Built-in regularization
• Tree pruning
• GPU support
• Early stopping
• Custom objectives
        `
      },

      "LightGBM – Microsoft Fast GBM": {
        title: "LightGBM – High Performance GBM",
        content: `
Key advantages:
• Histogram-based splitting → faster training
• Leaf-wise growth → better accuracy (sometimes)
• Native categorical feature support
• GPU & distributed training
        `
      },

      "CatBoost – Categorical Boosting": {
        title: "CatBoost – Yandex Categorical Booster",
        content: `
Best features:
• Ordered boosting → reduces overfitting
• Native categorical handling (no encoding needed)
• GPU support
• Very good out-of-the-box performance
        `
      },

      "Imbalanced-learn – Handling Class Imbalance": {
        title: "imbalanced-learn – Resampling Techniques",
        content: `
Popular methods:
Over-sampling: SMOTE, ADASYN, BorderlineSMOTE
Under-sampling: RandomUnderSampler, NearMiss, TomekLinks
Combination: SMOTEENN, SMOTETomek
        `
      },

      "Statsmodels – Statistical Modeling": {
        title: "Statsmodels – Classical Statistics & Econometrics",
        content: `
When you need:
• Detailed statistical summaries (p-values, confidence intervals)
• OLS, GLM, Logit, Probit
• Time series (ARIMA, SARIMAX, VAR)
• ANOVA, MANOVA
        `
      },

      "Joblib & pickle – Model Persistence": {
        title: "Saving & Loading Models (joblib recommended)",
        content: `
joblib is usually faster than pickle for scikit-learn models (especially large arrays)
        `
      }
    },

    "🧪 End-to-End Modeling Example": {
      "Complete Classification Pipeline": {
        title: "End-to-End scikit-learn Pipeline Example",
        content: `
Putting it all together: preprocessing + modeling + evaluation
        `,
        example: `\
# Full realistic pipeline example (breast cancer dataset)
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, RandomizedSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, roc_auc_score
from sklearn.pipeline import Pipeline
from scipy.stats import randint

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, stratify=y, random_state=42)

pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("clf", RandomForestClassifier(random_state=42, n_jobs=-1))
])

param_dist = {
    "clf__n_estimators": randint(100, 500),
    "clf__max_depth": [None, 10, 20, 30],
    "clf__min_samples_split": randint(2, 10),
    "clf__min_samples_leaf": randint(1, 5)
}

search = RandomizedSearchCV(
    pipe, param_dist, n_iter=30, cv=5, scoring='roc_auc',
    n_jobs=-1, random_state=42, verbose=1
)

search.fit(X_train, y_train)

print("Best ROC-AUC:", search.best_score_.round(4))
print("Best params:", search.best_params_)

y_pred = search.predict(X_test)
y_prob = search.predict_proba(X_test)[:,1]

print("\\nTest set performance:")
print(classification_report(y_test, y_pred))
print("Test ROC-AUC:", roc_auc_score(y_test, y_prob).round(4))
        `
      }
    }
  };

  // ────────────────────────────────────────────────
  //  Sidebar resize logic (same as before)
  // ────────────────────────────────────────────────

const handleMouseDown = () => setIsDragging(true);

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 480);
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Flatten topics for lookup
  const allTopics = Object.values(sections).reduce(
    (acc, group) => ({ ...acc, ...group }),
    {}
  );

  const selectedContent = allTopics[selected] || null;

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>📊 Data Science & Machine Learning with Python</h1>
        <input
          type="text"
          placeholder="Search topics (scikit-learn, pipeline, xgboost...)"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <aside className="sidebar" style={{ width: sidebarWidth }}>
        {Object.keys(sections).map((section) => {
          const filtered = Object.keys(sections[section]).filter((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
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

      <div className="resizer" onMouseDown={handleMouseDown} />

      <main className="content">
        {selectedContent ? (
          <>
            <h2>{selectedContent.title}</h2>

            {/* This is the key part — now using ReactMarkdown */}
            <div className="content-text markdown-body">
              <ReactMarkdown>{selectedContent.content}</ReactMarkdown>
            </div>

            {selectedContent.example && (
              <div className="example-section">
                <h4>Example Code</h4>
                <pre className="code-block python">
                  <code>{selectedContent.example.trim()}</code>
                </pre>
              </div>
            )}
          </>
        ) : (
          <p style={{ color: "#888", fontStyle: "italic", padding: "2rem" }}>
            Select a topic from the sidebar
          </p>
        )}
      </main>
    </div>
  );
}
