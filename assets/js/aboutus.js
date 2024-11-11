document.querySelectorAll('.div-resume-1').forEach(function(div) {
    div.addEventListener('click', function (event) {
        // Verifica se o clone já existe. Se existir, não cria outro.
        if (!document.querySelector('.div-resume-1-clone')) {
            // Cria um clone da div original
            var clone = div.cloneNode(true);
            clone.classList.add('div-resume-1-clone'); // Adiciona a classe para o clone

            // Cria o botão de fechamento
            var closeButton = document.createElement('div');
            closeButton.classList.add('close-button');
            closeButton.innerHTML = 'X'; // Texto do botão de fechamento
            clone.appendChild(closeButton); // Adiciona o botão de fechamento ao clone

            // Adiciona o clone ao body
            document.body.appendChild(clone);

            // Agora fazemos o clone aparecer no centro da tela
            setTimeout(function() {
                clone.style.display = 'block';
                clone.style.transform = 'translate(-50%, -50%) scale(1.2)';
                clone.style.top = '50%';
                clone.style.left = '50%';
            }, 50); // Pequeno delay para garantir que o clone foi adicionado antes de transformar

            // Adiciona o evento de clique para fechar o clone
            closeButton.addEventListener('click', function() {
                clone.remove(); // Remove o clone quando o "X" for clicado
            });
        }
        event.stopPropagation(); // Previne que o evento 'click' no clone feche o clone
    });
});

// Detecta cliques fora do clone para fechá-lo
document.addEventListener('click', function(event) {
    var clone = document.querySelector('.div-resume-1-clone');
    if (clone && !clone.contains(event.target)) {
        clone.remove(); // Remove o clone caso o clique tenha sido fora
    }
});