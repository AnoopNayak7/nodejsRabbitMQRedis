import winston from 'winston'

const LEVELS = {
    levels: {
        emerg: 0,
        alert: 1,
        crit: 2,
        error: 3,
        warn: 4,
        notice: 5,
        info: 6,
        debug: 7,
        trace: 8
    },
    colors: {
        emerg: "red",
        alert: "yellow",
        crit: "red",
        error: "red",
        warn: "red",
        notice: "yellow",
        info: "green",
        debug: "blue",
        trace: "red"
    }
}

const loggerConfig = () => {
    return winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
            new winston.transports.File({filename: 'error.log', level: 'error'}),
            new winston.transports.File({filename: 'combined.log'})
        ]
    });
}

export default loggerConfig
