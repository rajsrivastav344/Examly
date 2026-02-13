// DevOps.jsx
import React, { useState } from "react";
import "./All.css";

export default function DevOps() {
  const [selected, setSelected] = useState("DevOps Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "⚙️ DevOps Fundamentals": {
      "DevOps Introduction": {
        title: "DevOps Introduction",
        content: `
DevOps is a cultural and technical movement that integrates Development (Dev) and Operations (Ops) to deliver software faster, more reliably, and with higher quality.

Core principles (CALMS):
- Culture: Collaboration, shared responsibility
- Automation: Everything possible (build, test, deploy, infra)
- Lean: Eliminate waste, continuous improvement
- Measurement: Metrics, monitoring, feedback loops
- Sharing: Knowledge, tools, failures

Key benefits:
- Faster time-to-market (from months to minutes)
- Higher deployment frequency & reliability
- Improved collaboration & employee satisfaction
- Reduced failure rates & faster recovery (MTTR)`,
        example: `<p>Amazon deploys code changes every ~11.6 seconds on average (2025 stats)</p>`,
        graphic: `<svg width="420" height="180" viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="60" width="100" height="60" fill="#bbdefb" stroke="#1976d2"/>
  <text x="80" y="95" text-anchor="middle">Dev</text>
  <polygon points="140,90 160,70 180,90 160,110" fill="#fff9c4"/>
  <text x="160" y="95" text-anchor="middle">→</text>
  <rect x="190" y="60" width="100" height="60" fill="#c8e6c9" stroke="#388e3c"/>
  <text x="240" y="95" text-anchor="middle">Ops</text>
  <polygon points="300,90 320,70 340,90 320,110" fill="#c8e6c9"/>
  <text x="320" y="95" text-anchor="middle">→</text>
  <rect x="350" y="60" width="100" height="60" fill="#f8bbd0" stroke="#c2185b"/>
  <text x="400" y="95" text-anchor="middle">F/B</text>
  <circle cx="210" cy="150" r="15" fill="#ffecb3"/>
  <text x="210" y="155" text-anchor="middle">∞</text>
</svg>`,
      },
      "DevOps vs Traditional IT/Dev": {
        title: "DevOps vs Traditional IT/Dev",
        content: `
Traditional (Waterfall/Siloed):
- Long release cycles (months/quarters)
- Manual deployments
- Separate teams (finger-pointing)
- Reactive fixes

DevOps (Agile + Automation):
- Frequent releases (daily/multiple per day)
- Automated pipelines
- Shared ownership ("You build it, you run it")
- Proactive monitoring & resilience

2025–2026 shift: Platform Engineering + Internal Developer Platforms (IDPs)`,
        example: `<p>Traditional: 6-month release with downtime. DevOps: Blue-green zero-downtime deploy</p>`,
      },
    },

    "🔄 DevOps Lifecycle & Practices": {
      "DevOps Lifecycle": {
        title: "DevOps Lifecycle",
        content: `
Infinite loop (CAMEL or similar):
- Plan → Code → Build → Test → Release → Deploy → Operate → Monitor → Feedback

Key practices:
- CI (Continuous Integration): Frequent code merges + automated tests
- CD (Continuous Delivery): Automated release to staging
- CD (Continuous Deployment): Auto-deploy to production
- IaC (Infrastructure as Code)
- GitOps
- Observability (not just monitoring)`,
        graphic: `<svg width="500" height="200" viewBox="0 0 500 200">
  <circle cx="250" cy="100" r="80" fill="none" stroke="#1976d2" stroke-width="4"/>
  <text x="250" y="105" text-anchor="middle" font-weight="bold">DevOps Loop</text>
  <text x="100" y="50" font-size="12">Plan</text>
  <text x="150" y="170" font-size="12">Code</text>
  <text x="250" y="190" font-size="12">Build</text>
  <text x="350" y="170" font-size="12">Test</text>
  <text x="400" y="50" font-size="12">Deploy</text>
  <text x="350" y="-10" wait no, adjust for circle
  <!-- Simplified arrows around circle -->
</svg>`,
        example: `<p>GitHub → GitHub Actions → Docker → Kubernetes → Prometheus</p>`,
      },
      "CI/CD Pipelines": {
        title: "CI/CD Pipelines",
        content: `
CI: Developers commit frequently → automated build & test
CD: Automated delivery/deployment

Popular tools:
- GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, Argo CD (GitOps)
- Modern: Tekton, Dagger (pipeline as code)

2025 trend: AI-powered pipelines (auto-healing, test generation)`,
        example: `<pre><code>name: CI/CD
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - run: npm test
    - uses: docker/build-push-action@v5</code></pre>`,
      },
      "Infrastructure as Code (IaC)": {
        title: "Infrastructure as Code (IaC)",
        content: `
Treat infrastructure like software.

Declarative:
- Terraform (multi-cloud)
- Pulumi (any language)
- AWS CDK, Azure Bicep

Imperative: Ansible, Chef, Puppet

Benefits: Versioned, reproducible, reviewed like code`,
        example: `<pre><code>resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t3.micro"
}</code></pre>`,
      },
    },

    "🛠️ Core DevOps Tools & Technologies 2025–2026": {
      "Version Control & Collaboration": {
        title: "Version Control & Collaboration",
        content: `
- Git (GitHub, GitLab, Bitbucket, Gitea)
- Trunk-based development, feature flags
- GitOps: Argo CD, Flux CD (declarative Git-driven ops)`,
      },
      "Containerization & Orchestration": {
        title: "Containerization & Orchestration",
        content: `
- Docker / Podman
- Kubernetes (EKS, AKS, GKE, OpenShift, k3s)
- Alternatives: Nomad, Docker Swarm (niche)
- Serverless: AWS Lambda, Google Cloud Run, Vercel, Knative

2025: eBPF for observability, WASM in containers (Wasmtime)`,
        example: `<pre><code>FROM node:20
COPY . .
RUN npm ci
CMD ["npm", "start"]</code></pre>`,
      },
      "Monitoring, Observability & AIOps": {
        title: "Monitoring, Observability & AIOps",
        content: `
- Metrics: Prometheus + Grafana, Thanos
- Logs: ELK/EFK, Loki, Splunk
- Traces: Jaeger, Zipkin, OpenTelemetry
- AIOps: Anomaly detection, root cause analysis (Dynatrace, New Relic)

2025: OpenTelemetry dominant, AI-driven incident response`,
      },
    },

    "🔒 DevSecOps & Advanced Topics": {
      "DevSecOps": {
        title: "DevSecOps",
        content: `
Shift security left: Integrate into every stage.

Practices:
- SAST/DAST/SCA (SonarQube, Trivy, Snyk)
- Secrets management (HashiCorp Vault, AWS Secrets Manager)
- Policy as Code (OPA/Gatekeeper, Kyverno)
- Supply chain security (SLSA, Sigstore, cosign)`,
        example: `<p>Trivy scans container images in CI for vulnerabilities</p>`,
      },
      "GitOps & Platform Engineering": {
        title: "GitOps & Platform Engineering",
        content: `
GitOps: Declarative Git repo as source of truth for infra/apps.

Platform Engineering: Internal teams build golden paths, IDPs (Backstage, Humanitec, OpsLevel)

2025–2026: Internal Developer Portals become standard`,
      },
    },

    "🌍 Real-World Case Studies": {
      "Netflix (Pioneer of DevOps)": {
        title: "Netflix (Pioneer of DevOps)",
        content: `
- Thousands of microservices
- Spinnaker (CD platform)
- Chaos Engineering (Simian Army)
- Fully automated, canary deployments
- High resilience via redundancy`,
        example: `<p>Chaos Monkey randomly terminates instances to test resilience</p>`,
      },
      "Amazon & AWS": {
        title: "Amazon & AWS",
        content: `
- "Two-pizza teams"
- You build it, you run it
- Extensive use of Lambda, ECS/Fargate, CodePipeline
- Internal tools influenced AWS services`,
      },
      "Google & SRE": {
        title: "Google & SRE",
        content: `
Site Reliability Engineering (SRE) book principles:
- Error budgets
- SLOs/SLIs
- Automation over toil
- Adopted widely (Borg → Kubernetes)`,
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
        <h1>⚙️ DevOps Dashboard</h1>
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