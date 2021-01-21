const factorialize = function(num){

    let resultFactorial = 1
    for (let index = 1; index <= num; index++) {
        resultFactorial =+ resultFactorial*index       
    }
    return resultFactorial
}

module.exports = factorialize
