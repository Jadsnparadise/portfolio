/**
 * Main Application Script
 * Controla animações de entrada e interações de UI.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Observador de interseção para animações de fade-in ao rolar a página
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});