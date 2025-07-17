## 테스트 코드 작성을 위한 명령 : 시작

- 테스트 스타일은 BDD 스타일과 AAA 패턴을 같이 쓸꺼야 아래는 적용 예시야
- 구조화를 해서 describe를 구조적으로 읽으면 문장이 하나가 완성되게 작성해줘
- 주석은 복잡한 코드에만 달아줘

```js
describe('null과 undefined 처리', () => {
  it('null 값을 "-"로 변환', () => {
    const value = null;
    const result = formatDisplayValue(value);
    expect(result).toBe('-');
  });

  it('undefined 값을 "N/A"로 변환', () => {
    const value = undefined;
    const result = formatDisplayValue(value);
    expect(result).toBe('N/A');
  });
});
```

# 테스트 코드 작성을 위한 명령 : 끝
