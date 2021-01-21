const factorialize = function(num){

    let resultFactorial = 1
    for (let index = 1; index < num; index++) {
        console.log('index',index)
        resultFactorial =+ resultFactorial*index  
        console.log('resultFactorial',resultFactorial)      
    }
    return resultFactorial
}

module.exports = factorialize
