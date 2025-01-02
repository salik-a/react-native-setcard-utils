import { memoize } from "./memoize";
/**
 *  Metin içinde gelen '\n' karakterine göre metini alt alta sıralan yardımcı araç
 * @param description
 * @returns
 */
const formatDesc = (description: string) => {
  if (description) {
    const details = String(description ?? "").split("\\n");

    if (details.length > 1) {
      return `${details[0]}\n\n${details[1]}`;
    }
    return details[0];
  }

  return "";
};

export const formatDescription = memoize(formatDesc);
