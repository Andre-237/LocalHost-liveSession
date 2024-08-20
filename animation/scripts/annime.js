var monimage = document.getElementById('big-image');
var monimage1 = document.getElementById('big-image1');
var monimage2 = document.getElementById('big-image2');
var monimage3 = document.getElementById('big-image3');

var avance = document.getElementById('avance');
var recule = document.getElementById('recule');

avance.addEventListener("click", function(event) {
    var attenteSrc = monimage1.scr;
    var attentewidth = monimage1.style.width;
    var attenteheight = monimage1.style.height;
    monimage1.src = monimage.src;
    monimage1.style.width = monimage.style.width
    monimage1.style.height = monimage.style.height
    monimage.src = attenteSrc;
    monimage.style.width = attentewidth;
    monimage.style.height = attenteheight;

})