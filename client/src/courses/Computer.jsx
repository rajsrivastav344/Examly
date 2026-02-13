// ComputerNetwork.jsx
import React, { useState } from "react";
import "./All.css";

export default function ComputerNetwork() {
  const [selected, setSelected] = useState("Computer Networks Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🌐 Computer Networks Fundamentals": {
      "Computer Networks Introduction": {
        title: "Computer Networks Introduction",
        content: `
A computer network is a set of interconnected computing devices (computers, servers, smartphones, IoT devices, etc.) that can communicate and share resources.

Core goals:
- Resource sharing (files, printers, internet)
- Communication (email, video calls, messaging)
- Data access & distribution
- Cost efficiency & scalability

Key characteristics:
- Topology (physical/logical layout)
- Transmission medium (wired/wireless)
- Protocols (rules for communication)
- Scale (PAN → LAN → MAN → WAN → Internet)`,
        example: `<ul>
  <li>Home Wi-Fi network (LAN + Internet access)</li>
  <li>Global internet (largest WAN)</li>
  <li>Bluetooth connection between phone & earbuds (PAN)</li>
</ul>`,
      },
      "OSI Model": {
        title: "OSI Model",
        content: `
7-layer reference model (ISO standard) to standardize network design & troubleshooting.

Layers (bottom to top):
7. Application — user interface & services (HTTP, FTP, SMTP, DNS)
6. Presentation — data translation, encryption, compression
5. Session — dialog control, synchronization, checkpointing
4. Transport — end-to-end reliability (TCP/UDP)
3. Network — logical addressing & routing (IP)
2. Data Link — physical addressing, error detection (MAC, Ethernet)
1. Physical — bits over medium (cables, signals, hubs)

Mnemonic: "Please Do Not Throw Sausage Pizza Away"`,
        graphic: `<svg width="380" height="420" viewBox="0 0 380 420" xmlns="http://www.w3.org/2000/svg">
  <rect x="80" y="20" width="220" height="40" fill="#ffecb3" stroke="#f57c00"/>
  <text x="190" y="45" text-anchor="middle">7. Application</text>
  <rect x="80" y="70" width="220" height="40" fill="#e1f5fe" stroke="#0288d1"/>
  <text x="190" y="95" text-anchor="middle">6. Presentation</text>
  <rect x="80" y="120" width="220" height="40" fill="#e8f5e9" stroke="#388e3c"/>
  <text x="190" y="145" text-anchor="middle">5. Session</text>
  <rect x="80" y="170" width="220" height="40" fill="#fce4ec" stroke="#c2185b"/>
  <text x="190" y="195" text-anchor="middle">4. Transport</text>
  <rect x="80" y="220" width="220" height="40" fill="#f3e5f5" stroke="#7b1fa2"/>
  <text x="190" y="245" text-anchor="middle">3. Network</text>
  <rect x="80" y="270" width="220" height="40" fill="#fffde7" stroke="#fbc02d"/>
  <text x="190" y="295" text-anchor="middle">2. Data Link</text>
  <rect x="80" y="320" width="220" height="40" fill="#e0f2f1" stroke="#00796b"/>
  <text x="190" y="345" text-anchor="middle">1. Physical</text>
  <text x="190" y="400" text-anchor="middle" font-style="italic">Data flows down on sender, up on receiver</text>
</svg>`,
        example: `<p>HTTPS request: Application (HTTP) → Presentation (TLS) → ... → Physical (Ethernet cable)</p>`,
      },
      "TCP/IP Model": {
        title: "TCP/IP Model",
        content: `
Practical 4-layer (sometimes 5) model used in real-world internet.

Layers:
- Application (HTTP, HTTPS, FTP, SMTP, DNS, SSH)
- Transport (TCP reliable / UDP fast)
- Internet / Network (IP, ICMP, ARP)
- Link / Network Access (Ethernet, Wi-Fi, PPP)

Comparison with OSI:
TCP/IP Application = OSI 5–7
TCP/IP Transport = OSI 4
TCP/IP Internet = OSI 3
TCP/IP Link = OSI 1–2`,
        example: `<p>YouTube video: Application (HTTP/HTTPS) → Transport (TCP) → Internet (IP) → Link (Wi-Fi/Ethernet)</p>`,
      },
    },

    "🏠 Network Types & Topologies": {
      "LAN, WAN, MAN, PAN": {
        title: "LAN, WAN, MAN, PAN",
        content: `
- PAN (Personal Area Network): ~10 m, Bluetooth, Zigbee (phone ↔ watch)
- LAN (Local Area Network): building/campus, Ethernet/Wi-Fi, high speed, low cost
- MAN (Metropolitan Area Network): city-wide, fiber/cable, ISP backbone
- WAN (Wide Area Network): country/global, leased lines, MPLS, satellite, internet

2025 trends: SD-WAN replacing traditional WAN, 5G/6G for wireless WAN`,
        example: `<ul>
  <li>LAN: University campus network</li>
  <li>WAN: Connecting branch offices across India</li>
</ul>`,
      },
      "Network Topologies": {
        title: "Network Topologies",
        content: `
Physical vs Logical topology.

Common types:
- Bus: single cable, terminators (obsolete, collision issues)
- Star: central switch/hub (most common today)
- Ring: token passing (Token Ring, FDDI — rare now)
- Mesh: full/partial — high redundancy (used in WAN cores, wireless mesh)
- Tree: hierarchical (campus networks)
- Hybrid: combination (most real networks)

Advantages/disadvantages depend on cost, fault tolerance, scalability.`,
        graphic: `<svg width="420" height="280" viewBox="0 0 420 280">
  <!-- Star -->
  <text x="70" y="30" font-weight="bold">Star</text>
  <circle cx="100" cy="100" r="30" fill="#e3f2fd" stroke="#1976d2"/>
  <text x="100" y="105" text-anchor="middle">Switch</text>
  <circle cx="40" cy="60" r="15" fill="#bbdefb"/>
  <circle cx="160" cy="60" r="15" fill="#bbdefb"/>
  <circle cx="40" cy="140" r="15" fill="#bbdefb"/>
  <circle cx="160" cy="140" r="15" fill="#bbdefb"/>
  <line x1="100" y1="100" x2="40" y2="60" stroke="#1976d2"/>
  <line x1="100" y1="100" x2="160" y2="60" stroke="#1976d2"/>
  <!-- Mesh (partial) -->
  <text x="280" y="30" font-weight="bold">Mesh</text>
  <circle cx="250" cy="100" r="20" fill="#fff3e0"/>
  <circle cx="320" cy="60" r="20" fill="#fff3e0"/>
  <circle cx="320" cy="140" r="20" fill="#fff3e0"/>
  <circle cx="380" cy="100" r="20" fill="#fff3e0"/>
  <line x1="250" y1="100" x2="320" y2="60" stroke="#f57c00"/>
  <line x1="250" y1="100" x2="320" y2="140" stroke="#f57c00"/>
  <line x1="320" y1="60" x2="380" y2="100" stroke="#f57c00"/>
</svg>`,
      },
    },

    "🔌 Network Devices & Media": {
      "Network Devices": {
        title: "Network Devices",
        content: `
- Hub: dumb repeater (obsolete)
- Switch: intelligent, MAC learning, VLANs
- Router: connects networks, IP routing, NAT
- Access Point: wireless extension of LAN
- Modem: modulates/demodulates (cable/DSL/fiber)
- Firewall: filters traffic
- Load Balancer: distributes requests
- Gateway: protocol translation

2025: Smart switches with AI traffic analysis, SD-WAN routers`,
        example: `<p>Home setup: Modem → Router → Switch → Devices + Wi-Fi AP</p>`,
      },
      "Transmission Media": {
        title: "Transmission Media",
        content: `
Wired:
- Twisted Pair (UTP/STP): Cat5e, Cat6, Cat7, Cat8
- Coaxial: cable TV/internet
- Fiber Optic: single-mode (long distance), multi-mode (shorter, cheaper)

Wireless:
- Radio waves (Wi-Fi 6E/7, 5G/6G)
- Infrared (short range)
- Microwave (point-to-point)

Performance: Fiber > Coax > Twisted Pair (speed & distance)`,
        example: `<p>Modern offices: Cat6a for 10 Gbps LAN, fiber backbone</p>`,
      },
    },

    "📡 Protocols & Addressing": {
      "IP Addressing & Subnetting": {
        title: "IP Addressing & Subnetting",
        content: `
IPv4: 32-bit, ~4.3 billion addresses (dotted decimal)
IPv6: 128-bit, hexadecimal, solves address exhaustion

Classes → CIDR (Classless Inter-Domain Routing)

Subnetting example:
192.168.10.0/24 → 256 addresses
Borrow 2 bits → 192.168.10.0/26 (64 hosts) × 4 subnets

Private ranges:
10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16`,
        example: `<pre><code>Network:  192.168.1.0/24
First:    192.168.1.1
Last:     192.168.1.254
Broadcast:192.168.1.255</code></pre>`,
      },
      "TCP vs UDP": {
        title: "TCP vs UDP",
        content: `
TCP (Transmission Control Protocol):
- Connection-oriented
- Reliable, ordered, error-checked
- Flow/congestion control
- Used for: HTTP/HTTPS, SMTP, FTP, SSH

UDP (User Datagram Protocol):
- Connectionless
- Fast, no guarantees
- Used for: DNS, DHCP, streaming, VoIP, gaming

2025: QUIC (UDP-based) replacing TCP for many web services (HTTP/3)`,
        example: `<p>Video call (UDP) vs file download (TCP)</p>`,
      },
      "Common Application Protocols": {
        title: "Common Application Protocols",
        content: `
- HTTP/HTTPS (80/443) — web
- FTP/SFTP (21/22) — file transfer
- SMTP (25/587), IMAP (143/993), POP3 (110/995) — email
- DNS (53) — name resolution
- DHCP (67/68) — auto IP assignment
- SSH (22) — secure remote access
- SNMP — network management
- NTP — time sync`,
        example: `<p>Browser → DNS query → HTTPS to server</p>`,
      },
    },

    "🔒 Advanced & Modern Networking": {
      "Routing Protocols": {
        title: "Routing Protocols",
        content: `
Interior Gateway:
- RIP (distance vector, simple)
- OSPF (link-state, fast convergence)
- EIGRP (Cisco, hybrid)

Exterior Gateway:
- BGP (path vector, internet backbone)

2025: Segment Routing, EVPN-VXLAN in data centers`,
        example: `<p>BGP used between ISPs to exchange routes</p>`,
      },
      "Network Security Basics": {
        title: "Network Security Basics",
        content: `
- Firewalls (stateful, NGFW)
- VPN (IPsec, SSL/TLS, WireGuard)
- IDS/IPS
- VLANs & segmentation
- NAC (Network Access Control)
- Zero Trust Networking

Common attacks: ARP spoofing, MAC flooding, DHCP starvation`,
        example: `<p>Use VLANs to separate guest & employee traffic</p>`,
      },
      "Wireless Technologies 2025": {
        title: "Wireless Technologies 2025",
        content: `
- Wi-Fi 7 (802.11be): 46 Gbps theoretical, MLO (multi-link)
- 5G/6G private networks for enterprises
- Wi-Fi HaLow (long range, IoT)
- Mesh Wi-Fi systems (whole-home coverage)`,
        example: `<p>Wi-Fi 6E/7 uses 6 GHz band for less interference</p>`,
      },
    },

    "📊 Real-World Examples": {
      "How the Internet Works (Simplified)": {
        title: "How the Internet Works (Simplified)",
        content: `
1. You type example.com → DNS resolves to IP
2. Browser → TCP handshake with server
3. HTTP/HTTPS request sent
4. Packets routed via multiple ISPs (BGP)
5. Server responds → data travels back
6. Browser renders page

Latency contributors: propagation, transmission, queuing, processing`,
        graphic: `<svg width="500" height="180" viewBox="0 0 500 180">
  <rect x="30" y="60" width="100" height="60" fill="#bbdefb"/>
  <text x="80" y="90" text-anchor="middle">Your PC</text>
  <rect x="370" y="60" width="100" height="60" fill="#c8e6c9"/>
  <text x="420" y="90" text-anchor="middle">Server</text>
  <text x="250" y="40" text-anchor="middle" font-weight="bold">Internet Backbone</text>
  <line x1="130" y1="90" x2="200" y2="90" stroke="#1976d2" stroke-width="3" marker-end="url(#arr)"/>
  <line x1="300" y1="90" x2="370" y2="90" stroke="#1976d2" stroke-width="3" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="12" markerHeight="12" refX="10" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1976d2"/></marker></defs>
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
        <h1>🌐 Computer Networks Dashboard</h1>
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