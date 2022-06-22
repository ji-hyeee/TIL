// state 만들기 { useState } 적어주세용
import React, { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

// Home 컴포넌트
function Home() {
   // ES6 destructuring 문법 : state 만들기
   let [글제목, 글제목변경] = useState('리액트 어려워'); // 작성하면 배열이 생긴다 [a, b] a는 데이터 b는 데이터를 변경할 함수

  return(         
    <div className='list'>
    {/* <h3>{posts}</h3> */}
      <h3>{글제목}</h3>
        <p>6월 3일 금요일 발행</p>
      <hr/>
    </div>
  )
}

// MyPage 컴포넌트
function MyPage() {
    // 숫자 카운터
    const [count, setCount] = useState(0);
    // const count = 0
    const increase = () => {
      setCount(count + 1);
    };
    const decrease = () => {
      setCount(count - 1);
    };
  return (
    <div className="Number">
    <div className='Count_title'>counting numbers</div>
    <div className='Count'>{count}</div>
    <div className='Button_box'>
    <button className='Button' onClick={decrease}>-</button>
    <button className='Button' onClick={increase}>+</button>
    </div>
</div>
  )
}

// App 컴포넌트
function App() {
  
  let posts = '리액트 배우기';
  function 함수(){
    return 100
  }
  
  // 이렇게 변수에 선언해서 스타일 지정하는 것도 가능
  let style = {color:'red', fontSize:'20px'};

  // ES6 destructuring 문법 : state 만들기
  let [글제목, 글제목변경] = useState('리액트 어려워'); // 작성하면 배열이 생긴다 [a, b] a는 데이터 b는 데이터를 변경할 함수

  return (
    <BrowserRouter>
      <div className="App">
        {/* navbar 만들기 */}
        <div className='black-nav'>
          <li className='List'><Link className='Link' to="home">Learn React</Link></li>
          <li className='List'><Link className='Link' to="/mypage">MyPage</Link></li>
       </div>

      <Routes>
        {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
        <Route path="/home" element={<Home />} /> 
        <Route path="/mypage" element={<MyPage />} /> 
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// 왜 App.js 가 메인 페이지냐
// index.js가 HTML을 연결시켜주고 있다

// 데이터 바인딩이 쉽다
// 외부에서 받아온 데이터를 HTML에 전달하는 것
// 기존 자바스크립트 바인딩 >>> document.getElementById().innerHTML = ''
// 리액트 바인딩 >>> {변수명, 함수, src, class 등} 렌더링이 가능하다 

// JSX에서 style 속성 집어넣을 때 
// 오브젝트 형식으로 집어넣어야 한다 style={object 자료형으로 만든 스타일}
// font-size >>> fontSize

// state
// 변수 대신 쓰는 데이터 저장공간
// useState() 를 이용해 만들어야함
// [데이터, 데이터를 변경하는 함수]
// 문자, 숫자, array, object 다 저장 가능
// 장점 : 웹앱처럼 동작하게 만들고 싶어서
// 글 제목이 변경이 될 때

// {/* 리액트에서 스타일 맹글기 */}
// {/* <h3 style={{color:'green'}}>{posts}</h3> */}
// {/* <h3>{함수()}</h3> */}

// {/* 리액트에서 데이터 바인딩하기 {변수명} */}
// {/* <img src={logo}></img> */}