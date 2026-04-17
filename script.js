// 1. Configuração do Botão de WhatsApp com Mensagem Personalizada
const waNumber = "5500000000000"; // número WhatsApp
const waMessage = "Olá! Vi seu site e gostaria de um orçamento para limpeza de estofados.";

document.querySelectorAll('.btn-whatsapp, .whatsapp-float, .btn-primary-header').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Se for o botão flutuante ou o hero btn, usamos o link do WhatsApp
        if (btn.tagName === 'A') {
            const encodedMsg = encodeURIComponent(waMessage);
            btn.href = `https://wa.me/${waNumber}?text=${encodedMsg}`;
        }
    });
});

// 2. Scroll Suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3. Efeito de transparência no Header ao rolar
const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 5%';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '1rem 5%';
        header.style.background = 'white';
    }
});

console.log('SofáClean Expert: Sistema de conversão carregado! 🛋️✨');
