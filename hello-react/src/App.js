import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
	render() {
		return (
			/**
			 * 컴포넌트의 최상위 html 요소에는 컴포넌트의 이름으로 클래스 이름을 짓고(.App)
			 * 그 내부에서는 소문자를 입력하거나(.logo), header 같은 태그를 사용하여 클래스 이름이 불필요한 경우에는
			 * 아예 생략할 수도 있다.
			 */
			<div className="App">
				<header>
					<img src={logo} className="logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload
					</p>
					<a
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}
export default App;
