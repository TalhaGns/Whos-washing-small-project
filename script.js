let names = ["Ben", "Jenny", "Michael", "Chloe","Timmy" ]
let neighbours = ["Patrick", "AnnMarie", "Alisol", "Walton"]
names.push("Max");
function whoIsWashing(arr){

let numberOfPeople = arr.length;
let randomPosition = Math.floor(Math.random() * numberOfPeople);
let randomPerson = arr[randomPosition];
return `${randomPerson} will washing the dishes.` 

}
console.log(whoIsWashing(neighbours));



