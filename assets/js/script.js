const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function(event) {
    event.stopPropagation();
    
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        this.textContent = '✖ Fechar';
    } else {
        this.textContent = '☰ Menu';
    }
});

// Evento de clique no documento para fechar o menu ao clicar fora
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        // Fecha o menu
        menu.classList.remove('active');
        menuToggle.textContent = '☰ Menu';
    }
});
