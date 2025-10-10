import React, { useState } from "react";
import "./Webdev.css";

export default function Cyber() {
  const [selected, setSelected] = useState("Cybersecurity Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🛡️ Cybersecurity Topics": {
      "Cybersecurity Introduction": {
        title: "Cybersecurity Introduction",
        content:
          "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It ensures confidentiality, integrity, and availability of data.",
        example: "<p>Example: Using antivirus software to protect your computer.</p>",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*ntkg9GQ-j1hJf7uNnY9BQQ.png",
      },
      "Hacker": {
        title: "Hacker",
        content:
          "A hacker is someone who gains unauthorized access to systems or data. Hackers can be ethical (white hat) or malicious (black hat).",
        example: "<p>Example: Ethical hackers test systems to improve security.</p>",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Hacker.jpg",
      },
      "Phishing": {
        title: "Phishing",
        content:
          "Phishing is a cyberattack where attackers impersonate legitimate entities to steal sensitive information like passwords or credit card numbers.",
        example: "<p>Example: Fake emails asking to reset your password.</p>",
        image: "https://www.csoonline.com/wp-content/uploads/2019/06/phishing-100799699-large.jpg",
      },
      "Malware": {
        title: "Malware",
        content:
          "Malware (malicious software) is designed to damage, disrupt, or gain unauthorized access to systems.",
        example: "<p>Example: Viruses, trojans, and ransomware.</p>",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*V8rQhIj3oQq6gzCuhcz_8g.png",
      },
      "Ransomware": {
        title: "Ransomware",
        content:
          "Ransomware encrypts files and demands payment to restore access. It targets individuals and organizations.",
        example: "<p>Example: WannaCry attack.</p>",
        image: "https://www.kaspersky.com/content/en-global/images/repository/isc/2020-images/ransomware-lock-screen.png",
      },
      "Spyware": {
        title: "Spyware",
        content:
          "Spyware secretly monitors user activity and collects data without consent.",
        example: "<p>Example: Keyloggers recording typed passwords.</p>",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Spyware_icon.png",
      },
      "Trojan Horse": {
        title: "Trojan Horse",
        content:
          "A trojan disguises itself as legitimate software but carries malicious payloads.",
        example: "<p>Example: Fake game installer stealing data.</p>",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*6ZtUVsX7EYQkzGZKkPkbRQ.png",
      },
      "Virus": {
        title: "Virus",
        content:
          "A virus is a type of malware that attaches to files and spreads when files are executed or shared.",
        example: "<p>Example: File-infecting viruses like CIH (Chernobyl virus).</p>",
        image: "https://www.techrepublic.com/a/hub/i/r/2018/07/24/5f9c147c-fad3-4398-9f28-0eb23f6a7ee3/resize/1200x/3f212a3c6d2d03e5c73f621a87322a28/virus.jpg",
      },
      "Worm": {
        title: "Worm",
        content:
          "A worm is self-replicating malware that spreads across networks without user interaction.",
        example: "<p>Example: SQL Slammer worm.</p>",
        image: "https://cdn.sonicwall.com/2019-wp-media/2019/09/worm.jpg",
      },
      "Botnet": {
        title: "Botnet",
        content:
          "A botnet is a network of infected computers controlled remotely by attackers to perform attacks or send spam.",
        example: "<p>Example: DDoS attacks using zombie computers.</p>",
        image: "https://www.cloudflare.com/img/learning/ddos/glossary/botnet/diagram-botnet-attack.svg",
      },
      "DDoS Attack": {
        title: "DDoS Attack",
        content:
          "Distributed Denial of Service attacks overwhelm servers with traffic, causing service outages.",
        example: "<p>Example: Mirai botnet attack.</p>",
        image: "https://www.cloudflare.com/img/learning/ddos/what-is-a-ddos-attack/ddos-diagram.svg",
      },
      "SQL Injection": {
        title: "SQL Injection",
        content:
          "Attackers exploit vulnerabilities in web applications to manipulate databases through malicious SQL queries.",
        example: "<p>Example: Using ' OR '1'='1' to bypass login forms.</p>",
        image: "https://cdn.educba.com/academy/wp-content/uploads/2019/12/sql-injection.png",
      },
      "Cross-Site Scripting (XSS)": {
        title: "XSS",
        content:
          "XSS attacks inject malicious scripts into webpages viewed by other users, stealing cookies or session data.",
        example: "<p>Example: Script stealing session tokens.</p>",
        image: "https://www.acunetix.com/blog/wp-content/uploads/2015/11/xss.png",
      },
      "Man-in-the-Middle": {
        title: "Man-in-the-Middle Attack",
        content:
          "Attackers intercept and manipulate communications between two parties.",
        example: "<p>Example: Sniffing unencrypted Wi-Fi traffic.</p>",
        image: "https://www.imperva.com/learn/wp-content/uploads/sites/14/2019/06/Man-in-the-Middle-Attack.png",
      },
      "Social Engineering": {
        title: "Social Engineering",
        content:
          "Manipulating people into divulging confidential information.",
        example: "<p>Example: Phishing emails or phone scams.</p>",
        image: "https://www.techtarget.com/searchsecurity/definition/Social-engineering.jpg",
      },
      "Password Attack": {
        title: "Password Attack",
        content:
          "Attempts to gain unauthorized access by cracking passwords.",
        example: "<p>Example: Brute-force attacks or dictionary attacks.</p>",
        image: "https://cdn.comparitech.com/wp-content/uploads/2020/01/password-hacking.jpg",
      },
      "Rogue Software": {
        title: "Rogue Software",
        content:
          "Fake software claiming to be useful but installs malware or scams users.",
        example: "<p>Example: Fake antivirus software.</p>",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Fake_antivirus.png",
      },
      "Cyber Fraud": {
        title: "Cyber Fraud",
        content:
          "Fraudulent activities online to steal money, data, or identity.",
        example: "<p>Example: Credit card fraud, fake shopping sites.</p>",
        image: "https://www.fbi.gov/investigate/white-collar-crime/cyber-fraud/_jcr_content/par/sysimage.adapt.768.high.jpg",
      },
      "Identity Theft": {
        title: "Identity Theft",
        content:
          "Stealing personal information to impersonate someone.",
        example: "<p>Example: Using stolen SSN to open bank accounts.</p>",
        image: "https://www.identityforce.com/wp-content/uploads/2022/01/identity-theft-banner.png",
      },
      "Zero-Day Attack": {
        title: "Zero-Day Attack",
        content:
          "Exploiting a vulnerability before the developer patches it.",
        example: "<p>Example: Exploiting a new browser vulnerability.</p>",
        image: "https://cdn.solarwinds.com/-/media/solarwinds/swdcv2/security/zero-day-attacks.svg",
      },
      "Firewall": {
        title: "Firewall",
        content:
          "A network security device or software that monitors and filters traffic.",
        example: "<p>Example: Blocking unauthorized access to a server.</p>",
        image: "https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall/_jcr_content/image.img.png/1608947403161.png",
      },
      "Antivirus": {
        title: "Antivirus",
        content:
          "Software that detects, prevents, and removes malware.",
        example: "<p>Example: Avast, Norton, Windows Defender.</p>",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Antivirus_software_icon.png",
      },
      "Encryption": {
        title: "Encryption",
        content:
          "Process of converting data into unreadable code to protect it from unauthorized access.",
        example: "<p>Example: HTTPS encrypting web traffic.</p>",
        image: "https://www.imperva.com/learn/wp-content/uploads/sites/14/2019/06/What-is-Encryption.png",
      },
      "VPN": {
        title: "VPN (Virtual Private Network)",
        content:
          "Encrypts your internet connection and hides your IP address for secure communication.",
        example: "<p>Example: NordVPN, ExpressVPN.</p>",
        image: "https://www.cloudflare.com/img/learning/ddos/glossary/vpn.svg",
      },
      "Two-Factor Authentication": {
        title: "2FA",
        content:
          "Adds an extra layer of security requiring a second verification step.",
        example: "<p>Example: OTP sent to your mobile for login.</p>",
        image: "https://www.csoonline.com/wp-content/uploads/2019/09/2fa.png",
      },
      "Security Patch": {
        title: "Security Patch",
        content:
          "Updates that fix vulnerabilities in software or systems.",
        example: "<p>Example: Windows or Linux security updates.</p>",
        image: "https://www.comparitech.com/wp-content/uploads/2022/07/security-patch.png",
      },
      "Cyber Ethics": {
        title: "Cyber Ethics",
        content:
          "Responsible behavior in the use of computers and internet.",
        example: "<p>Example: Not engaging in hacking, respecting privacy.</p>",
        image: "https://www.techtarget.com/searchsecurity/definition/Cyber-ethics.jpg",
      },
      "Incident Response": {
        title: "Incident Response",
        content:
          "Process of identifying, managing, and mitigating security breaches.",
        example: "<p>Example: Detecting a malware attack and isolating affected systems.</p>",
        image: "https://www.csoonline.com/wp-content/uploads/2019/06/incident-response.png",
      },
      "Cybersecurity Career": {
        title: "Cybersecurity Career",
        content:
          "Various roles: Ethical hacker, security analyst, SOC engineer, penetration tester.",
        example: "<p>Example: Ethical hackers test system vulnerabilities for companies.</p>",
        image: "https://www.cybrary.it/wp-content/uploads/2019/07/cybersecurity-career.jpg",
      },
    },
  };

  // Sidebar Resize
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
      .map((topics) => topics[selected])
      .filter(Boolean)[0] || "";

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
        {typeof selectedContent === "object" ? (
          <div>
            <p>{selectedContent.content}</p>
            {selectedContent.example && (
              <pre className="code-block">
                <code>{selectedContent.example}</code>
              </pre>
            )}
            {selectedContent.image && (
              <img
                src={selectedContent.image}
                alt="Example"
                className="topic-img"
              />
            )}
          </div>
        ) : (
          <p>{selectedContent}</p>
        )}
      </main>
    </div>
  );
}
