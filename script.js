window.addEventListener('DOMContentLoaded',(event) =>{

  /* ABOUT ME */

  let afficher = document.getElementById('pdp');
  console.log(afficher)
  
  let image = document.querySelector('img');
  
  afficher.addEventListener('click', function(){
      if (afficher.textContent === "Afficher"){
          afficher.textContent ="Masquer";
          image.style.display='block';
      } else {
          afficher.textContent = "Afficher";
          image.style.display='none';
      }
  })
});