// Make a function that takes a number of quarters (1 quarter = 1 game).

// There is a 1 in 100 chance to win the slot machine (which will give you between 50 - 100 quarters -- use Math.random and Math.floor to pick a random number of coins).

// While the user still has quarters, use Math.random to determine if they won.

// If they ever win, return the number of quarters (ex: they had 50 remaining quarters and won 90, so it should return 140).

// Return 0 if all the quarters were wasted.

function game(startWith){
var winningNumber = 11;
var quarters = startWith;
while (quarters > 0){
var turn = Math.trunc(Math.random()*100);
    if (turn == winningNumber){
        console.log ("I have", (quarters), "quarters left!");     
        quarters = (quarters + Math.floor((Math.random()*50)+50));
    }
    else {
        console.log("I have", (quarters -1), "quarters left!");
    }
    quarters = quarters - 1;
}
}
game(5);
