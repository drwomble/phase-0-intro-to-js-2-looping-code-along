let names = ["Maggie", "Drew", "Olive"];

function writeCards(names){
    let cards = [];
    for(let a = 0; a < names.length; a++){
        cards[a] = (`Thank you, ${names[a]}, for the wonderful surprise gift!`);
    }
    return cards;
}
writeCards(names);

function countDown(number){
    while(number >= 0){
        console.log(number--);
    }
    return countDown;
}