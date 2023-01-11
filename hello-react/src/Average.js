import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
	console.log('평균값 계산 중..');
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState('');
	// useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current값이 실제 엘리먼트를 가리킨다.
	// 1. useRef사용
	const inputEl = useRef(null);

	const onChange = useCallback((e) => {
		setNumber(e.target.value);
	}, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

	const onInsert = useCallback(() => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber('');
		// 3. useRef를 통해 만든 객체 안의 current값이 실제 엘리먼트를 가리킴
		inputEl.current.focus();
	}, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

	const avg = useMemo(() => getAverage(list), [list]);

	return (
		<div>
			{/* 2. ref 설정 */}
			<input value={number} onChange={onChange} ref={inputEl} />
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
			<div>
				<b>평균값:</b> {avg}
			</div>
		</div>
	);
};

export default Average;
