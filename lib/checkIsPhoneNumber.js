"use strict";
/**
 * E-Mail kontrolü
 * @param {string} phoneNumber
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsPhoneNumber = void 0;
const memoize_1 = require("./memoize");
const validatePhone = (phone) => {
    if (!phone) {
        return false;
    }
    const phoneRegex = /^(5)([0-9]{9}$)/;
    if (phoneRegex.test(phone)) {
        return true;
    }
    return false;
};
exports.checkIsPhoneNumber = (0, memoize_1.memoize)(validatePhone);
