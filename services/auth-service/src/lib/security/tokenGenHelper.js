import jwt from "jsonwebtoken"

export const tokenGenHelper = {
    // Create Access Token
    createAccessToken: (payload) => {
        return jwt.sign(payload, process.env.ENCRYPTION_SECRET_KEY, {
            expiresIn: '15m'
        })
    },
    
    // Create Refresh Token
    createRefreshToken: () => {
        return jwt.sign(payload, process.env.ENCRYPTION_SECRET_KEY, {
            expiresIn: '14d'
        })
    }
}