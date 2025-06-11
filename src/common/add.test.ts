import { add } from '@/common/add';
import { describe, test, expect } from 'vitest';

describe('add 함수', () => {
  test('두 양수를 더해야 합니다', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 3)).toBe(8);
  });

  test('음수와 양수를 더해야 합니다', () => {
    expect(add(-1, 2)).toBe(1);
    expect(add(5, -3)).toBe(2);
  });

  test('두 음수를 더해야 합니다', () => {
    expect(add(-1, -2)).toBe(-3);
    expect(add(-5, -3)).toBe(-8);
  });

  test('0과의 덧셈을 처리해야 합니다', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });
});
