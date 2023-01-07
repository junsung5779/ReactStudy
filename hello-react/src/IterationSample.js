import React, { useState } from 'react';

const IterationSample = () => {
	const [names, setNames] = useState([
		{ id: 1, text: '눈사람' },
		{ id: 2, text: '얼음' },
		{ id: 3, text: '눈' },
		{ id: 4, text: '바람' },
	]);

	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

	const onChange = (e) => setInputText(e.target.value);
	const onClick = () => {
		/**
		 * 데이터 추가기능 구현
		 *
		 * 배열에 새 항목을 추가할 때 concat을 사용한 이유
		 * push: 기존 배열 자체를 변경
		 * concat: 새로운 배열을 만들어 줌
		 *
		 * 리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 함(불변성 유지)
		 * 불변성 유지를 하는 이유: 리액트 컴포넌트의 성능 최적화를 하기 위함.
		 */
		const nextNames = names.concat({
			id: nextId, // nextId 값을 id로 설정하고
			text: inputText,
		});
		setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
		setNames(nextNames); // names 값을 업데이트한다.
		setInputText(''); // inputText를 비운다.
	};

	const onRemove = (id) => {
		/**
		 * 데이터 제거 기능 구현하기
		 * 데이터 추가 기능 구현때와 마찬가지로 불변성을 유지하면서 업데이트해 주어야 한다.
		 * 불변성을 유지하면서 배열의 특정 항목을 지울 때는 배열의 내장 함수 filter를 사용한다.
		 * filter 함수를 사용하면 배열에서 특정 조건을 만족하는 원소들만 쉽게 분류할 수 있다.
		 */
		const nextNames = names.filter((name) => name.id !== id);
		setNames(nextNames);
	};
	/**
	 * 고유한 값이 없을 때만 index 값을 key로 사용해야 한다.
	 * key 값은 언제나 유잃야 한다. 따라서 데이터가 가진 고윳값을 key 값으로 설정해야 한다.
	 * index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못함
	 */
	const namesList = names.map((name) => (
		<li key={name.id} onDoubleClick={() => onRemove(name.id)}>
			{name.text}
		</li>
	));

	return (
		<>
			<input value={inputText} onChange={onChange} />
			<button onClick={onClick}>추가</button>
			<ul>{namesList}</ul>
		</>
	);
};
export default IterationSample;
