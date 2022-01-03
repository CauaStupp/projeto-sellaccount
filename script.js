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

window.addEventListener('scroll', definirBotao);



function zoom() {

    let imgZoom = document.querySelector('.img');

    if (imgZoom.style.width == '500px') {
        imgZoom.style.width = '700px';
    } else {
        imgZoom.style.width = '500px';
    }
}


function zoomSmall() {
    let imgZoomS = document.querySelector('.imgSmall');

    if (imgZoomS.style.width == '200px') {
        imgZoomS.style.width = '700px';
    } else {
        imgZoomS.style.width = '200px';
    }
}

function zoomSmalls() {
    let zoom = document.querySelector('.imgSmall-s')

    if (zoom.style.width == '200px') {
        zoom.style.width = '700px'
    } else {
        zoom.style.width = '200px'
    }
}