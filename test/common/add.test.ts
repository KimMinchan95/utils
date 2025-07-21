import { add } from '@/index';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';

describe('add 함수', () => {
  describe('양수 덧셈', () => {
    it('두 양수를 더하면 합계를 반환', () => {
      const a = faker.number.int({ min: 1, max: 100 });
      const b = faker.number.int({ min: 1, max: 100 });

      const result = add(a, b);

      expect(result).toBe(a + b);
    });

    it('큰 양수들을 더하면 정확한 합계를 반환', () => {
      const a = faker.number.int({ min: 1000, max: 9999 });
      const b = faker.number.int({ min: 1000, max: 9999 });

      const result = add(a, b);

      expect(result).toBe(a + b);
    });
  });

  describe('음수와 양수 덧셈', () => {
    it('음수와 양수를 더하면 차이값을 반환', () => {
      const a = faker.number.int({ min: -100, max: -1 });
      const b = faker.number.int({ min: 1, max: 100 });

      const result = add(a, b);

      expect(result).toBe(a + b);
    });

    it('양수와 음수를 더하면 차이값을 반환', () => {
      const a = faker.number.int({ min: 1, max: 100 });
      const b = faker.number.int({ min: -100, max: -1 });

      const result = add(a, b);

      expect(result).toBe(a + b);
    });
  });

  describe('음수 덧셈', () => {
    it('두 음수를 더하면 음수 합계를 반환', () => {
      const a = faker.number.int({ min: -100, max: -1 });
      const b = faker.number.int({ min: -100, max: -1 });

      const result = add(a, b);

      expect(result).toBe(a + b);
    });

    it('큰 음수들을 더하면 정확한 음수 합계를 반환', () => {
      const a = faker.number.int({ min: -9999, max: -1000 });
      const b = faker.number.int({ min: -9999, max: -1000 });

      const result = add(a, b);

      expect(result).toBe(a + b);
    });
  });

  describe('0과의 덧셈', () => {
    it('0과 양수를 더하면 원래 값을 반환', () => {
      const a = 0;
      const b = faker.number.int({ min: 1, max: 100 });

      const result = add(a, b);

      expect(result).toBe(b);
    });

    it('양수와 0을 더하면 원래 값을 반환', () => {
      const a = faker.number.int({ min: 1, max: 100 });
      const b = 0;

      const result = add(a, b);

      expect(result).toBe(a);
    });

    it('0과 0을 더하면 0을 반환', () => {
      const a = 0;
      const b = 0;

      const result = add(a, b);

      expect(result).toBe(0);
    });
  });
});
