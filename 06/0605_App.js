import React, {useState} from 'react'; // {useState} 상단에 첨부
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '리액트 배우기' // 변수에 데이터 저장

  function 함수(){
    return 100;
  }

  let [title, title_change] = useState(['리액트','JSX','state']); // useState(데이터)
  let [good, goodPlus] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <div>react</div>  {/* 블로그 제목은 자주 바뀌지 않으니 굳이 state 로 만들지 않아도 된다 */}
      </div>
      {/* <img src={logo} /> */}
      {/* <h4>{ 함수() }</h4> */}
      <div className = "list"> 
        {/* <h4>{ posts }</h4>  데이터 바인딩 */}
        <h4>{ title[0] } <span className="good" onClick={()=>{goodPlus(good + 1)}}>♥︎</span> {good} </h4> {/* state 문법 사용 */}
        <p>6월 5일 일요일 발행</p>
        <hr/>
        <h4>{ title[1] }</h4> {/* state 문법 사용 */}
        <p>6월 5일 일요일 발행</p>
        <hr/>
        <h4>{ title[2] }</h4> {/* state 문법 사용 */}
        <p>6월 5일 일요일 발행</p>
      </div>
    </div>
  );
}

export default App;

// JSX
// App.js 가 메인 페이지인 이유
// index.js 가 index.html 에 App.js 에서 만든 html 요소들을 전달해준다

// 태그에 class 를 주고 싶다면?
// className

// 리액트의 가장 큰 장점 >>> 데이터 바인딩이 매우 쉽다
// {변수명, 함수 등} + src, id, href 등 / {} 중괄호를 활용해서 다양하게 사용할 수 있다

// JSX 에서 style 속성을 집어넣을 때
// style = {object 자료형으로 만든 스타일}
// style = {{color : 'red', fontSize : '3rem'}} >>> 귀찮으니 className 쓰자

// 데이터 보관법 >>> state
// 데이터는 변수에 넣거나 state에 넣거나
// 1 {useState} 상단에 첨부
// 2 useState(데이터)
// 2번을 사용하면 array가 생기고 2개의 데이터가 들어간다 [a, b]
// a === 실제 데이터 b === 데이터를 수정하기 위한 함수

// ES6 destructuring 문법 >>> useState 도 비슷하게 사용한다
// [10, 100]; 이 두 개 데이터를 변수로 담고 싶으면?
// let [a,b] = [10,100]

// state 요약
// 1. 변수 대신 쓰는 데이터 저장공간
// 2. useState()를 이용해 만들어야함
// 3. 문자, 숫자, array, object 다 저장가능
// state 장점 >>> 웹이 app 처럼 동작하게 만들고 싶어서 사용한다
// state에 데이터를 저장해놓는 이유 : state 는 변경이 되면 HTML 이 자동으로 재렌더링이 된다 (새로고침없이)
// 자주 바뀌는, 중요한 데이터는 변수 말고 state로 저장해서 쓰세요

// 터미널에 뜨는 warning >>> eslint 가 문법을 더 잘 쓸 수 있도록 참견하는 것
// 보기 싫다 >>> /* eslint-disable */

// 좋아요 버튼 만들기
// onClick={클릭될 때 실행할 함수 무조건 함수}
// onClick={ () => {실행할 내용} }

// span 누를 때마다 console 에 출력
// <span onClick={()=>{console.log(1)}}>♥︎</span>

// span 누를 때마다 1 증가시키기
// state 변경 방법이 따로 있다 데이터와 함께 만들었던 데이터를 바꿔주는 함수
// state 변경함수로 변경해야 재렌더링이 잘 일어난다

// 숙제
// 버튼을 누르면 글 제목이 바뀐다
// 힌트 변경 함수 쓰기 ([])