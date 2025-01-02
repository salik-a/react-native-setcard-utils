"use strict";
/**
 * Password kontrolü
 * @param {string} password
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsPassword = void 0;
const memoize_1 = require("./memoize");
const validatePasswordRegex = (password) => {
    if (!password) {
        return false;
    }
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!$@%*?&£%^_+{}:@~<>|\[\];#,.\-])[A-Za-z\d!$@%*?&£%^_+:@~<>|\[\];#,.\-]{8,}/; // 1 büyük harf, 1 küçük harf, 1 rakam, 1 özel karakter ( #?!@$%^&*-._+/ )
    if (passwordRegex.test(password)) {
        return true;
    }
    return false;
};
exports.checkIsPassword = (0, memoize_1.memoize)(validatePasswordRegex);
