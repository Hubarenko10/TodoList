import { List, BoxList } from './TodoListStyled';
import { useSelector } from 'react-redux';
import { selectTasks } from 'components/Redux/selectors';
import { toggleCompleted } from 'components/Redux/taskSlice';
import { useDispatch } from 'react-redux';
import { Modal } from '../Modal/Modal';
import { openModal } from 'components/Redux/modalSlice';
import { selectModal } from "components/Redux/selectors";
import { useState } from 'react';
export const TodoList = () => {
    const [id,setId] = useState(0)
  const dispatch = useDispatch();
  const text = useSelector(selectTasks);
  const isOpen = useSelector(selectModal)
  return (
    <>
      <BoxList>
        <List>
          <li>
            <p>ID</p>
          </li>
          <li>
            <p>Title</p>
          </li>
          <li>
            <p>Description</p>
          </li>
          <li>
            <p>Status</p>
          </li>
        </List>
        <ul>
          {text &&
            text.map(({ text, description, id, completed }) => (
                
              <li onClick={() => {
                dispatch(openModal());
                setId(id);
              }} key={id}>
                <p>{id}</p>
                <p>{text}</p>
                <p>{description}</p>
                <input
                  onChange={() => dispatch(toggleCompleted(id))}
                  type="checkbox"
                  checked={completed}
                />
              </li>
              
            ))}
        </ul>
        {isOpen && <Modal id={id}/>}
      </BoxList>
    </>
  );
};
