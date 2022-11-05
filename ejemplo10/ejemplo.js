function onKeyUp(event){
  console.log('onKeyUp:' + event.key);
}

function onKeyDown(event){
  console.log('onKeyDown:' + event.key);
}

document.addEventListener('keyup', onKeyUp);
document.addEventListener('keydown', onKeyDown);
