import Bcrypt from 'bcrypt'
import Crypto from 'crypto-js'

export const encryptionHelper = {
    // Encryption function
    encrypt: (dataString) => {
        var ciphertext = Crypto.AES.encrypt(dataString, process.env.ENCRYPTION_SECRET_KEY).toString();
        console.log(ciphertext)
        return ciphertext
    },

    // Decryption function
    decrypt: (ciphertext) => {
        var bytes  = Crypto.AES.decrypt(ciphertext, process.env.ENCRYPTION_SECRET_KEY);
        var originalText = bytes.toString(Crypto.enc.Utf8);
        console.log(originalText)
    }
}