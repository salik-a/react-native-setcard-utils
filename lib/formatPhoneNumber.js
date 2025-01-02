"use strict";
/**
 * Telefon numarası formatlama
 * @param {string} phoneNumber
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPhoneNumber = void 0;
const memoize_1 = require("./memoize");
const formatPhone = (input) => {
    // Sadece rakamları al
    const digits = input.replace(/\D/g, "");
    // Başlangıç formatını +90 ile oluştur
    let formatted = "+90";
    // Formatlama işlemi
    if (digits.length > 2) {
        formatted += " (" + digits.slice(2, 3); // 5
    }
    if (digits.length > 3) {
        formatted += digits.slice(3, 5); // xxx
    }
    if (digits.length > 5) {
        formatted += ") " + digits.slice(5, 8); // xxx
    }
    if (digits.length > 8) {
        formatted += " " + digits.slice(8, 10); // xx
    }
    if (digits.length > 10) {
        formatted += " " + digits.slice(10, 12); // xx
    }
    return formatted;
};
exports.formatPhoneNumber = (0, memoize_1.memoize)(formatPhone);
