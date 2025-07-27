// ===== CRÓNICAS MUSICALES - JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    
    // Animación al cargar la página
    animateOnLoad();
    
    // Efectos en las tarjetas
    addCardEffects();
    
    // Efectos en las pestañas
    addTabEffects();
    
});

// Animación inicial
function animateOnLoad() {
    const cards = document.querySelectorAll('.cronicas-card, .escenas-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Animar tarjetas con delay
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
    
    // Animar elementos de línea de tiempo
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(50px)';
            item.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 100);
        }, index * 300);
    });
}

// Efectos adicionales en tarjetas
function addCardEffects() {
    const cards = document.querySelectorAll('.cronicas-card, .escenas-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Efecto de brillo sutil
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Restaurar sombra original
            if (this.classList.contains('cronicas-card')) {
                this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            } else {
                this.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.3)';
            }
        });
    });
}

// Efectos en cambio de pestañas
function addTabEffects() {
    const tabButtons = document.querySelectorAll('#cronicas-tabs button');
    
    tabButtons.forEach(button => {
        button.addEventListener('shown.bs.tab', function() {
            // Animar contenido al cambiar pestaña
            const targetId = this.getAttribute('data-bs-target');
            const targetContent = document.querySelector(targetId);
            
            if (targetContent) {
                const elements = targetContent.querySelectorAll('.card, .timeline-item');
                elements.forEach((element, index) => {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        element.style.transition = 'all 0.4s ease';
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    });
}

// Función para agregar efecto de "lectura completada"
function markAsRead(cardElement) {
    cardElement.classList.add('read');
    cardElement.style.opacity = '0.7';
    
    // Agregar checkmark
    const emoji = cardElement.querySelector('.cronicas-emoji, .escenas-emoji');
    if (emoji && !emoji.textContent.includes('✓')) {
        emoji.textContent = emoji.textContent + ' ✓';
    }
}

// Event listeners para marcar como leído al hacer click
document.addEventListener('click', function(e) {
    if (e.target.closest('.cronicas-card, .escenas-card')) {
        const card = e.target.closest('.cronicas-card, .escenas-card');
        markAsRead(card);
    }
});