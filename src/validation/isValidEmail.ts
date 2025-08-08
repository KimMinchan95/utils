/**
 * 이메일 주소가 유효한지 검증하는 함수
 * @param email - 검증할 이메일 주소
 * @returns 이메일이 유효하면 true, 그렇지 않으면 false
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') {
    return false;
  }

  // 기본적인 이메일 형식 검증
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  // 연속된 점 검사
  if (email.includes('..')) {
    return false;
  }

  // 도메인에서 점으로 시작하는지 검사
  if (email.includes('@.')) {
    return false;
  }

  return true;
};
