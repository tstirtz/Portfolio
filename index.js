//Render's nav bar if .projects sections is 25 pixels from top of window
window.onscroll = function(){
  const navBar = document.getElementsByTagName('nav')[0];
  const projects = document.querySelector('.projects'); 
  if(projects.getBoundingClientRect().top <= 25){
    navBar.setAttribute('class', 'visible');
  }else{
    navBar.setAttribute('class', 'hidden');
  } 
}
window.onload = function(){
  const scrollArrow = document.querySelector('.scroll-arrow');

  scrollArrow.onclick = function(){
    
    document.querySelector('.projects').scrollIntoView({behavior: "smooth", block: "start"});
  }
}