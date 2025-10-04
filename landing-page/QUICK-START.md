# Quick Start Guide - Wrinkl Landing Page

## 🚀 Get Started in 3 Steps

### Step 1: View the Landing Page
```bash
cd landing-page
python -m http.server 8000
```
Then open: **http://localhost:8000**

### Step 2: Add Your Background Video
1. Place your video file in the `assets/` folder
2. Name it: `background-video.mp4`
3. Refresh the page - done! ✨

### Step 3: Customize Content
Edit `index.html` to change:
- Company name and tagline
- Section content
- Contact information
- Call-to-action buttons

## 📋 What You Get

### 4 Main Sections:
1. **🎯 Hero** - Welcome message with CTA buttons
2. **ℹ️ About** - Mission, vision, team & statistics
3. **⚡ Our Edge** - 4 key competitive advantages
4. **📞 Contact** - Contact form & information

### Design Features:
- ✅ Full-screen background video
- ✅ Smooth scroll animations
- ✅ Mobile responsive
- ✅ Interactive hover effects
- ✅ Animated statistics counters
- ✅ Working contact form
- ✅ Mobile hamburger menu

## 🎨 Quick Customizations

### Change Brand Colors
In `css/styles.css`, find `:root` and update:
```css
--primary-color: #6366f1;    /* Your brand color */
--secondary-color: #ec4899;  /* Accent color */
```

### Change Company Info
In `index.html`, search and replace:
- "Wrinkl" → Your company name
- Email addresses
- Phone numbers
- Location

### Add Your Logo
Replace the text logo in `index.html`:
```html
<div class="logo">
    <img src="assets/logo.png" alt="Your Company">
</div>
```

## 📱 Test Responsiveness

1. **Desktop**: Open in browser normally
2. **Tablet**: Resize browser to ~768px width
3. **Mobile**: Resize to ~375px or use phone

Or use browser DevTools (F12) → Toggle Device Toolbar

## 🎥 Video Recommendations

### Best Practices:
- **Duration**: 10-30 seconds (loops automatically)
- **Resolution**: 1920x1080 (Full HD)
- **File Size**: Under 10MB
- **Format**: MP4 (H.264)
- **Style**: Subtle, not distracting

### Free Video Sources:
- [Pexels](https://www.pexels.com/videos/) - Free stock videos
- [Pixabay](https://pixabay.com/videos/) - Free video clips
- [Coverr](https://coverr.co/) - Beautiful free videos

### Quick Video Compression:
```bash
# Using FFmpeg (install first)
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1920:1080 background-video.mp4
```

## 🌐 Deploy Your Site

### Option 1: Netlify (Easiest)
1. Go to [Netlify.com](https://netlify.com)
2. Drag & drop the `landing-page` folder
3. Done! You get a free URL

### Option 2: GitHub Pages
1. Create GitHub repo
2. Push your code
3. Enable Pages in repo settings

### Option 3: Vercel
```bash
npm install -g vercel
cd landing-page
vercel
```

## ⚙️ File Structure
```
landing-page/
├── index.html          ← Main page
├── css/
│   └── styles.css     ← All styling
├── js/
│   └── script.js      ← Interactions
├── assets/
│   └── background-video.mp4  ← Your video goes here
└── README.md          ← Full documentation
```

## 🐛 Common Issues

### Video Not Playing?
- ✅ Check filename: `background-video.mp4`
- ✅ Check format: MP4 with H.264 codec
- ✅ Try different browser
- ✅ Check browser console (F12) for errors
- 💡 Gradient background shows as fallback

### Menu Not Working on Mobile?
- ✅ Clear browser cache
- ✅ Check if JavaScript is enabled

### Slow Performance?
- ✅ Compress video file (under 10MB)
- ✅ Use smaller video resolution
- ✅ Optimize images if you add any

## 📊 Before Going Live Checklist

- [ ] Added background video
- [ ] Updated all company information
- [ ] Changed colors to match brand
- [ ] Added real contact details
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Optimized video file size
- [ ] Added company logo (optional)
- [ ] Updated meta description in HTML
- [ ] Tested contact form

## 💡 Pro Tips

1. **Keep video subtle** - Too much motion distracts from content
2. **Test on mobile** - Video may not autoplay on some devices (gradient shows instead)
3. **Optimize early** - Compress video before adding
4. **Update regularly** - Keep content fresh for pitch events
5. **Add analytics** - Consider adding Google Analytics

## 🎯 Perfect For:

- Pitch events
- Demo days
- Investor presentations
- Trade shows
- Conference displays
- Product launches
- Company introductions

## 📞 Need Help?

1. Check the full `README.md` for detailed docs
2. Open browser console (F12) to see errors
3. Validate HTML at [validator.w3.org](https://validator.w3.org)

---

**You're all set! Go make an amazing impression! 🌟**
