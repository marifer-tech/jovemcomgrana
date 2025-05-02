// script.js para sobre.html

document.addEventListener('DOMContentLoaded', function() {
    // ========== MENU MOBILE ==========
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Alternar ícone do menu
        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // ========== SCROLL SUAVE ==========
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== ANIMAÇÃO DE APARECER AO ROLAR ==========
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.author-content, .mission-card, .values-card, .social-cta');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Configuração inicial da animação
    const animatedElements = document.querySelectorAll('.author-content, .mission-card, .values-card, .social-cta');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez ao carregar

    // ========== BOTÃO WHATSAPP ==========
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // Pode adicionar tracking de evento aqui (Google Analytics, etc.)
            console.log('Botão do WhatsApp clicado');
        });
    }

    // ========== VALIDAÇÃO DE FORMULÁRIO (se aplicável) ==========
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value === '' || !emailInput.value.includes('@')) {
                emailInput.style.borderColor = '#ff4444';
                emailInput.placeholder = 'Por favor, insira um e-mail válido';
            } else {
                // Simular envio do formulário
                emailInput.style.borderColor = '#2ecc71';
                alert('Obrigado por assinar nossa newsletter!');
                this.reset();
            }
        });
    }

    // ========== CARREGAMENTO OTIMIZADO DE IMAGENS ==========
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
});