# Yusuf Automation Website

React + Vite landing page for a personal automation service focused on business process automation, AI document automation, and web automation/data collection.

## Structure

```text
src/
├── components/
│   ├── AutomationFlow.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Ticker.jsx
│   ├── ProblemSection.jsx
│   ├── ServiceCard.jsx
│   ├── ServiceSection.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectSection.jsx
│   ├── ProcessSection.jsx
│   ├── ProofSection.jsx
│   ├── FAQSection.jsx
│   ├── CTASection.jsx
│   └── Footer.jsx
├── data/
│   └── siteData.js
├── App.jsx
├── main.jsx
└── styles.css
```

Content/data is separated from UI components so projects, services, FAQs, and process steps can be updated without editing the page layout.

## Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Note

The site uses the existing neo-brutalist custom CSS design and interactive automation flow. Tailwind is included in the project dependencies, but the current visual layer remains custom CSS so the existing design is preserved.

Before publishing, verify the WhatsApp number in `src/data/siteData.js`.
