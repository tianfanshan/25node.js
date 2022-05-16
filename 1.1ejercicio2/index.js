const Logger = require('logplease');
const logger = Logger.create('Mensaje')

logger.debug("Hola Mundo de node");
logger.info("Noticias de ultima hora,Node.js me encanta!!");
logger.warn("Tirando warnings como campeones");
logger.error("ALgo no esta bien!!!");