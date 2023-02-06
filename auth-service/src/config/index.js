const globalConfig = {
    customer: 'customer1',
    description: 'my product description',
    initMail: 'anoopnayak11@gmail.com',
    proxy: false,
    SSL: false,
    devHost: 'localhost',
    mongodb: {
        db: 'auth-db',
        options: {
            useUnifiedTopology: true
        }
    },
    bruteForce: {
        maximumLoginAttempts: 4,
    },
    logging: {
        filename: 'my_logs',
        fileEnable: true,
        datePattern : "YYYY-MM-DD",
        maxsize: 104857600, // 100MB
        maxfiles: 30
    }
}

export default globalConfig