const P = "Pierre";
const F = "Feuille";
const C = "Ciseaux";
const spanJoueur = document.querySelector("#scoreJoueur");
const spanOrdi = document.querySelector("#scoreOrdi");
const youWin = document.querySelector(".gg")
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

function checkIfWin(){
    if(compteurJoueur === 3){
        alert("Tu as gagné")
        youWin.classList.add("active")
        compteurJoueur = 0;
        compteurOrdi = 0;
        spanOrdi.innerHTML = compteurOrdi
        spanJoueur.innerHTML = compteurJoueur
    }
    if(compteurOrdi === 3){
        alert("l'ordinateur a gagné")
        compteurJoueur = 0;
        compteurOrdi = 0;
        spanOrdi.innerHTML = compteurOrdi
        spanJoueur.innerHTML = compteurJoueur
    }
}
choixJoueur.forEach(function(item){
item.addEventListener("click",()=>{
    const coup = joueCoupAleatoire()
    console.log(item.innerHTML);
    if (item.innerHTML == "Pierre" &&  coup == "Pierre") {
        alert("draw")
    }
    else if (item.innerHTML == "Feuille" &&  coup == "Feuille") {
        alert("draw")
    }
    else if (item.innerHTML == "Ciseaux" &&  coup == "Ciseaux") {
        alert("draw")
    }
    else if (item.innerHTML == "Pierre" &&  coup == "Ciseaux") {
        
        alert("l'ordinateur a joué Ciseaux")
        alert("Tu gagnes cette manche")
        compteurJoueur++
        spanJoueur.innerHTML = compteurJoueur
    }
    else if (item.innerHTML == "Feuille" &&  coup == "Pierre") {
        
        alert("l'ordinateur a joué Pierre")
        alert("Tu gagnes cette manche")
        compteurJoueur++
        spanJoueur.innerHTML = compteurJoueur
    }
    else if (item.innerHTML == "Ciseaux" &&  coup == "Feuille") {
        
        alert("l'ordinateur a joué Feuille")
        alert("Tu gagnes cette manche")
        compteurJoueur++
        spanJoueur.innerHTML = compteurJoueur
    }
    else if (item.innerHTML == "Pierre" &&  coup == "Feuille") {
        
        alert("l'ordinateur a joué Feuille")
        alert("Tu perds cette manche")
        compteurOrdi++
        spanOrdi.innerHTML = compteurOrdi
    }
    else if (item.innerHTML == "Feuille" &&  coup == "Ciseaux") {
        
        alert("l'ordinateur a joué Ciseaux")
        alert("Tu perds cette manche")
        compteurOrdi++
        spanOrdi.innerHTML = compteurOrdi
    }
    else if (item.innerHTML == "Ciseaux" &&  coup == "Pierre") {
        
        alert("l'ordinateur a joué Pierre")
        alert("Tu perds cette manche")
        compteurOrdi++
        spanOrdi.innerHTML = compteurOrdi
    }
    ;
    checkIfWin()

})
});

restart.addEventListener("click",()=>{
    compteurJoueur = 0;
    compteurOrdi = 0;
    spanOrdi.innerHTML = compteurOrdi
    spanJoueur.innerHTML = compteurJoueur
    alert("Partie remise à 0")
})

