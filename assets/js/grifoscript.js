let highlightedElements = new Set(); // Para acompanhar elementos destacados

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function wrapWordsInSpans() {
    const textElements = document.querySelectorAll('.texto-grif');

    textElements.forEach((element) => {
        const text = element.innerText;
        const words = text.split(' ');
        element.innerHTML = '';

        words.forEach((word) => {
            const span = document.createElement('span');
            span.innerText = word + ' ';
            element.appendChild(span);
        });
    });
}

function highlightText(element) {
    const words = element.querySelectorAll('span');

    // Aplica o destaque a cada palavra a partir do início, se ainda não destacado
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('highlight'); // Adiciona a classe de destaque
        }, index * 300); // Atraso de 300ms entre cada palavra
    });

    highlightedElements.add(element); // Marca como destacado
}

function checkVisibilityAndHighlight() {
    const textElements = document.querySelectorAll('.texto-grif');

    textElements.forEach((element) => {
        // Se o elemento está visível e ainda não foi destacado
        if (isElementInViewport(element) && !highlightedElements.has(element)) {
            highlightText(element);
        }
    });
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', checkVisibilityAndHighlight);

// Chama a função para envolver palavras em <span>
wrapWordsInSpans();

// Chama a função inicialmente para verificar elementos que já estão na viewport
checkVisibilityAndHighlight();
