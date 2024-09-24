# React

React는 Interactive한 UI를 만들기 위한 JavaScript Library다.
HTML, CSS, JavaScript를 사용하여 웹 페이지를 만들 때, 이벤트 리스너를 등록하고, DOM을 조작하는 등의 작업을 쉽게 할 수 있도록 도와준다.

## JSX

`React.createElement()`를 사용하여 React Element를 생성하는 것은 번거롭다. JSX는 JavaScript의 확장 문법으로, React Element를 생성하는 데 사용된다.

`Uncaught SyntaxError: Unexpected token '<'`

브라우저는 JSX를 이해하지 못하므로, JSX를 JavaScript로 변환해야 한다. 이를 위해 Babel과 같은 트랜스파일러를 사용한다.

- [JSX 소개 – React](https://ko.legacy.reactjs.org/docs/introducing-jsx.html)

## [Babel](https://babeljs.io/)

Babel은 JavaScript 코드를 변환하는 트랜스파일러다. 최신 JavaScript 문법을 사용하여 코드를 작성하고, Babel을 사용하여 이전 버전의 JavaScript로 변환할 수 있다.

예제에서는 바벨이 변환한 코드를 HTML 파일의 head에 추가한다.

## Component

React는 Component 기반으로 UI를 구성한다. Component는 재사용 가능한 UI 조각이다.
Component의 이름은 대문자로 시작해야 한다.
