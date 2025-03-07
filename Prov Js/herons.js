function heronsArea(a,b,c){
    s=(a/2+b/2+c/2)
    let result = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return result
}
console.log(heronsArea(5,6,7))