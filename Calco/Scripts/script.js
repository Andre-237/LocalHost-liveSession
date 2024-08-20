var nbre = document.getElementById("nombre");
var op = document.getElementById("operation");

nbre.addEventListener("click", function() {
    op.innerHTML = nbre.value;

})