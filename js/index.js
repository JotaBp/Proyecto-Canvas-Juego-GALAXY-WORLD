
window.onload = () => {

  document.querySelector('body').style.background = "url('./images/background_menuInicio-2.png') no-repeat";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("body").style.backgroundColor = "black";
  
// document.querySelector('#start-button').style.background = "url('./images/boton startGNU.png') no-repeat";
  document.querySelector('#start-button').style.borderRadius = "50%";
  document.querySelector('#start-button').style.marginTop = ((window.innerHeight/5)*3) + 'px';
  document.querySelector('#start-button').style.marginLeft = ((window.innerHeight/2) - 700) + 'px';

  document.querySelector('img').style.width ="300px";












  document.getElementById('start-button').onclick = () => {
    game.init()
    document.getElementById("start-button").style.display = "none";
  }
} 