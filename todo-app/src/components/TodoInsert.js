import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    /**
     * TodoInsert 컴포넌트에서 인풋에 입력하는 값을 관리할 수 있도록 useState를 사용하여 value라는 상태를 정의함.
     * onChange함수 작성과정에서 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라,
     * 한 번 함수를 만들고 재사용할 수 있도록 useCallback Hook을 사용했다.
     */
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    const onClick = useCallback(
        (e) => {
            onInsert(value);
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
            // 이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();
        },
        [onInsert, value],
    );
    return (
        <form className="TodoInsert">
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button onClick={onClick}>
                <MdAdd />
            </button>
        </form>
    );
};
export default TodoInsert;
