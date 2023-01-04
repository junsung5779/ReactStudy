import React, { Component } from 'react';

class Counter extends Component {
	// 컴포넌트에 state를 설정할 때는 constructor 메서드를 작성하여 설정한다.
	constructor(props) {
		// super함수가 호출되면 현재 class형 component가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해준다.
		super(props);
		/**
		 * state의 초깃값 설정
		 * component의 state는 Object 형식이어야 한다.
		 */
		this.state = {
			number: 0,
		};
	}
	render() {
		// render 함수 내에서 현재 state를 조회할 때는 this.state를 조회하면 됨
		const { number } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<button
					// onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
					// 이벤트로 설정할 함수를 넣어 줄 때는 화살표 함수 문법을 사용해야 함.
					onClick={() => {
						// this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
						this.setState({ number: number + 1 });
					}}
				>
					+1
				</button>
			</div>
		);
	}
}
export default Counter;
