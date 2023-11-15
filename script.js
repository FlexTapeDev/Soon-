let lastScrollY = 0;

document.addEventListener('scroll', () => {
    const element = document.getElementById('animatedElement');
    const lines = document.querySelectorAll('.line');
    const scrollY = window.scrollY;

    // Rotation based on scroll position
    const rotateY = scrollY * 0.1;
    const rotateX = scrollY * 0.1;

    // Invert colors based on scroll position
    const backgroundColorValue = Math.min(255, scrollY / 4);
    const lineColorValue = 255 - backgroundColorValue;

    // Applying styles
    document.body.style.backgroundColor = `rgb(${backgroundColorValue}, ${backgroundColorValue}, ${backgroundColorValue})`;
    lines.forEach(line => {
        line.style.borderColor = `rgb(${lineColorValue}, ${lineColorValue}, ${lineColorValue})`;
    });

    element.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    lastScrollY = scrollY;
});
