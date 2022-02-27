window.addEventListener('DOMContentLoaded',(event) =>{
    
    /*MAIN*/
    let show = document.getElementById('myprojects');
    let block = document.getElementById('projects');
    let design = document.getElementById('webdesign');

    show.addEventListener('click', function(){
        if (show.textContent === "Voir projets"){
            show.textContent = "Cacher projets";
            block.style.display='block'
        }else{
        show.textContent = "Voir projets";
        block.style.display='none';
        }
    });

  /* ABOUT ME */

  let afficher = document.getElementById('pdp');
  console.log(afficher)
  
  let image = document.getElementById('pp');
  
  afficher.addEventListener('click', function(){
      if (afficher.textContent === "Afficher"){
          afficher.textContent ="Masquer";
          image.style.display='none';
      } else {
          afficher.textContent = "Afficher";
          image.style.display='block';
      }
  })

  
});