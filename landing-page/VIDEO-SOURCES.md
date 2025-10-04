# Background Video Sources & Ideas

This document provides curated video sources and recommendations for your Wrinkl landing page background video.

## 🎬 Free Stock Video Websites

### Premium Quality (Free)
1. **[Pexels Videos](https://www.pexels.com/videos/)**
   - Completely free, no attribution required
   - High-quality 4K videos available
   - Easy search and download
   - Recommended searches: "technology", "abstract", "particles", "data flow"

2. **[Pixabay Videos](https://pixabay.com/videos/)**
   - Free for commercial use
   - No attribution required
   - Wide variety of tech and abstract videos
   - Good compression for web

3. **[Coverr](https://coverr.co/)**
   - Curated beautiful videos
   - Perfect for website backgrounds
   - Updated weekly with new content
   - Pre-optimized for web use

4. **[Videvo](https://www.videvo.net/)**
   - Large library of stock videos
   - Mix of free and premium
   - Motion graphics included
   - 4K available

5. **[Mixkit](https://mixkit.co/free-stock-video/)**
   - High-quality free videos
   - No attribution needed
   - Great tech and abstract content
   - Easy filtering options

### Creative Commons
6. **[Videezy](https://www.videezy.com/)**
   - Mix of free and premium
   - Check license for each video
   - Some require attribution

## 🎨 Video Style Recommendations for Tech/SaaS

### 1. Abstract Motion
- Flowing particles
- Geometric shapes
- Digital waves
- Neural networks
- **Example search**: "abstract technology background"

### 2. Tech-Focused
- Code typing animation
- Data visualization
- Circuit boards
- Server rooms
- **Example search**: "technology data flow"

### 3. Nature/Organic
- Slow-moving clouds
- Ocean waves
- Landscapes
- Northern lights
- **Example search**: "slow motion nature"

### 4. Minimal/Clean
- Gradient animations
- Soft bokeh effects
- Light leaks
- Minimalist motion
- **Example search**: "minimal gradient animation"

### 5. Futuristic
- Sci-fi interfaces
- Holographic effects
- Space/cosmos
- Digital grids
- **Example search**: "futuristic interface"

## 🎯 Specific Video Recommendations

### For Wrinkl Landing Page

Based on a modern tech company:

1. **Technology/Innovation Theme**
   - Search: "digital network", "connection nodes", "data particles"
   - Colors: Blue, purple, teal (matches your color scheme)
   - Motion: Smooth, flowing, not too fast

2. **Professional/Corporate**
   - Search: "business abstract", "corporate background"
   - Style: Clean, sophisticated, minimal motion
   - Colors: Dark tones with light accents

3. **Creative/Innovative**
   - Search: "creative technology", "innovation abstract"
   - Style: Dynamic but not overwhelming
   - Colors: Vibrant gradients

## 🔍 Recommended Searches by Theme

### Tech/Digital
```
- "digital particles"
- "technology network"
- "data flow animation"
- "cyber space"
- "digital transformation"
- "AI artificial intelligence"
- "machine learning visualization"
- "blockchain network"
```

### Abstract/Artistic
```
- "abstract gradient"
- "flowing shapes"
- "geometric animation"
- "liquid motion"
- "ink in water"
- "smoke plume"
```

### Professional/Clean
```
- "corporate background"
- "business abstract"
- "minimal motion"
- "clean animation"
- "professional backdrop"
```

### Nature-Inspired
```
- "aurora borealis"
- "clouds timelapse"
- "ocean waves slow motion"
- "mountain landscape"
- "sunset sky"
```

## 📐 Technical Specifications

### Optimal Settings:
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Frame Rate**: 24fps or 30fps
- **Duration**: 10-30 seconds (will loop)
- **File Size**: Under 10MB (under 5MB ideal)
- **Format**: MP4 (H.264 codec)
- **Aspect Ratio**: 16:9

### Why These Settings?
- **Full HD**: Looks sharp on all devices
- **24-30fps**: Smooth motion without large file size
- **Short duration**: Faster loading, seamless loop
- **Small file size**: Quick page load, better UX
- **MP4 H.264**: Best browser compatibility

## 🛠️ Video Optimization Tools

### Online Tools (No Installation)
1. **[CloudConvert](https://cloudconvert.com/)**
   - Convert and compress videos
   - Set custom quality/size
   - Free for basic use

2. **[FreeConvert Video Compressor](https://www.freeconvert.com/video-compressor)**
   - Simple compression
   - Drag and drop
   - Multiple format support

3. **[Clideo Video Compressor](https://clideo.com/compress-video)**
   - Easy to use
   - Good compression ratio
   - Free with watermark removal option

### Desktop Tools (Free)
1. **[HandBrake](https://handbrake.fr/)**
   - Professional quality
   - Many presets available
   - Open source & free
   - **Recommended preset**: "Web" → "Gmail Small 5"

2. **[Shotcut](https://shotcut.org/)**
   - Full video editor
   - Free & open source
   - Export optimized for web

### Command Line (Advanced)
```bash
# Install FFmpeg first: https://ffmpeg.org/

# Basic compression
ffmpeg -i input.mp4 -c:v libx264 -crf 28 output.mp4

# Optimized for web (recommended)
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -vf scale=1920:1080 -movflags +faststart background-video.mp4

# Reduce file size more aggressively
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -preset slow -vf scale=1280:720 -an background-video.mp4

# Create a short loop from long video
ffmpeg -i input.mp4 -ss 00:00:10 -t 00:00:20 -c:v libx264 -crf 28 -preset slow background-video.mp4
```

## 🎨 Creating Custom Videos

### DIY Options:

1. **[Canva](https://www.canva.com/) (Free/Pro)**
   - Create animated backgrounds
   - Use templates
   - Export as MP4

2. **[Adobe Express](https://www.adobe.com/express/) (Free)**
   - Simple animation tools
   - Templates available
   - Easy to use

3. **[Runway ML](https://runml.com/) (Free trial)**
   - AI-generated videos
   - Text-to-video
   - Unique results

### Professional Options:

1. **Adobe After Effects**
   - Professional motion graphics
   - Requires skill/learning
   - Subscription-based

2. **Blender**
   - Free & open source
   - 3D animations
   - Steep learning curve

## 💡 Pro Tips

### Choosing the Right Video:
1. **Match your brand colors** - Look for videos that complement your blue/purple gradient
2. **Consider your message** - Tech company? Choose digital/tech themed videos
3. **Test on mobile** - Video might not play on all mobile devices (gradient fallback shows)
4. **Keep it subtle** - Background should enhance, not distract
5. **Seamless loop** - Choose videos that loop smoothly

### Video Content Tips:
- ✅ Slow, steady motion
- ✅ No sudden changes
- ✅ Consistent colors
- ✅ Abstract is often better than specific
- ✅ Dark or mid-tone videos work best (text shows better)
- ❌ Avoid too bright (hard to read text)
- ❌ Avoid rapid motion (distracting)
- ❌ Avoid specific subjects (faces, products)

### Performance Tips:
1. **Compress first** - Always optimize before using
2. **Test load time** - Aim for under 3 seconds
3. **Consider poster image** - Shows while video loads
4. **Provide fallback** - Gradient already included in CSS
5. **Mobile strategy** - Consider serving smaller video to mobile users

## 📱 Mobile Considerations

Many mobile browsers restrict video autoplay. Your landing page handles this gracefully:
- **Desktop**: Video plays automatically
- **Mobile**: Beautiful gradient fallback shows if video blocked
- **Result**: Great experience on all devices

### Mobile Optimization:
```html
<!-- Optional: Serve different video to mobile -->
<video autoplay muted loop playsinline>
    <source src="assets/background-video-mobile.mp4" 
            media="(max-width: 768px)" 
            type="video/mp4">
    <source src="assets/background-video.mp4" 
            type="video/mp4">
</video>
```

## 🎬 My Top Picks for Wrinkl

Based on your tech/innovation brand:

### Option 1: Digital Network
**Search**: "digital network particles blue"
- Style: Flowing network nodes
- Colors: Blue/purple
- Vibe: Tech-forward, connected

### Option 2: Abstract Technology
**Search**: "abstract technology background"
- Style: Smooth geometric patterns
- Colors: Dark with blue accents
- Vibe: Professional, modern

### Option 3: Data Flow
**Search**: "data flow visualization"
- Style: Streaming data particles
- Colors: Teal/blue
- Vibe: Dynamic, innovative

### Option 4: Minimal Gradient
**Search**: "gradient animation loop"
- Style: Soft color transitions
- Colors: Purple/blue gradient
- Vibe: Clean, sophisticated

### Option 5: Space/Cosmos
**Search**: "space nebula slow motion"
- Style: Cosmic clouds
- Colors: Deep blues/purples
- Vibe: Expansive, visionary

## 📋 Quick Checklist

Before using a video:
- [ ] Checked license (commercial use allowed?)
- [ ] Downloaded high quality (1080p minimum)
- [ ] Compressed file (under 10MB)
- [ ] Tested loop (seamless transition?)
- [ ] Checked on mobile (loads quickly?)
- [ ] Tested with content (text readable?)
- [ ] Verified colors (matches brand?)

## 🌟 Final Recommendation

For Wrinkl, I recommend:
1. **Start with Pexels or Coverr** - Easiest, high quality
2. **Choose abstract/tech theme** - Matches your modern brand
3. **Aim for blue/purple tones** - Complements your color scheme
4. **Keep duration 15-20 seconds** - Good balance
5. **Compress to 5-8MB** - Fast loading, good quality

---

**Need help choosing? Search "technology background loop" on Pexels - perfect starting point!** 🎬
