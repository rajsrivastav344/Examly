// Cloud.jsx
import React, { useState } from "react";
import "./All.css";

export default function Cloud() {
  const [selected, setSelected] = useState("Cloud Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "☁️ Cloud Computing Fundamentals": {
      "Cloud Introduction": {
        title: "Cloud Introduction",
        content: `
Cloud computing is the on-demand delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale.

Key benefits:
- Pay only for what you use (cost efficiency)
- Scale resources up or down instantly (scalability)
- Access from anywhere with internet (flexibility)
- Automatic updates and maintenance
- Disaster recovery and high availability
- Global data centers for low latency

Cloud computing eliminates the need to own and maintain physical hardware, allowing organizations to focus on core business.`,
        example: `<ul>
  <li>Storing files on Google Drive or Dropbox</li>
  <li>Running applications on AWS or Azure without owning servers</li>
  <li>Using Salesforce for CRM without installing software locally</li>
</ul>`,
        // Images removed; replaced with inline SVG graphics below in some sections
      },
      "SaaS (Software as a Service)": {
        title: "SaaS (Software as a Service)",
        content: `
SaaS delivers fully managed software applications over the internet on a subscription basis. Users access the software via a web browser or mobile app—no installation, updates, or infrastructure management required.

Core characteristics:
- Multi-tenant architecture (shared infrastructure)
- Automatic updates and patches by provider
- Scalable on demand
- Accessible from any device with internet

Advantages:
- Lower upfront costs
- Rapid deployment
- Easy integration with other services
- Vendor-managed security and compliance`,
        example: `<ul>
  <li>Google Workspace (Docs, Sheets, Gmail, Drive)</li>
  <li>Microsoft 365 (Word, Excel, Teams)</li>
  <li>Salesforce CRM</li>
  <li>Zoom, Slack, Dropbox</li>
  <li>Adobe Creative Cloud</li>
</ul>`,
      },
      "PaaS (Platform as a Service)": {
        title: "PaaS (Platform as a Service)",
        content: `
PaaS provides a complete development and deployment environment in the cloud. Developers focus on writing code and managing applications while the provider handles OS, middleware, servers, storage, and networking.

Key features:
- Development tools, databases, and runtime environments
- Auto-scaling and load balancing
- Built-in CI/CD pipelines (in advanced PaaS)
- Pay-per-use pricing

Benefits:
- Faster time-to-market
- Reduced operational complexity
- Standardized environments across teams`,
        example: `<ul>
  <li>Heroku</li>
  <li>Google App Engine</li>
  <li>Microsoft Azure App Service</li>
  <li>AWS Elastic Beanstalk</li>
  <li>Vercel, Render, Netlify (modern PaaS)</li>
</ul>`,
      },
      "IaaS (Infrastructure as a Service)": {
        title: "IaaS (Infrastructure as a Service)",
        content: `
IaaS delivers virtualized computing resources over the internet (virtual machines, storage, networks). Users have full control over OS, applications, and data, while the provider manages physical hardware.

Core components:
- Virtual servers (compute instances)
- Block/object storage
- Virtual networks and firewalls
- Load balancers

Use cases:
- Lift-and-shift migrations
- Testing environments
- Custom infrastructure needs
- High-performance computing`,
        example: `<ul>
  <li>Amazon EC2 (AWS)</li>
  <li>Azure Virtual Machines</li>
  <li>Google Compute Engine</li>
  <li>DigitalOcean Droplets</li>
  <li>Oracle Cloud Infrastructure</li>
</ul>`,
      },
      "Deployment Models": {
        title: "Deployment Models",
        content: `
1. Public Cloud
   - Owned and operated by third-party providers
   - Shared infrastructure, multi-tenant
   - Examples: AWS, Azure, Google Cloud
   - Best for: Startups, cost-sensitive workloads

2. Private Cloud
   - Dedicated infrastructure for a single organization
   - On-premises or hosted
   - Higher control, security, compliance
   - Examples: VMware, OpenStack, OpenShift

3. Hybrid Cloud
   - Combination of public + private
   - Orchestration between environments
   - Use cases: Bursting, data sovereignty

4. Community Cloud
   - Shared by organizations with similar requirements
   - Examples: Government clouds, healthcare consortia`,
        example: `<ul>
  <li>Public: Netflix on AWS</li>
  <li>Private: Banks using on-prem OpenStack</li>
  <li>Hybrid: Sensitive data on private, web traffic on public</li>
</ul>`,
      },
      "Major Cloud Providers": {
        title: "Major Cloud Providers",
        content: `
- AWS (Amazon Web Services): Market leader, broadest service portfolio
- Microsoft Azure: Strong enterprise integration, hybrid focus
- Google Cloud Platform (GCP): AI/ML leadership, data analytics
- Others: IBM Cloud, Oracle Cloud, Alibaba Cloud, Huawei Cloud

Comparison highlights:
- AWS: 200+ services, global reach
- Azure: Best for Microsoft ecosystems
- GCP: BigQuery, TensorFlow, Kubernetes-native`,
        example: `<ul>
  <li>AWS: EC2, S3, Lambda, RDS</li>
  <li>Azure: Virtual Machines, Blob Storage, Functions</li>
  <li>GCP: Compute Engine, Cloud Storage, Cloud Functions</li>
</ul>`,
      },
    },
    "☁️ Advanced Cloud Topics": {
      "Serverless Computing": {
        title: "Serverless Computing",
        content: `
Serverless (FaaS) allows developers to run code without provisioning or managing servers. Execution is event-driven and billed per invocation.

Key services:
- AWS Lambda
- Azure Functions
- Google Cloud Functions
- Vercel, Netlify Functions

Benefits:
- Automatic scaling
- No idle costs
- Focus on code only
- Built-in high availability

Drawbacks:
- Cold starts
- Vendor lock-in
- Limited execution time`,
        example: `<p>API backend: Upload image → Trigger Lambda → Process → Store in S3</p>`,
      },
      "Containers & Orchestration": {
        title: "Containers & Orchestration",
        content: `
Containers (Docker) package applications with dependencies. Kubernetes (K8s) orchestrates containers at scale.

Core concepts:
- Docker: Container runtime
- Kubernetes: Pods, Deployments, Services, Ingress
- Managed services: EKS, AKS, GKE

Use cases:
- Microservices architectures
- CI/CD pipelines
- Consistent environments (dev/prod)`,
        example: `<pre><code>docker run -d -p 80:80 nginx
kubectl apply -f deployment.yaml</code></pre>`,
      },
      "Cloud Security": {
        title: "Cloud Security",
        content: `
Shared Responsibility Model:
- Provider: Physical security, hardware
- Customer: OS, applications, data, IAM

Key practices:
- IAM (Identity & Access Management)
- Encryption at rest/transit
- Network security (VPCs, Security Groups)
- Logging & monitoring (CloudTrail, Sentinel)
- Compliance (GDPR, HIPAA, SOC2)

Zero Trust: Verify every request, assume breach`,
        example: `<ul>
  <li>AWS IAM roles/policies</li>
  <li>Azure AD + Conditional Access</li>
  <li>GCP IAM + VPC Service Controls</li>
</ul>`,
      },
      "Cloud Migration Strategies": {
        title: "Cloud Migration Strategies",
        content: `
6 R's of Migration (Gartner):
1. Rehost (lift-and-shift)
2. Replatform (lift-tinker-and-shift)
3. Refactor/Re-architect (cloud-native)
4. Repurchase (SaaS replacement)
5. Retire (decommission)
6. Retain (keep on-prem)

Tools: AWS Migration Hub, Azure Migrate, Google Migrate

Phases: Assess → Plan → Migrate → Optimize`,
        example: `<p>Example: Legacy app → Rehost on EC2 → Later refactor to Lambda + API Gateway</p>`,
      },
      "Big Data & Analytics in Cloud": {
        title: "Big Data & Analytics in Cloud",
        content: `
Services:
- AWS: EMR, Glue, Athena, Redshift
- Azure: Synapse Analytics, Databricks
- GCP: BigQuery, Dataflow, Dataproc

Patterns:
- Data lakes (S3, ADLS, GCS)
- ETL/ELT pipelines
- Real-time streaming (Kafka, Kinesis)

Modern stack: Spark, Airflow, dbt`,
        example: `<p>ETL pipeline: S3 → Glue → Redshift → QuickSight dashboard</p>`,
      },
      "AI/ML in Cloud": {
        title: "AI/ML in Cloud",
        content: `
Managed services:
- AWS SageMaker
- Azure Machine Learning
- Google AI Platform / Vertex AI

Pre-built models:
- Vision, Speech, NLP APIs
- AutoML tools

MLOps: Model training, versioning, deployment, monitoring`,
        example: `<ul>
  <li>Image recognition with Rekognition</li>
  <li>Chatbot with Dialogflow</li>
  <li>Recommendation engines</li>
</ul>`,
      },
    },
    "☁️ Use Cases & Real-World Examples": {
      "Netflix Case Study": {
        title: "Netflix Case Study",
        content: `
Netflix migrated to AWS in 2008–2010 after a major outage.

Architecture:
- Microservices (500+ services)
- AWS EC2 + Auto Scaling
- S3 for media storage
- Cassandra/Redis for databases
- Chaos Engineering (Simian Army)
- Spinnaker for CI/CD

Scale: 200M+ subscribers, billions of hours streamed monthly

Lessons:
- Design for failure
- Embrace cloud-native patterns
- Continuous optimization`,
        example: `<p>Global CDN + Open Connect appliances + AWS for control plane</p>`,
      },
      "Airbnb Case Study": {
        title: "Airbnb Case Study",
        content: `
Airbnb uses AWS extensively:

- Millions of listings
- Dynamic pricing with ML
- Search engine with Elasticsearch
- Fraud detection systems
- Data pipeline with Spark + Airflow

Key services:
- EC2, RDS, ElastiCache
- Lambda for serverless tasks
- S3 + CloudFront for assets
- SageMaker for recommendations`,
        example: `<p>Search: Elasticsearch on EC2 + personalization via ML models</p>`,
      },
      "Capital One Case Study": {
        title: "Capital One Case Study",
        content: `
Capital One is all-in on AWS (since 2015):

- Serverless-first strategy
- Over 1,000 Lambda functions
- Microservices on ECS/Fargate
- Data lake on S3 + Athena
- Strong security & compliance focus

Benefits realized:
- Faster innovation
- Cost savings
- Improved security posture`,
        example: `<p>Customer 360 view: Data lake + ML for fraud + personalized offers</p>`,
      },
      "ER Diagram Example (Cloud Database)": {
        title: "ER Diagram Example (Cloud Database)",
        content: `
Simple E-commerce ER (text representation):

User ──(1:N)── Order ──(1:N)── OrderItem ──(N:1)── Product
User ──(1:N)── Payment
Product ──(N:M)── Category

In cloud:
- Store in RDS (PostgreSQL/MySQL)
- Or DynamoDB (NoSQL) with single-table design
- Use Graph DB (Neptune) for complex relationships`,
        example: `<pre><code>-- PostgreSQL example
CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE orders (id SERIAL PRIMARY KEY, user_id INT REFERENCES users(id));
CREATE TABLE products (id SERIAL PRIMARY KEY, name TEXT, price DECIMAL);</code></pre>`,
        // Graphics: Simple SVG ER representation (inline)
        graphic: `<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="80" height="40" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="90" y="75" text-anchor="middle">User</text>
  <rect x="200" y="50" width="80" height="40" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="240" y="75" text-anchor="middle">Order</text>
  <rect x="350" y="50" width="80" height="40" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="390" y="75" text-anchor="middle">Product</text>
  <line x1="130" y1="70" x2="200" y2="70" stroke="#1976d2" marker-end="url(#arrow)"/>
  <line x1="280" y1="70" x2="350" y2="70" stroke="#1976d2" marker-end="url(#arrow)"/>
  <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1976d2"/></marker></defs>
</svg>`,
      },
      "Simple Cloud Architecture Diagram": {
        title: "Simple Cloud Architecture Diagram",
        content: `
Typical 3-tier web app on cloud:

Client (Browser/Mobile) → CDN → API Gateway/LB → Compute (EC2/Lambda/Containers) → Database (RDS/DynamoDB) → Storage (S3)

With monitoring, logging, IAM, VPC`,
        graphic: `<svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="20" width="400" height="40" fill="#bbdefb" stroke="#1976d2" rx="5"/>
  <text x="250" y="45" text-anchor="middle" font-weight="bold">Internet / Users</text>
  <rect x="100" y="80" width="300" height="40" fill="#c8e6c9" stroke="#388e3c" rx="5"/>
  <text x="250" y="105" text-anchor="middle">CDN / Load Balancer</text>
  <rect x="150" y="140" width="200" height="40" fill="#fff3e0" stroke="#f57c00" rx="5"/>
  <text x="250" y="165" text-anchor="middle">Application (EC2 / Lambda / K8s)</text>
  <rect x="180" y="200" width="140" height="40" fill="#f3e5f5" stroke="#7b1fa2" rx="5"/>
  <text x="250" y="225" text-anchor="middle">Database (RDS / DynamoDB)</text>
  <rect x="200" y="260" width="100" height="30" fill="#e0f2f1" stroke="#00796b" rx="5"/>
  <text x="250" y="280" text-anchor="middle">S3 Storage</text>
  <line x1="250" y1="60" x2="250" y2="80" stroke="#000"/>
  <line x1="150" y1="120" x2="150" y2="140" stroke="#000"/>
  <line x1="350" y1="120" x2="350" y2="140" stroke="#000"/>
  <line x1="200" y1="180" x2="200" y2="200" stroke="#000"/>
  <line x1="300" y1="180" x2="300" y2="200" stroke="#000"/>
</svg>`,
      },
    },
  };

  // === Sidebar Resize ===
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  const selectedContent =
    Object.values(sections)
      .flatMap((topics) => Object.values(topics).find((t) => t.title === selected) || [])
      .filter(Boolean)[0] || { title: selected, content: "Content not found." };

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>☁️ Cloud Computing Dashboard</h1>
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
          const filteredTopics = Object.keys(sections[section]).filter((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredTopics.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filteredTopics.map((topic) => (
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
          <p style={{ whiteSpace: "pre-wrap" }}>{selectedContent.content}</p>
          {selectedContent.example && (
            <pre className="code-block">
              <code>{selectedContent.example}</code>
            </pre>
          )}
          {/* Inline SVG graphics where provided (no external images) */}
          {selectedContent.graphic && (
            <div
              dangerouslySetInnerHTML={{ __html: selectedContent.graphic }}
              style={{ margin: "20px 0", textAlign: "center" }}
            />
          )}
        </div>
      </main>
    </div>
  );
}