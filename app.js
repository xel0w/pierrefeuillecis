const P = "Pierre";
const F = "Feuille";
const C = "Ciseaux";
const spanJoueur = document.querySelector("#scoreJoueur");
const spanOrdi = document.querySelector("#scoreOrdi")
let compteurJoueur = spanJoueur.innerHTML;
let compteurOrdi= spanOrdi.innerHTML;
compteurJoueur = 1;
compteurOrdi = 1;
const pierreJoueur = document.querySelector("#pierre")
const feuilleJoueur = document.querySelector("#feuille")
const ciseauJoueur = document.querySelector("#ciseau")

// const joue = document.querySelector("#joue")

const coups = [P, F, C];

function joueCoupAleatoire(){
    return parseInt(Math.random() * coups.length);
}

function comparer(){

}

function checkIfWin(){
    if(compteurJoueur === 3){
        alert("Tu as gagné")
    }
    if(compteurOrdi === 3){
        alert("l'ordinateur a gagné")
    }
}
// joue.addEventListener("click",()=>{
//     console.log(joueCoupAleatoire())
// })
pierreJoueur.addEventListener("click",()=>{
    pierreJoueur.classList.add("select")
    if(comparer() return false){
        compteurOrdi++;
        alert("1pts pour l'ordi");
    }
    if(comparer() return true){
        compteurJoueur++;
        alert("1pts pour toi");
    }
    checkIfWin()
})
feuilleJoueur.addEventListener("click",()=>{
    feuilleJoueur.classList.add("select")
    if(comparer() return false){
        compteurOrdi++;
        alert("1pts pour l'ordi");
    }
    if(comparer() return true){
        compteurJoueur++;
        alert("1pts pour toi");
    }
    checkIfWin()
})
ciseauJoueur.addEventListener("click",()=>{
    ciseauJoueur.classList.add("select")
    if(comparer() return false){
        compteurOrdi++;
        alert("1pts pour l'ordi");
    }
    if(comparer() return true){
        compteurJoueur++;
        alert("1pts pour toi");
    }
    checkIfWin()
})
