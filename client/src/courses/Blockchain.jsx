// Blockchain.jsx - Expanded Dashboard with many more topics
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./All.css";

export default function Blockchain() {
  const [selected, setSelected] = useState("Blockchain Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "⛓️ Blockchain Fundamentals": {
      "Blockchain Introduction": {
        title: "Blockchain Introduction",
        content: `
**Blockchain** is a **decentralized, distributed, immutable ledger** that records transactions across many computers in a secure and transparent way.

**Core characteristics**:
- **Decentralized** — no single point of control
- **Immutable** — once written, data cannot be changed
- **Transparent** — all participants can view the ledger
- **Secure** — uses cryptography (hashing + digital signatures)
- **Consensus-driven** — nodes agree on the state of the chain

**First real-world use case**: Bitcoin (2009) by Satoshi Nakamoto

**Modern uses** (2026):
- Cryptocurrencies
- Supply chain tracking
- Digital identity
- DeFi (Decentralized Finance)
- NFTs & digital collectibles
- Voting systems
- Healthcare records
        `,
        example: `
# Simple mental model
Block 1 → Hash → Block 2 → Hash → Block 3 → ...
Each block contains:
• Data (transactions)
• Previous block hash
• Timestamp
• Nonce (for PoW)
        `
      },

      "How Blockchain Works": {
        title: "How Blockchain Actually Works",
        content: `
Step-by-step process:

1. A transaction is created (Alice sends 1 BTC to Bob)
2. Transaction is broadcast to the network
3. Nodes validate the transaction (signature, funds, rules)
4. Valid transactions are collected into a **block**
5. Miners/validators compete to add the block (PoW / PoS / etc.)
6. Winning block is broadcast and appended
7. All nodes update their copy of the chain
8. Block is now **immutable**

**Key cryptography concepts**:
- **Hashing** (SHA-256): one-way function, fixed-size output
- **Merkle Tree**: efficient verification of large transaction sets
- **Digital Signatures** (ECDSA): prove ownership without revealing private key
        `
      },

      "Types of Blockchains": {
        title: "Types of Blockchains",
        content: `
| Type              | Access         | Examples                     | Use Case                              |
|-------------------|----------------|------------------------------|---------------------------------------|
| Public            | Open to all    | Bitcoin, Ethereum            | Cryptocurrencies, DeFi                |
| Private           | Permissioned   | Hyperledger Fabric           | Enterprise supply chain               |
| Consortium        | Group-controlled | R3 Corda, Quorum           | Banking, insurance consortia          |
| Hybrid            | Mixed          | Dragonchain, XinFin          | Public transparency + private control |

**Layer 1 vs Layer 2**:
- Layer 1: base blockchain (Bitcoin, Ethereum)
- Layer 2: scaling solutions built on top (Lightning Network, Polygon, Optimism, Arbitrum)
        `
      },

      "Consensus Mechanisms Deep Dive": {
        title: "Consensus Mechanisms – Deep Dive",
        content: `
**Proof of Work (PoW)** — Energy intensive, very secure  
**Proof of Stake (PoS)** — Energy efficient, validators stake coins  
**Delegated Proof of Stake (DPoS)** — Voters elect delegates  
**Proof of Authority (PoA)** — Trusted nodes only  
**Proof of History (PoH)** — Solana’s time-stamping innovation  
**Practical Byzantine Fault Tolerance (PBFT)** — Fast, used in permissioned chains  
**Proof of Burn, Proof of Space, Proof of Capacity** — Niche alternatives

**Trade-offs**:
- Security vs Speed vs Decentralization vs Energy use
        `
      },

      "Blockchain Trilemma": {
        title: "The Blockchain Trilemma",
        content: `
Vitalik Buterin’s famous trilemma:

A blockchain can only achieve **two** of these three at once:

1. **Decentralization**
2. **Security**
3. **Scalability**

Solutions being explored in 2026:
- Sharding (Ethereum Danksharding)
- Layer 2 rollups (Optimistic & ZK)
- Sidechains
- State channels
- Plasma
- Validium
        `
      }
    },

    "💱 Cryptocurrencies & Tokens": {
      "Bitcoin – The Digital Gold": {
        title: "Bitcoin – The Digital Gold",
        content: `
- Created: January 3, 2009 (genesis block)
- Max supply: **21 million BTC**
- Halving every ~4 years (next ~2028)
- Block time: ~10 minutes
- Uses **Proof of Work** (SHA-256)
- Primary use cases: store of value, medium of exchange (Lightning Network)

**2026 status**:
- Institutional adoption (ETFs, corporate treasuries)
- Ordinals & Runes (NFT-like functionality on Bitcoin)
        `
      },

      "Ethereum & Smart Contracts": {
        title: "Ethereum & Smart Contracts",
        content: `
- Launched: July 30, 2015
- Native token: **ETH**
- Transitioned to **Proof of Stake** (The Merge, Sept 2022)
- Supports **smart contracts** written in Solidity, Vyper, etc.
- Hosts thousands of **DApps** (Uniswap, Aave, OpenSea, etc.)

**Major upgrades (2025–2026)**:
- Dencun (proto-danksharding)
- Prague/Electra (full danksharding planned)
- Verkle trees & stateless clients
        `
      },

      "Stablecoins": {
        title: "Stablecoins – Crypto with Stability",
        content: `
Stablecoins maintain ~$1 value:

- **Fiat-collateralized**: USDT (Tether), USDC (Circle), BUSD
- **Crypto-collateralized**: DAI (MakerDAO)
- **Algorithmic** (mostly failed post-2022): UST (Terra – collapsed)

**2026 trends**:
- Institutional stablecoins (PayPal USD, JPM Coin)
- Real-world asset (RWA) tokenization
- Cross-chain stablecoin bridges
        `
      },

      "Layer 1 Alternatives": {
        title: "Layer 1 Blockchains (Ethereum Competitors)",
        content: `
- Solana — high throughput, Proof of History
- Cardano — research-driven, Ouroboros PoS
- Polkadot — parachains & relay chain
- Avalanche — subnets, fast finality
- Binance Smart Chain (BSC) → BNB Chain
- Near Protocol — sharding
- Aptos & Sui — Move language
- TON (The Open Network) — Telegram integration
        `
      }
    },

    "🔐 Security & Attacks": {
      "51% Attack": {
        title: "51% Attack",
        content: `
If one entity controls >50% of hash power (PoW) or stake (PoS):

- Double-spend coins
- Prevent transactions
- Reverse recent blocks

**Real cases**:
- Ethereum Classic (multiple 51% attacks)
- Bitcoin Gold, Verge, Bitcoin SV

**Mitigations**:
- High hash rate / economic security
- Checkpoints (in some chains)
- Longer confirmation times for large tx
        `
      },

      "Common Smart Contract Vulnerabilities": {
        title: "Common Smart Contract Vulnerabilities (2026)",
        content: `
Top issues seen in audits & hacks:

- Reentrancy (The DAO, 2016)
- Integer overflow/underflow (fixed in Solidity ≥0.8)
- Front-running
- Oracle manipulation
- Flash loan attacks
- Access control bugs
- Delegatecall misuse
- Unchecked external calls

**Best practices**:
- Use OpenZeppelin contracts
- Multiple audits (Certik, Trail of Bits, PeckShield)
- Formal verification
- Bug bounties
        `
      }
    },

    "🌐 Web3 & Decentralized Applications": {
      "What is Web3?": {
        title: "What is Web3?",
        content: `
**Web1** → read-only (static pages)  
**Web2** → read-write (social media, centralized platforms)  
**Web3** → read-write-own (decentralized ownership, tokens, identity)

Key pillars of Web3 (2026):
- Decentralized identity (ENS, DIDs)
- Token-governed communities (DAOs)
- On-chain assets (NFTs, RWAs)
- Decentralized storage (IPFS, Arweave, Filecoin)
- Decentralized compute (Akash, Golem)
        `
      },

      "Decentralized Finance (DeFi)": {
        title: "DeFi – Decentralized Finance",
        content: `
DeFi = financial services on blockchain without intermediaries

Popular protocols (2026):
- Lending: Aave, Compound
- DEXes: Uniswap v4, Curve, PancakeSwap
- Derivatives: dYdX, GMX
- Yield farming & liquidity mining
- Real-world assets (RWAs): tokenized treasuries, bonds

**TVL (Total Value Locked)** remains a key metric
        `
      },

      "DAOs – Decentralized Autonomous Organizations": {
        title: "DAOs – Decentralized Autonomous Organizations",
        content: `
**DAO** = organization governed by smart contracts and token holders

Popular DAO frameworks (2026):
- Aragon
- DAOstack
- Snapshot (off-chain voting)
- Tally
- Safe (multi-sig treasury)

**Examples**:
- MakerDAO (DAI stablecoin)
- Uniswap Governance
- ConstitutionDAO (failed attempt to buy U.S. Constitution copy)
        `
      }
    },

    "🛠️ Development & Tools": {
      "Solidity Programming Language": {
        title: "Solidity – Smart Contract Language",
        content: `
Solidity is the most widely used language for Ethereum smart contracts.

**Versions (2026)**:
- 0.8.x (safe math by default)
- Upcoming: 0.9.x with better EVM support

**Key concepts**:
- Contract, function visibility (public/external/private/internal)
- Events & indexing
- Modifiers
- Inheritance
- Libraries
- Interfaces
        `
      },

      "Development Tools & Frameworks": {
        title: "Modern Blockchain Development Stack (2026)",
        content: `
- **Hardhat** / **Foundry** — development environment & testing
- **Truffle** / **Brownie** (Python) — older but still used
- **Remix IDE** — browser-based
- **ethers.js** / **web3.js** — frontend interaction
- **viem** — lightweight, modern alternative
- **Wagmi** + **RainbowKit** — React hooks & wallet UI
- **The Graph** — indexing & querying blockchain data
- **IPFS** — decentralized file storage
        `
      }
    },

    "🔮 Future of Blockchain (2026–2030)": {
      "Layer 2 Scaling Solutions": {
        title: "Layer 2 Scaling – Rollups Dominate",
        content: `
**Optimistic Rollups** (Optimism, Arbitrum, Base)  
**ZK Rollups** (zkSync Era, Starknet, Polygon zkEVM, Scroll)  
**Validiums** (off-chain data availability)

**2026 trends**:
- Shared sequencing (Espresso, Astria)
- Based rollups (L1-sequenced)
- ZK proofs for privacy (zk.money, Aztec)
        `
      },

      "Real-World Assets (RWA) Tokenization": {
        title: "Real-World Assets (RWA) Tokenization",
        content: `
Tokenizing physical assets on-chain:

- Real estate
- Government bonds
- Private equity
- Art & collectibles
- Carbon credits

**Leaders (2026)**:
- Centrifuge
- Ondo Finance
- Backed.fi
- BlackRock BUIDL fund (on Ethereum)
        `
      },

      "Blockchain Interoperability": {
        title: "Cross-Chain Interoperability",
        content: `
**Bridges** (risky but widely used)  
**Inter-Blockchain Communication (IBC)** — Cosmos  
**Polkadot XCM**  
**Chainlink CCIP** (Cross-Chain Interoperability Protocol)  
**LayerZero**  
**Wormhole**

Goal: seamless asset & data transfer across chains
        `
      }
    }
  };

  const handleMouseDown = () => setIsDragging(true);

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 480);
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

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
        <h1>⛓️ Blockchain & Web3 Dashboard</h1>
        <input
          type="text"
          placeholder="Search topics (bitcoin, solidity, defi, layer2...)"
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

            <div className="content-text markdown-body">
              <ReactMarkdown>{selectedContent.content}</ReactMarkdown>
            </div>

            {selectedContent.example && (
              <div className="example-section">
                <h4>Example / Illustration</h4>
                <pre className="code-block">
                  <code>{selectedContent.example.trim()}</code>
                </pre>
              </div>
            )}
          </>
        ) : (
          <p style={{ color: "#888", padding: "2rem", fontStyle: "italic" }}>
            Select a blockchain topic from the sidebar
          </p>
        )}
      </main>
    </div>
  );
}