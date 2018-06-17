window.onscroll = function(){
  const navBar = document.getElementsByTagName('nav')[0];
  const projects = document.querySelector('.projects');
  console.log(projects.getBoundingClientRect());
  
  if(projects.getBoundingClientRect().top <= 0){
    console.log("if statement called");
    navBar.setAttribute('class', 'visible');
  }else{
    console.log("else statement called");
    navBar.setAttribute('class', 'hidden');
  } 
}

