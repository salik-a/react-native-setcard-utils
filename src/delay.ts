import { memoize } from "./memoize";

const delayTime = (cb: Function, ms: number = 1000) => {
  setTimeout(async () => {
    if (typeof cb === "function") {
      await cb();
    }
  }, ms);
};

export const delay = memoize(delayTime);
