window.addEventListener('DOMContentLoaded',(event) =>{

  // FORMULAIRE //
  let form = document.getElementById('submit');
  
  form.addEventListener('click', function(){
    window.alert("Votre message a été envoyer avec succès !")
    console.log("ca marche")
  });
});