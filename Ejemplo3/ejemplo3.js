function abrirRegalo() {
  const imagen = document.querySelector('img');
  imagen.src = "giphy.gif";
  imagen.removeEventListener('click',abrirRegalo);
}

const imagen = document.querySelector('img');
imagen.addEventListener('click',abrirRegalo);
