# 🚀 SnippetVault

**Your code snippets, beautifully organized**

A modern, beautiful code snippet manager built with Next.js 14, TypeScript, and Tailwind CSS. Save, organize, and share your code snippets with syntax highlighting and an elegant dark UI.

## ✨ Features

- 🎨 **Beautiful Dark UI** - Purple/violet accent theme optimized for developers
- 💾 **Local Storage** - Client-side storage for instant access (MVP)
- 🔍 **Search & Filter** - Find snippets by title, description, tags, or language
- 📋 **One-Click Copy** - Copy code to clipboard instantly
- 🔗 **Easy Sharing** - Share snippets via unique URLs
- 🏷️ **Tagging System** - Organize with custom tags
- 🌈 **18+ Languages** - Support for all major programming languages
- 📱 **Fully Responsive** - Works beautifully on all devices

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Storage:** localStorage (client-side)
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/tahseen137/snippetvault.git
cd snippetvault

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎯 Usage

1. **Create Snippets** - Go to `/dashboard` and click "New Snippet"
2. **Organize** - Add title, description, language, and tags
3. **Search** - Use the search bar and language filter to find snippets
4. **Share** - Click "View" on any snippet to get a shareable URL
5. **Copy** - One-click copy to clipboard from the snippet view

## 📁 Project Structure

```
snippetvault/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard (create/manage snippets)
│   ├── s/[id]/
│   │   └── page.tsx          # Public snippet view
│   ├── api/
│   │   └── snippets/
│   │       └── route.ts      # API routes (placeholder)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── lib/
│   └── storage.ts            # localStorage utilities
├── types/
│   └── snippet.ts            # TypeScript interfaces
└── public/                   # Static assets
```

## 🎨 Supported Languages

JavaScript, TypeScript, Python, Java, C++, Go, Rust, Ruby, PHP, Swift, Kotlin, HTML, CSS, JSON, YAML, SQL, Bash, Shell

## 💰 Pricing (Concept)

- **Free:** Up to 50 snippets
- **Pro ($7/mo):** Unlimited snippets + private snippets + advanced search

## 🚀 Deployment

Deployed on Vercel with automatic deployments from the main branch.

**Production URL:** [SnippetVault on Vercel](https://snippetvault-4rqwvsdfw-tahseen-rahmans-projects-58bcf065.vercel.app)

## 📝 Future Enhancements

- [ ] Backend database (PostgreSQL/MongoDB)
- [ ] User authentication
- [ ] Private snippets
- [ ] Collections/folders
- [ ] Code syntax highlighting with libraries (Prism.js/Highlight.js)
- [ ] Dark/light theme toggle
- [ ] Export snippets (JSON/Markdown)
- [ ] Snippet versioning
- [ ] Collaboration features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🏆 Built For

Hackathon MVP - Built in record time with complete feature set and clean code.

---

**Made with ❤️ using Next.js and Tailwind CSS**
