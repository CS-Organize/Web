# JavaScript

## What is JavaScript?

- 가벼운 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어 
- 웹 페이지를 위한 스크립트 언어로 잘 알려져 있지만, Node.js 같은 비 브라우저 환경에서도 사용
- JavaScript는 프로토타입 기반, 다중 패러다임, 단일 스레드, 동적 언어로, 객체지향형, 명령형, 선언형(함수형 프로그래밍 등) 스타일을 지원

## Variable

`var`, `let`, `const` 키워드를 사용하여 변수를 선언할 수 있다.

```javascript
var v = 1;
var v = 2; // var 키워드는 중복 선언, 재할당 모두 가능

let l = 1;
l = 2;
// let l = 2; // let 키워드는 중복 선언이 불가능, 재할당은 가능

const c = 1;
// c = 2;
// const c = 2; // const 키워드는 중복 선언, 재할당 모두 불가능
```

## Function

```javascript
function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;
```

## Keyword

- ES6
- Sync/Async
  - Promise
- Module
- Class
- Arrow Function
- Destructuring
- Spread/Rest
- Template Literals

## Learning Resources

- [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [Modern JavaScript Tutorial](https://ko.javascript.info/)
- [벨로퍼트와 함께하는 모던 자바스크립트](https://learnjs.vlpt.us/)
- [Modern JavaScript Deep Dive](https://42seoul.dkyobobook.co.kr/content/contentView.ink?brcd=4801158392230&ctgrId=2113&sntnAuthCode=&cttsDvsnCode=001&selViewCnt=20&pageIndex=1&recordCount=20)
