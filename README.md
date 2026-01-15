# Developer Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern and clean design with smooth animations
- 🎨 Styled with Tailwind CSS
- 🎭 Interactive animations with Framer Motion
- 📱 Fully responsive design
- 📊 Google Analytics integration ready
- 🚀 Deployed on GitHub Pages

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Analytics:** Google Analytics (react-ga4)
- **Hosting:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SneekySnek/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Then edit `.env` and add your Google Analytics ID:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Google Analytics

To enable Google Analytics tracking:

1. Get your GA4 measurement ID from [Google Analytics](https://analytics.google.com/)
2. Add it to your `.env` file as shown above
3. The app will automatically initialize GA when the measurement ID is set

### GitHub Pages

The site is configured to deploy to GitHub Pages automatically via GitHub Actions when pushing to the `main` branch.

To set up GitHub Pages:
1. Go to your repository Settings > Pages
2. Set Source to "GitHub Actions"
3. Push to the `main` branch to trigger deployment

### Customization

Edit the following files to customize your portfolio:

- `src/components/Hero.jsx` - Update your name and introduction
- `src/components/About.jsx` - Update your skills and background
- `src/components/Projects.jsx` - Add your projects
- `src/components/Contact.jsx` - Update contact information and social links
- `index.html` - Update meta tags and title

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).
