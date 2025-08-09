/**
 * 문자열의 첫 글자를 대문자로 변환하는 함수
 * @param str - 변환할 문자열
 * @returns 첫 글자가 대문자인 문자열
 */
export const capitalize = (str: string): string => {
  if (!str || typeof str !== 'string') {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
