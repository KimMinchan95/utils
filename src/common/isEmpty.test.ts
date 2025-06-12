import { describe, expect, test } from 'vitest';
import { isEmpty } from './isEmpty';

describe('isEmpty 함수', () => {
  describe('문자열 테스트', () => {
    test('빈 문자열은 true를 반환해야 합니다', () => {
      expect(isEmpty('')).toBe(true);
    });

    test('공백 문자열은 false를 반환해야 합니다', () => {
      expect(isEmpty(' ')).toBe(false);
      expect(isEmpty('  ')).toBe(false);
    });

    test('일반 문자열은 false를 반환해야 합니다', () => {
      expect(isEmpty('hello')).toBe(false);
    });
  });

  describe('배열 테스트', () => {
    test('빈 배열은 true를 반환해야 합니다', () => {
      expect(isEmpty([])).toBe(true);
    });

    test('요소가 있는 배열은 false를 반환해야 합니다', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
      expect(isEmpty([''])).toBe(false);
    });
  });

  describe('객체 테스트', () => {
    test('빈 객체는 true를 반환해야 합니다', () => {
      expect(isEmpty({})).toBe(true);
    });

    test('속성이 있는 객체는 false를 반환해야 합니다', () => {
      expect(isEmpty({ key: 'value' })).toBe(false);
      expect(isEmpty({ key: undefined })).toBe(false);
    });
  });

  describe('null과 undefined 테스트', () => {
    test('null은 true를 반환해야 합니다', () => {
      expect(isEmpty(null)).toBe(true);
    });

    test('undefined는 true를 반환해야 합니다', () => {
      expect(isEmpty(undefined)).toBe(true);
    });
  });

  describe('숫자 테스트', () => {
    test('0은 false를 반환해야 합니다', () => {
      expect(isEmpty(0)).toBe(false);
    });

    test('NaN은 false를 반환해야 합니다', () => {
      expect(isEmpty(NaN)).toBe(false);
    });
  });

  describe('기타 타입 테스트', () => {
    test('boolean 값은 false를 반환해야 합니다', () => {
      expect(isEmpty(false)).toBe(false);
      expect(isEmpty(true)).toBe(false);
    });

    test('함수는 false를 반환해야 합니다', () => {
      expect(isEmpty(() => {})).toBe(false);
    });
  });
});
