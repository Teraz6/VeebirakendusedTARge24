let greetings = "Hello asdasd";

// Muudab teksti väikesteks tähtedeks
let lowerGreetings = greetings.toLowerCase();
console.log(lowerGreetings);

//number
let userId = 2344534632;

userId.toFixed(5); //peaks limiteerima numbri arvu aga praegu ei tööta

console.log(userId)

//bool
let isLoggedIn = false;
console.log(isLoggedIn);

//any
let hero;
function getHero() {
    return "Thor"
}

hero = getHero()
console.log(hero);
//export{}