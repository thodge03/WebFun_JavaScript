function fancyArray (){
var arr = ['James', 'Jill', 'Jane', 'Jack'];
for (var idx = 0; idx < arr.length; idx++){
    arr[idx]= idx + " -> " + arr[idx];
    console.log(arr[idx]);
    }
}
fancyArray();


// With option to choose arrow
function fancyArray (symbol){
var arr = ['James', 'Jill', 'Jane', 'Jack'];

for (var idx = 0; idx < arr.length; idx++){
    arr[idx]= idx + " " + symbol + " " + arr[idx];
    console.log(arr[idx]);
    }
}
fancyArray(">>");



// With ability to reverse the order- IN PROGRESS- need to account for "overwriting" index 0 and 1

// function fancyArray (symbol, reversed){
// var arr3 = ['James', 'Jill', 'Jane', 'Jack'];    
// if (reversed = true){
//     for (var idx = 0; idx < arr3.length; idx++){
//         arr3[idx]= ((arr3.length-1)-idx) + " " + symbol + " " + arr3[(arr3.length-1)-idx];
//         console.log(arr3[idx]);
//     }
// }
// else {
//     for (var idx = 0; idx < arr3.length; idx++){
//         arr3[idx]= idx + " " + symbol + " " + arr3[idx];
//         console.log(arr3[idx]);
//         }
//     }
// }
// fancyArray(">>", true);