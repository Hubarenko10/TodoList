import {
  List,
  BoxList,
  HeaderBox,
  HeaderItem,
  ListItem,
  Cell,
  Checkbox,
} from './TodoListStyled';
import { useSelector } from 'react-redux';
import { selectTasks } from 'components/Redux/selectors';
import { toggleCompleted } from 'components/Redux/taskSlice';
import { useDispatch } from 'react-redux';
import { Modal } from '../Modal/Modal';
import { openModal } from 'components/Redux/modalSlice';
import { selectModal } from 'components/Redux/selectors';
import { useState } from 'react';
export const TodoList = () => {
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const isOpen = useSelector(selectModal);

  return (
    <>
      <BoxList>
        <HeaderBox>
          <HeaderItem>ID</HeaderItem>
          <HeaderItem>Title</HeaderItem>
          <HeaderItem>Description</HeaderItem>
          <HeaderItem>Status</HeaderItem>
        </HeaderBox>
        <List>
          {tasks &&
            tasks.map(({ text, description, id, completed }) => (
              <ListItem
              onClick={(event) => {
                const target = event.target;
                if (
                  target.tagName !== "INPUT" &&
                  target.tagName !== "LABEL" &&
                  target.tagName !== "path"
                ) {
                  dispatch(openModal());
                  setId(id);
                }
              }}
                key={id}
              >
                <Cell>{id}.</Cell>
                <Cell>{text}</Cell>
                <Cell>{description}</Cell>
                <Cell>
                  <Checkbox
                    onChange={() => dispatch(toggleCompleted(id))}
                    type="checkbox"
                    checked={completed}
                  />
                </Cell>
              </ListItem>
            ))}
        </List>
        {isOpen && <Modal id={id} />}
      </BoxList>
    </>
  );
};
