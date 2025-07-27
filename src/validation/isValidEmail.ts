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
