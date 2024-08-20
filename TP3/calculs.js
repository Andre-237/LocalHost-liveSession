// // /*Fonction qui calcul la somme de 3 nombres*/
// function afficher(a, b, c) {
//     var resultat = a + b + c;
//     console.log(resultat);
// }
// resultat = afficher(10, 5, 8);

// /*Fonction qui tire les nombres compris entre 1 et 6*/
// function tire(a) {
//     for (i = 0; i < 6; i++) {
//         console.log(i);
//     }
// }

// // /*Fonction qui affiche la décision par rapport à une note*/
function moyenne(note) {
    if (note < 10) {
        console.log('échec');

    } else if (note <= 10 || note < 12) {
        console.log('Passable');

    } else if (note <= 12 || note < 14) {
        console.log('Assez Bien');

    } else if (note <= 14 || note < 16) {
        console.log('Bien');

    } else if (note <= 16 || note < 18) {
        // console.log('Très Bien');
        var moy = document.querySelector(".moyenne")
        moy.innerHTML = "<strong> Moyenne:" + note + " => Très bien </strong>"
    } else if (note <= 18 || note < 20) {
        console.log('Excellent');
    } else if (note > 20) {
        console.log('Erreur');

    }
}
moyenne(16.5);

// /*fonction qui calcul la moyenne des notes entrées en parametre*/

// function calcul(x, y, z, t) {
//     var n = x + y + z + t;
//     var resultat = n / 4;
//     document.querySelector(".moyenne").innerHTML = resultat;

//     console.log(resultat);
// }
// resultat = calcul(10, 17, 15, 10);

// /*fonction qui tire un nombre entier aléatoire entre 1 et 6*/
// function rnd(min, max) {
//     value = Math.floor(Math.random() * (max - min + 1) + min);
//     document.getElementById("id2").innerHTML = value;
//     console.log(value);
// }
// rnd(1, 6);


function position(ev) {
    var Xfen, Xdoc, Yfen, Ydoc, el;
    Xfen = ev.clientX;
    Xdoc = Xfen + document.body.scrollLeft;

    Yfen = ev.clientY;
    Ydoc = Yfen + document.body.scrollTop;

    el = document.getElementById("idMouse");
    el.innerHTML = " Xdoc=" + Xdoc + " px; Ydoc=" + Ydoc + " px<br>";
    el.innerHTML = " Xfen=" + Xfen + " px; Yfen=" + Yfen + " px";

}
/*Selection de la div*/
// var maDiv = document.getElementById("maDiv");
// /*donner la couleur rouge à la div au passage du cursuer*/
// maDiv.addEventListener("mouseover", function() {
//     maDiv.style.backgroundColor = "red";
// });
// /*donner la couleur bleue à la div après le passage du cursuer*/
// maDiv.addEventListener("mouseout", function() {
//     maDiv.style.backgroundColor = "white";
// });
// event.preventDefault();
/*Selection des div*/
var form = document.getElementById("monForm");
var resultat = document.getElementById("resultat");
/*Empecher la soumission par defaut*/
form.addEventListener("submit", function(event) {
    /*Recupérer les valeurs des champs*/
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    /*Vérification des champs du formulaire*/
    if (nom == "" && prenom == "" && email == "") {
        alert('Veuillez remplir tous les champs')
    } else {

        /*Afficher les valeurs sur la page*/
        resultat.innerHTML = "Nom: " + nom + "<br>Prenom: " + prenom + "<br>Email: " + email;
    }
});
// var btnplus = document.getElementById("plus");
// var btnmoins = document.getElementById("moins");
// var nombre = document.getElementById("nombre");
// var nbreclic = 0;
// btnplus.addEventListener("click", function() {
//     nbreclic++;
//     nombre.innerHTML = "Nombre de clics: " + nbreclic;
// });
// btnmoins.addEventListener("click", function() {
//     nbreclic = 0;
//     nombre.innerHTML = "Nombre de clics: " + nbreclic;
// });