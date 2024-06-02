document.addEventListener('DOMContentLoaded', () => {
    // Typing Animation
    const lines = [
        "Welcome to my page",
        "I am Sachin, an Electrical Engineer",
        "Enthusiast in Data Science, AI, and Quantum Computing"
    ];
    

    let lineIndex = 0;
    let textIndex = 0;
    let isDeleting = false;
    let delay = 2000;

    function typeLine() {
        const currentLine = lines[lineIndex];
        if (!isDeleting && textIndex < currentLine.length) {
            document.getElementById("welcome-text").textContent += currentLine[textIndex];
            textIndex++;
            delay = 200;
        } else if (isDeleting && textIndex >= 0) {
            document.getElementById("welcome-text").textContent = currentLine.substring(0, textIndex);
            textIndex--;
            delay = 50;
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                lineIndex = (lineIndex + 1) % lines.length;
            }
            delay = 2000;
        }
        setTimeout(typeLine, delay);
    }

    // Start typing animation
    typeLine();

    // Scroll Animation
    window.addEventListener('scroll', () => {
        const animatedElements = document.querySelectorAll('.animated');
        animatedElements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('appear');
            }
        });
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
