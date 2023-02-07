import { validationMessages } from "../config/validationmessages.js";
import { apiResponseHandler } from "../helpers/api/apiResponseHandler.js";
import logger from "../lib/logger/logger.js"
import User from '../models/User.model.js'
import { allvalidator } from '../helpers/validator/allvalidator.js'
import { encryptionHelper } from "../lib/security/encryptionHelper.js";

export const authContoller = {
    // USER REGISTRATION LOGIC
    register: async (req, res) => {
        try {
            const { name, email, password, latitude, longitude } = req.body;

            if (!name || !email || !password)
                apiResponseHandler.error(res, validationMessages.filedValueMissing)

            if (!allvalidator.validateEmail(email))
                apiResponseHandler.error(res, validationMessages.invalidEmail)

            if (password.length < 6)
                apiResponseHandler.error(res, validationMessages.passwordLengthError)

            const user = await User.findOne({ email });

            if (user)
                apiResponseHandler.error(res, validationMessages.emailAlreadyExists)

            console.log('Exected', user)

            const passwordHash = await encryptionHelper.encrypt(password)

            console.log('Executed till here', passwordHash)

            const newUser = new User({
                name,
                email,
                password: passwordHash,
                lastLocation: {
                    type: "Point",
                    coordinates: [parseFloat(latitude), parseFloat(longitude)]
                }
            })

            const userData = await newUser.save();

            apiResponseHandler.success200(res, 'Registration successfull', { id: userData._id, name: userData.name, email: userData.email })

        } catch (err) {
            logger.warn('Register:', err)
            console.log(err)
            apiResponseHandler.error(res, 'something went wrong', err)
        }
    },

    // USER LOGIN LOGIC 
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user)
                apiResponseHandler.error(res, validationMessages.userNotFound, 'Invalid credentials', 406);

            const isMatch = await encryptionHelper.decrypt(user.password) === password ? true : false
            if (!isMatch)
                apiResponseHandler.error(res, validationMessages.incorrectPassword);

            




        } catch (err) {
            console.log('LOGIN ERR', err)
        }
    }
}