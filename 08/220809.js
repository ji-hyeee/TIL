const calculate = document.querySelector('.calculate_container')
// console.log(calculate);

const operator = document.querySelector('.operator')
// console.log(operator)

const result = document.querySelector('.resultNum')
// console.log(result)

const button = document.querySelector('.floor1')
// console.log(button);

// 연산 함수
function calculator(num1, operator, num2) {
    let result;
    if (operator === '+') {
        result = Number(num1) + Number(num2);
    }
    if (operator === '-') {
        result = Number(num1) - Number(num2);
    }
    if (operator === 'X') {
        result = Number(num1) * Number(num2);
    }
    if (operator === '/') {
        result = Number(num1) / Number(num2);
    }
    return String(result);
}

// 클릭 이벤트 함수에 사용할 변수들
let firstNum, operatorForAdvanced, previousKey, previousNum;

// 클릭 이벤트 함수
calculate.addEventListener('click', event => {
    // console.log(event.target.textContent)

    // HTML element가 div 라면
    if (event.target.matches('div')) {

        // 숫자 버튼
        if (event.target.classList[0] === 'number') {
            console.log(`${event.target.textContent} 버튼 선택!`)

            // 결과 텍스트가 0이라면 선택한 숫자로 대체
            if (result.textContent === '0' || previousKey === 'operator' || previousKey === 'calculate') {
                result.textContent = event.target.textContent;
            } else {
                // 0이 아니라면 선택한 숫자 이어 붙이기
                result.textContent = result.textContent + event.target.textContent;
            }
            previousKey = 'number';
        }

        // 연산자 버튼
        if (event.target.classList[0] === 'operator') {
            console.log(`${event.target.textContent} 버튼 선택!`)

            if (firstNum && previousKey && operatorForAdvanced !== 'operator' && previousKey !== 'calculate') {
                result.textContent = calculator(firstNum, operatorForAdvanced, result.textContent);
            }
            firstNum = result.textContent;
            operatorForAdvanced = event.target.textContent;
            previousKey = 'operator';
        }

        // 계산 버튼
        if (event.target.classList[0] === 'calculate') {
            console.log(`${event.target.textContent} 버튼 선택!`)
            if (firstNum) {
                if (previousKey === 'calculate') {
                    result.textContent = calculator(result.textContent, operatorForAdvanced, previousNum)
                } else {
                    previousNum = result.textContent;
                    result.textContent = calculator(firstNum, operatorForAdvanced, result.textContent)
                }
            }
            previousKey = 'calculate';
        }

        // 초기화 버튼
        if (event.target.classList[0] === 'clear') {
            console.log('계산기 초기화!')
            firstNum = undefined;
            operatorForAdvanced = undefined;
            previousNum = undefined;
            result.textContent = 0;
            previousKey = 'clear';
        }
    }
})

// addEventListener(type, listener, options);
// type: 이벤트 유형
// https://developer.mozilla.org/ko/docs/Web/Events
// 계산기에서 사용할 이벤트는 [마우스 이벤트 - click] 이다 / 마우스를 눌렀다 뗐을 때
// listener: 이벤트를 받을 객체 or 함수