/**
 * Password kontrolü
 * @param {string} password
 */

import { memoize } from "./memoize";

const validatePasswordRegex = (password: string): String | Boolean => {
  if (!password) {
    return false;
  }
  const passwordRegex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!$@%*?&£%^_+{}:@~<>|\[\];#,.\-])[A-Za-z\d!$@%*?&£%^_+:@~<>|\[\];#,.\-]{8,}/; // 1 büyük harf, 1 küçük harf, 1 rakam, 1 özel karakter ( #?!@$%^&*-._+/ )
  if (passwordRegex.test(password)) {
    return true;
  }

  return false;
};

export const checkIsPassword = memoize(validatePasswordRegex);
