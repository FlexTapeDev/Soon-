let lastScrollY = 0;

document.addEventListener('scroll', () => {
    const element = document.getElementById('animatedElement');
    const scrollY = window.scrollY;

    // Slow rotation based on scroll position
    const rotateY = scrollY * 0.1; // Horizontal rotation
    const rotateX = scrollY * 0.1; // Vertical rotation

    element.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    lastScrollY = scrollY;
});
