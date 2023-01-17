import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div
                className={cn('checkbox', { checked })}
                onClick={() => onToggle(id)}
            >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};
/**
 * 컴포넌터의 리렌더링을 방지할 때는 shouldComponentUpdate라는 라이프사이클을 사용하면 되지만,
 * 함수 컴포넌트에서는 라이프사이클 메서드를 사용할 수 없다.
 * 따라서 React.memo라는 함수를 사용한다.
 * 컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지 않도록 설정하여 함수 컴포넌트의 리렌더링 성능을 최적화해 줄 수 있다.
 *
 * 이제 TodoListItem 컴포넌트는 todo, onRemove, onToggle이 바뀌지 않으면 리렌더링을 하지 않는다.
 */
export default React.memo(TodoListItem);
