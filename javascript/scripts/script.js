function afficher(id, message) {
    console.log("Message: " + message);
    document.getElementById(id).innerHTML = message;
}
afficher("toto", "<p>Du contenu frais</p>");
afficher("id2", "Du contenu sans balise");