// Função para abrir o popup
function openPopup() {
    document.getElementById('privacyPopup').style.display = 'block';
}

// Função para fechar o popup
function closePopup() {
    document.getElementById('privacyPopup').style.display = 'none';
}

document.querySelectorAll('.footerMenu p').forEach(item => {
    if (item.textContent.includes("Privacy Policy")) {
        item.addEventListener('click', openPopup);
    }
});

document.querySelectorAll('.menu a').forEach(item => {
    if (item.textContent.includes("◦ Privacy Policy")) {
        item.addEventListener('click', openPopup);
    }
});

document.querySelector('.close').addEventListener('click', closePopup);

window.onclick = function(event) {
    if (event.target == document.getElementById('privacyPopup')) {
        closePopup();
    }
};