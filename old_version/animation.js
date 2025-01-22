document.addEventListener("DOMContentLoaded", () => {
    // Container, which listens for mouse events
    const container = document.querySelector(".split-container");

    // Two sections that will respond to mouse events
    const designer = document.getElementById("designer");
    const coder = document.getElementById("coder");

    // Initializing styles
    designer.style.background = `url('images/Designer.webp') no-repeat center/cover`;
    coder.style.background = `url('images/Coder.webp') no-repeat center/cover`;
    // Hide both sections initially
    designer.style.opacity = 0;
    coder.style.opacity = 0;

    // Mouse move events
    container.addEventListener("mousemove", (e) => {
        const containerWidth = container.offsetWidth;
        const mouseX = e.clientX; // Captures current X-coordinate of the mouse relative to the viewport

        // Calculate Opacity based on the position of mouse
        const leftOpacity = Math.max(0, 1 - mouseX / (containerWidth / 2));
        const rightOpacity = Math.max(0, (mouseX - containerWidth / 2) / (containerWidth / 2));

        // Update Opacity
        designer.style.opacity = leftOpacity;
        coder.style.opacity = rightOpacity;

        // Dynamically calculate the shift distance
        const translateLeft = (1 - leftOpacity) * 50; 
        const translateRight = (1 - rightOpacity) * 50; 

        // Dynamically shifts each section horizontally
        designer.style.transform = `translateX(-${translateLeft}%)`;
        coder.style.transform = `translateX(${translateRight}%)`;
    });

    // Mouse leave events
    container.addEventListener("mouseleave", () => {
        // Reset opacity and position
        designer.style.opacity = 0;
        coder.style.opacity = 0;
        designer.style.transform = `translateX(-50%)`;
        coder.style.transform = `translateX(50%)`;

        // Reset the background to default one
        container.style.background = `url('images/Default.webp') no-repeat center/cover`;
    });
});
