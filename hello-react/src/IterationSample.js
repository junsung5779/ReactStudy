import React from 'react';

const IterationSample = () => {
	const names = ['눈사람', '얼음', '눈', '바람'];
	/**
	 * 고유한 값이 없을 때만 index 값을 key로 사용해야 한다.
	 * key 값은 언제나 유잃야 한다. 따라서 데이터가 가진 고윳값을 key 값으로 설정해야 한다.
	 * index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못함
	 */
	const nameList = names.map((name, index) => <li key={index}>{name}</li>);

	return <ul>{nameList}</ul>;
};
export default IterationSample;
