# UCPS Consciousness Widget

A lightweight, embeddable 3D consciousness visualization widget built with React and Three.js.

## 📦 Files Included

| File | Description |
|------|-------------|
| `cnscns-widget.js` | The main JavaScript bundle containing React, Three.js, and all assets |
| `style.css` | Complete styling for the widget |
| `index.html` | Demo page showing integration example |

## 🚀 Quick Start

### 1. Copy Files
Copy `cnscns-widget.js` and `style.css` to your project's assets folder.

### 2. Add to Your Page

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Widget CSS -->
    <link rel="stylesheet" href="path/to/style.css">
</head>
<body>
    <!-- Widget Container -->
    <div id="cnscns-widget" style="width: 100%; height: 600px;"></div>
    
    <!-- Widget Script (at bottom of body) -->
    <script src="path/to/cnscns-widget.js"></script>
</body>
</html>
```

The widget automatically initializes when it finds `<div id="cnscns-widget">`.

## ⚙️ Advanced Usage

### Custom Container ID

```javascript
// Initialize with a custom container
window.CnscnsWidget.init('my-custom-container');
```

### Responsive Sizing

The widget fills its container, so set the container's width and height:

```css
#cnscns-widget {
    width: 100%;
    height: 100vh;
    /* or fixed dimensions */
    width: 800px;
    height: 600px;
}
```

### Full-Page Mode

```html
<style>
    body { margin: 0; padding: 0; }
    #cnscns-widget { width: 100vw; height: 100vh; }
</style>
```

## 🎨 Customization

### CSS Variables

Override these in your CSS to customize colors:

```css
:root {
    --color-bg: #000000;           /* Background color */
    --color-text: #ffffff;         /* Text color */
    --color-primary: #ffffff;      /* Primary accent */
    --color-dim: rgba(255, 255, 255, 0.4); /* Dimmed elements */
}
```

## 📱 Mobile Support

The widget is fully responsive with:
- Stacked layout on screens < 768px
- Touch-enabled scrolling
- Fluid typography scaling

## 🔧 Rebuilding the Widget

From the main project directory:

```bash
# Install dependencies (first time only)
npm install

# Build the widget
npm run build:widget

# Clean rebuild
npm run build:widget:clean
```

## 📋 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 🌟 Features

- **10 Dimensional Stages** - Journey from Singularity to Source
- **Interactive 3D Scenes** - Powered by Three.js
- **Scroll-driven Animation** - Smooth transitions between stages
- **Chakra Visualization** - 7 chakra points on the human model
- **Responsive Design** - Works on all screen sizes

---

**UCPS** - Universal Consciousness Positioning System
