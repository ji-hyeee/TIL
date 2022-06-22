import React from 'react';
import './Tweet.css';

// prop 를 하나 만들어서 Tweets.js 에서도 사용할 수 있게 부모 컴포넌트에서 맹글어줍니다
// 알아보기 쉽게 '삭제'로 만들었습니다!
const Tweet = ({ tweet, 삭제 }) => {
  // 변수를 활용하세요!
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
         {/* 이미 작성되어 있는 img element */}
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            {/* TODO : 유져 이름이 있어야 합니다. */}
            <span className="tweet__username">{tweet.username}</span>
            {/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. // 변수 상단에 있음 확인 잘 하기 */}
            <span className="tweet__createdAt">{parsedDate}</span> 
          </div>
          {/* 삭제 버튼을 tweet component 에 만들어주세용 */}
          {/* 이벤트 값이 함수인 이유는 무한 실행을 막기 위해서 (버튼을 클릭했을 때만 삭제하고 싶어요 !)입니다 */}
          {/* tweet id 를 이용해서 하나씩 지워줄거에요! */}
          <button onClick={() => 삭제(tweet.id)}>Bye</button>
        </div>
        {/* TODO : 트윗 메세지가 있어야 합니다.*/}
        <div className="tweet__message">{tweet.content}</div>
      </div>
    </li>
  );
};

export default Tweet;