

let gladiator = {
    name: "Ceasar",
    hp: 50,
    atk:15,
    vit:0.6

}

let ennemy = {
    name:"Lion",
    hp:100,
    atk:20,
    vit:0.8
    
}
let persos = [gladiator, ennemy]

console.log(`Un combat épique entre le Gladiateur :`, gladiator, `et son opposant :`,ennemy)

function precision() {
   if (Math.random() < gladiator.vit);
   if (Math.random() < ennemy.vit);
   }




while (persos.hp > 0)
    {
    if (Math.random() < gladiator.vit){
        ennemy.hp = ennemy.hp - gladiator.atk
        console.log(`L'ennemi a perdu ${gladiator.atk}`)
    }
    if (Math.random() < ennemy.vit){
        gladiator.hp = gladiator.hp - ennemy.atk
    }

    }




// persos.forEach(functions(attaque){
//     if (Math.random )
// }
// )


