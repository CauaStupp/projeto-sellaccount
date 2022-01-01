function linkInvalido() {
    alert('Nosso site ainda está sem contas a vendas porque está em desenvolvimento');
}


function buttonUpper() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function definirBotao() {
    if (window.scrollY === 0) {
        document.querySelector('.button-upper').style.display = 'none';
    } else {
        document.querySelector('.button-upper').style.display = 'block';
    }
}

window.addEventListener('scroll', definirBotao)