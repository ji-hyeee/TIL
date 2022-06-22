// 비동기
// 작업의 결과를 기다리지 않고 계속해서 작업할 수 있는 것
// 주요키워드 : callback, promise, async/await

//// callback
function hye(){
	console.log("지혜");
}
function result(콜백함수){
	콜백함수(); // 콜백함수 === name함수 >>> 즉시실행해도 되고 나중에 실행해도 된다
}

result(hye); // >>> 왜 글씨에 줄이 그어질까 ? 모르겠네 // name 만 그랬다
// 지혜


//// 출력시간이 제각각인 문자열 출력
const result = str => {
	setTimeout(()=>{
		console.log(str)},
		Math.floor(Math.random() * 100)+1) // 시간으로 받는 인자가 랜덤시간
}

const names = () => {
	result("지혜")
	result("서은")
	result("현재")
}
names()
// 제가 실행하려고 한 순서대로 나오지 않아요
// 그래서 콜백함수를 쓸거에요


//// 시간이 랜덤이어도 순서대로 출력하고 싶어서 작성한 콜백함수 // 비동기의 동기화
const result = (str, 콜백함수) => { // 콜백함수 추가
	setTimeout(()=>{
		console.log(str)
		콜백함수()},                    // 콜백함수 실행
		Math.floor(Math.random() * 100)+1) // 시간으로 받는 인자가 랜덤시간
}

const nam = () => {
    result("지혜", ()=> { // 콜백을 받아서 함수 안에서 또 콜백
        result("서은", ()=> {
            result("현재", () => {})
        })
    })
}
nam()


//// callback error handling
const happen = callback => {
	whatHeappen()
	
	if(good){
		callback(null, somegthing) // 성공 // 앞에 에러를 적어주는 게 보통
	}
	if(bad){
		callback(somegthing, null) // 에러
	}
}

happen((err,data)=>{
	if(err){
		console.log("err");
		return;
	}
	return data;
})