import React, { Component } from 'react';

class Counter extends Component {
	// constructor 메서드를 사용하지 않고 state 초깃값 지정하는 방법
	state = {
		number: 0,
		fixedNumber: 0,
	};
	render() {
		// render 함수 내에서 현재 state를 조회할 때는 this.state를 조회하면 됨
		const { number, fixedNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값: {fixedNumber}</h2>
				<button
					// onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
					// 이벤트로 설정할 함수를 넣어 줄 때는 화살표 함수 문법을 사용해야 함.
					onClick={() => {
						// this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
						this.setState(
							// setState의 첫 번째 파라미터
							{
								number: number + 1,
							},
							// setState의 두 번째 파라미터
							() => {
								// setState의 두 번재 파라미터로 callback function을 등록하여 setState 내부에서 동기적으로 작업을 처리하도록 했다.
								console.log('방금 setState가 호출되었습니다.');
								console.log(this.state);
							}
						);
					}}
				>
					+1
				</button>
			</div>
		);
	}
}

export default Counter;
