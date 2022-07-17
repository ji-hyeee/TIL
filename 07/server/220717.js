//// server > controllers > login.js 

/*

TODO: 로그인 로직을 구현하세요. (서버 구현)
request로 받은 userId, password와 일치하는 유저가 DB에 존재하는지 확인합니다.

* userInfo에는 요청의 바디를 이용해 db에서 조회한 유저정보가 담겨있습니다. 콘솔에서 userInfo를 출력해보세요.
* 유저의 정보가 출력된다면 해당 유저가 존재하는 것임으로 로그인 성공에 대한 응답을 전송해야 합니다.
* 만약 undefined가 출력된다면 해당하는 유저가 존재하지 않는 것임으로 로그인 실패에 대한 응답을 전송해야 합니다.

* 로그인 성공 시에는 클라이언트에 쿠키를 전송해야합니다. 쿠키의 cookieId에는 userInfo.id가 담겨야 합니다.
* 테스트케이스에서 요구하는 쿠키 옵션을 모두 설정하세요.
* 영속성있는 쿠키를 보내려면 max-age 또는 expires 옵션을 설정하세요.

* 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo로 리다이렉트해야 합니다.
* express의 res.redirect 메서드를 참고하여 서버의 /userinfo로 리다이렉트 될 수 있도록 구현하세요.

간단하게 다시 말하면
로그인 실패시 실패 응답
로그인 성공시 (2가지)
로그인 유지 O 영속성쿠키 응답 + 리다이렉트 응답
로그인 유지 X 세션쿠키 응답 + 리다이렉트 응답

*/

const { USER_DATA } = require('../../db/data');

module.exports = (req, res) => {
    //// request(요청)를 받아서 처리를 해주나봐요
    const { userId, password } = req.body.loginInfo;
    //// 어라 이 변수 어디서 봤나요 >>> client/Login.js 의 상태 변수 이지요?
    //// 상태를 그대로 담아서 endpoint 에 요청보내면 될 것 같아요
    const { checkedKeepLogin } = req.body;

    //// 요청이 잘 들어오는지 콘솔로 확인하기
    console.log(req.body);


    //// 여기 모르는 변수가 있어요 / 객체인 것 같아요 일단은
    //// db/Data.js 에 있는 아이디와 우리가 직접 입력한 아이디가 일치하는지 + 비밀번호도 일치하는지
    //// [0] 은 한 명의 데이터만 남기기 위해서 사용해줬다 / 굳이 필요없다구
    const userInfo = {
        ...USER_DATA.filter((user) => user.userId === userId && user.password === password)[0],
    };

    //// useInfo 에는 1개의 데이터가 담겨유
    //// 일치하는 데이터를 input 에 입력하면 콘솔에 데이터가 보입니다 / 일치하는 데이터가 없으면 빈객체
    console.log(userInfo);


    // 만약 undefined가 출력된다면 해당하는 유저가 존재하지 않는 것임으로 로그인 실패에 대한 응답을 전송해야 합니다.
    //// 조건문을 적어줄 것인데요
    //// if(userInfo === undefined)
    //// 이렇게 작성하면 안되는 이유가 뭘까요 ~
    //// 키가 있어야 한다
    //// userInfo에 일치하는 데이터가 없으면 빈객체(비어있어도 주소값을 가지고 있음)가 나오므로 undefined 가 될 수 없다
    //// 뭐라도 키를 찍어서 값이 없다는 것을 보여줘야한다
    //// userInfo.id === undefined (첫번째 키로 해줬습니다)
    //// 키는 아무거나 적어도 된다 ( 키가 속한 객체 정보가 나오므로 )

    // 테스트케이스에서 요구하는 쿠키 옵션을 모두 설정하세요.
    const cookieOptions = {
        domain: 'localhost',

        //// 기본값 '/' 
        path: '/',

        // 7일 후 소멸되는 Persistent Cookie
        expires: new Date(Date.now() + 24 * 3600 * 1000 * 7),

        httpOnly: true,

        //// 같은 사이트만 요청을 받을 것이냐
        //// Lax - GET 메소드만 쿠키 전송
        //// Strict - 엄격한 옵션 / 도메인, 프로토콜, 서버 같을 경우 쿠키 전송
        //// None - 관대한 옵션 / Secure 옵션 설정과 함께 항상 쿠키 전송
        sameSite: 'none',

        secure: true,
    }

    //// 로그인 실패
    if (!userInfo.id) {
        //// 상태: status / 메세지: send
        res.status(401).send('Not Authorized');
    }

    // 로그인 성공 시에는 클라이언트에 쿠키를 전송해야합니다. 쿠키의 cookieId에는 userInfo.id가 담겨야 합니다.
    //// 로그인 성공 1 - 로그인상태 유지 O
    //// 쿠키를 언제 없앨지 왜 정하나요? 안 정하면 계속 쿠키 내꺼 아닌가요?
    //// 아니올시다
    //// 유효기간을 정하지 않은 쿠키는 브라우저를 닫거나 새로고침시 부서져 버립니다 / 왜냐면 쿠키는 보안에 취약함 ( 내 아 까 운 쿠 키 )
    //// 그래서 MaxAge / Expries 로 유효기간을 정해서 그 기간내에 쿠키를 드십시오 (브라우저 닫던 새로고침하던 내 쿠키는 그대로)
    else if (checkedKeepLogin) {
        //// ms === 0.001 / 1000 = 1초
        //// 따로 설정해도 되고 옵션해 써주고 나중에 삭제해도 된다
        //// cookieOptions.maxAge = 1000 * 60 * 30

        //// 쿠키 보내기 / res.cookie(쿠키아이디, 쿠키값, 옵션)
        res.cookie('cookieId', userInfo.id, cookieOptions);

        // 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo로 리다이렉트해야 합니다.
        res.redirect('/userinfo');


        //// 로그인 성공 2 - 로그인 상태 유지 X
    } else {
        // Expires 옵션이 없는 Session Cookie
        //// expires 삭제
        delete cookieOptions.expires;

        res.cookie('cookieId', userInfo.id, cookieOptions);

        // 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo로 리다이렉트해야 합니다.
        res.redirect('/userinfo');
    }
};

//// 여기까지 하면 서버가 정보 리턴해주진 않아도 쿠키를 만들어주는 거까지는 해준다
//// 쿠키 만들어졌는지 어디서 확인할 수 있나요?
//// 개발자도구 > Application > Cookies