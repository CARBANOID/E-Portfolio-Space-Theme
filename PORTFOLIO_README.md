# Professional Portfolio with Neon Cursor Effects

A modern, responsive portfolio website featuring interactive neon cursor trails and smooth animations. Built with the recommended tech stack from the `techs.md` file.

## ✨ Special Features

### 🎨 Interactive Neon Cursor
- **Smooth Neon Trails**: Canvas-based rendering with multi-layer glow effects
- **Hover State Changes**: Cursor transforms when hovering over interactive elements  
- **Performance Optimized**: Throttled mouse tracking and hardware acceleration
- **Mobile Responsive**: Gracefully disabled on touch devices
- **Accessibility Friendly**: Respects reduced motion preferences

## 🚀 Tech Stack

- **Next.js 15** with App Router
- **React 19** with Hooks and Context
- **Tailwind CSS 4** for styling
- **Canvas API** for smooth cursor rendering
- **Framer Motion** for page animations
- **JavaScript (ES6)**
- **ESLint** for code quality

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── page.js          # Homepage
│   │   ├── layout.js        # Root layout
│   │   ├── globals.css      # Global styles
│   │   ├── about/
│   │   │   └── page.js      # About page
│   │   ├── projects/
│   │   │   └── page.js      # Projects page
│   │   └── contact/
│   │       └── page.js      # Contact page
│   └── components/
│       ├── Navbar.js        # Navigation component
│       ├── Footer.js        # Footer component
│       ├── ProjectCard.js   # Reusable project card
│       └── NeonCursor.js    # Advanced neon cursor effect
│       └── ProjectCard.js   # Project card component
├── public/                  # Static assets
└── package.json
```

## 🛠️ Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
- Update `Your Name` in the homepage (`src/app/page.js`)
- Update the avatar initials (currently "YN")
- Add your social media links in the Navbar and Footer components

### Projects
- Edit the projects array in `src/app/projects/page.js`
- Add your project images to the `public/` folder
- Update project URLs and descriptions

### Styling
- All styles use Tailwind CSS
- Dark mode is supported by default
- Modify the color scheme in `src/app/globals.css`

### Contact Form
- Currently uses a basic HTML form
- Integrate with **Formspree** or **Netlify Forms** for backend functionality
- Add the form action URL to make it functional

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with automatic builds on every push

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after running `npm run build`
- **GitHub Pages**: Use Next.js static export feature

## 📝 Next Steps

1. **Add your content:**
   - Replace placeholder text with your information
   - Add your project screenshots and descriptions
   - Update social media links

2. **Enhance functionality:**
   - Set up a contact form backend (Formspree/Netlify Forms)
   - Add more animations with Framer Motion
   - Create a blog section if needed

3. **SEO Optimization:**
   - Add meta descriptions to each page
   - Create a favicon
   - Add structured data markup

4. **Optional enhancements:**
   - Add a resume download link
   - Implement a dark/light mode toggle
   - Add scroll animations
   - Create a testimonials section

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode support
- ✅ Modern animations with Framer Motion
- ✅ SEO-friendly structure
- ✅ Fast performance with Next.js
- ✅ Accessible design
- ✅ Clean, professional UI
