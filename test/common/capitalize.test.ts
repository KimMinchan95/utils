import { describe, it, expect } from 'vitest';
import { capitalize } from '@/common/capitalize';

describe('capitalize', () => {
  it('소문자 문자열의 첫 글자를 대문자로 변환해야 한다', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  it('대문자 문자열의 첫 글자는 그대로 유지하고 나머지는 소문자로 변환해야 한다', () => {
    expect(capitalize('HELLO')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('World');
  });

  it('첫 글자만 대문자인 문자열은 그대로 유지해야 한다', () => {
    expect(capitalize('Hello')).toBe('Hello');
    expect(capitalize('World')).toBe('World');
  });

  it('혼합된 대소문자 문자열을 올바르게 변환해야 한다', () => {
    expect(capitalize('hELLO')).toBe('Hello');
    expect(capitalize('wOrLd')).toBe('World');
  });

  it('한 글자 문자열을 올바르게 처리해야 한다', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  it('빈 문자열을 그대로 반환해야 한다', () => {
    expect(capitalize('')).toBe('');
  });

  it('공백만 있는 문자열을 그대로 반환해야 한다', () => {
    expect(capitalize('   ')).toBe('   ');
  });

  it('숫자나 특수문자로 시작하는 문자열을 그대로 반환해야 한다', () => {
    expect(capitalize('123hello')).toBe('123hello');
    expect(capitalize('!hello')).toBe('!hello');
    expect(capitalize('@world')).toBe('@world');
  });

  it('null이나 undefined를 그대로 반환해야 한다', () => {
    expect(capitalize(null as any)).toBe(null);
    expect(capitalize(undefined as any)).toBe(undefined);
  });

  it('숫자를 그대로 반환해야 한다', () => {
    expect(capitalize(123 as any)).toBe(123);
  });

  it('한글 문자열을 올바르게 처리해야 한다', () => {
    expect(capitalize('안녕하세요')).toBe('안녕하세요');
    expect(capitalize('hello안녕')).toBe('Hello안녕');
  });
});
