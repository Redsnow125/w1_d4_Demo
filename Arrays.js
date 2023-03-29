let backpack = [];

backpack.push(`jacket` , `water bottle`, `snack`,`sunglasses`)

let jacket = backpack.splice(0,1)

//let inventory = backpack.slice()

let phannyPack = backpack.splice(0,2)



backpack.unshift(`cool stick`, `shiny rock`)

//console.log(backpack)
//console.log(phannyPack)
let hand = ``;
for (i = 0; i < backpack.length; i++){
    //console.log("My " + backpack[i] + " is in my backpack")
    if (backpack[i] === `sunglasses`){
        hand = backpack.splice(i, 1);
    }
}

//console.log(sunglasses)
//console.log("My back back still has a " + backpack)

hand = phannyPack.pop()
console.log(hand)