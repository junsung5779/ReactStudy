import React, { Component } from 'react';

class LifeCycleSample extends Component {
	state = {
		number: 0,
		color: null,
	};

	myRef = null; // ref를 설정할 부분
	constructor(props) {
		super(props);
		console.log('constructor');
	}

	/**
	 * props로 받아 온 값을 state에 동기화 시키는 용도
	 * 컴포넌트가 mount될 때와 update될 때 호출된다.
	 */
	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('getDerivedStateFromProps');
		if (nextProps.color !== prevState.color) {
			return { color: nextProps.color };
		}
		return null;
	}

	/**
	 * 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행
	 * 이 안에서 다른 자바스크리트 라이브러리 또는 프레임워크의 함수를 호출하거나
	 * 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리하면 된다.
	 */
	componentDidMount() {
		console.log('componentDidMount');
	}

	/**
	 * props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드
	 * 반드시 true값 또는 false값을 반환해야 함
	 * 컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 true를 반환
	 * 해당 메서드가 false를 반환 시 업데이트 과정은 여기서 중지됨
	 */
	shouldComponentUpdate(nextProps, nextState) {
		// 이 메서드 안에서 현재 props와 state는 this.props, this.state로 접근한다
		// 새로 설정될 props 또는 state는 nextProps 와 nextState로 접근할 수 있다.
		console.log('shouldComponentUpdate', nextProps, nextState);
		// 숫자의 마지막 자리가 4면 리렌더링하지 않는다.
		return nextState.number % 10 !== 4;
	}

	/**
	 * 컴포넌트를 DOM에서 제거할 때 실행
	 * componentDidMount에서 등록한 이벤트, 타이머 또는 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야 한다.
	 */
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	handleClick = () => {
		this.setState({
			number: this.state.number + 1,
		});
	};

	/**
	 * 리액트 v16.3 이후 만들어진 메서드
	 * render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨
	 * 이 메서드에서 반환하는 값은 componentDidUpdate의 세 번째 parameter인 snapshot 값으로 전달받을 수 있다.
	 * 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용됨(ex) 스크롤바 위치 유지)
	 */
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate');
		if (prevProps.color !== this.props.color) {
			return this.myRef.style.color;
		}
		return null;
	}

	/**
	 * 리렌더링을 완료한 후 실행됨
	 * 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방함.
	 * 여기서 prevProps, prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있음.
	 * getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있음.
	 */
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', prevProps, prevState);
		if (snapshot) {
			console.log('업데이트되기 직전 색상: ', snapshot);
		}
	}

	render() {
		console.log('render');

		const style = {
			color: this.props.color,
		};

		return (
			<div>
				{this.props.missing.value}
				<h1 style={style} ref={(ref) => (this.myRef = ref)}>
					{this.state.number}
				</h1>
				<p>color: {this.state.color}</p>
				<button onClick={this.handleClick}>더하기</button>
			</div>
		);
	}
}
export default LifeCycleSample;
