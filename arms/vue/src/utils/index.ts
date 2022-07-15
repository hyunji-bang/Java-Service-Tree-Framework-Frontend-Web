/***
 * @description const to array
 * */
export const objectToArray = <T extends object>(obj: T): T[] => {
  return Object.entries(obj).reduce((result: T[], [key, value]) => {
    if (Number.isNaN(Number(key))) {
      result.push({ label: key, value } as T);
    }
    return result;
  }, []);
};

/***
 * @description delay
 * */
export const delay = (ms = 100) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/***
 * @description handlePrefix
 * */
export const handlePrefix = (obj: object, prefix = 'res_', flag = true) => {
  if (flag)
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${prefix}${k}`, v]));
  else
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [`${k.replace(prefix, '')}`, v]),
    );
};

/***
 * @description camel case
 * */
const setCamelCase = (key: string) =>
  key.replace(/([a-z])/g, (m, chr) => chr.toUpperCase());

/***
 * @description create uuid
 * */
export const createUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c: string) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
