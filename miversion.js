var darkMode = document.querySelector("input")
var body = document.querySelector("body")
var agris = document.querySelectorAll(".agris")
var ablanco = document.querySelectorAll("div .ablanco")
var bgDark = document.querySelectorAll(".bgcards")
var numGrande = document.querySelectorAll(".numGrande")
var colorBordeDark = document.querySelectorAll(".colorBorde")

darkMode.addEventListener("click", function(){
    
    body.classList.toggle("body");
     for(i=0;i < colorBordeDark.length; i++ ){
        colorBordeDark[i].classList.toggle("colorBordeDark");}
    for(i=0;i < agris.length; i++ ){
        agris[i].classList.toggle("gris");}
    for(i=0;i < ablanco.length; i++ ){
        ablanco[i].classList.toggle("blanco1"); }  
    for(i = 0 ; i < bgDark.length ; i++){
        bgDark[i].classList.toggle("bgdark")
    } 
})