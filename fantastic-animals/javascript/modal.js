export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    
    if (toggleModal && containerModal) {
        function toggleModal(event) {
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        };
        
        function cliqueForaModal(event) {
            if (event.target === this) {
                toggleModal(event);
            }
        };
        
        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}

initModal();