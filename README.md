# Mehedi Hasan - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring internationalization (i18n), dark mode, and an articles section with technical content.

## 🚀 Features

- **Next.js 15** - Latest App Router with Server Components
- **Internationalization (i18n)** - Multi-language support (English & Bengali) using next-intl
- **Dark Mode** - Theme switching with system preference detection
- **Articles Section** - Technical blog with category-wise navigation
  - PostgreSQL Database Architecture guide
  - Sidebar navigation with expandable categories
  - Mobile-responsive design
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful iconography throughout

## 🛠️ Tech Stack

- **Framework:** Next.js 15.4.5
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Internationalization:** next-intl
- **Animations:** Framer Motion
- **Icons:** React Icons (Material Design)
- **Package Manager:** pnpm

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/My-Portfolio.git

# Navigate to the project directory
cd My-Portfolio

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🏗️ Project Structure

```
My-Portfolio/
├── app/
│   ├── [locale]/
│   │   ├── articles/
│   │   │   ├── architectures/
│   │   │   │   └── page.js          # PostgreSQL Architecture article
│   │   │   ├── layout.js            # Articles layout with sidebar
│   │   │   └── page.js              # Articles landing page
│   │   ├── layout.js                # Root layout with i18n
│   │   └── page.js                  # Home page
│   └── sitemap.js
├── components/
│   ├── index/                       # Home page components
│   │   ├── ClientForm.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Main.js
│   │   ├── MyWork.js
│   │   ├── Nav.js
│   │   └── Skills.js
│   ├── ArticlesSidebar.js          # Articles navigation sidebar
│   ├── LanguageSwitcher.js
│   ├── LanguageSwitcherMobile.js
│   └── ThemeProvider.js
├── locales/
│   ├── en/
│   │   └── common.json
│   └── bn/
│       └── common.json
├── styles/
│   └── globals.css
├── public/
│   └── robots.txt
├── i18n/
│   ├── config.js
│   └── request.js
├── middleware.js                    # i18n routing middleware
└── package.json
```

## 🌐 Internationalization

The website supports multiple languages:
- English (en)
- Bengali (bn)

Language can be switched using the language switcher in the navigation bar.

## 🎨 Customization

### Adding New Articles

1. Create a new page in `app/[locale]/articles/your-category/page.js`
2. Update the sidebar categories in `components/ArticlesSidebar.js`:

```javascript
const categories = [
  {
    id: 'your-category',
    title: 'Your Category',
    icon: YourIcon,
    articles: [
      {
        id: 'article-1',
        title: 'Your Article Title',
        slug: 'your-category',
        icon: ArticleIcon,
      },
    ]
  },
];
```

### Theme Customization

Modify the theme colors in `tailwind.config.js` and update dark mode classes throughout the components.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/My-Portfolio)

## 📄 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mehedi Hasan**
- Website: [mehedihasansumit.com](https://mehedihasansumit.com)
- GitHub: [@mehedihasansumit](https://github.com/mehedihasansumit)
- LinkedIn: [Mehedi Hasan](https://www.linkedin.com/in/mehedi-hasan-103621210)
- Email: mehedihasansumit@gmail.com

## ⭐ Show your support

Give a ⭐️ if you like this project!
