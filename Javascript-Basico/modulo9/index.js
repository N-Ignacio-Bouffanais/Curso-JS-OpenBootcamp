const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});



    //logger.log("Esto es un mensaje normal")
logger.info("Esto es un mensaje informativo")
logger.debug("Este es un debugeo")
logger.warn("este es un mensaje de alerta")
logger.error("Este es un error")

function showError() {
    throw new Error("Error personalidado");
}

try {
    showError();
} catch (e) {
    logger.log("error", e.toString());
}