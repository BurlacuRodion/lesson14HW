function sumSqrt(x,y,z) {
    return Math.sqrt(x+y+z)
}

console.log(sumSqrt(5,10,10))

//----------//

function randomStr(string) {
    return string[Math.floor(Math.random() * string.length)]
}

console.log(randomStr('12345'))

//-----------//

function concatStr(str1,str2) {
    return str1.concat(str2)
}

console.log('abc','jkl')