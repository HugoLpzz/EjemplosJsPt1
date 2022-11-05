function abrirRegalo(event) {
  const imagen = event.currentTarget;
  imagen.src = "giphy.gif";

  const mensaje = document.querySelector('h1');
  mensaje.textContent = 'Felicidades!!!';

  imagen.removeEventListener('click',abrirRegalo);
}

const imagen = document.querySelector('img');
imagen.addEventListener('click',abrirRegalo);
