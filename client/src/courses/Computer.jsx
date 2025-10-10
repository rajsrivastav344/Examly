// ComputerNetwork.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse same styling

export default function ComputerNetwork() {
  const [selected, setSelected] = useState("Computer Networks Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🌐 Computer Networks": {
      "Computer Networks Introduction": {
        title: "Computer Networks Introduction",
        content:
          "A computer network is a collection of interconnected devices that share data and resources. It enables communication between computers and other devices.",
        example: "<p>Example: Internet, office networks.</p>",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Network_topology.png",
      },
      "OSI Model": {
        title: "OSI Model",
        content:
          "The OSI (Open Systems Interconnection) model is a conceptual framework used to understand network interactions in 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
        example: "<ul><li>Physical: Cables, switches</li><li>Data Link: MAC addresses</li><li>Network: IP addressing</li><li>Transport: TCP/UDP</li><li>Session: Connection management</li><li>Presentation: Encryption, compression</li><li>Application: Email, HTTP</li></ul>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/osi_model.jpg",
      },
      "TCP/IP Model": {
        title: "TCP/IP Model",
        content:
          "The TCP/IP model is a 4-layer framework used for practical internet communication: Link, Internet, Transport, Application.",
        example: "<p>Example: HTTP over TCP/IP.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/tcp_ip_model.jpg",
      },
      "LAN (Local Area Network)": {
        title: "LAN (Local Area Network)",
        content:
          "LAN is a network that connects computers in a small area like an office or building. It allows resource sharing like printers and files.",
        example: "<p>Example: Office network with 10 computers connected via switch.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/lan_network.jpg",
      },
      "WAN (Wide Area Network)": {
        title: "WAN (Wide Area Network)",
        content:
          "WAN connects devices across large geographical areas, often using routers and leased lines or the internet.",
        example: "<p>Example: Internet, corporate networks connecting cities.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/wan_network.jpg",
      },
      "PAN (Personal Area Network)": {
        title: "PAN (Personal Area Network)",
        content:
          "PAN is a network for personal devices within a range of a few meters, usually using Bluetooth or Wi-Fi.",
        example: "<p>Example: Smartphone connected to wireless headphones or smartwatch.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/pan_network.jpg",
      },
      "Network Topologies": {
        title: "Network Topologies",
        content:
          "Topology defines the layout of devices in a network. Common topologies include Star, Ring, Bus, Mesh, and Hybrid.",
        example: "<p>Example: Star topology is common in LANs with a central switch.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/network_topology.jpg",
      },
      "Network Devices": {
        title: "Network Devices",
        content:
          "Devices that connect, manage, and control network traffic: Router, Switch, Hub, Access Point, Modem.",
        example: "<p>Example: Router connects LAN to Internet.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/network_devices.jpg",
      },
      "IP Addressing": {
        title: "IP Addressing",
        content:
          "IP addresses uniquely identify devices on a network. IPv4 uses 32 bits, IPv6 uses 128 bits.",
        example: "<p>Example: IPv4: 192.168.1.1, IPv6: 2001:0db8::1</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/ip_addressing.jpg",
      },
      "Subnetting": {
        title: "Subnetting",
        content:
          "Subnetting divides a network into smaller sub-networks to improve efficiency and security.",
        example: "<p>Example: 192.168.1.0/24 can be split into two /25 subnets.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/subnetting.jpg",
      },
      "Routing": {
        title: "Routing",
        content:
          "Routing determines the path packets take from source to destination. Routers use routing tables and protocols like OSPF, BGP.",
        example: "<p>Example: Packet traveling from New York to London over the internet.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/routing.jpg",
      },
      "Switching": {
        title: "Switching",
        content:
          "Switching forwards packets between devices on the same network. Types: Circuit switching, Packet switching, Message switching.",
        example: "<p>Example: Ethernet switch in LAN.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/switching.jpg",
      },
      "Network Protocols": {
        title: "Network Protocols",
        content:
          "Rules for communication between network devices. Common protocols: HTTP, FTP, SMTP, TCP, UDP, IP.",
        example: "<p>Example: Browser uses HTTP to request web pages.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/network_protocols.jpg",
      },
      "Wi-Fi & Bluetooth": {
        title: "Wi-Fi & Bluetooth",
        content:
          "Wireless communication standards for local networks and personal devices. Wi-Fi for LAN, Bluetooth for PAN.",
        example: "<p>Example: Connecting smartphone to Wi-Fi router or Bluetooth headphones.</p>",
        image: "https://www.tutorialspoint.com/data_communication_computer_network/images/wireless_networks.jpg",
      },
    },
  };

  // ===== Sidebar Resize =====
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 150), 400);
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
              <div className="example-container">
                <pre className="code-block">
                  <code>{selectedContent.example}</code>
                </pre>
                <iframe
                  title="example-output"
                  className="output-frame"
                  srcDoc={selectedContent.example}
                />
              </div>
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
