const math = require('./numero.js')
console.log(math)

const Logger = require('logplease')
const logger = Logger.create('Mensaje')
console.log(logger)

function numerosPares(numero){
    if(math.esPar(numero)){
        logger.info("el numro es par")
    }else{
        logger.error("el numero no es par")
    }
}

numerosPares(2)
numerosPares(3)
numerosPares(101)
numerosPares(201)
numerosPares(202)
numerosPares(100)
