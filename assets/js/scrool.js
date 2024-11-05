document.querySelector('a[href="#lastestnews"]').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    document.querySelector('#lastestnews').scrollIntoView({
        behavior: 'smooth'
    });
});