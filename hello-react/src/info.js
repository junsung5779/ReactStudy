import useInputs from './useInputs';

const Info = () => {
	/**
	 * Info 컴포넌트에서 여러 개의 인풋을 관리하기 위해 useReducer로 작성했던 로직을
	 * useInputs라는 Hook으로 따로 분리시켰음.
	 */
	const [state, onChange] = useInputs({
		name: '',
		nickname: '',
	});
	const { name, nickname } = state;

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
