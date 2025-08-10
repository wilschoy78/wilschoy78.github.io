# Wilson Gayo - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Interactive**: Engaging user experience with Framer Motion animations
- **Type-Safe**: Built with TypeScript for better development experience
- **Fast**: Powered by Vite for lightning-fast development and builds
- **Accessible**: Following web accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📱 Pages

- **Home**: Hero section with introduction and featured content
- **About**: Professional background and experience timeline
- **Projects**: Portfolio of work with filtering and search
- **Skills**: Technical skills organized by category with proficiency levels
- **Contact**: Contact form with validation and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wilschoy78/wilschoy78-portfolio.git
cd wilschoy78-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. Push to the `main` branch to trigger deployment

### Manual Deployment

To deploy manually:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # UI components
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── types/              # TypeScript type definitions
├── data/               # Static data and content
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── App.tsx             # Main application component
```

## 🎨 Customization

### Colors

The project uses Tailwind CSS for styling. You can customize the color scheme by modifying the `tailwind.config.js` file.

### Content

Update the content in the following files:
- `src/data/navigation.ts` - Navigation items and contact info
- Individual page components for specific content

### Animations

Animations are handled by Framer Motion. You can customize them in the individual components.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: wilson.gayo@email.com
- **LinkedIn**: [linkedin.com/in/wilson-gayo](https://linkedin.com/in/wilson-gayo)
- **GitHub**: [github.com/wilschoy78](https://github.com/wilschoy78)

---

Built with ❤️ by Wilson Gayo