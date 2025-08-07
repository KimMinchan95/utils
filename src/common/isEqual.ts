/**
 * 두 값이 깊은 비교에서 동일한지 확인하는 함수
 * @param a - 비교할 첫 번째 값
 * @param b - 비교할 두 번째 값
 * @returns 두 값이 동일하면 true, 그렇지 않으면 false
 */
export function isEqual(a: any, b: any): boolean {
  // 기본 타입 비교
  if (a === b) return true;

  // null/undefined 체크
  if (a === null || b === null) return a === b;
  if (a === undefined || b === undefined) return a === b;

  // 타입이 다른 경우
  if (typeof a !== typeof b) return false;

  // Date 객체 비교
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // 배열 비교
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // 객체 비교
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!isEqual(a[key], b[key])) return false;
    }

    return true;
  }

  // 기본 타입이지만 다른 경우
  return false;
}
