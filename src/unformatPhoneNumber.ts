/**
 * Telefon numarası formatlama
 * @param {string} phoneNumber
 */

import { memoize } from "./memoize";

const unFormatPhone = (input: string) => {
  // Sadece rakamları al
  const digits = input.replace(/\D/g, "");

  // Türkiye telefon numarası ise +90'dan sonraki kısmı al
  if (digits.startsWith("90") && digits.length >= 12) {
    return digits.slice(2); // +90 sonrası 5xxxxxxxxx
  }

  // Geçerli değilse boş döndür
  return "";
};

export const unFormatPhoneNumber = memoize(unFormatPhone);
