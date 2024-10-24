document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton'); // ID do botão de busca
    let currentIndex = 0; 
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const query = this.value;
            highlightText(query);
            scrollToNextOccurrence();
        }
    });

    searchButton.addEventListener('click', function() {
        const query = searchInput.value;
        highlightText(query);
        scrollToNextOccurrence();
    });

    function highlightText(query) {
        const body = document.body;
        const textNodes = getTextNodes(body);

        // Remove destaques anteriores
        textNodes.forEach(node => {
            const parent = node.parentNode;
            if (parent.classList.contains('highlight_buscar')) {
                parent.replaceWith(node);
            }
        });

        if (query) {
            const searchRegex = new RegExp(`(${query})`, 'gi');
            textNodes.forEach(node => {
                const parent = node.parentNode;
                const html = node.nodeValue.replace(searchRegex, '<span class="highlight_buscar">$1</span>');
                if (html !== node.nodeValue) {
                    const span = document.createElement('span');
                    span.innerHTML = html;
                    parent.replaceChild(span, node);
                }
            });
            currentIndex = 0; // Reseta o índice ao fazer uma nova busca
        }
    }

    function scrollToNextOccurrence() {
        const highlights = document.querySelectorAll('.highlight_buscar');

        if (highlights.length === 0) {
            return; // Se não houver destaques, não faz nada
        }

        if (currentIndex > 0) {
            highlights[currentIndex - 1].classList.remove('current-highlight');
        }

        currentIndex = (currentIndex + 2) % highlights.length;

        // Destaca a próxima palavra
        highlights[currentIndex].classList.add('current-highlight');

        highlights[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function getTextNodes(node) {
        const textNodes = [];
        if (node.nodeType === Node.TEXT_NODE) {
            textNodes.push(node);
        } else {
            for (let i = 0; i < node.childNodes.length; i++) {
                textNodes.push(...getTextNodes(node.childNodes[i]));
            }
        }
        return textNodes;
    }
});
