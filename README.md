# 💎 SnippetVault

**A beautiful, fast code snippet manager for developers**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/snippetvault)

---

## 📖 Overview

SnippetVault is a modern, lightweight code snippet manager that helps developers save, organize, and share code snippets with ease. Built with Next.js 16 and TypeScript, it features a beautiful dark theme, instant search, and shareable public URLs.

**Perfect for:**
- 💻 Building a personal code snippet library
- 📚 Saving reusable code patterns and templates
- 🎓 Learning and reference documentation
- 🔗 Sharing code snippets with teams or the community

---

## ✨ Features

- 🎨 **Clean UI** — Dark theme with purple/violet accents
- 🏷️ **Smart Organization** — Tag-based categorization and filtering
- 🔍 **Instant Search** — Find snippets by title, tags, or language
- 📋 **One-Click Copy** — Copy code to clipboard instantly
- 🌐 **Public Sharing** — Share snippets via unique URLs
- 📱 **Responsive Design** — Works beautifully on mobile and desktop
- ⚡ **Lightning Fast** — Built on Next.js 16 with optimized performance
- 🔒 **Privacy First** — Your snippets stay in your browser (localStorage)

### Supported Languages

JavaScript, TypeScript, Python, Java, C++, Go, Rust, Ruby, PHP, Swift, Kotlin, HTML, CSS, JSON, YAML, SQL, Bash, Shell, and more...

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or **pnpm**/**yarn**)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tahseen137/snippetvault.git
   cd snippetvault
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
snippetvault/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # Snippet management
│   │   └── page.tsx
│   └── s/[id]/            # Public snippet view
│       └── page.tsx
├── lib/                   # Utilities
│   └── storage.ts         # localStorage wrapper
├── types/                 # TypeScript definitions
│   └── snippet.ts         # Snippet interface
├── public/                # Static assets
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS config
└── package.json
```

---

## 🎯 Usage

### Creating a Snippet

1. Click **"+ New Snippet"** in the dashboard
2. Enter a title and select the language
3. Paste your code
4. Add tags (comma-separated) for organization
5. Optionally add a description
6. Click **"Save Snippet"**

### Finding Snippets

- **Search bar:** Type to search by title, description, or tags
- **Language filter:** Dropdown to filter by programming language
- **Tags:** Click tags to filter by category

### Sharing Snippets

1. Click the **"Share"** button on any snippet
2. Copy the public URL (e.g., `/s/abc-123`)
3. Share the link — anyone with the URL can view it

### Managing Snippets

- **Copy:** One-click copy to clipboard
- **Delete:** Remove snippets with confirmation
- **View:** Open in dedicated view with full details

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for custom configuration:

```bash
# Copy the example file
cp .env.example .env.local
```

See `.env.example` for available options.

> **Note:** Currently, SnippetVault uses localStorage (no backend required). Environment variables are for future features like database integration and authentication.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tahseen137/snippetvault)

1. **One-click deploy:** Click the button above
2. **Or via CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

### Deploy to Netlify

```bash
npm run build
# Upload the .next folder to Netlify
```

### Self-Hosting

Build the project and serve with any Node.js server:

```bash
npm run build
npm start
# Runs on http://localhost:3000
```

---

## 🛠️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

### Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Storage:** localStorage (client-side)
- **Deployment:** Vercel (recommended)

---

## 🗺️ Roadmap

### Planned Features

- [ ] **Real Syntax Highlighting** (Prism.js / Highlight.js)
- [ ] **Backend Storage** (PostgreSQL + user auth)
- [ ] **Collections/Folders** (organize snippets into groups)
- [ ] **Export/Import** (JSON export, GitHub Gists import)
- [ ] **Snippet Versioning** (edit history)
- [ ] **Multi-File Snippets** (multiple files per snippet)
- [ ] **Keyboard Shortcuts** (Vim/Emacs modes)
- [ ] **Syntax Themes** (light/dark code themes)
- [ ] **Browser Extension** (quick save from any page)
- [ ] **CLI Tool** (terminal access to snippets)

### Known Limitations

- **localStorage only:** Snippets are stored in your browser. Clearing browser data will delete them. (Backend coming soon!)
- **No real syntax highlighting:** Code is displayed with basic monospace styling. (Prism.js integration planned)
- **50 snippet limit:** Hardcoded for free tier. (Will be enforced in backend)
- **No mobile app:** Web-only for now.

---

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit your changes:** `git commit -m 'Add amazing feature'`
4. **Push to the branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Coding Standards

- **TypeScript strict mode** (no `any` types)
- **ESLint** passing (run `npm run lint`)
- **Consistent naming** (camelCase for variables, PascalCase for components)
- **Comments** for complex logic

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by [GitHub Gists](https://gist.github.com/), [Cacher](https://www.cacher.io/), and [SnippetsLab](https://www.snippetslab.com/)

---

## 📧 Support

- **Issues:** [GitHub Issues](https://github.com/tahseen137/snippetvault/issues)
- **Discussions:** [GitHub Discussions](https://github.com/tahseen137/snippetvault/discussions)

---

**Made with ❤️ for developers who love clean code**

*Star ⭐ this repo if you find it useful!*
