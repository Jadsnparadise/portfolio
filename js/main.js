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

    // Inicializa o modal Lightbox para todas as imagens de galerias
    initGalleryLightbox();
});

/**
 * Lightbox / Galeria de Imagens Interativa (Estilo Steam e Google Play)
 */
function initGalleryLightbox() {
    // Coleta todas as imagens pertencentes a galerias
    const images = Array.from(document.querySelectorAll('.gallery-banner img, .gallery-item img'));
    if (images.length === 0) return;

    // Cria o Modal Lightbox se não existir
    let modal = document.querySelector('.lightbox-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-header">
                <span class="lightbox-title"></span>
                <button class="lightbox-close" aria-label="Fechar"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="lightbox-body">
                <button class="lightbox-btn lightbox-prev" aria-label="Imagem Anterior"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="lightbox-img-wrapper">
                    <img class="lightbox-img" src="" alt="">
                </div>
                <button class="lightbox-btn lightbox-next" aria-label="Próxima Imagem"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
            <div class="lightbox-footer">
                <span class="lightbox-counter"></span>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const modalImg = modal.querySelector('.lightbox-img');
    const modalTitle = modal.querySelector('.lightbox-title');
    const modalCounter = modal.querySelector('.lightbox-counter');
    const prevBtn = modal.querySelector('.lightbox-prev');
    const nextBtn = modal.querySelector('.lightbox-next');
    const closeBtn = modal.querySelector('.lightbox-close');

    let currentIndex = 0;

    function getCounterText(current, total) {
        const lang = (localStorage.getItem('portfolio_lang') || 'pt').toLowerCase();
        return lang.startsWith('en') 
            ? `${current} of ${total}` 
            : `${current} de ${total}`;
    }

    function updateModal(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        currentIndex = index;

        const targetImg = images[currentIndex];
        modalImg.src = targetImg.src;
        modalImg.alt = targetImg.alt || '';
        modalTitle.textContent = targetImg.alt || '';
        modalCounter.textContent = getCounterText(currentIndex + 1, images.length);
    }

    function openModal(index) {
        updateModal(index);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Registra clique em cada imagem da galeria
    images.forEach((img, idx) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(idx);
        });
    });

    // Navegação pelas setas
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateModal(currentIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateModal(currentIndex + 1);
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
    });

    // Fechar ao clicar no backdrop (fora da imagem)
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.lightbox-img-wrapper') && !e.target.closest('.lightbox-btn')) {
            closeModal();
        }
    });

    // Controle por teclado (Setas e Esc)
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            updateModal(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            updateModal(currentIndex + 1);
        }
    });

    // Gestos de toque (swipe) para mobile
    let touchStartX = 0;
    let touchEndX = 0;

    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const threshold = 40;
        if (touchEndX < touchStartX - threshold) {
            updateModal(currentIndex + 1); // Swipe esquerda -> próxima
        } else if (touchEndX > touchStartX + threshold) {
            updateModal(currentIndex - 1); // Swipe direita -> anterior
        }
    }, { passive: true });
}