# Mandar Mawale Portfolio

Personal portfolio website showcasing AI Engineering and Backend Architecture projects.

🌐 **Live Site**: [mandarmawale.me](https://mandarmawale.me)

## 🚀 Features

- Modern React + TypeScript application
- Built with Vite for optimal performance
- Dark mode support
- Responsive design with Tailwind CSS
- Custom domain support

## 🛠️ Development

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Configuration

1. The repository uses GitHub Actions for automated deployment
2. The workflow builds the project and deploys the `dist` folder to GitHub Pages
3. The CNAME file is automatically copied to the `dist` folder during build to ensure the custom domain works

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Then commit and push the changes
```

### Custom Domain Setup

The custom domain `mandarmawale.me` is configured via:
1. CNAME file in the repository root
2. DNS records pointing to GitHub Pages:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME record: `mandarmawale-20.github.io`

## 🔧 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages

## 📝 License

Personal portfolio - All rights reserved.
