import React, { useRef } from 'react';

const RefSample = () => {
	/**
	 * 로컬변수: 렌더링과 상관없이 바뀔 수 있는 값
	 * 함수 컴포넌트로 로컬 변수를 사용해야 할 때도 useRef를 활용할 수 있다.
	 * 로컬변수를 사용하면 ref안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다.
	 * 렌더링에 관련되지 않은 값을 관리할 때만 사용
	 */
	const id = useRef(1);
	const setId = (n) => {
		id.current = n;
	};
	const printId = () => {
		console.log(id.current);
	};

	return <div>RefSample</div>;
};

export default RefSample;
