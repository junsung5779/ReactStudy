import React, { useState } from 'react';

const Say = () => {
	// 배열 비구조화 할당
	/**
	 * useState()의 인자에는 상태의 초깃값을 넣어준다.
	 * useState에서의 state초깃값의 형태는 자유이다.
	 */
	const [message, setMessage] = useState('');
	const onClickEnter = () => setMessage('안녕하세요!');
	const onClickLeave = () => setMessage('안녕히 가세요!');

	const [color, setColor] = useState('black');

	return (
		<div>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h1 style={{ color }}>{message}</h1>
			<button style={{ color: 'red' }} onClick={() => setColor('red')}>
				빨간색
			</button>
			<button
				style={{ color: 'green' }}
				onClick={() => setColor('green')}
			>
				초록색
			</button>
			<button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
				파란색
			</button>
		</div>
	);
};

export default Say;
