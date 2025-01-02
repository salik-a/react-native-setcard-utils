"use strict";
/**
 * Telefon numarası formatlama
 * @param {string} phoneNumber
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.unFormatPhoneNumber = void 0;
const memoize_1 = require("./memoize");
const unFormatPhone = (input) => {
    // Sadece rakamları al
    const digits = input.replace(/\D/g, "");
    // Türkiye telefon numarası ise +90'dan sonraki kısmı al
    if (digits.startsWith("90") && digits.length >= 12) {
        return digits.slice(2); // +90 sonrası 5xxxxxxxxx
    }
    // Geçerli değilse boş döndür
    return "";
};
exports.unFormatPhoneNumber = (0, memoize_1.memoize)(unFormatPhone);
