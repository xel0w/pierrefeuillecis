const P = "Pierre";
const F = "Feuille";
const C = "Ciseaux";
const spanJoueur = document.querySelector("#scoreJoueur");
const spanOrdi = document.querySelector("#scoreOrdi");
const youWin = document.querySelector(".gg");
const youLoose = document.querySelector(".loose");
const imgJoueur = document.querySelector(".imgResultJoueur");
const imgOrdi = document.querySelector(".imgResultOrdi");
const res = document.querySelector(".res");
let compteurJoueur = spanJoueur.innerHTML;
let compteurOrdi= spanOrdi.innerHTML;
const choixJoueur = document.querySelectorAll(".bouton");
const restart = document.querySelector("#restart");
const coups = [P, F, C];


function joueCoupAleatoire(){
    const comput = (parseInt(Math.random() * coups.length));
    console.log(comput);
    return coups[comput];
}
function removeClass(){
    setTimeout(
    imgJoueur.classList.remove("addImagePierre"),
    imgJoueur.classList.remove("addImageFeuille"),
    imgJoueur.classList.remove("addImageCiseaux"),
    imgOrdi.classList.remove("addImagePierre"),
    imgOrdi.classList.remove("addImageFeuille"),
    imgOrdi.classList.remove("addImageCiseaux"),
    3000)
}
function checkIfWin(){
    if(compteurJoueur === 3){
        youWin.classList.add("active")
        compteurJoueur = 0;
        compteurOrdi = 0;
        spanOrdi.innerHTML = compteurOrdi
        spanJoueur.innerHTML = compteurJoueur
        setTimeout(()=>{youWin.classList.remove("active")},3000)
        setTimeout(()=>{removeClass()},3000)
        res.innerHTML="La partie peut commencer"
    }
    if(compteurOrdi === 3){
        youLoose.classList.add("active")
        compteurJoueur = 0;
        compteurOrdi = 0;
        spanOrdi.innerHTML = compteurOrdi
        spanJoueur.innerHTML = compteurJoueur
        setTimeout(()=>{youLoose.classList.remove("active")},3000)
        setTimeout(()=>{removeClass()},3000)
        res.innerHTML="La partie peut commencer"
    }
}
choixJoueur.forEach(function(item){
item.addEventListener("click",()=>{
    const coup = joueCoupAleatoire();
    console.log(item.innerHTML);
    removeClass();
    if (item.innerHTML == "Pierre" &&  coup == "Pierre") {
        imgJoueur.classList.add("addImagePierre")
        imgOrdi.classList.add("addImagePierre")
        res.innerHTML="Egalité"
        
    }
    else if (item.innerHTML == "Feuille" &&  coup == "Feuille") {
        imgJoueur.classList.add("addImageFeuille")
        imgOrdi.classList.add("addImageFeuille")
        res.innerHTML="Egalité"
        
    }
    else if (item.innerHTML == "Ciseaux" &&  coup == "Ciseaux") {
        imgJoueur.classList.add("addImageCiseaux")
        imgOrdi.classList.add("addImageCiseaux")
        res.innerHTML="Egalité"
        
    }
    else if (item.innerHTML == "Pierre" &&  coup == "Ciseaux") {
        imgJoueur.classList.add("addImagePierre")
        imgOrdi.classList.add("addImageCiseaux")
        compteurJoueur++
        res.innerHTML="Tu marques un point"
        
    }
    else if (item.innerHTML == "Feuille" &&  coup == "Pierre") {
        
        imgJoueur.classList.add("addImageFeuille")
        imgOrdi.classList.add("addImagePierre")
        compteurJoueur++
        res.innerHTML="Tu marques un point"
        
    }
    else if (item.innerHTML == "Ciseaux" &&  coup == "Feuille") {
        
        imgJoueur.classList.add("addImageCiseaux")
        imgOrdi.classList.add("addImageFeuille")
        compteurJoueur++
        res.innerHTML="Tu marques un point"
        
    }
    else if (item.innerHTML == "Pierre" &&  coup == "Feuille") {
        
        imgJoueur.classList.add("addImagePierre")
        imgOrdi.classList.add("addImageFeuille")
        compteurOrdi++
        res.innerHTML="L'ordinateur marques un point"
        
        
    }
    else if (item.innerHTML == "Feuille" &&  coup == "Ciseaux") {
        
        imgJoueur.classList.add("addImageFeuille")
        imgOrdi.classList.add("addImageCiseaux")
        compteurOrdi++
        res.innerHTML="L'ordinateur marques un point"
        
    }
    else if (item.innerHTML == "Ciseaux" &&  coup == "Pierre") {
        
        imgJoueur.classList.add("addImageCiseaux")
        imgOrdi.classList.add("addImagePierre")
        compteurOrdi++
        res.innerHTML="L'ordinateur marques un point"
        
    }
    
    spanJoueur.innerHTML = compteurJoueur;
    spanOrdi.innerHTML = compteurOrdi;
    checkIfWin()

});
});

restart.addEventListener("click",()=>{
    compteurJoueur = 0;
    compteurOrdi = 0;
    spanOrdi.innerHTML = compteurOrdi
    spanJoueur.innerHTML = compteurJoueur
    alert("Partie remise à 0")
    removeClass()
    res.innerHTML="La partie peut commencer"
})
