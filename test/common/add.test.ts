import { add } from '@/index';
import { describe, it, expect } from 'vitest';

describe('add 함수', () => {
  describe('양수 덧셈', () => {
    it('두 양수를 더하면 합계를 반환', () => {
      const a = 1;
      const b = 2;

      const result = add(a, b);

      expect(result).toBe(3);
    });

    it('큰 양수들을 더하면 정확한 합계를 반환', () => {
      const a = 5;
      const b = 3;

      const result = add(a, b);

      expect(result).toBe(8);
    });
  });

  describe('음수와 양수 덧셈', () => {
    it('음수와 양수를 더하면 차이값을 반환', () => {
      const a = -1;
      const b = 2;

      const result = add(a, b);

      expect(result).toBe(1);
    });

    it('양수와 음수를 더하면 차이값을 반환', () => {
      const a = 5;
      const b = -3;

      const result = add(a, b);

      expect(result).toBe(2);
    });
  });

  describe('음수 덧셈', () => {
    it('두 음수를 더하면 음수 합계를 반환', () => {
      const a = -1;
      const b = -2;

      const result = add(a, b);

      expect(result).toBe(-3);
    });

    it('큰 음수들을 더하면 정확한 음수 합계를 반환', () => {
      const a = -5;
      const b = -3;

      const result = add(a, b);

      expect(result).toBe(-8);
    });
  });

  describe('0과의 덧셈', () => {
    it('0과 양수를 더하면 원래 값을 반환', () => {
      const a = 0;
      const b = 5;

      const result = add(a, b);

      expect(result).toBe(5);
    });

    it('양수와 0을 더하면 원래 값을 반환', () => {
      const a = 5;
      const b = 0;

      const result = add(a, b);

      expect(result).toBe(5);
    });

    it('0과 0을 더하면 0을 반환', () => {
      const a = 0;
      const b = 0;

      const result = add(a, b);

      expect(result).toBe(0);
    });
  });
});
