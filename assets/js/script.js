document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); 

    if (menu.classList.contains('active')) {
        this.textContent = '✖ Fechar';
    } else {
        this.textContent = '☰ Menu';
    }
});