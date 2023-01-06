import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		username: '',
		message: '',
	};

	/**
	 * 바벨의 transform-class-properties 문법을 사용하여
	 * 화살표 함수 형태로 메서드 정의하여 메서드 바인딩을 간단하게 하였다.
	 */
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleClick = () => {
		alert(this.state.username + ': ' + this.state.message);
		this.setState({
			username: '',
			message: '',
		});
	};

	handleKeyDown = (e) => {
		// 누른 키가 Enter 키 일 경우 이 컴포넌트에서 선언한 handleClick()함수 실행
		if (e.key === 'Enter') {
			this.handleClick();
		}
	};

	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="username"
					placeholder="사용자명"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="message"
					placeholder="아무거나 입력해 보세요"
					value={this.state.message}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}

export default EventPractice;
