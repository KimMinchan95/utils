import { isEmpty } from '@/index';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';

describe('isEmpty 함수', () => {
  describe('문자열 처리', () => {
    it('빈 문자열을 받으면 true를 반환', () => {
      const value = '';

      const result = isEmpty(value);

      expect(result).toBe(true);
    });

    it('공백 문자열을 받으면 false를 반환', () => {
      const value = faker.string.sample();

      const result = isEmpty(value);

      expect(result).toBe(false);
    });

    it('일반 문자열을 받으면 false를 반환', () => {
      const value = faker.lorem.word();

      const result = isEmpty(value);

      expect(result).toBe(false);
    });
  });

  describe('배열 처리', () => {
    it('빈 배열을 받으면 true를 반환', () => {
      const value: any[] = [];

      const result = isEmpty(value);

      expect(result).toBe(true);
    });

    it('요소가 있는 배열을 받으면 false를 반환', () => {
      const value = [
        faker.number.int(),
        faker.string.sample(),
        faker.datatype.boolean(),
      ];

      const result = isEmpty(value);

      expect(result).toBe(false);
    });

    it('빈 문자열이 포함된 배열을 받으면 false를 반환', () => {
      const value = [''];

      const result = isEmpty(value);

      expect(result).toBe(false);
    });
  });

  describe('객체 처리', () => {
    it('빈 객체를 받으면 true를 반환', () => {
      const value = {};

      const result = isEmpty(value);

      expect(result).toBe(true);
    });

    it('속성이 있는 객체를 받으면 false를 반환', () => {
      const value = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 80 }),
      };

      const result = isEmpty(value);

      expect(result).toBe(false);
    });

    it('undefined 값이 있는 객체를 받으면 false를 반환', () => {
      const value = {
        name: faker.person.fullName(),
        email: undefined,
      };

      const result = isEmpty(value);

      expect(result).toBe(false);
    });
  });

  describe('null과 undefined 처리', () => {
    it('null 값을 받으면 true를 반환', () => {
      const value = null;

      const result = isEmpty(value);

      expect(result).toBe(true);
    });

    it('undefined 값을 받으면 true를 반환', () => {
      const value = undefined;

      const result = isEmpty(value);

      expect(result).toBe(true);
    });
  });

  describe('숫자 처리', () => {
    it('0을 받으면 false를 반환', () => {
      const value = 0;

      const result = isEmpty(value);

      expect(result).toBe(false);
    });

    it('NaN을 받으면 false를 반환', () => {
      const value = NaN;

      const result = isEmpty(value);

      expect(result).toBe(false);
    });

    it('랜덤 숫자를 받으면 false를 반환', () => {
      const value = faker.number.int();

      const result = isEmpty(value);

      expect(result).toBe(false);
    });
  });

  describe('기타 타입 처리', () => {
    it('boolean 값을 받으면 false를 반환', () => {
      const value = faker.datatype.boolean();

      const result = isEmpty(value);

      expect(result).toBe(false);
    });

    it('함수를 받으면 false를 반환', () => {
      const value = () => faker.string.sample();

      const result = isEmpty(value);

      expect(result).toBe(false);
    });
  });
});
