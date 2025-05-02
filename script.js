// Menu Mobile
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Fechar menu mobile se aberto
            const nav = document.querySelector('.nav');
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        }
    });
});

// Animação ao rolar
function animateOnScroll() {
    const elements = document.querySelectorAll('.highlight-card, .blog-card, .ebook-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            // Aqui você pode adicionar código para enviar o email para seu backend ou serviço de email marketing
            alert('Obrigado por assinar nossa newsletter! Em breve você receberá nossas melhores dicas.');
            emailInput.value = '';
        }
    });
}

// Contador de visualizações de artigos (simulado)
document.addEventListener('DOMContentLoaded', function() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        const meta = card.querySelector('.meta');
        if (meta) {
            const views = Math.floor(Math.random() * 500) + 100;
            meta.textContent += ` • ${views} visualizações`;
        }
    });
});