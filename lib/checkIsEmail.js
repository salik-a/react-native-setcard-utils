"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsEmail = void 0;
const memoize_1 = require("./memoize");
/**
 * E-Mail kontrolü
 * @param {string} email
 */
const validateEmail = (email) => {
    if (!email) {
        return false;
    }
    const mailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    if (mailRegex.test(email)) {
        return true;
    }
    return false;
};
exports.checkIsEmail = (0, memoize_1.memoize)(validateEmail);
