
window.onload = () => {

  document.getElementById('start_button').onclick = () => {
    game.init()
    document.getElementById("start_button").style.display = "none";
  }

  document.querySelector('body').style.background = "url('./images/background_menuInicio-2.png') no-repeat";
  document.querySelector('body').style.overflow = "hidden";
  document.querySelector('body').style.backgroundColor = "black";
  
  document.querySelector('#start_button').style.borderRadius = "50%";
  document.querySelector('#start_button').style.marginTop = ((window.innerHeight/5)*3) + 'px';
  document.querySelector('#start_button').style.marginLeft = ((window.innerHeight/2) - 700) + 'px';

  document.querySelector('#restart_button').style.display = "none";
  document.querySelector('#restart_button').style.borderRadius = "50%";
  document.querySelector('#restart_button').style.marginTop = (window.innerHeight/2-150) + 'px';
  document.querySelector('#restart_button').style.marginLeft = ((window.innerHeight/2) - 300) + 'px';
  document.querySelector('#restart_button').style.width ="300px";

  document.querySelector('img').style.width ="300px";


  // if (game.gameOver()) {
  //   document.querySelector('#restart_button').style.display = "block";

  //   document.getElementById('#restart_button').onclick = () => {
  //     game.init()
  //     document.getElementById('#restart_button').style.display = "none";
  //   }

  // }
  


} 