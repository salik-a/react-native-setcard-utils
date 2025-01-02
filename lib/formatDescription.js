"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDescription = void 0;
const memoize_1 = require("./memoize");
/**
 *  Metin içinde gelen '\n' karakterine göre metini alt alta sıralan yardımcı araç
 * @param description
 * @returns
 */
const formatDesc = (description) => {
    if (description) {
        const details = String(description !== null && description !== void 0 ? description : "").split("\\n");
        if (details.length > 1) {
            return `${details[0]}\n\n${details[1]}`;
        }
        return details[0];
    }
    return "";
};
exports.formatDescription = (0, memoize_1.memoize)(formatDesc);
