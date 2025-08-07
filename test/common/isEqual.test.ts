import { describe, it, expect } from 'vitest';
import { isEqual } from '@/common/isEqual';

describe('isEqual', () => {
  describe('기본 타입 비교', () => {
    it('같은 문자열을 비교하면 true를 반환해야 한다', () => {
      expect(isEqual('hello', 'hello')).toBe(true);
    });

    it('다른 문자열을 비교하면 false를 반환해야 한다', () => {
      expect(isEqual('hello', 'world')).toBe(false);
    });

    it('같은 숫자를 비교하면 true를 반환해야 한다', () => {
      expect(isEqual(42, 42)).toBe(true);
    });

    it('다른 숫자를 비교하면 false를 반환해야 한다', () => {
      expect(isEqual(42, 43)).toBe(false);
    });

    it('같은 불린값을 비교하면 true를 반환해야 한다', () => {
      expect(isEqual(true, true)).toBe(true);
      expect(isEqual(false, false)).toBe(true);
    });

    it('다른 불린값을 비교하면 false를 반환해야 한다', () => {
      expect(isEqual(true, false)).toBe(false);
    });
  });

  describe('null/undefined 비교', () => {
    it('null과 null을 비교하면 true를 반환해야 한다', () => {
      expect(isEqual(null, null)).toBe(true);
    });

    it('undefined와 undefined를 비교하면 true를 반환해야 한다', () => {
      expect(isEqual(undefined, undefined)).toBe(true);
    });

    it('null과 undefined를 비교하면 false를 반환해야 한다', () => {
      expect(isEqual(null, undefined)).toBe(false);
    });
  });

  describe('배열 비교', () => {
    it('같은 배열을 비교하면 true를 반환해야 한다', () => {
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    it('다른 배열을 비교하면 false를 반환해야 한다', () => {
      expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    it('길이가 다른 배열을 비교하면 false를 반환해야 한다', () => {
      expect(isEqual([1, 2], [1, 2, 3])).toBe(false);
    });

    it('중첩된 배열을 비교하면 true를 반환해야 한다', () => {
      expect(
        isEqual(
          [
            [1, 2],
            [3, 4],
          ],
          [
            [1, 2],
            [3, 4],
          ]
        )
      ).toBe(true);
    });
  });

  describe('객체 비교', () => {
    it('같은 객체를 비교하면 true를 반환해야 한다', () => {
      const obj1 = { name: 'John', age: 30 };
      const obj2 = { name: 'John', age: 30 };
      expect(isEqual(obj1, obj2)).toBe(true);
    });

    it('다른 객체를 비교하면 false를 반환해야 한다', () => {
      const obj1 = { name: 'John', age: 30 };
      const obj2 = { name: 'Jane', age: 30 };
      expect(isEqual(obj1, obj2)).toBe(false);
    });

    it('속성 개수가 다른 객체를 비교하면 false를 반환해야 한다', () => {
      const obj1 = { name: 'John', age: 30 };
      const obj2 = { name: 'John' };
      expect(isEqual(obj1, obj2)).toBe(false);
    });

    it('중첩된 객체를 비교하면 true를 반환해야 한다', () => {
      const obj1 = { user: { name: 'John', details: { age: 30 } } };
      const obj2 = { user: { name: 'John', details: { age: 30 } } };
      expect(isEqual(obj1, obj2)).toBe(true);
    });
  });

  describe('Date 객체 비교', () => {
    it('같은 날짜를 비교하면 true를 반환해야 한다', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-01');
      expect(isEqual(date1, date2)).toBe(true);
    });

    it('다른 날짜를 비교하면 false를 반환해야 한다', () => {
      const date1 = new Date('2023-01-01');
      const date2 = new Date('2023-01-02');
      expect(isEqual(date1, date2)).toBe(false);
    });
  });

  describe('복합적인 케이스', () => {
    it('복잡한 중첩 구조를 비교하면 true를 반환해야 한다', () => {
      const obj1 = {
        users: [
          { name: 'John', age: 30, hobbies: ['reading', 'gaming'] },
          { name: 'Jane', age: 25, hobbies: ['painting'] },
        ],
        settings: {
          theme: 'dark',
          notifications: true,
        },
        createdAt: new Date('2023-01-01'),
      };

      const obj2 = {
        users: [
          { name: 'John', age: 30, hobbies: ['reading', 'gaming'] },
          { name: 'Jane', age: 25, hobbies: ['painting'] },
        ],
        settings: {
          theme: 'dark',
          notifications: true,
        },
        createdAt: new Date('2023-01-01'),
      };

      expect(isEqual(obj1, obj2)).toBe(true);
    });
  });
});
