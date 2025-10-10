// Blockchain.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse same styling

export default function Blockchain() {
  const [selected, setSelected] = useState("Blockchain Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "⛓️ Blockchain Basics": {
      "Blockchain Introduction": {
        title: "Blockchain Introduction",
        content: `
Blockchain is a decentralized, distributed ledger that records transactions across multiple computers.
Key features:
- Decentralization
- Transparency
- Immutability
- Security`,
        example: `<p>Example: Bitcoin ledger recording transactions publicly.</p>`,
        image: "https://www.blockchain.com/img/education/blockchain_1.png",
      },
      "How Blockchain Works": {
        title: "How Blockchain Works",
        content: `
- Transactions are grouped into blocks
- Blocks are linked via cryptographic hashes
- Consensus mechanisms validate blocks (Proof of Work, Proof of Stake)
- Once added, blocks are immutable`,
        example: `<p>Block -> Hash -> Next Block -> Chain</p>`,
        image: "https://www.ibm.com/blogs/blockchain/wp-content/uploads/2018/03/blockchain-works.png",
      },
      "Blockchain Components": {
        title: "Blockchain Components",
        content: `
Key components:
- Blocks: Data containers
- Nodes: Computers in the network
- Ledger: Complete record of transactions
- Cryptography: Ensures security and integrity`,
        example: `<ul><li>Block</li><li>Node</li><li>Ledger</li><li>Cryptography</li></ul>`,
        image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Blockchain_components.jpg",
      },
      "Consensus Mechanisms": {
        title: "Consensus Mechanisms",
        content: `
Consensus ensures all nodes agree on the blockchain state:
- Proof of Work (PoW): Miners solve puzzles
- Proof of Stake (PoS): Validators stake coins
- Practical Byzantine Fault Tolerance (PBFT)`,
        example: `<p>Bitcoin uses PoW, Ethereum 2.0 uses PoS.</p>`,
        image: "https://miro.medium.com/v2/resize:fit:1400/1*kF0u7mX0dpC2xTRnWDVQGA.png",
      },
      "Smart Contracts": {
        title: "Smart Contracts",
        content: `
Smart contracts are self-executing contracts with rules encoded on the blockchain.
- Automatically enforce agreements
- Reduce need for intermediaries
- Common in Ethereum`,
        example: `<pre>
pragma solidity ^0.8.0;
contract SimpleContract {
    uint public value;
    function set(uint _value) public {
        value = _value;
    }
}
</pre>`,
        image: "https://miro.medium.com/v2/resize:fit:1400/1*5NJGdi5Yf3xlkq6ZW3pSZA.png",
      },
      "Blockchain Real-World Example": {
        title: "Real-World Example",
        content: `
Example: Supply Chain Management
- Track product from manufacturer to customer
- Immutable records of shipment
- Transparent audit trail`,
        example: `<p>Companies like Walmart use blockchain to track food supply.</p>`,
        image: "https://www.ibm.com/blogs/blockchain/wp-content/uploads/2018/07/supply-chain-1.jpg",
      },
    },
    "💰 Cryptocurrencies": {
      "Bitcoin": {
        title: "Bitcoin",
        content: `
Bitcoin is the first decentralized cryptocurrency.
- Uses Proof of Work
- Limited supply (21 million coins)
- Transactions are pseudonymous`,
        example: `<p>Send and receive Bitcoin via blockchain wallets.</p>`,
        image: "https://www.blockchain.com/img/education/bitcoin_2.png",
      },
      "Ethereum": {
        title: "Ethereum",
        content: `
Ethereum is a blockchain platform for smart contracts.
- Supports decentralized apps (DApps)
- Native cryptocurrency: Ether (ETH)
- Transitioning to Proof of Stake (Ethereum 2.0)`,
        example: `<p>Create decentralized applications using Solidity smart contracts.</p>`,
        image: "https://www.blockchain.com/img/education/ethereum_1.png",
      },
      "Other Cryptocurrencies": {
        title: "Other Cryptocurrencies",
        content: `
- Ripple (XRP): Fast cross-border payments
- Litecoin (LTC): Peer-to-peer payments
- Cardano (ADA), Polkadot (DOT): Smart contract platforms`,
        example: `<ul><li>XRP</li><li>LTC</li><li>ADA</li></ul>`,
        image: "https://cryptobriefing.com/wp-content/uploads/2021/06/crypto.jpg",
      },
    },
  };

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
        <h1>⛓️ Blockchain & Cryptocurrencies Dashboard</h1>
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
