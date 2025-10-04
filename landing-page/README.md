# Wrinkl Landing Page

A modern, responsive landing page for Wrinkl with smooth animations, interactive elements, and a full-screen background video.

## 📁 Folder Structure

```
landing-page/
├── index.html              # Main HTML file with all sections
├── css/
│   └── styles.css         # All styling and responsive design
├── js/
│   └── script.js          # Interactive features and animations
├── assets/
│   └── background-video.mp4  # Background video (to be added)
└── README.md              # This file
```

## 🎯 Features

### Sections
1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Wrinkl** - Mission, vision, team info, and statistics
3. **Our Edge** - Competitive advantages and key features
4. **Contact** - Contact information and form with call-to-action banner

### Design Features
- ✨ Full-screen background video on all pages
- 📱 Fully responsive design (desktop, tablet, mobile)
- 🎨 Smooth scroll animations and transitions
- 🔘 Interactive buttons with hover effects and ripple animations
- 📊 Animated counters for statistics
- 🎯 Smooth scroll navigation
- 🌈 Gradient text effects and modern UI
- 🎭 Parallax scrolling effect on hero section
- 📋 Functional contact form with validation

### Technical Features
- Pure HTML5, CSS3, and Vanilla JavaScript (no frameworks required)
- Intersection Observer API for scroll animations
- CSS Grid and Flexbox for layouts
- CSS custom properties (variables) for easy theming
- Mobile-first responsive design
- Accessibility features (keyboard navigation, reduced motion support)
- Performance optimizations (debouncing, lazy loading support)

## 🚀 Getting Started

### 1. Quick Setup

Simply open `index.html` in a web browser:
```bash
cd landing-page
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or
start index.html  # Windows
```

### 2. Using a Local Server (Recommended)

For better video playback and to avoid CORS issues, use a local server:

**Option A: Using Python**
```bash
cd landing-page
python -m http.server 8000
# Then open: http://localhost:8000
```

**Option B: Using Node.js (http-server)**
```bash
npm install -g http-server
cd landing-page
http-server
# Then open: http://localhost:8080
```

**Option C: Using VS Code Live Server**
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🎥 Adding Background Video

### Step 1: Obtain Your Video

Choose or create a background video that:
- Is visually appealing and relevant to your brand
- Has subtle motion (not too distracting)
- Is optimized for web (compressed, reasonable file size)
- Recommended duration: 10-30 seconds (will loop)
- Recommended format: MP4 (H.264 codec)
- Recommended resolution: 1920x1080 (Full HD)

### Step 2: Optimize Your Video

To ensure fast loading, optimize your video:

**Using FFmpeg (recommended):**
```bash
# Install FFmpeg first: https://ffmpeg.org/download.html

# Compress and optimize video
ffmpeg -i input-video.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -vf scale=1920:1080 -movflags +faststart background-video.mp4
```

**Online Tools:**
- [HandBrake](https://handbrake.fr/) - Free, open-source video transcoder
- [CloudConvert](https://cloudconvert.com/) - Online video converter
- [Clipchamp](https://clipchamp.com/) - Online video editor and compressor

### Step 3: Add Video to Assets Folder

Place your optimized video in the assets folder:
```bash
cp your-video.mp4 landing-page/assets/background-video.mp4
```

### Step 4: Video Already Configured!

The HTML is already set up to use your video. The video element in `index.html`:
```html
<video autoplay muted loop playsinline id="bg-video">
    <source src="assets/background-video.mp4" type="video/mp4">
</video>
```

### Alternative Video Sources

If you want to use a different video file or format:

1. **Different filename:**
   ```html
   <source src="assets/your-filename.mp4" type="video/mp4">
   ```

2. **Multiple formats for better compatibility:**
   ```html
   <video autoplay muted loop playsinline id="bg-video">
       <source src="assets/background-video.webm" type="video/webm">
       <source src="assets/background-video.mp4" type="video/mp4">
   </video>
   ```

3. **External video (CDN/hosted):**
   ```html
   <source src="https://your-cdn.com/video.mp4" type="video/mp4">
   ```

### Fallback Gradient

If the video doesn't load, the page automatically shows a beautiful gradient background. This is already configured in the CSS.

## 🎨 Customization

### Changing Colors

Edit CSS custom properties in `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Secondary accent */
    --accent-color: #14b8a6;       /* Additional accent */
    /* ... more colors ... */
}
```

### Changing Content

Edit the text content directly in `index.html`:
- Hero title and subtitle
- About section content
- Features and advantages
- Contact information
- Footer content

### Changing Fonts

The page uses Inter font from Google Fonts. To change:

1. Choose a font from [Google Fonts](https://fonts.google.com/)
2. Update the link in `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600;700&display=swap" rel="stylesheet">
   ```
3. Update the CSS variable:
   ```css
   --font-family: 'Your Font', sans-serif;
   ```

### Adding Your Logo

Replace the text logo with an image in `index.html`:
```html
<div class="logo">
    <img src="assets/logo.png" alt="Wrinkl Logo" height="40">
</div>
```

## 📱 Responsive Breakpoints

The design adapts to these screen sizes:
- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Up to 767px
- **Small Mobile:** Up to 480px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Tips

1. **Video Optimization:**
   - Keep video file size under 10MB
   - Use 1080p or lower resolution
   - Use H.264 codec for best compatibility

2. **Image Optimization:**
   - Compress images before adding
   - Use WebP format for better compression
   - Add lazy loading for below-the-fold images

3. **Code Optimization:**
   - Minify CSS and JS for production
   - Enable gzip compression on your server
   - Use a CDN for static assets

## 🎯 SEO Optimization

The page includes basic SEO elements:
- Meta description
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images (when you add them)

To improve SEO:
1. Add more meta tags (Open Graph, Twitter Cards)
2. Create a sitemap.xml
3. Add structured data (JSON-LD)
4. Optimize page titles and descriptions

## 🔒 Security Notes

- Form submissions are currently client-side only
- Implement server-side validation before production
- Use HTTPS for form submissions
- Implement CSRF protection
- Sanitize user inputs

## 📝 Deployment

### Deploy to Netlify (Free)

1. Create account at [Netlify](https://netlify.com)
2. Drag and drop the `landing-page` folder
3. Your site is live!

### Deploy to Vercel (Free)

```bash
npm install -g vercel
cd landing-page
vercel
```

### Deploy to GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select your branch and folder
5. Your site is live!

## 🐛 Troubleshooting

### Video Not Playing

1. **Check file path:** Ensure video is at `assets/background-video.mp4`
2. **Check file format:** Use MP4 with H.264 codec
3. **Check file size:** Large files may not load on mobile
4. **Check browser console:** Look for error messages
5. **Try different browser:** Some browsers block autoplay

### Mobile Issues

1. **Video not showing:** Some mobile browsers restrict autoplay
   - The gradient fallback will show automatically
2. **Choppy animations:** Reduce animation complexity in CSS
3. **Menu not working:** Clear browser cache

### Performance Issues

1. **Slow loading:** Compress video and images
2. **Laggy animations:** Reduce particles or disable parallax
3. **High memory usage:** Consider using a shorter video loop

## 📞 Support

For issues or questions:
- Check browser console for errors
- Validate HTML at [W3C Validator](https://validator.w3.org/)
- Test responsiveness with browser dev tools

## 📄 License

Free to use for personal and commercial projects.

## 🎉 Credits

Built with ❤️ for Wrinkl
- No external libraries or frameworks
- Pure HTML, CSS, and JavaScript
- Modern web standards and best practices

---

**Enjoy your new landing page! 🚀**
