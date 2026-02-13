// Cyber.jsx
import React, { useState } from "react";
import "./All.css";

export default function Cyber() {
  const [selected, setSelected] = useState("Cybersecurity Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🛡️ Cybersecurity Fundamentals": {
      "Cybersecurity Introduction": {
        title: "Cybersecurity Introduction",
        content: `
Cybersecurity protects systems, networks, programs, and data from digital attacks, damage, or unauthorized access.

Core principles (CIA Triad):
- Confidentiality: Only authorized users access data
- Integrity: Data remains accurate and unaltered
- Availability: Systems and data accessible when needed

Extended triad often includes Authenticity & Non-repudiation.

Why it matters:
- Rising threats: ransomware, state-sponsored attacks
- Economic impact: trillions in damages annually
- Personal & national security risks`,
        graphic: `<svg width="400" height="220" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="110" r="80" fill="#e3f2fd" stroke="#1976d2" stroke-width="3"/>
  <text x="200" y="80" text-anchor="middle" font-weight="bold">CIA Triad</text>
  <text x="200" y="110" text-anchor="middle" font-size="18">Confidentiality</text>
  <text x="120" y="150" text-anchor="middle">Integrity</text>
  <text x="280" y="150" text-anchor="middle">Availability</text>
  <line x1="200" y1="30" x2="200" y2="190" stroke="#1976d2" stroke-dasharray="5,5"/>
</svg>`,
        example: `<p>HTTPS ensures confidentiality via encryption + integrity via certificates.</p>`,
      },
      "Hacker Types": {
        title: "Hacker Types",
        content: `
- White Hat (Ethical): Authorized testing (penetration testers)
- Black Hat: Malicious, illegal access for gain
- Gray Hat: Unauthorized but disclose findings (sometimes rewarded)
- Script Kiddies: Use pre-made tools, low skill
- Hacktivists: Motivated by ideology (e.g., Anonymous)
- State-Sponsored (APT): Advanced Persistent Threats by governments`,
        example: `<ul>
  <li>Ethical: Bug bounty programs (Google, Facebook)</li>
  <li>Black Hat: Ransomware operators</li>
</ul>`,
      },
    },

    "⚠️ Common Threats & Attacks": {
      "Phishing & Spear Phishing": {
        title: "Phishing & Spear Phishing",
        content: `
Deceptive attempts to obtain sensitive info by pretending to be trustworthy.

Types:
- Email phishing
- Spear (targeted)
- Whaling (high-profile)
- Vishing (voice), Smishing (SMS)

2025 trends: AI-generated deepfake voices/emails, BEC (Business Email Compromise)`,
        example: `<p>Fake Microsoft login page → credential theft</p>`,
        useCase: `Colonial Pipeline 2021 → initial access via phishing`,
      },
      "Malware Types": {
        title: "Malware Types",
        content: `
- Virus: Attaches to files, spreads on execution
- Worm: Self-replicates over networks
- Trojan: Disguised legitimate software
- Ransomware: Encrypts data, demands ransom
- Spyware/Adware: Monitors/collects data
- Rootkit: Hides presence
- Fileless: Lives in memory (harder to detect)`,
        example: `<p>WannaCry (2017): EternalBlue exploit + ransomware</p>`,
      },
      "Ransomware Evolution": {
        title: "Ransomware Evolution",
        content: `
Modern ransomware:
- Double extortion (encrypt + steal data)
- Triple (also DDoS victims)
- RaaS (Ransomware-as-a-Service)

2024–2025 notable: Change Healthcare (190M records, $22M+ ransom paid), Marks & Spencer retail disruption`,
        example: `<p>LockBit, Conti, BlackCat groups dominant in 2025</p>`,
      },
      "DDoS Attacks": {
        title: "DDoS Attacks",
        content: `
Overwhelm target with traffic from botnets.

Types:
- Volumetric
- Protocol
- Application layer (Layer 7)

Mirai botnet (2016) → modern IoT botnets still active`,
        example: `<p>2024–2025 spikes in HTTP/2 Rapid Reset attacks</p>`,
      },
      "SQL Injection & XSS": {
        title: "SQL Injection & XSS",
        content: `
SQLi: Inject malicious SQL → bypass auth, extract/drop data
XSS: Inject scripts → steal cookies, deface, keylog

OWASP Top 10 2025: Broken Access Control, Misconfiguration, Supply Chain still top`,
      },
      "Man-in-the-Middle (MitM)": {
        title: "Man-in-the-Middle (MitM)",
        content: `
Intercept communication → eavesdrop, alter data.

Common on open Wi-Fi, ARP spoofing, SSL stripping.`,
        graphic: `<svg width="450" height="120" viewBox="0 0 450 120">
  <rect x="30" y="40" width="80" height="40" fill="#c8e6c9" stroke="#388e3c"/>
  <text x="70" y="65" text-anchor="middle">Victim A</text>
  <rect x="340" y="40" width="80" height="40" fill="#c8e6c9" stroke="#388e3c"/>
  <text x="380" y="65" text-anchor="middle">Victim B</text>
  <rect x="180" y="20" width="90" height="80" fill="#fff3e0" stroke="#f57c00"/>
  <text x="225" y="60" text-anchor="middle">Attacker</text>
  <line x1="110" y1="60" x2="180" y2="60" stroke="#f57c00" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="270" y1="60" x2="340" y2="60" stroke="#f57c00" stroke-width="2" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f57c00"/></marker></defs>
</svg>`,
      },
      "Supply Chain Attacks": {
        title: "Supply Chain Attacks",
        content: `
Compromise vendor → affect many customers.

2024–2025 examples: Snowflake credential stuffing → downstream breaches, SolarWinds (2020 legacy), Codecov (2021)`,
        example: `<p>Third-party SaaS OAuth compromise (Salesforce-related 2025 mega leak)</p>`,
      },
    },

    "🛡️ Defensive Strategies & Best Practices": {
      "Zero Trust Architecture": {
        title: "Zero Trust Architecture",
        content: `
Never trust, always verify.
- Assume breach
- Least privilege
- Continuous validation
- Micro-segmentation

2025 trend: Widespread adoption in enterprises`,
        graphic: `<svg width="400" height="180" viewBox="0 0 400 180">
  <rect x="50" y="50" width="300" height="80" fill="#fff" stroke="#d32f2f" stroke-width="4" stroke-dasharray="10,5"/>
  <text x="200" y="90" text-anchor="middle" font-weight="bold" fill="#d32f2f">Zero Trust Boundary</text>
  <circle cx="100" cy="40" r="15" fill="#1976d2"/>
  <text x="100" y="45" text-anchor="middle" fill="white">User</text>
  <circle cx="300" cy="40" r="15" fill="#388e3c"/>
  <text x="300" y="45" text-anchor="middle" fill="white">Resource</text>
  <text x="200" y="140" text-anchor="middle">Verify Identity + Context Every Time</text>
</svg>`,
      },
      "Encryption & VPN": {
        title: "Encryption & VPN",
        content: `
- At-rest (disk encryption)
- In-transit (TLS 1.3)
- End-to-end (Signal, WhatsApp)

VPN: Tunnels traffic, hides IP, protects on public Wi-Fi`,
        example: `<p>Use AES-256 + perfect forward secrecy</p>`,
      },
      "Multi-Factor Authentication (MFA)": {
        title: "Multi-Factor Authentication (MFA)",
        content: `
Something you know (password) + have (phone/app) + are (biometric)

2025: Push for phishing-resistant MFA (FIDO2, passkeys)`,
        example: `<p>Google Authenticator, YubiKey, Microsoft Authenticator</p>`,
      },
      "Firewall & IDS/IPS": {
        title: "Firewall & IDS/IPS",
        content: `
- Next-Gen Firewalls (NGFW): App awareness, threat intel
- Intrusion Detection/Prevention Systems: Signature + anomaly-based`,
        example: `<pre><code>// Pseudocode firewall rule
ALLOW TCP from trusted_ips TO server:443
DENY ALL from any TO server:*</code></pre>`,
      },
      "Incident Response": {
        title: "Incident Response",
        content: `
NIST phases:
1. Preparation
2. Identification
3. Containment
4. Eradication
5. Recovery
6. Lessons Learned`,
        graphic: `<svg width="500" height="100" viewBox="0 0 500 100">
  <rect x="20" y="30" width="80" height="40" fill="#bbdefb"/>
  <text x="60" y="55" text-anchor="middle">Prepare</text>
  <polygon points="110,50 130,30 150,50 130,70" fill="#bbdefb"/>
  <text x="130" y="55" text-anchor="middle">→</text>
  <rect x="160" y="30" width="80" height="40" fill="#fff9c4"/>
  <text x="200" y="55" text-anchor="middle">Identify</text>
  <polygon points="250,50 270,30 290,50 270,70" fill="#fff9c4"/>
  <text x="270" y="55" text-anchor="middle">→</text>
  <rect x="300" y="30" width="80" height="40" fill="#c8e6c9"/>
  <text x="340" y="55" text-anchor="middle">Contain</text>
  <!-- more phases abbreviated -->
</svg>`,
      },
    },

    "🌐 Emerging Trends & Advanced Topics 2025–2026": {
      "AI in Cybersecurity": {
        title: "AI in Cybersecurity",
        content: `
Dual-use:
- Defense: Anomaly detection, automated response, threat hunting
- Attack: AI phishing, deepfakes, polymorphic malware

Trend: Agentic AI for autonomous security ops`,
        example: `<p>AI-generated convincing phishing emails (2025 surge)</p>`,
      },
      "Quantum Computing Threats": {
        title: "Quantum Computing Threats",
        content: `
Quantum breaks RSA/ECDSA → need post-quantum cryptography (NIST standards: Kyber, Dilithium)`,
        example: `<p>Migrate to hybrid crypto now</p>`,
      },
      "Cloud & Supply Chain Security": {
        title: "Cloud & Supply Chain Security",
        content: `
Misconfigurations common (S3 buckets public).
SBOM (Software Bill of Materials) mandatory in many regs`,
        example: `<p>Snowflake 2024 credential stuffing → lessons for 2025</p>`,
      },
    },

    "📊 Real-World Case Studies": {
      "Change Healthcare Ransomware (2024–2025)": {
        title: "Change Healthcare Ransomware (2024–2025)",
        content: `
BlackCat/ALPHV attacked → disrupted US healthcare payments.
190M+ records impacted.
Lessons: Segment networks, strong backups, rapid IR`,
        example: `<p>Largest healthcare breach in US history</p>`,
      },
      "Marks & Spencer Retail Attack (2025)": {
        title: "Marks & Spencer Retail Attack (2025)",
        content: `
Major UK retailer hit → supply chain + ransomware.
Disrupted operations, highlighted retail vulnerabilities`,
        example: `<p>One of most financially damaging UK attacks</p>`,
      },
      "National Public Data Mega Leak (2024)": {
        title: "National Public Data Mega Leak (2024)",
        content: `
~2.9B records exposed → poor security practices.
Led to company collapse & lawsuits`,
        example: `<p>Plaintext passwords publicly accessible</p>`,
      },
    },
  };

  // Sidebar resize
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  // Improved lookup
  let selectedContent = null;
  for (const sec in sections) {
    if (sections[sec][selected]) {
      selectedContent = sections[sec][selected];
      break;
    }
  }
  if (!selectedContent) selectedContent = { title: selected, content: "Select a topic." };

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>🛡️ Cybersecurity Dashboard</h1>
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