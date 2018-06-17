window.onscroll = function(){
  const navBar = document.getElementsByTagName('nav')[0];
  const projects = document.querySelector('.projects');  
  if(projects.getBoundingClientRect().top <= 0){
    navBar.setAttribute('class', 'visible');
  }else{
    navBar.setAttribute('class', 'hidden');
  } 
}
window.onload = function(){
  const scrollArrow = document.querySelector('.scroll-arrow');

  console.log(scrollArrow);

  scrollArrow.onclick = function(){
    console.log("onclick called");
    
    document.querySelector('.projects').scrollIntoView({behavior: "smooth", block: "start"});
  }
}