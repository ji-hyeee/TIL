// 서버를 띄우기 위한 기본 셋팅 (express 라이브러리)
const express = require('express');
const app = express();

// 8080 서버 띄워주세요!
app.listen(8080, function(){
    console.log('listening on 8080')
});

// 누군가가 /pet 으로 방문을 하면 pet 관련 안내문을 띄워주자
app.get('/pet', function(요청, 응답){
    응답.send('안녕하슈');
});

// homework
// /beauty URL 접속하면(GET 요청) 안내문 띄워주기
app.get('/beauty', function(요청, 응답){
    응답.send('숙제입니다');
});

// HTML 파일을 보내보자
// '/' 홈 >>> 메인페이지(?)
app.get('/', function(요청, 응답){
    // sendFile(보낼파일경로)
    // index.html 파일 보내주세요 !
    응답.sendFile(__dirname + '/index.html');
});