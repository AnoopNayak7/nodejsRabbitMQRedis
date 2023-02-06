import { errorMessages } from "../config/ErrorMesaages.js";
import { apiErrorHandler } from "../helpers/api/apiErrorHandler.js";
import logger from "../lib/logger/logger.js"
import User from '../models/User.model.js'

export const authContoller = {
    // USER REGISTRATION LOGIC
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password)
                apiErrorHandler.error400(res, errorMessages.filedValueMissing)

            
            

        } catch (err) {
            logger.warn('Register:', err)
            apiErrorHandler.error400(res)
        }
    }
}