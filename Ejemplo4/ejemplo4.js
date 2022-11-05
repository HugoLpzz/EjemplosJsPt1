function abrirRegalo(event) {
  const imagen = event.currentTarget;
  imagen.src = "giphy.gif";
  imagen.removeEventListener('click',abrirRegalo);
}

const imagen = document.querySelector('img');
imagen.addEventListener('click',abrirRegalo);
