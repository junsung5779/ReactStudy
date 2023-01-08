import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import LifeCycleSample from './LifeCycleSample';

// 랜덤 색상을 생성합니다.
function getRandomColor() {
	// 1677215를 hex로 표현하면 ffffff가 되므로 해당 코드는 000000 ~ ffffff를 반환한다.
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
	state = {
		color: '#000000',
	};
	handleClick = () => {
		this.setState({
			color: getRandomColor(),
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>랜덤 색상</button>
				<ErrorBoundary>
					<LifeCycleSample color={this.state.color} />
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;
