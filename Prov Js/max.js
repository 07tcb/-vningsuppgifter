let numbers=[];
function max(n1,n2,n3){
    numbers.push(n1,n2,n3);
    numbers.sort((a, b) => b - a);
    return numbers[0];
}
console.log(max(2,5,9,6));