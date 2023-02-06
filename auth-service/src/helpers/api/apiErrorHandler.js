export const apiErrorHandler = {
    error400: (res) => {
        return res.status(400).json({
            success: false,
            msg: "Please fill in all fields"
        })
    }
}