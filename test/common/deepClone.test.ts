import { deepClone } from '@/index';
import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';

describe('deepClone 함수', () => {
  describe('원시 타입 처리', () => {
    it('null 값을 받으면 null을 반환', () => {
      const value = null;

      const result = deepClone(value);

      expect(result).toBe(null);
    });

    it('undefined 값을 받으면 undefined를 반환', () => {
      const value = undefined;

      const result = deepClone(value);

      expect(result).toBe(undefined);
    });

    it('숫자를 받으면 동일한 숫자를 반환', () => {
      const value = faker.number.int();

      const result = deepClone(value);

      expect(result).toBe(value);
    });

    it('문자열을 받으면 동일한 문자열을 반환', () => {
      const value = faker.string.sample();

      const result = deepClone(value);

      expect(result).toBe(value);
    });

    it('boolean 값을 받으면 동일한 boolean을 반환', () => {
      const value = faker.datatype.boolean();

      const result = deepClone(value);

      expect(result).toBe(value);
    });
  });

  describe('배열 처리', () => {
    it('빈 배열을 받으면 새로운 빈 배열을 반환', () => {
      const value: any[] = [];

      const result = deepClone(value);

      expect(result).toEqual([]);
      expect(result).not.toBe(value);
    });

    it('원시 타입 배열을 받으면 새로운 배열을 반환', () => {
      const value = [
        faker.number.int(),
        faker.string.sample(),
        faker.datatype.boolean(),
      ];

      const result = deepClone(value);

      expect(result).toEqual(value);
      expect(result).not.toBe(value);
    });

    it('중첩 배열을 받으면 깊은 복사된 배열을 반환', () => {
      const value = [
        [faker.number.int(), faker.number.int()],
        [faker.number.int(), faker.number.int()],
      ];

      const result = deepClone(value);

      expect(result).toEqual(value);
      expect(result).not.toBe(value);
      expect(result[0]).not.toBe(value[0]);
    });

    it('객체가 포함된 배열을 받으면 깊은 복사된 배열을 반환', () => {
      const value = [
        { id: faker.number.int(), name: faker.person.firstName() },
        { id: faker.number.int(), name: faker.person.firstName() },
      ];

      const result = deepClone(value);

      expect(result).toEqual(value);
      expect(result).not.toBe(value);
      expect(result[0]).not.toBe(value[0]);
    });
  });

  describe('객체 처리', () => {
    it('빈 객체를 받으면 새로운 빈 객체를 반환', () => {
      const value = {};

      const result = deepClone(value);

      expect(result).toEqual({});
      expect(result).not.toBe(value);
    });

    it('단순 속성을 가진 객체를 받으면 새로운 객체를 반환', () => {
      const value = {
        name: faker.person.fullName(),
        age: faker.number.int({ min: 18, max: 80 }),
        email: faker.internet.email(),
      };

      const result = deepClone(value);

      expect(result).toEqual(value);
      expect(result).not.toBe(value);
    });

    it('중첩 객체를 받으면 깊은 복사된 객체를 반환', () => {
      const value = {
        user: {
          name: faker.person.fullName(),
          address: {
            city: faker.location.city(),
            country: faker.location.country(),
            street: faker.location.streetAddress(),
          },
        },
      };

      const result = deepClone(value);

      expect(result).toEqual(value);
      expect(result).not.toBe(value);
      expect(result.user).not.toBe(value.user);
      expect(result.user.address).not.toBe(value.user.address);
    });

    it('배열이 포함된 객체를 받으면 깊은 복사된 객체를 반환', () => {
      const value = {
        name: faker.person.fullName(),
        hobbies: [faker.word.sample(), faker.word.sample()],
        scores: [
          faker.number.int({ min: 0, max: 100 }),
          faker.number.int({ min: 0, max: 100 }),
        ],
      };

      const result = deepClone(value);

      expect(result).toEqual(value);
      expect(result).not.toBe(value);
      expect(result.hobbies).not.toBe(value.hobbies);
      expect(result.scores).not.toBe(value.scores);
    });
  });

  describe('복잡한 구조 처리', () => {
    it('객체와 배열이 혼합된 구조를 받으면 깊은 복사된 객체를 반환', () => {
      const value = {
        users: [
          {
            id: faker.number.int(),
            name: faker.person.fullName(),
            tags: [faker.word.sample(), faker.word.sample()],
          },
          {
            id: faker.number.int(),
            name: faker.person.fullName(),
            tags: [faker.word.sample()],
          },
        ],
        settings: {
          theme: faker.helpers.arrayElement(['light', 'dark']),
          features: [faker.word.sample(), faker.word.sample()],
        },
      };

      const result = deepClone(value);

      expect(result).toEqual(value);
      expect(result).not.toBe(value);
      expect(result.users).not.toBe(value.users);
      expect(result.users[0]).not.toBe(value.users[0]);
      expect(result.users[0].tags).not.toBe(value.users[0].tags);
      expect(result.settings).not.toBe(value.settings);
      expect(result.settings.features).not.toBe(value.settings.features);
    });

    it('순환 참조가 있는 객체를 받으면 무한 루프에 빠지지 않음', () => {
      const value: any = { name: faker.person.fullName() };
      value.self = value;

      const result = deepClone(value);

      expect(result.name).toBe(value.name);
      expect(result.self).toBe(result);
    });
  });

  describe('특수한 경우 처리', () => {
    it('함수를 받으면 동일한 함수를 반환', () => {
      const value = () => faker.string.sample();

      const result = deepClone(value);

      expect(result).toBe(value);
    });

    it('Date 객체를 받으면 동일한 Date를 반환', () => {
      const value = faker.date.anytime();

      const result = deepClone(value);

      expect(result).not.toBe(value); // 인스턴스는 달라야 함
      expect(result.getTime()).toBe(value.getTime()); // 값은 같아야 함
      expect(result instanceof Date).toBe(true);
    });

    it('RegExp 객체를 받으면 동일한 RegExp를 반환', () => {
      const value = new RegExp(faker.string.sample());

      const result = deepClone(value);

      expect(result).not.toBe(value); // 인스턴스는 달라야 함
      expect(result.source).toBe(value.source);
      expect(result.flags).toBe(value.flags);
      expect(result instanceof RegExp).toBe(true);
    });
  });
});
