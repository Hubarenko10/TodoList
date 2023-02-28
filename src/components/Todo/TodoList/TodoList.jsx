import { List,BoxList} from "./TodoListStyled"

export const TodoList = () => {
return(
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
    </BoxList>
    </>
    )

}