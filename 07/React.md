# React 공식문서 정독하기

## Hello World <br/>

<p>React 예시</p>

```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

<p>element, component 라고 불리는 React 의 구성을 살펴보고나면 </p>
<p>재사용이 가능한 조각들로부터 복잡한 앱을 만들 수 있다 </p><br/>


## JSX 소개 <br/>
```
const element = <h1>Hello, world!</h1>;
```

### JSX 가 뭐에요 ? 
<p>JSX 는 JS 를 확장한 문법</p>
<p>JSX 는 React element 를 생성한다</p>
<p>JSX 는 JS 안에서 UI 관련 작업을 할 때 시각적으로 도움을 준다</p>
<p>컴포넌트라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리한다</p><br/>

### JSX 에 표현식 포함하기 
<p>{중괄호} 를 사용해서 JS 표현식을 사용할 수 있다</p>

```
const name = 'hye'
const el = <h1>hi, {name}</h1>;

ReactDOM.render(el, document.getElementById('root));
```

<p></p>