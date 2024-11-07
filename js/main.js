// Initialize GSAP Animations for each tab content on load and when tab changes
document.querySelectorAll('section').forEach((section) => {
    gsap.from(section, { duration: 0.6, opacity: 0, y: 30, ease: "power2.out" });
});

// Initialize AOS
AOS.init();