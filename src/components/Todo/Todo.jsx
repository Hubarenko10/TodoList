import { TodoList } from './TodoList/TodoList';
import { TodoForm, TitleBox, DescriptionBox, FormBtn } from './TodoStyled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask } from 'components/Redux/taskSlice';

export const Todo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [Error, setError] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'text':
        setText(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '' || description === '') {
      setError(true);
    } else {
      dispatch(addTask({ text, description }));
      setError(false);
      setText('');
      setDescription('');
    }
  };

  return (
    <>
      <TodoForm>
        <TitleBox>
          <p>Title:</p>
          <label>
            <input
              onChange={handleChange}
              value={text}
              type="text"
              name="text"
              placeholder={
                Error && text === '' ? 'This field is empty' : 'Enter title'
              }
              style={{
                color: Error && text === '' ? 'red' : 'initial',
                borderColor: Error && text === '' ? 'red' : 'initial',
              }}
            />
            {Error && text === '' && (
              <p
                style={{
                  position: 'absolute',
                  top: '11.9',
                  left: '11.8',
                  color: 'red',
                }}
              >
                This field is empty
              </p>
            )}
          </label>
        </TitleBox>
        <DescriptionBox>
          <p>Description:</p>
          <label>
            <input
              onChange={handleChange}
              value={description}
              type="text"
              name="description"
              placeholder={
                Error && description === ''
                  ? 'This field is empty'
                  : 'Enter description'
              }
              style={{
                color: Error && description === '' ? 'red' : 'initial',
                borderColor: Error && description === '' ? 'red' : 'initial',
              }}
            />
            {Error && description === '' && (
              <p
                style={{
                  position: 'absolute',
                  top: '11.9',
                  left: '11.8',
                  color: 'red',
                }}
              >
                This field is empty
              </p>
            )}
          </label>
        </DescriptionBox>

        <FormBtn onClick={handleSubmit} type="submit">
          Create
        </FormBtn>
      </TodoForm>
      <TodoList />
    </>
  );
};
