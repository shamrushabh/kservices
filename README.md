# K&S Services International Ltd. - React Website

A modern, interactive, and responsive React.js website for K&S Services International Ltd., showcasing professional security, logistics, and premium services.

## 🚀 Features

- **Modern Design**: Built with React.js, Tailwind CSS, and Framer Motion
- **Interactive Animations**: Smooth transitions, hover effects, and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Professional Layout**: Clean navigation, hero section, services showcase, and contact form
- **Enhanced Interactivity**: 
  - Custom cursor effects
  - Animated backgrounds and floating elements
  - Expandable service cards
  - Smooth scrolling navigation
  - Form animations and hover states

## 🛡️ Services Showcased

- Operations Manager
- Event Security / Stewards
- Static Security
- K9 Security
- Close Protection
- Filming Security
- Chauffeur Driving
- Logistics Services
- Housekeeping

## 📁 Project Structure

```
ks-services-website/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── K&S.PNG                 # Company logo
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.jsx          # Reusable button component
│   │   └── Layout.jsx              # Main layout with navigation and footer
│   ├── pages/
│   │   └── Home.jsx                # Home page with all sections
│   ├── App.css                     # Global styles
│   ├── App.jsx                     # Main app component with routing
│   ├── data.js                     # Services and stats data
│   ├── index.css                   # Tailwind CSS imports
│   └── main.jsx                    # React entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## 🛠️ Technologies Used

- **React.js 19.1.0** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit
- **React Router DOM** - Declarative routing for React

## 📦 Installation & Setup

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   pnpm run dev
   ```
   The website will be available at `http://localhost:5173/`

3. **Build for Production**
   ```bash
   pnpm run build
   ```

4. **Preview Production Build**
   ```bash
   pnpm run preview
   ```

## 🎨 Key Design Elements

### Color Scheme
- **Primary**: Amber/Gold (#D97706, #F59E0B) - Reflecting the company logo
- **Secondary**: Slate (#1E293B, #475569) - Professional and modern
- **Background**: Gradient from slate-50 to slate-100

### Typography
- **Headings**: Bold, large text with gradient effects
- **Body**: Clean, readable slate colors
- **Interactive Elements**: Hover states and smooth transitions

### Animations
- **Page Load**: Staggered animations for content sections
- **Scroll Triggered**: Elements animate as they come into view
- **Interactive**: Hover effects, button animations, and form interactions
- **Background**: Floating particles and gradient animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 375px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Screens**: 1280px and up

## 🔧 Customization

### Adding New Services
Edit `src/data.js` to add or modify services:

```javascript
{
  icon: "IconName", // Lucide React icon name
  title: "Service Name",
  description: "Service description...",
  features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
}
```

### Modifying Colors
Update `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors here
    }
  }
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Layout.jsx`

## 🚀 Deployment

The website can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 📞 Contact Information

- **Phone**: +44 (0) 123 456 7890
- **Email**: info@ksservicesinternational.com
- **Location**: London, United Kingdom

## 📄 License

This project is proprietary to K&S Services International Ltd.

---

**"Anything you need we can sort"** - K&S Services International Ltd.

