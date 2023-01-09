import React, { useState, useEffect } from 'react';

const Info = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');
	useEffect(() => {
		console.log('짜란~ 마운트될 때만 실행됩니다~');
		console.log(name);
		/**
		 * useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며,
		 * 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
		 *
		 * useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면,
		 * 해당 value가 바뀔 때만 useEffect() 함수가 실행된다.
		 *
		 * 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어 주어도 되고,
		 * props로 전달받은 값을 넣어 주어도 된다.
		 *
		 * 컴포넌트가 언마운ㄴ트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면
		 * useEffect에서 cleanup 함수(걍 함수 리턴 ㅇㅇ..)를 반환해 주어야 한다.
		 */
		return () => {
			console.log('cleanup');
			console.log(name);
		};
	}, [name]);

	const onChangeName = (e) => {
		setName(e.target.value);
	};

	const onChangeNickname = (e) => {
		setNickname(e.target.value);
	};

	return (
		<div>
			<div>
				<input value={name} onChange={onChangeName} />
				<input value={nickname} onChange={onChangeNickname} />
			</div>
			<div>
				<div>
					<b>이름:</b> {name}
				</div>
				<div>
					<b>닉네임:</b> {nickname}
				</div>
			</div>
		</div>
	);
};
export default Info;
