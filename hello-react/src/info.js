import React, { useReducer } from 'react';

function reducer(state, action) {
	return {
		...state,
		[action.name]: action.value,
	};
}
const Info = () => {
	const [state, dispatch] = useReducer(reducer, {
		name: '',
		nickname: '',
	});
	const { name, nickname } = state;
	const onChange = (e) => {
		/**
		 * useReducer에서의 액션은 그 어떤 값도 사용 가능하기 때문에
		 * 이벤트 객체가 지니고 있는 e.target값 자체를 액션 값으로 사용하여
		 * 아무리 인풋의 개수가 많아져도 코드를 짧고 깔끔하게 유지할 수 있다.
		 */
		dispatch(e.target);
	};

	return (
		<div>
			<div>
				<input name="name" value={name} onChange={onChange} />
				<input name="nickname" value={nickname} onChange={onChange} />
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
