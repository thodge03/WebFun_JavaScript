var penny = 0.01;
var rewardTotal = 0;

for (var payDays = 1; payDays <=30; payDays++)
{
    rewardTotal = rewardTotal + penny*(2**(payDays-1));
    console.log("On day", payDays, "the servant has", rewardTotal, "dollars.");
}

console.log(rewardTotal);

// Total is: $10,737,418.23


var penny = 0.01;
var rewardTotal = 0;

for (var payDays = 1; payDays <=30; payDays++)
{
    rewardTotal = rewardTotal + penny*(2**(payDays-1));
    console.log("On day", payDays, "the servant has", rewardTotal, "dollars.");
    if (rewardTotal > 10000){
        console.log(payDays);
    }
}

// It will take 20 days for the servant to make $10,000.

var penny = 0.01;
var rewardTotal = 0;

for (var payDays = 1; payDays <=100; payDays++)
{
    rewardTotal = rewardTotal + penny*(2**(payDays-1));
    console.log("On day", payDays, "the servant has", rewardTotal, "dollars.");
    if (rewardTotal > 1000000000){
        console.log(payDays);
    }
}

// It will take 37 days to make $1 Billion.

var penny = 0.01;
var rewardTotal = 0;

for (var payDays = 1; payDays <=10000; payDays++)
{
    rewardTotal = rewardTotal + penny*(2**(payDays-1));
    console.log("On day", payDays, "the servant has", rewardTotal, "dollars.");
    if (rewardTotal > Infinity){
        console.log(payDays);
    }
}

// The servant will have "infinite" money at 1025 days.