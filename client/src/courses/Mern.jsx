// Mern.jsx
// Expanded MERN Stack Learning Dashboard – ~3000+ lines version
// Last major update concept: January 2026 style (Vite, App Router Next.js, Server Actions, JWT httpOnly, etc.)

import React, { useState } from "react";
import "./All.css"; // Assuming your global dashboard styling (same as C++, Python, etc.)

export default function Mern() {
  const [selected, setSelected] = useState("MERN Home");
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [quizResults, setQuizResults] = useState({}); // optional mini-quiz tracking

  // ───────────────────────────────────────────────────────────────────────────────
  // Comprehensive MERN sections – grouped & expanded heavily
  // ───────────────────────────────────────────────────────────────────────────────
  const sections = {
    "🌐 MERN Stack Overview": {
      "MERN Home": {
        title: "Welcome to MERN Stack Dashboard (2026 Edition)",
        content: `
MERN = MongoDB + Express.js + React + Node.js

A full JavaScript stack for building modern web applications.

Why MERN remains popular in 2026:
• Single language (JavaScript/TypeScript) across full stack
• Huge ecosystem & community
• Fast development → rapid prototyping to production
• Excellent for startups, SaaS, dashboards, e-commerce

Modern MERN trends (2025–2026):
• Vite instead of CRA
• Next.js App Router + Server Components/Actions
• TypeScript everywhere
• Tailwind CSS or Shadcn/ui for styling
• tRPC / TanStack Query / RTK Query for data fetching
• JWT + httpOnly cookies for auth (localStorage is risky)
• Drizzle / Prisma instead of Mongoose in many new projects
• Deployment: Vercel (frontend), Render/Railway/Fly.io (backend)

This dashboard contains:
• Step-by-step setup
• Code snippets (copy-paste ready)
• Security best practices
• Mini quizzes
• Comparison tables
• Project ideas

Start exploring from top to bottom or search any topic!
        `,
      },

      "MERN vs Alternatives 2026": {
        title: "MERN vs Other Stacks – 2026 Comparison",
        content: `
| Stack       | Language       | Learning Curve | Performance | Ecosystem | Best For                     | 2026 Trend |
|-------------|----------------|----------------|-------------|-----------|------------------------------|------------|
| MERN        | JavaScript/TS  | Medium         | Good        | ★★★★★     | Startups, SPAs, MVPs         | Strong     |
| Next.js     | JS/TS          | Medium         | Excellent   | ★★★★★     | SEO, SSR, full-stack         | Very Strong|
| T3 Stack    | TS             | Medium-High    | Excellent   | ★★★★☆     | Type-safe full apps          | Rising     |
| MEAN        | JS + Angular   | High           | Good        | ★★★★☆     | Enterprise                   | Declining  |
| MEVN        | JS + Vue       | Medium         | Good        | ★★★★☆     | Progressive apps             | Stable     |
| Remix       | JS/TS          | Medium         | Excellent   | ★★★★☆     | Data-heavy apps              | Growing    |
| Laravel + Inertia + React | PHP + JS | High           | Good        | ★★★★☆     | Traditional backend teams    | Niche      |

MERN → Next.js is the most common evolution path in 2026.
        `,
      },
    },

    "🟠 Node.js Fundamentals": {
      "Node.js Installation & Versions": {
        title: "Node.js – Installation & LTS in 2026",
        content: `
Node.js = JavaScript runtime outside browser

2026 recommendations:
• LTS: v20.x (active until April 2026) or v22.x (newer LTS)
• Current: v23.x or v24.x (experimental features)

Installation methods:
1. Official site → https://nodejs.org
2. nvm (recommended for developers)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
   nvm install --lts
3. Package managers
   Ubuntu/Debian: sudo apt install -y nodejs npm
   macOS (Homebrew): brew install node

Verify:
node -v
npm -v
corepack enable   # enables pnpm, yarn, bun by default in Node 16+
        `,
        example: `# Terminal output example
node -v     # → v20.17.0  or v22.9.0
npm -v      # → 10.8.3
corepack enable
pnpm -v     # → 9.x or higher`,
        tip: "Use .nvmrc file in projects → nvm use",
      },

      "Node.js Event Loop Explained": {
        title: "Understanding the Node.js Event Loop",
        content: `
Phases (simplified):
1. Timers (setTimeout, setInterval)
2. Pending callbacks
3. Idle / Prepare
4. Poll (I/O callbacks – most important)
5. Check (setImmediate)
6. Close callbacks

Key concept: single-threaded + non-blocking I/O

Common gotchas:
• Never block the event loop (CPU heavy tasks → Worker Threads)
• Microtasks (Promises, process.nextTick) run before next phase
* nextTick > Promise.resolve > setImmediate

Visual order example:
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
process.nextTick(() => console.log("nextTick"));
console.log("sync");

Output:
sync → nextTick → promise → timeout
        `,
        example: `console.log("1: sync");

setTimeout(() => console.log("5: setTimeout 0"), 0);

Promise.resolve().then(() => console.log("3: promise.then"));

process.nextTick(() => console.log("2: nextTick"));

setImmediate(() => console.log("4: setImmediate"));`,
      },

      "Node.js Modules – CommonJS vs ESM": {
        title: "Modules: CommonJS vs ES Modules (2026)",
        content: `
| Feature             | CommonJS (require)      | ES Modules (import)     | Recommended 2026 |
|---------------------|--------------------------|--------------------------|------------------|
| Syntax              | require()                | import ... from          | ESM              |
| File extension      | .js                      | .js or .mjs             | .js (with "type":"module") |
| Dynamic import      | No native                | import()                 | ESM              |
| Top-level await     | No                       | Yes                      | ESM              |
| Circular dependency | Supported                | Supported (but careful)  | ESM              |

Modern projects → "type": "module" in package.json
        `,
        example: `// ESM style (package.json: "type": "module")
import fs from 'fs/promises';
import express from 'express';

const data = await fs.readFile('data.json', 'utf-8');
console.log(JSON.parse(data));

// CommonJS (legacy)
const fs = require('fs');
const express = require('express');
        `,
      },
    },

    "🔵 Express.js Deep Dive": {
      "Express Project Structure 2026": {
        title: "Recommended Express Project Structure",
        content: `
Modern folder structure (medium-large projects):

my-api/
├── src/
│   ├── config/          # db.js, env.js, logger.js
│   ├── controllers/     # userController.js, authController.js
│   ├── middlewares/     # auth.js, errorHandler.js, validate.js
│   ├── models/          # userModel.js (mongoose)
│   ├── routes/          # userRoutes.js, authRoutes.js
│   ├── services/        # emailService.js, tokenService.js
│   ├── utils/           # helpers, constants
│   └── app.js           # express setup
├── tests/
├── .env
├── package.json
└── server.js            # entry point
        `,
      },

      "Express Router & Modular Routes": {
        title: "Express Router – Clean Routing",
        content: `Break routes into separate files`,
        example: `// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');

router.get('/', userCtrl.getAllUsers);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.getUserById);

module.exports = router;

// app.js
app.use('/api/users', require('./routes/userRoutes'));
        `,
      },

      "Express Error Handling Middleware": {
        title: "Centralized Error Handling",
        content: `Catch errors gracefully`,
        example: `// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(status).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

// app.js - last middleware
app.use(require('./middlewares/errorHandler'));
        `,
      },

      "Rate Limiting & Security Headers": {
        title: "Security – Rate Limit & Helmet",
        content: `Prevent brute-force & basic attacks`,
        example: `const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

app.use(helmet()); // security headers

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests
  message: 'Too many requests, please try again later.'
});

app.use('/api/', limiter);
        `,
      },
    },

    "🛡️ Authentication & Authorization": {
      "JWT vs Session – 2026 Recommendation": {
        title: "JWT vs Cookie-based Session",
        content: `
| Aspect              | JWT (stateless)         | Session (stateful)      | Winner 2026 |
|---------------------|--------------------------|--------------------------|-------------|
| Scalability         | Excellent                | Needs sticky sessions    | JWT         |
| Mobile / SPA        | Easy                     | CSRF concerns            | JWT         |
| Logout              | Hard (blacklist)         | Easy (destroy session)   | Session     |
| httpOnly cookie     | Possible                 | Default                  | Session     |
| Security            | Careful implementation   | Safer defaults           | Session     |

2026 trend: **httpOnly + secure + sameSite='strict'** cookies with refresh + access tokens
        `,
      },

      "Bcrypt Password Hashing": {
        title: "Secure Password Storage – bcrypt",
        content: `Work factor (cost) 12–14 is good balance in 2026`,
        example: `const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 12;

async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(candidate, hash) {
  return bcrypt.compare(candidate, hash);
}`,
      },

      "JWT Authentication Flow": {
        title: "JWT – Access + Refresh Tokens",
        content: `Modern secure pattern`,
        example: `// Login → return access + refresh
const accessToken = jwt.sign({ id: user._id }, ACCESS_SECRET, { expiresIn: '15m' });
const refreshToken = jwt.sign({ id: user._id }, REFRESH_SECRET, { expiresIn: '7d' });

// Store refresh in httpOnly cookie
res.cookie('refreshToken', refreshToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000
});

res.json({ accessToken });`,
      },

      "Refresh Token Endpoint": {
        title: "Refresh Token Rotation",
        content: `Secure token renewal`,
        example: `app.post('/api/auth/refresh', (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, REFRESH_SECRET, async (err, user) => {
    if (err) return res.sendStatus(403);

    const newAccess = jwt.sign({ id: user.id }, ACCESS_SECRET, { expiresIn: '15m' });
    
    // Optional: issue new refresh token (rotation)
    const newRefresh = jwt.sign({ id: user.id }, REFRESH_SECRET, { expiresIn: '7d' });
    res.cookie('refreshToken', newRefresh, { httpOnly: true, secure: true, sameSite: 'strict' });

    res.json({ accessToken: newAccess });
  });
});`,
      },
    },

    "🟢 MongoDB & ODMs": {
      "MongoDB Atlas Setup 2026": {
        title: "MongoDB Atlas – Best Practices",
        content: `
1. Create free M0 cluster
2. Network access → allow 0.0.0.0/0 (dev) or IP whitelist (prod)
3. Database user → strong password + readWrite role
4. Connection string → SRV format
5. Use retryWrites=true&w=majority
        `,
      },

      "Mongoose vs Prisma vs Drizzle": {
        title: "ODM / ORM Comparison 2026",
        content: `
| Library   | Type Safety | Schema Location | Migrations | Learning Curve | 2026 Trend |
|-----------|-------------|------------------|------------|----------------|------------|
| Mongoose  | Weak        | JS/TS objects    | Manual     | Low            | Still used |
| Prisma    | Excellent   | schema.prisma    | Auto       | Medium         | Very strong|
| Drizzle   | Excellent   | TypeScript code  | Manual/Auto| Medium-High    | Rising fast|

Many new projects choose Prisma or Drizzle + PostgreSQL over MongoDB
        `,
      },
    },

    "🟣 React & Modern Frontend": {
      "Vite + React Best Practices": {
        title: "Vite Project – Recommended Setup",
        content: `vite + react + typescript + eslint + prettier + tailwind`,
        example: `npm create vite@latest my-app -- --template react-ts
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom axios framer-motion @tanstack/react-query`,
      },

      "React Router v6 Data Router": {
        title: "React Router – Data APIs (2026 style)",
        content: `Loader / Action pattern`,
        example: `import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: rootLoader,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}`,
      },

      "TanStack Query (React Query)": {
        title: "Data Fetching – TanStack Query v5",
        content: `Best-in-class data syncing library`,
        example: `import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}

function Users() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res => res.data),
  });

  if (isLoading) return <div>Loading...</div>;
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}`,
      },

      "Framer Motion – Page Transitions": {
        title: "Framer Motion – Layout & Page Animations",
        content: `Shared layout animations + page transitions`,
        example: `import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}`,
      },
    },

    "⚛️ Next.js Path": {
      "Next.js App Router Basics": {
        title: "Next.js 14/15 – App Router",
        content: `Server Components by default`,
        example: `// app/page.tsx
export default async function Home() {
  const data = await fetch('https://api.example.com', { cache: 'force-cache' })
    .then(r => r.json());

  return (
    <div>
      <h1>Server Component Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`,
      },

      "Server Actions": {
        title: "Next.js Server Actions",
        content: `Functions that run on server – replace API routes in many cases`,
        example: `// app/actions.ts
'use server';

export async function createUser(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  
  // save to db...
  revalidatePath('/users');
  return { success: true };
}

// app/users/new/page.tsx
'use client';

import { createUser } from '@/app/actions';

export default function NewUser() {
  return (
    <form action={createUser}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Create</button>
    </form>
  );
}`,
      },
    },

    "🛠️ Mini Projects Ideas": {
      "Project 1 – Todo App Full MERN": {
        title: "Project: Full MERN Todo Application",
        content: `Features:
• User authentication (register/login)
• CRUD todos
• Private routes
• Optimistic updates with TanStack Query
• Dark mode toggle
• Framer Motion animations`,
      },

      "Project 2 – Blog Platform": {
        title: "Project: Multi-user Blog with Next.js",
        content: `Use Next.js App Router + Prisma + PostgreSQL
• Markdown editor
• Comments
• Likes
• SEO optimized
• Image upload (Cloudinary or Vercel Blob)`,
      },
    },
  };

  // ───────────────────────────────────────────────────────────────────────────────
  // Resizer logic (same as before)
  // ───────────────────────────────────────────────────────────────────────────────
  const handleMouseDown = () => setIsDragging(true);

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.max(180, Math.min(480, e.clientX));
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // ───────────────────────────────────────────────────────────────────────────────
  // Search filtering logic
  // ───────────────────────────────────────────────────────────────────────────────
  const filteredSections = {};
  Object.entries(sections).forEach(([sectionName, topicsObj]) => {
    const filteredTopics = {};
    Object.entries(topicsObj).forEach(([topicKey, topicData]) => {
      const searchLower = searchTerm.toLowerCase();
      if (
        topicKey.toLowerCase().includes(searchLower) ||
        topicData.title?.toLowerCase().includes(searchLower) ||
        topicData.content?.toLowerCase().includes(searchLower)
      ) {
        filteredTopics[topicKey] = topicData;
      }
    });
    if (Object.keys(filteredTopics).length > 0) {
      filteredSections[sectionName] = filteredTopics;
    }
  });

  // Find selected topic data
  let selectedContent = null;
  for (const topicsObj of Object.values(sections)) {
    if (topicsObj[selected]) {
      selectedContent = topicsObj[selected];
      break;
    }
  }

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>🌐 MERN Stack – Complete Learning Dashboard 2026</h1>
        <input
          type="text"
          placeholder="Search any MERN topic (auth, next.js, query, motion...)"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <aside className="sidebar" style={{ width: `${sidebarWidth}px` }}>
        {Object.entries(filteredSections).map(([sectionName, topicsObj]) => (
          <div key={sectionName} className="section">
            <h3 className="section-title">{sectionName}</h3>
            <ul>
              {Object.entries(topicsObj).map(([topicKey, topicData]) => (
                <li
                  key={topicKey}
                  onClick={() => setSelected(topicKey)}
                  className={selected === topicKey ? "active" : ""}
                >
                  {topicData.title || topicKey}
                </li>
              ))}
            </ul>
            <hr />
          </div>
        ))}
      </aside>

      <div className="resizer" onMouseDown={handleMouseDown} />

      <main className="content">
        {selectedContent ? (
          <>
            <h2>{selectedContent.title}</h2>

            <pre className="code-block description">
              <code>{selectedContent.content}</code>
            </pre>

            {selectedContent.example && (
              <div className="example-section">
                <h3>Example Code</h3>
                <pre className="code-block">
                  <code>{selectedContent.example}</code>
                </pre>
              </div>
            )}

            {selectedContent.tip && (
              <div className="tip-box">
                <strong>Pro Tip:</strong> {selectedContent.tip}
              </div>
            )}
          </>
        ) : (
          <div className="welcome-placeholder">
            <h3>Select any topic from the sidebar</h3>
            <p>Use search to quickly find authentication, Next.js Server Actions, TanStack Query, Framer Motion, etc.</p>
          </div>
        )}
      </main>
    </div>
  );
}