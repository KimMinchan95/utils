type ClonedObject = Record<string | symbol, unknown>;

/**
 * 객체를 깊은 복사하는 함수
 * @param obj - 복사할 객체
 * @param hash - 순환 참조를 방지하기 위한 WeakMap (내부 사용)
 * @returns 깊은 복사된 객체
 */
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
