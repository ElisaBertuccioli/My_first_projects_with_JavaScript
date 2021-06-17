// 1) Gestion affichage du resumé

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("id_divulgacher");
    // Get the text
    var text = document.querySelector(".resume");
    // If the checkbox is checked, display the text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

// 2) Suppression du dernier element de la liste
document.querySelector('ul').removeChild(document.getElementById('li_to_remove'));

// 3) Changement de source photo au survol
function changeImage(url, objet){
	objet.src=url;
}
