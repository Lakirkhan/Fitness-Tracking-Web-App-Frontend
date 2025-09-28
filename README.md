# LakirKhan Fitness Tracker

A modern, responsive fitness tracking web application built with React, Vite, and Framer Motion. Features a unique watermelon-themed design with smooth animations and comprehensive fitness tracking capabilities.

## 🍉 Features

- **Modern Design**: Professional UI with watermelon-themed branding
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Responsive Layout**: Fully responsive design for mobile, tablet, and desktop
- **Custom Cursor**: Interactive cursor animation with glow effects
- **Animated Loader**: Beautiful loading screen with watermelon branding
- **Progress Tracking**: Comprehensive analytics and progress visualization
- **Real-time Data**: Live fitness tracking with detailed insights

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   \`\`\`bash
   git clone <repository-url>
   cd lakirkhan-fitness-tracker
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── Logo.jsx        # LakirKhan logo component
│   ├── WatermelonMark.jsx # Brand watermelon mark
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── Loader.jsx      # Loading screen
│   ├── CustomCursor.jsx # Custom cursor animation
│   ├── AnimatedBackground.jsx # Background animations
│   ├── ScrollAnimations.jsx # Scroll-triggered animations
│   └── InteractiveElements.jsx # Interactive UI elements
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with hero section
│   ├── Features.jsx    # Features showcase
│   ├── Progress.jsx    # Progress tracking dashboard
│   ├── About.jsx       # About page with team info
│   └── Contact.jsx     # Contact form and info
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and animations
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: Green tones (#22c55e to #15803d)
- **Watermelon**: Red/pink tones (#ef4444 to #b91c1c)
- **Dark**: Navy/slate tones (#0f172a to #334155)
- **Neutrals**: Gray scale for backgrounds and text

### Typography
- **Display Font**: Poppins (headings and branding)
- **Body Font**: Inter (body text and UI elements)

### Animations
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Custom CSS**: Hover effects, loading animations, and cursor trails
- **Scroll Animations**: Elements animate in as they enter viewport

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **React Router**: Client-side routing

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features Explained

### Custom Cursor Animation
- Follows mouse movement with smooth transitions
- Changes appearance on hover over interactive elements
- Includes trailing glow effect

### Watermelon Branding
- Unique watermelon-themed logo and brand mark
- Consistent color scheme throughout the app
- Playful yet professional design approach

### Progress Tracking
- Interactive charts and graphs
- Achievement system with badges
- Weekly/monthly/yearly progress views
- Real-time statistics display

### Smooth Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects on interactive elements
- Loading states and micro-interactions

## 🔧 Customization

### Changing Colors
Edit the color palette in `tailwind.config.js`:

\`\`\`javascript
colors: {
  primary: {
    // Your primary color shades
  },
  watermelon: {
    // Your accent color shades
  }
}
\`\`\`

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Modifying Animations
Animation configurations are in:
- `src/components/ScrollAnimations.jsx` - Scroll-based animations
- `src/components/InteractiveElements.jsx` - Interactive animations
- `src/index.css` - CSS animations and transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help with the project:
- Email: pathanlucky156@gmail.com
- Create an issue on GitHub
- Check the documentation

---

**Built with ❤️ by LakirKhan Team**
