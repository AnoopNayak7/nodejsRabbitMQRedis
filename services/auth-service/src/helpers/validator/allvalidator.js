import globalConfig from "../../config/index.js";

export const allvalidator = {
    // EMAIL VALIDATION
    validateEmail: async (email) => {
        return await email.match(globalConfig.validationRegex.regex_email);
    }
}