# 🌌 A M Pabel — Official Personal Portfolio

<div align="left">

[![Live Site](https://img.shields.io/badge/LIVE_SITE-portfolio.ampabel.com-FFFFFF?style=for-the-badge&logo=googlechrome&logoColor=000000&labelColor=0f172a)](https://portfolio.ampabel.com)
[![GitHub](https://img.shields.io/badge/GITHUB-pabeledp-FFFFFF?style=for-the-badge&logo=github&logoColor=000000&labelColor=0f172a)](https://github.com/pabeledp/Portfolio-A-M-Pabel)
[![React](https://img.shields.io/badge/REACT_18-Vite-FFFFFF?style=for-the-badge&logo=react&logoColor=000000&labelColor=0f172a)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/TAILWINDCSS_v4-Cyber-FFFFFF?style=for-the-badge&logo=tailwindcss&logoColor=000000&labelColor=0f172a)](https://tailwindcss.com)

</div>

High-impact personal portfolio website for **A M Pabel** — Lead Designer, Motion Animator, Commercial Video Editor, and AI Vibe Coder based in Bangladesh. Live production deployment at **[https://portfolio.ampabel.com](https://portfolio.ampabel.com)**.

---

## 🌐 Live Production URL

🚀 **[https://portfolio.ampabel.com](https://portfolio.ampabel.com)**

---

## ⚡ Core Features & Innovations

- **🎬 Live Premiere Pro Video Timeline Cutter**: Synchronized real-time timeline slicing widget featuring metallic double-edge razor blade SVG, audio waveforms, video tracks (V2, V1, A1), and interactive touch points.
- **⚡ Real-Time High-Speed Mac AI Code Stream**: Infinite real-time code typing synthesis with syntax highlighting, language tabs (React/TS, Node.js, WebGL Shader, Python), and 360° continuous conic gradient border orbit.
- **🌐 Vibe Coded Web Applications Showcase**: Live interactive browser preview modal for production web apps including *FramEmpire Studio, Education BD, FramEmpire Verse 3D, Tic Tac Toe AI, and Portfolio*.
- **📱 100% Responsive Architecture**: Mobile-first fluid design optimized for all screen sizes (iPhone, Samsung, iPad, Laptops, 4K Displays).
- **🛸 Sticky Floating Glass Navbar**: Ultra-sleek floating rounded pill navbar with fixed top backdrop blur gradient shield.
- **🚀 Infinite Brand Logo Marquee Ticker**: 60FPS seamless right-to-left scrolling client brand logo marquee.
- **📬 Serverless Google Apps Script Contact Form**: Asynchronous `fetch` POST (`mode: 'no-cors'`) sending contact inquiries directly to Google Sheets & Email notifications.
- **🏛️ Professional 4-Column Agency Footer**: Complete studio footer featuring brand navigation, direct contact cards, and FramEmpire developer credits.

---

## 🛠️ Technology Stack & Architecture (প্রযুক্তি ও স্ট্যাক বিবরণী)

### 💻 1. Programming & Markup Languages
* **JavaScript (ES6+ / JSX)**: Core language for React components, state management, modal portals (`createPortal`), and asynchronous API fetch handling.
* **HTML5**: Standard semantic document structure, Open Graph protocol meta tags, and SEO tags.
* **CSS3 / PostCSS**: Custom keyframes animations, smooth scrolling, scrollbar styling, glassmorphism backdrop blurs, and responsive media queries.
* **Google Apps Script (JavaScript)**: Serverless backend web app endpoint receiving form payloads via POST (`mode: 'no-cors'`) and writing entries directly into Google Sheets while sending instant email notifications.

### ⚡ 2. Core Frameworks & Libraries
* **React 18** (`v18.3.1`): Frontend component UI library for building reactive, single-page application (SPA) architecture.
* **Vite 5** (`v5.4.1`): Next-gen frontend build tool & ultra-fast development server with ESBuild.
* **Tailwind CSS v4** (`v4.0.0`): Utility-first CSS framework providing dark-mode color tokens (`slate-950`, `cyan`, `blue`), flex/grid layouts, gradients, and custom animations.
* **Lucide React** (`v0.344.0`): Vector UI icon suite (`Send`, `Phone`, `Mail`, `CheckCircle2`, `MapPin`, `Loader2`, `Sparkles`, `ChevronDown`, `Check`, etc.).

### 🔌 3. Backend & External API Integrations
* **Google Apps Script Web App API**: Real-time AJAX endpoint (`https://script.google.com/macros/s/.../exec`) handling background contact form submissions to Google Sheets & Email.
* **Google Drive Video & Image Embed API**: Direct streaming of video previews & high-res thumbnails via Google Drive embed URLs (`drive.google.com/file/d/.../preview`).
* **WhatsApp Direct Web API**: Direct messaging integration (`wa.me/8801615288259`).
* **Google Fonts API**: `Plus Jakarta Sans` & `Hind Siliguri` web typography integration.

---

## 📋 Technology Summary Table

| Component / Layer | Technology | Version | Description |
| :--- | :--- | :--- | :--- |
| **Frontend UI Framework** | React 18 & React DOM | `v18.3.1` | Single-Page Reactive Component UI |
| **Build System & Dev Server** | Vite 5 | `v5.4.1` | ESBuild Lightning-Fast Development & Bundling |
| **CSS Framework** | Tailwind CSS v4 | `v4.0.0` | Utility-First Responsive Styling & Dark Tokens |
| **Icon Library** | Lucide React | `v0.344.0` | High-Quality Vector UI Icons |
| **Backend Integration** | Google Apps Script API | Serverless | Background Contact Form & Google Sheets Data Ingestion |
| **Media Delivery** | Google Drive Embed API | REST / CDN | High-Res Video & Thumbnail Streaming |
| **Typography** | Google Fonts | Web | Plus Jakarta Sans & Hind Siliguri |
| **Hosting & Domain** | Production Host | Live | `portfolio.ampabel.com` |

---

## 🚀 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/pabeledp/Portfolio-A-M-Pabel.git
cd Portfolio-A-M-Pabel
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 5. Build for Production
```bash
npm run build
```
Generates optimized static assets inside the `dist/` directory ready for deployment on `portfolio.ampabel.com`.

---

## 📂 Project Structure

```
A M Pabel Portfolio/
├── public/
│   ├── assets/
│   │   ├── A-M-Pabel-Logo.webp    # Official WebP Logo
│   │   └── pabel_real.jpg         # Profile Portrait
│   └── favicon.png                # 1:1 Square Vector Icon
├── src/
│   ├── components/
│   │   └── clean/
│   │       ├── CleanNavbar.jsx               # Floating Glass Navbar
│   │       ├── CleanHero.jsx                 # Hero Section & CTAs
│   │       ├── AvatarRatingBadge.jsx         # 4.5 Star Rating Badge
│   │       ├── PremiereTimelineAnimation.jsx # Premiere Pro Widget
│   │       ├── CleanServices.jsx             # 4-Discipline Card Grid
│   │       ├── CleanPortfolio.jsx            # Selected Work Gallery
│   │       ├── CleanVibeCode.jsx             # Live Web App Showcase
│   │       ├── ClientLogoTicker.jsx          # Infinite Marquee Ticker
│   │       ├── MacCodeShowcase.jsx           # Real-Time AI Code Stream
│   │       ├── CleanContact.jsx              # Direct Apps Script & WhatsApp Form
│   │       └── CleanFooter.jsx               # Agency Studio Footer
│   ├── context/
│   │   └── ThemeContext.jsx              # Theme Provider
│   ├── data/
│   │   └── personalData.js               # Portfolio & Client Data
│   ├── App.jsx                           # Application Layout Root
│   ├── index.css                         # Tailwind & GPU Keyframes
│   └── main.jsx                          # React DOM Entrypoint
├── index.html                            # SEO Headline & OG Tags
├── package.json                          # Dependencies & Scripts
└── vite.config.js                        # Vite Configuration
```

---

## 📞 Contact & Author Info

- **Name**: A M Pabel
- **Title**: Designer | Animator | Editor
- **Live Site**: [portfolio.ampabel.com](https://portfolio.ampabel.com)
- **WhatsApp**: [+880 1615-288259](https://wa.me/8801615288259)
- **Email**: [info@ampabel.com](mailto:info@ampabel.com)
- **Studio**: [FramEmpire Studio](https://www.framempire.com)
- **GitHub**: [@pabeledp](https://github.com/pabeledp)

---

© 2026 **A M Pabel**. All Rights Reserved. Engineered by **[FramEmpire Developer Team](https://www.framempire.com)**.
