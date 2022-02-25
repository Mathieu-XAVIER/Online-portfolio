window.addEventListener('DOMContentLoaded',(event) =>{

  var splide = new Splide( '.splide', {
    direction: 'ttb',
    height   : '600px',
    wheel    : true,
  } );
  
  splide.mount();

  let form = document.getElementById('submit');
  
  form.addEventListener('click', function(){
    window.alert("Votre message a été envoyer avec succès !")
    console.log("ca marche")
  });
});