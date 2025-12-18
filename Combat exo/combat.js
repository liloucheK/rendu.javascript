//Fiches persos
let perso1 = {
    name: "Aphelios",
    hp: 50,
    atk:20,
    vit:0.6
}

let perso2 = {
    name: "minions",
    hp: 60,
    atk:10,
    vit:0.8
}
console.log("Un combat épique commence entre " + perso1['name'] + " et le térrifiant " + perso2['name'] + ". Mais qui va gagné ?")

//début du combat

//Fonction d'attaque
function attaquer(attaquant, defenseur){
    //atk = vit
    let attack = precision(attaquant["vit"])
    //si atk = pas vit du perso
    if (attack == false){
        console.log("Trop lent ! " + attaquant['name'] + " ne peut pas attaquer..." )
    //retour au début + rend les hp tel quel
        return defenseur["hp"]
        }
     else {
        //sinon ça marche 
        console.log("Wow " + attaquant['name'] + " attaque !")
        console.log(attaquant['name'] + " a fait des dégats à "  + defenseur['name'])
        console.log(defenseur['name'] + " a perdu des HP ! Il lui reste " + (defenseur["hp"] - attaquant["atk"]) + "HP")
        //retour + rend les hp - l'atk (les dégats)
        return defenseur["hp"] - attaquant["atk"]
        
     }

}

//fonction de précision
const precision = (precisionCombattant) => {
    //nombre aléatoire
    let nombreAleatoire = Math.random()
    //si nombre aléatoire < à la vit d'un perso = ça passe
    let caPasse = nombreAleatoire < precisionCombattant
    return caPasse
}


// boucle while = tant que un des persos à des hp ça continue 
while(perso1["hp"]>0 && perso2["hp"]>0 ){
    perso2["hp"] = attaquer(perso1, perso2)
    perso1["hp"] = attaquer(perso2, perso1)
}

//annonce des résultats
if(perso1["hp"]<=0){
    console.log( perso2['name'] + " a gagné..")
} else {
     console.log(perso1['name'] + " a gagné ! + 10G et 5XP !")
 }

