function abrirRegalo(event) {

  const newHeader = document.createElement('h1');
  newHeader.textContent = 'Felicidades';

  const newImage = document.createElement('img');
  newImage.src = 'https://www.eleconomista.com.mx/__export/1653676336924/sites/eleconomista/img/2022/05/02/220501_ernesto_javier_calita_1.jpg_423682103.jpg}';

  const container = document.querySelector('#container');
  container.innerHTML = '';
  container.appendChild(newHeader);
  container.appendChild(newImage);

}

const imagen = document.querySelector('img');
imagen.addEventListener('click',abrirRegalo);
