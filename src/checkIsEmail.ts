import { memoize } from "./memoize";

/**
 * E-Mail kontrolü
 * @param {string} email
 */
const validateEmail = (email: string): String | Boolean => {
  if (!email) {
    return false;
  }
  const mailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  if (mailRegex.test(email)) {
    return true;
  }
  return false;
};

export const checkIsEmail = memoize(validateEmail);

