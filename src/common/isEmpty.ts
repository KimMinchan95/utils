/**
 * 값이 비어있는지 확인하는 함수
 * @param value - 확인할 값
 * @returns 값이 비어있으면 true, 그렇지 않으면 false
 */
export const isEmpty = (value: unknown): boolean => {
  if (value == null) return true;
  if (typeof value === 'string' || Array.isArray(value)) return !value.length;
  if (typeof value === 'object') return !Object.keys(value).length;
  return false;
};
