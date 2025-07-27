import { isValidEmail } from '@/index';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';

describe('isValidEmail 함수', () => {
  describe('유효한 이메일 처리', () => {
    it('일반적인 이메일 형식을 받으면 true를 반환', () => {
      const email = faker.internet.email();

      const result = isValidEmail(email);

      expect(result).toBe(true);
    });

    it('하이픈이 포함된 도메인 이메일을 받으면 true를 반환', () => {
      const email = faker.internet.email({ provider: 'example-domain.com' });

      const result = isValidEmail(email);

      expect(result).toBe(true);
    });

    it('언더스코어가 포함된 로컬 부분 이메일을 받으면 true를 반환', () => {
      const email = `user_name@${faker.internet.domainName()}`;

      const result = isValidEmail(email);

      expect(result).toBe(true);
    });

    it('점이 포함된 로컬 부분 이메일을 받으면 true를 반환', () => {
      const email = `user.name@${faker.internet.domainName()}`;

      const result = isValidEmail(email);

      expect(result).toBe(true);
    });

    it('플러스 기호가 포함된 이메일을 받으면 true를 반환', () => {
      const email = `user+tag@${faker.internet.domainName()}`;

      const result = isValidEmail(email);

      expect(result).toBe(true);
    });

    it('긴 도메인 이름 이메일을 받으면 true를 반환', () => {
      const email = `user@${faker.internet.domainName()}.co.uk`;

      const result = isValidEmail(email);

      expect(result).toBe(true);
    });
  });

  describe('유효하지 않은 이메일 처리', () => {
    it('@ 기호가 없는 문자열을 받으면 false를 반환', () => {
      const email = faker.internet.userName();

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('@ 기호만 있는 문자열을 받으면 false를 반환', () => {
      const email = '@';

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('로컬 부분이 없는 이메일을 받으면 false를 반환', () => {
      const email = `@${faker.internet.domainName()}`;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('도메인 부분이 없는 이메일을 받으면 false를 반환', () => {
      const email = `${faker.internet.userName()}@`;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('공백이 포함된 이메일을 받으면 false를 반환', () => {
      const email = `user name@${faker.internet.domainName()}`;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('연속된 점이 포함된 이메일을 받으면 false를 반환', () => {
      const email = `user..name@${faker.internet.domainName()}`;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('도메인에 점으로 시작하는 이메일을 받으면 false를 반환', () => {
      const email = `${faker.internet.userName()}@.${faker.internet.domainName()}`;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('도메인에 점으로 끝나는 이메일을 받으면 false를 반환', () => {
      const email = `${faker.internet.userName()}@${faker.internet.domainName()}.`;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('단일 문자 도메인을 가진 이메일을 받으면 false를 반환', () => {
      const email = `${faker.internet.userName()}@a`;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });
  });

  describe('특수한 경우 처리', () => {
    it('빈 문자열을 받으면 false를 반환', () => {
      const email = '';

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('공백만 있는 문자열을 받으면 false를 반환', () => {
      const email = '   ';

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('null 값을 받으면 false를 반환', () => {
      const email = null as any;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('undefined 값을 받으면 false를 반환', () => {
      const email = undefined as any;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('숫자를 받으면 false를 반환', () => {
      const email = faker.number.int() as any;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });

    it('boolean 값을 받으면 false를 반환', () => {
      const email = faker.datatype.boolean() as any;

      const result = isValidEmail(email);

      expect(result).toBe(false);
    });
  });

  describe('경계값 테스트', () => {
    it('매우 긴 이메일을 받으면 true를 반환', () => {
      const longLocal = faker.string.alphanumeric(64);
      const email = `${longLocal}@${faker.internet.domainName()}`;

      const result = isValidEmail(email);

      expect(result).toBe(true);
    });

    it('매우 긴 도메인을 가진 이메일을 받으면 true를 반환', () => {
      const longDomain = faker.string.alphanumeric(63);
      const email = `${faker.internet.userName()}@${longDomain}.com`;

      const result = isValidEmail(email);

      expect(result).toBe(true);
    });

    it('특수문자가 포함된 로컬 부분 이메일을 받으면 true를 반환', () => {
      const email = `user%name@${faker.internet.domainName()}`;

      const result = isValidEmail(email);

      expect(result).toBe(true);
    });
  });
});
