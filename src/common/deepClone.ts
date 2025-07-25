type ClonedObject = Record<string | symbol, unknown>;

export const deepClone = <T>(obj: T, hash = new WeakMap()): T => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj) as unknown as T;
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj) as unknown as T;
  }

  if (hash.has(obj)) {
    return hash.get(obj) as T;
  }

  const result: any = Array.isArray(obj) ? [] : {};

  hash.set(obj, result);

  for (const key of Reflect.ownKeys(obj)) {
    result[key] = deepClone((obj as ClonedObject)[key], hash);
  }

  return result as T;
};
