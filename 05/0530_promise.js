// 비동기
// promise
// reslove() 다음 액션
// reject() 에러 핸들링

//// 콜백을 인자로 받지 않고 instance 를 리턴한다 ( instance 인자에 명령어 두 개 들어간다)
const result = str => {
	return new Promise((resolve, reject) => {
		setTimeout(
			()=>{
			console.log(str)
			resolve()},                    
			Math.floor(Math.random() * 100)+1) 
	})
}

const names = () => {
	result("지혜")          // 함수 실행 후
	.then(() => {          // 그 다음 작업 실행해줘
		return result("서은")
	})	
	.then(() => {          // 그 다음 작업 끝나면
		return result("현재") // 그 다다음 작업 실행해줘
	})	
}
names()


// .then()
// 작업이 끝나면 다음 작업을 해달라고 요청하는 함수

// .catch()
// 에러 핸들링을 나타내준다 / 코드 마지막에 작성
// chaining 과정에서 어느 부분에서 에러가 나도 이름 처럼 catch 해서 에러를 잡아낼 수 있다

let hye = new Promise((resolve, reject) =>{
    setTimeout(function(){
      resolve("안녕!")}, 2000) // 2초 뒤에 실행
  });
  
  hye.then((success) => { // success === resolve() 실행 값 
    console.log("지혜" + success)
  });
  // "지혜안녕!"


//// promise chaining
// promise hell 해결을 위해서
  function hye(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('지혜')},100)
    })
}
function and(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('랑')},200)
    })
}
function eun(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('서은')},100)
    })
}

hye()
.then(data => {
    console.log(data)
    return and()
})
.then(data => {
    console.log(data)
    return eun()
})
.then(data => {
    console.log(data)
})
// 지혜
// 랑
// 서은


//// Async/Await
function hye(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('지혜')},100)
    })
}
function and(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('랑')},200)
    })
}
function eun(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('서은')},100)
    })
}

let so = async () => {
	const one = await hye();
	console.log(one)

	const two = await and();
	console.log(two)

	const three = await eun();
	console.log(three)
}
so();
// 지혜
// 랑
// 서은