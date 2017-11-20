var vid = document.getElementById('video');
  window.onscroll=function(){
    if(window.pageYOffset >= 40 && vid.paused){
    vid.play();
  }
}
