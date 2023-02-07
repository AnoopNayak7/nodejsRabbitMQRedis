import Bcrypt from 'bcrypt'
import Crypto from 'crypto-js'

export const encryptionHelper = {
    // Encryption function
    encrypt: async(dataString) => {
        var ciphertext = Crypto.AES.encrypt(dataString, process.env.ENCRYPTION_SECRET_KEY).toString();
        return ciphertext
    },

    // Decryption function
    decrypt: async(hashedPass) => {
        var bytes  = Crypto.AES.decrypt(hashedPass, process.env.ENCRYPTION_SECRET_KEY);
        var originalText = bytes.toString(Crypto.enc.Utf8);
        return originalText
    }
}