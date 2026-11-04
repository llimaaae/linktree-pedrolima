// Animação de entrada dos cartões de projeto
const cartoes = document.querySelectorAll('.projeto');

if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada, i) => {
            if (entrada.isIntersecting) {
                setTimeout(() => entrada.target.classList.add('visivel'), i * 90);
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15 });

    cartoes.forEach((cartao) => observador.observe(cartao));
} else {
    cartoes.forEach((cartao) => cartao.classList.add('visivel'));
}

const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();
