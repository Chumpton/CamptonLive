// Global function to toggle widget fullscreen
window.toggleWidgetFullscreen = function() {
    const container = document.getElementById('dimensionWidgetContainer');
    const expandIcon = document.querySelector('.expand-icon');
    const collapseIcon = document.querySelector('.collapse-icon');
    
    if (container) {
        container.classList.toggle('is-fullscreen');
        
        if (container.classList.contains('is-fullscreen')) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            if(expandIcon) expandIcon.style.display = 'none';
            if(collapseIcon) collapseIcon.style.display = 'block';
        } else {
            document.body.style.overflow = ''; // Restore scrolling
            if(expandIcon) expandIcon.style.display = 'block';
            if(collapseIcon) collapseIcon.style.display = 'none';
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('starsCanvas');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let stars = [];
    
    // Configuration
    const STAR_COUNT = 200;
    const MAX_STAR_SIZE = 2;
    const STAR_SPEED = 0.05;
    
    // Initialize canvas size
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initStars();
    }
    
    // Create a star object
    function createStar() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * MAX_STAR_SIZE,
            speedX: (Math.random() - 0.5) * STAR_SPEED,
            speedY: (Math.random() - 0.5) * STAR_SPEED,
            opacity: Math.random()
        };
    }
    
    // Initialize stars array
    function initStars() {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push(createStar());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        stars.forEach(star => {
            // Update position
            star.x += star.speedX;
            star.y += star.speedY;
            
            // Twinkle effect
            star.opacity += (Math.random() - 0.5) * 0.05;
            if (star.opacity > 1) star.opacity = 1;
            if (star.opacity < 0.1) star.opacity = 0.1;
            
            // Screen wrap
            if (star.x < 0) star.x = width;
            if (star.x > width) star.x = 0;
            if (star.y < 0) star.y = height;
            if (star.y > height) star.y = 0;
            
            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    // Add 3D tilt effect to profile card and links
    function initTiltEffect() {
        const profileCard = document.querySelector('.profile-card');
        const treeLinks = document.querySelectorAll('.tree-link');
        
        const handleMove = (e, element, intensity = 10) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -intensity;
            const rotateY = ((x - centerX) / centerX) * intensity;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
            element.style.transition = 'none';
        };
        
        const handleLeave = (element) => {
            element.style.transform = '';
            element.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease, background 0.5s ease';
        };

        // Apply to profile card
        if (window.matchMedia("(pointer: fine)").matches) {
            profileCard.addEventListener('mousemove', (e) => handleMove(e, profileCard, 3));
            profileCard.addEventListener('mouseleave', () => handleLeave(profileCard));
            
            // Apply to tree links
            treeLinks.forEach(link => {
                link.addEventListener('mousemove', (e) => handleMove(e, link, 5));
                link.addEventListener('mouseleave', () => handleLeave(link));
            });
        }
    }
    
    // Event listeners
    window.addEventListener('resize', resize);
    
    // Start everything
    resize();
    animate();
    initTiltEffect();
});
