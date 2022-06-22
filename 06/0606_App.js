import React, {Component, useState} from 'react'; // {useState} 상단에 첨부
import logo from './logo.svg';
import './App.css';

// component
function App() {
  let posts = '리액트 배우기' // 변수에 데이터 저장

  function 함수(){
    return 100;
  }

  let [title, title_change] = useState(['리액트','JSX','state']); // useState(데이터)
  let [good, goodPlus] = useState(0);

  function change(){
    let newArray = [...title];
    newArray[0] = '안녕하세요';
    title_change(newArray);
  }

  function sort(){
    let newArray = [...title];
    newArray.sort();
    title_change(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>react</div>  {/* 블로그 제목은 자주 바뀌지 않으니 굳이 state 로 만들지 않아도 된다 */}
      </div>

    <div className='button_wrap'>
      <button className="button" onClick={change}>change</button>
      <button className="button" onClick={sort}>sort</button>
    </div>

      {/* <img src={logo} /> */}
      {/* <h4>{ 함수() }</h4> */}
      <div className = "list"> 
        {/* <h4>{ posts }</h4>  데이터 바인딩 */}
        <h4>{ title[0] } <span className="good" onClick={()=>{goodPlus(good + 1)}}>♥︎</span> {good} </h4> {/* state 문법 사용 */}
        <p>6월 5일 일요일 발행</p>
        <hr/>
      </div>
      <div className = "list"> 
        <h4>{ title[1] }</h4> {/* state 문법 사용 */}
        <p>6월 5일 일요일 발행</p>
        <hr/>
      </div>
      <div className = "list"> 
        <h4>{ title[2] }</h4> {/* state 문법 사용 */}
        <p>6월 5일 일요일 발행</p>
      </div>

      <Modal></Modal> {/* === <Modal /> */}
    </div>
  );
}

// component
function Modal(){
  return(
  <>
    <div className='modal'> 
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  </>
  )
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

// 내가 쓴 코드!
// <button onClick={()=>{title_change(['hello','hi','bye'])}}>change</button>

// 배운 것 !
// <button onClick={ change }>change</button> // change() 로 함수를 실행하면 안된다 !
// function change(){
//   title_change(['hello','hi','bye']); // 데이터를 갈아치우는 함수 // 데이터 자체를 바꾸기
// }

// 하드코딩말고, 개발자스럽게 하고 싶다면? // array 값이 엄청 많다면 계속 하드코딩 할겨?
// function change(){
//   수정된 [데이터]를 만든다 // 원본 state 수정 X // 특히 state 가 array, object 자료형이면 더욱 더
//   let newArray = title의 0번째 데이터 이름을 바꾸자 
//   title_change(newArray);
// }

// state 의 복사본을 만들어서 수정하자 // deep copy 해서 수정하자
// function change(){
//  let newArray = title; // 이건 복사가 아니라 값 공유 // reference data 특징
//  newArray[0] = 'hello'
//  title_change(newArray);
// }

// deep copy: 값 공유 X 서로 독립적인 값을 가지는 복사
// let newArray = [...title]; // spread operator 로 완전히 새롭게 복사

// 리액트 원칙 : immutable data / 원본은 수정하면 안 된다 !

// Array, Object state 데이터 수정 방법 >>> 변경 함수를  // 변경함수(대체할 데이터)
// state 는 직접 수정하지 않기  / title[0] = 123; <<< X
// deep copy 해서 수정하기 / let newArray = [...title];

// 버튼을 눌렀을 때 제목을 글자순으로 정렬하고 싶어요
// function change(){
//   let newArray = [...title];
//   newArray.sort();
//   title_change(newArray);
// }


// Component 로 HTML 깔끔하게 줄이기

// 우리가 html 을 어디에 쓰고 있나요 >>> return()
// return(
//   <div></div>
//   <div></div>
//   <div></div>
// ) >>> 여러개의 태그를 쓸 수 없다. 하나의 큰 태그로 묶어줘야 한다

// div 가 엄청 많아져서 복잡스럽다면? >>> component 문법으로 html 을 한 단어로 줄여보자
{/* <Modal></Modal> */}

// function Modal(){ // <<< 이름 짓기
//   <div className='modal'> {/* <<< 원하는 태그 담기 */}
//     <h2>제목</h2>
//     <p>날짜</p>
//     <p>상세내용</p>
// </div>
// }

// Component 만드는 법
// 1. 함수 만들고 이름짓기
// 2. 축약을 원하는 HTML 넣기
// 3. 원하는 곳에서 <함수명 />

// Component 유의사항
// 1. 이름은 대괄호
// 2. return()안에 있는 건 태그 하나로 묶어야 한다 <> </>

// Component 를 만들어주면 관리가 편해진다
// 어떤 걸 Component로 만드는 게 좋을까?
// 1. 반복출현하는 HTML 덩어리들
// 2. 자주 변경되는 HTML UI 들
// 3. 다른 페이지 만들 때도 컴포넌트로 만든다

// Component 를 많이 만들면 생기는 단점
// state 를 쓸 때 복잡해진다
// 상위 Component 에서 만든 state 를 쓰려면 props 문법을 이용해야한다
