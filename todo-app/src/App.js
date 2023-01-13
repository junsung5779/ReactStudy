import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링해 보기',
            checked: true,
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어 보기',
            checked: false,
        },
    ]);
    // 고윳값으로 사용될 id
    // ref를 사용하여 변수 담기
    const nextId = useRef(4);

    /**
     * props로 전달해야 할 함수를 만들 때는 useCallback을 사용하여 함수를 감싸는 것을 습관화 해야 함.
     */
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1; // nextId 1씩 더하기
        },
        [todos],
    );
    const onRemove = useCallback(
        /**
         * 리액트 컴포넌트에서 배열의 불변성을 지키면서 배열 원소를 제거해야 할 경우,
         * 배열 내장 함수인 filter를 사용하면 매우 간편하다.
         * filter 함수는 기존의 배열은 그대로 둔 상태에서 특정 조건을 만족하는 원소들만 따로 추출하여
         * 새로운 배열을 만들어 준다.
         * filter 함수에는 조건을 확인해 주는 함수를 파라미터로 넣어줘야 한다.
         * 파라미터로 넣는 함수는 true 혹은 false값을 반환해야 하며,
         * 여기서 true를 반환하는 경우만 새로운 배열에 포함된다.
         */
        (id) => {
            // todo의 id가 파라미터로 들어온 id와 같지 않는 경우 true 반환
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos],
    );

    const onToggle = useCallback(
        (id) => {
            setTodos(
                /**
                 * 배열 내장함수 map을 사용하여 특정 id를 가지고 있는 객체의 checked 값을 반전시켰다.
                 * 불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 map이 유용하다.
                 * todo.id와 현재 파라미터로 사용된 id값이 같을 때는 우리가 정해 준 규칙대로 새로운 객체를 생성하지만,
                 * id값이 다를 때는 변화를 주지 않고 처음 받아 왔던 상태 그대로 반환한다.
                 * 그렇기 때문에 map을 사용하여 만든 배열에서 변화가 필요한 원소만 업데이트되고 나머지는 그대로 남아 있게 되는 것이다.
                 */
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo,
                ),
            );
        },
        [todos],
    );
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
};

export default App;
