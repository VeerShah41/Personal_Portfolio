# Personal Portfolio - React Edition

A modern, creative, and out-of-the-box personal portfolio website built with React, featuring stunning animations, particle effects, and interactive components.

## ✨ Features

- **Modern React Architecture** - Built with React 18 and Vite for blazing-fast performance
- **Stunning Animations** - Powered by Framer Motion for smooth, professional animations
- **Particle Background** - Interactive animated particle system with connecting lines
- **Custom Cursor** - Unique custom cursor with glow effects
- **3D Effects** - Interactive 3D transforms on hover for projects and skills
- **Smooth Scrolling** - Seamless navigation between sections
- **Responsive Design** - Fully responsive and mobile-friendly
- **Intersection Observer** - Animations trigger when sections come into view
- **Modern UI/UX** - Creative design with neon cyan theme and glassmorphism effects

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Personal_Portfolio/
├── public/
│   ├── profile.jpg
│   └── Resume-Veer Shah.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Skills.jsx
│   │   └── Social.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Creative Features

### Particle Background
An animated canvas-based particle system that creates a dynamic, interactive background with connecting lines between particles.

### Custom Cursor
A glowing custom cursor that follows mouse movement with a trailing effect and click animations.

### 3D Transform Effects
Projects and skills cards feature 3D rotation effects on hover, creating an immersive experience.

### Gradient Animations
Smooth gradient animations on text, buttons, and backgrounds for a modern aesthetic.

### Glassmorphism
Frosted glass effects on navigation and cards with backdrop blur for a premium look.

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll-triggered animations
- **Boxicons** - Icon library
- **CSS3** - Modern styling with animations

## 📝 Customization

### Update Personal Information

1. **Profile Image**: Replace `public/profile.jpg` with your own image
2. **Resume**: Replace `public/Resume-Veer Shah.pdf` with your resume
3. **Content**: Update text in components:
   - `src/components/Home.jsx` - Name, title
   - `src/components/About.jsx` - About section text
   - `src/components/Projects.jsx` - Project details
   - `src/components/Skills.jsx` - Skills list
   - `src/components/Social.jsx` - Social media links
   - `src/components/Contact.jsx` - Contact information

### Color Scheme

Edit CSS variables in `src/index.css`:

```css
:root {
  --bg-color: #0a0a0a;
  --text-color: #ffffff;
  --main-color: #00ffee;
  --secondary-color: #7ecbcb;
  --accent-color: #00d4ff;
}
```

## 🌐 Deployment

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Veer Shah**
- GitHub: [@VeerShah41](https://github.com/VeerShah41)
- Email: veershah0013@gmail.com

---

Made with ❤️ using React and modern web technologies

