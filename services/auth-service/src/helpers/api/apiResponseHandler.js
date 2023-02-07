export const apiResponseHandler = {
    error: (res, msg, err, httpCode) => {
        return res.status(httpCode).json({
            success: false,
            msg: msg,
            err: err
        })
    },

    success200: (res, msg, data) => {
        res.status(400).json({
            success: true,
            msg: msg
        })
    }
}