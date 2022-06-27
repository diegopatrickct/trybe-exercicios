let array = [];
for ( let index = 15; index <= 155; index += 1) {
 array.push(index)
}
console.log(array)
let numerosDiv3 = [];
for ( let index = 0; index < array.length; index += 1) {
    if ( array[index] % 3 === 0) {
        numerosDiv3.push(array[index]);}