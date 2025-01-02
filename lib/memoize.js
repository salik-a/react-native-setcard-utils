"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
/**
 * Fonksiyonları memorize etme
 * @param func
 * @returns
 */
const memoize = (func) => {
    const results = {};
    return (...args) => {
        const argsKey = JSON.stringify(args);
        if (!results[argsKey]) {
            results[argsKey] = func(...args);
        }
        return results[argsKey];
    };
};
exports.memoize = memoize;
