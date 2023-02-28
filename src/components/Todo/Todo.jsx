import { TodoList } from "./TodoList/TodoList";
import { TodoForm,TitleBox,DescriptionBox,FormBtn } from "./TodoStyled";
import { useDispatch } from "react-redux";
export const Todo = () => {
const dispatch = useDispatch()
const handleSubmit = (e) => {
e.preventDefault()
console.log('privet')
}
  return (
    <>
     
        <TodoForm>
          <TitleBox>
            <p>Title</p>
            <input type="text" name="text" placeholder="Enter title" />
          </TitleBox>
          <DescriptionBox>
            <p>Description</p>
            <input type="text" name="description" placeholder="Enter description" />
          </DescriptionBox>
          <FormBtn onClick={handleSubmit} type="submit">Create</FormBtn>
        </TodoForm>
        <TodoList/>
    </>
  );
};
