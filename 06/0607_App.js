// import logo from './logo.svg';
import './App.css';

function Header(props){ // 파라미터에 props 를 써보자 >>> props 는 객체 / 이름은 아무거나 써도 됩니다
  return (
    <header>
      <h2><a href='/'>{props.title}</a></h2> {/* 그냥 쓰면 안됩니다 중괄호 써주기 ! {객체.title} */}
  </header>
  )
}

function Nav(props){ // 목록 하드코딩 >>> props로 값을 변경해보자
  const lis = [] // 빈 배열 선언

  // 반복문으로 빈 배열의 값 push 해주기
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i]; // 배열에 있는 객체를 인덱스값으로 하나씩 불러 온다 {id:1, title:'html', body:'html is ...'}
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>) // key 라는 prop을 설정해주자
  }

  return (
    <nav>
      <ol>
        {/* 리액트(props)에 의해서 배열의 원소들을 하나씩 배치시켜준다 */}
        {lis} 
      </ol>
  </nav>
  )
}

function Article(props){ //props
  return (
    <article>
      <h3>{props.title}</h3>
      {props.body}
    </article>
  )
}

function App() {
  // 변수 topics 선언 및 할당
  const topics = [
    // 배열로 여러개의 정보를 담는다
    // 각각의 정보는 제목과 본문 그리고 id 값 >>> 객체에 담자
    // id 값은 고유의 값으로 변경하기 !
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'},
  ]

  return (
    <div>
      <Header title="REACT"/> {/* props 의 title 값이 여기에 있어요 */}
      <Nav topics={topics} /> {/* topics 를 prop 으로 전달 */}
      <Article title="Hello" body="React"/>
    </div>
  );
}

export default App;

// 4. 컴포넌트 만들기
// 리액트는 사용자 정의 태그를 만드는 기술이다
// 사용자 정의 태그 >>> Component 컴포넌트

// 코드가 엄청 많다면 ? 페이지의 파악이 어렵다
// 어지러운 코드들을 정리하고 싶어진다 >>> 연관된 것들을 모아서 이름을 짓기
// 복잡한 태그들을 모아서 이름을 붙여보자 >>> 사용자 정의 태그

// 사용자 정의 태그 만들기
// 함수를 정의 >>> 함수명은 반드시 대문자!
// Return 값은 html 태그
// 기존에 태그를 썼던 자리에 <Header /> 만 써주면 된다!

// 특징
// 길었던 코드들이 간결해지고 각각의 코드가 이름이 있기에 어떠한 취지의 코드인지 금방 파악이 된다
// 컴포넌트를 바꾸면 컴포넌트를 사용하고 있는 곳들이 동시에 수정이 가능하다
// 컴포넌트 재사용이 가능해져서 생산성이 편리하다


// 5. props
// 컴포넌트에도 속성을 갖게 하고 싶어요
// 리액트의 속성 === prop