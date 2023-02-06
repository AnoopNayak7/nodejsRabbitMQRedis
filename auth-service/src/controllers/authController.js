import { apiErrorHandler } from "../helpers/api/apiErrorHandler.js";
import logger from "../lib/logger/logger.js"

export const authContoller = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password)
                apiErrorHandler.error400(res)

        } catch (err) {
            logger.warn('Register:', err)
            return res.status(500).json({ msg: err.message })
        }
    }
}