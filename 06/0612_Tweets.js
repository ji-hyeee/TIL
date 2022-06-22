// Tweets.js 전체 코드
// TODO : useState를 react로 부터 import 합니다.
import React, {useState} from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [name, setName] = useState('parkhacker');
  const [text, setText] = useState(""); 
  const [data, setData] = useState(dummyTweets);

  // 필터링 구현
  // 상태 설정
  // 초기값을 false 로 주는 이유는 삼항연산자로 필터링 되기 전 전체 tweet 을 보여줘야 하기 때문이에요! /
  const [filterName, setFilterName] = useState(false);
  // const [isFilterd, setIsFiltered] = useState(false);

  // 상단이 필터링 (식) 을 위한 state 였다면 이번엔 필터링에 따라 트윗을 보여주는 상태 (결과)를 하나 만들어줍시다
  const [filterTweet, setFilterTweet] = useState(dummyTweets);

  // select 를 눌렀을 때 username 목록이 나오도록 변수를 하나 선언해줍시다
  const filterUserName = data.map(el=>el.username);

  // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
  const handleButtonClick = (event) => {
    const tweet = {
      id: data.length + 1, // 6
      username: name, // 값이 입력마다 바뀌는
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content: text, // 값이 입력마다 바뀌는
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    // 트윗 전송이 가능하게 작성해야 합니다.
    setData([tweet, ...data]);
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setName(event.target.value)
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setText(event.target.value)
  };

    // 필터링 이벤트함수
  const handleFilter = (event) => {
    // 이벤트 값이 '제발요' 라면
    if(event.target.value === '제발요'){
      // 현재 상태는 트윗 전체 메세지가 보이는 상태입니다
      setData(data)
			// 그리고 저희가 만들어준 필터링 (식)의 상태는 여전히 false 입니다
      setFilterName(false)

    // value 가 '제발요' 가 아니라면
    } else {
			// 변수를 하나 선언합니다! / username 만 필터링해주는 변수입니다
      const filter = data.filter(el=>el.username === event.target.value)
			// 저희가 만들어준 필터링(결과)의 상태는 필터 메소드로 걸러준 username 입니다
      setFilterTweet(filter)
      // 그리고 저희가 만들어준 필터링 (식)의 상태는 이제 true 입니당 !
      setFilterName(true)
    }
  }

  // 위에 적어놓은 해설이 너무 뭔 개소린가 싶어서 쉽게 이해하자면
  // 이벤트 값이 '제발요' 면 트윗 전체가 보여요!
  // 그게 아니라면 유저 이름에 따라 트윗 보여요!

  // 트윗 삭제 구현
  // 삭제 함수를 하나 만들어 줍시다
  const 제발요 = id => {
    // 필터 메소드를 사용해서 트윗의 id 가 현재 id 와 다른 나머지 tweet 들만 보여주세요!
    // 예시) id 1 번을 클릭하면 1번 제외 2,3,4 가 화면에 보이겟죠 ?!
    setData(data.filter(tweet => tweet.id !== id));
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here..."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                  // value={name}
                ></input>
                <textarea
                  type="text"
                  placeholder="your message here..."
                  className="tweetForm__input--message"
                  onChange={handleChangeMsg}
                  value={text}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: ' + data.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button className="tweetForm__submitButton" onClick={handleButtonClick}>Tweet</button>
            </div>
          </div>
        </div>
      </div>
      {/* 필터링 구현 */}
      <div className="tweet__selectUser">
        {/* select 에 username 을 눌렀을 때 필터링이 작동하는 event 함수를 만들어줍시다 */}
        {/* vaule 값도 추가해줍시다! */}
        <select onChange={handleFilter}>
          <option value="제발요">--여기가 바로 필터다 필터--</option>
          {/* 우리가 만들어준 변수는 username 목록이에요! 그걸 다시 렌더링해서 option에 보여줍시다! */}
          {filterUserName.map((el, idx)=>{return(<option value={el} key={idx}>{el}</option>)})}
        </select>
      </div>
      <ul className="tweets">
        {/* 기존에 모든 트윗 메세지를 보여줬던 코드 */}
        {/* {data.map((el)=>{return(<Tweet tweet={el} />)})} */}

        {/* 삼항연산자 사용 */}
        {
        filterName
        // filterName 이 false 면 전체 트윗을 보여주세용
        // 삭제 속성을 props 로 부모에게서 받고 저희가 만들어준 '제발요' 함수를 값으로 넣어줍시당!
        ? filterTweet.map(el=> <Tweet tweet={el} key={el.id} 삭제={제발요}/>) 
        // filterName 이 true username 에 따라 트윗을 보여주세용
        : data.map(el=> <Tweet tweet={el} key={el.id} 삭제={제발요}/>) 
        }
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;