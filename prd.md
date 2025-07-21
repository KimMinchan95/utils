## 테스트 코드 작성을 위한 명령 : 시작

- 예시 테스트 데이터는 @faker-js/faker를 활용해서 만들 것.
- import 는 'src/index'를 뜻하는 '@/index'에서 해당 유틸 함수를 받아올 것.
- 구조화를 해서 describe를 구조적으로 읽으면 문장이 하나가 완성되게 작성해야됨.
- 구조는 기존 구조를 따르되, src에 있는 폴더와 동일한 구조로 test 폴더에 만듬.
- 주석은 복잡한 코드에만 달아야됨.
- 테스트 스타일은 BDD 스타일과 AAA 패턴을 같이 써야됨. 다음은 적용 예시

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

## 테스트 코드 작성을 위한 명령 : 끝
