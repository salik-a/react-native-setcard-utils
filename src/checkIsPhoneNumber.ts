/**
 * E-Mail kontrolü
 * @param {string} phoneNumber
 */

import { memoize } from './memoize';

const validatePhone = (phone: string): String | Boolean => {
  if (!phone) {
    return false;
  }
  const phoneRegex = /^(5)([0-9]{9}$)/;
  if (phoneRegex.test(phone)) {
    return true;
  }

  return false;
};

export const checkIsPhoneNumber = memoize(validatePhone);
