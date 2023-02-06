export const apiErrorHandler = {
    error400: (res, msg, err) => {
        return res.status(400).json({
            success: false,
            msg: msg,
            err: err
        })
    }
}