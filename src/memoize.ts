/**
 * Fonksiyonları memorize etme
 * @param func
 * @returns
 */
export const memoize = (func: Function) => {
  const results: any = {};
  return (...args: any) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};
