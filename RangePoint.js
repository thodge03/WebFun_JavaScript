var next = 0;
function printRange(start, end, countBy){
    if (countBy==undefined){
        countBy = 1;
    }
    if (end == undefined){
        end = start;
        start = 0;
    }
console.log(start);
next = start + countBy;
while (next < end){
    console.log(next);
    next = next + countBy;
    }
}

printRange(6,24,3);

// It works for negative numbers!
// If countBy is undefined, it increases by one!
// If no end given, it goes from 0 to 5. But this does NOT work for negative numbers w/o changing the entire function to decrease from 0 to the chosen negative (0, -1, -2, etc.)
